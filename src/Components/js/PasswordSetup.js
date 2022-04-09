// PasswordSetup.js

import React from 'react'
import '../css/Register.css';
import FormControl from '@mui/material/FormControl';
import { TextField, Button } from '@material-ui/core'
import database from '../../firebase';
import {useLocation} from 'react-router-dom';
import {Link, useNavigate} from 'react-router-dom';


import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import {useState} from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";




function PasswordSetup() {
	let errors = {};
	var countPassword = 0;
	var countReenterpassword = 0;
	var countPasswordDoesntMatch = 0;
	var emailAddress

	const navigate = useNavigate()

	const location = useLocation()
	emailAddress = location.state.emailAddress
	console.log('transferred data:', location.state.emailAddress)
	
	const [values, setValues] = useState({
		password: '',
		showPassword: false,

	});
	const [reentervalues, reentersetValues] = useState({
		reenterpassword: '',
		reentershowPassword: false,

	});


	const handleClickShowPassword = () => {
	setValues({ ...values, showPassword: !values.showPassword });
	};
	const handleClickShowReenterPassword = () => {
		reentersetValues({ ...reentervalues, reentershowPassword: !reentervalues.reentershowPassword });
	};
	
	const handleMouseDownPassword = (event) => {
	event.preventDefault();
	};
	const handleMouseDownReenterPassword = (event) => {
		event.preventDefault();
	};
	
	const handlePasswordChange = (prop) => (event) => {
	setValues({ ...values, [prop]: event.target.value });
	};
	const handleReenterPasswordChange = (prop) => (event) => {
		reentersetValues({ ...reentervalues, [prop]: event.target.value });
	};


	const checkPassword = (event) => {
        event.preventDefault()

        if(validate()){

		var userKey = emailAddress.split('@')
		var userKey1 = userKey[0]
		if (userKey1.includes('.')){
			userKey = userKey1.split('.')
		}

		var userpwLocation = 'userAuthentication/' + userKey[0]

		// database.ref(userpwLocation).set({values.password})
		//database.ref(userpwLocation).child('password').setValue(values.password)  
		database.ref(userpwLocation).child('password').set(values.password).then().catch();

		alert('Password saved');

		navigate('/delivery',{state:{emailAddress:emailAddress}});

		//window.location.href = window.location.origin + '/draft-app/#/home'
		}
	}

	const clickDetails = () => {
		window.location.href = window.location.origin + '/draft-app/#/register'
	}

	var validate = () => {
		let isValid = true;
		
		if (!values.password) {
			isValid = false;
			if (countPassword === 0){
			errors["password"] = "Please enter your password."; 
			document.getElementById('error-password').insertAdjacentHTML('afterend',errors.password)
			countPassword = countPassword + 1;
			if (!reentervalues.reenterpassword) {
				countReenterpassword = 1
			}
			}
		}


		else if (!reentervalues.reenterpassword) {
			isValid = false;
			if (countReenterpassword === 0){
				errors["reenterpassword"] = "Please enter your confirm password.";
				document.getElementById('error-reenterpassword').insertAdjacentHTML('afterend',errors.reenterpassword)
				countReenterpassword = countReenterpassword + 1;		
				}
		}

		else {			
		  if (values.password !== reentervalues.reenterpassword) {
			isValid = false;
			if (countPasswordDoesntMatch === 0) {
				errors["password"] = "Passwords doesn't match.";
				document.getElementById('password-doesnt-match').insertAdjacentHTML('afterend',errors.password)
				countPasswordDoesntMatch = countPasswordDoesntMatch + 1;
			}
		  }
		} 

		return isValid;
	}
	return (
		<div className='registerClass'>
			<center>
				<div> <Button onClick={clickDetails}> Details</Button><>  &#62;&#62;  </> <a > Setup password</a></div>
			</center>
			<center>
			
			<br />

			<FormControl sx={{ m: 1, width: '80%' }} >

			<InputLabel htmlFor="outlined-adornment-password"> Setup your password</InputLabel>
			<OutlinedInput
            	id="outlined-adornment-password" 
				type={values.showPassword ? 'text' : 'password'}
				value={values.password}
				onChange={handlePasswordChange("password")}
				endAdornment= {
				<InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
			}
			label="Setup a Password"
			/>

			</FormControl>
			<div id='error-password'></div>
			<div id='password-doesnt-match'></div>
			<br />
			
			<FormControl sx={{ m: 1, width: '80%' }} >
			<InputLabel htmlFor="outlined-adornment-password"> Re-enter your password</InputLabel>
			<OutlinedInput
            	id="outlined-adornment-password" 
				type={reentervalues.reentershowPassword ? 'text' : 'password'}
				value={reentervalues.reenterpassword}
				onChange={handleReenterPasswordChange("reenterpassword")}
				endAdornment= {
				<InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowReenterPassword}
                  onMouseDown={handleMouseDownReenterPassword}
                >
                  {reentervalues.reentershowPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
			}
			label="Re-enter your password"
			/>
			</FormControl>
			<div id='error-reenterpassword'></div>

			<br />

			<Button variant='contained' onClick={checkPassword}>Submit  </Button>
			<br />
			<br />

			</center>
		</div>
	)
}

export default PasswordSetup
