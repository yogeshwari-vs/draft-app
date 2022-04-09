import {useState} from 'react';
import { TextField, Button } from '@material-ui/core'
import React from 'react'
import FormControl from '@mui/material/FormControl';
import firebase from 'firebase';

import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {Link, useNavigate} from 'react-router-dom';
import Navbar from '../../Components/js/Navbar';


function LoginOrSignup() {

  
    const [username, setUsername] = useState();  
    const [values, setValues] = useState({
		amount: '',
		password: '',
		showPassword: false,
    });
	  const navigate = useNavigate()

    
    const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = (event) => {
    event.preventDefault();

    };
    
    const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    
    };
    
    const loginButton = () => 
    { 
    var userKey = username.split('@')
    var userKey1 = userKey[0]
		if (userKey1.includes('.')){
			userKey = userKey1.split('.')
		}

    var userLocation = 'userAuthentication/' + userKey[0] 
    var checkEmail = firebase.database().ref('userAuthentication');
    var countKeys = 0
    var countKeysArray = [];
    var userStatus
    var count = 0
    var password
    var passwordLocation
    var emailAddress = 

    console.log('entered click function')
		
    checkEmail.orderByKey().on('child_added', function(data){
			countKeysArray[countKeys] = data.key
			countKeys += 1
			})

      console.log('countKeys')
		
      for (count=0; count <= countKeysArray.length - 1; ++count) {
      console.log('for loop')
      
      if (userKey[0] === countKeysArray[count]) {
  			userStatus = 'existingUser'
        passwordLocation = 'userAuthentication/' + userKey[0] + '/password'
        firebase.database().ref(passwordLocation).on('value', (snap) =>{
          password = snap.val()
        })

        console.log(username)
        if (password === values.password) {
		      navigate('/delivery',{state:{emailAddressValue:username}});

          //window.location.href = window.location.origin + '/draft-app/#/home'
        }
        
        else{
          alert('Incorrect password or email address')
        }
        
      }

			
		}


    // var password
    // if (userStatus === 'existingUser') {
    //   var passwordLocation = 'userAuthentication/' + userKey[0] + '/password'
    //   firebase.database().ref(passwordLocation).on('value', (snap) =>{
    //     password = snap.val()
    //   })


    //   if (password === values.password) {
        
    //     window.location.href = window.location.origin + '/draft-app/#/delivery'
    //   }
    //   else{
    //     alert('Incorrect password')
    //   }
      
    // }
    // else{
    //   console.log('hellooo')
    //   alert('Please use registered email address')
    // }


  }
    
    const clickRegister = () => {

      window.location.href = window.location.origin + '/draft-app/#/register'
    }
    
    return (

          	<div>
		        <div style={{position: "relative", zIndex:3}}>
		        <Navbar />
            </div>
            <center>
            <h3>Login</h3>
            <br />
            <TextField
            label = 'Username/emailID'
            margin='normal'
            style={{width:'60%'}}
            onChange={(e)=> setUsername(e.target.value)}
            >
            </TextField>
            <br />

            <FormControl sx={{ m: 1, width: '60%' }} >
            <InputLabel htmlFor="standard-adornment-password"> Password</InputLabel>
            <OutlinedInput
                    id="standard-adornment-password" 
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
            label="Password"
            />
            </FormControl>

            <br />
            <br />
            <Button onClick={loginButton}variant='contained'>Submit</Button>
            <br />
          
            <br />
            Don't have an account?
            <Button onClick={clickRegister}> Register </Button>
            </center>

            <br />
            <br />

            <center>



            </center>
        </div>
    )
}

export default LoginOrSignup
