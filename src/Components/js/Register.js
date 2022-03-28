import React from 'react'
import '../css/Register.css';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { TextField, Button } from '@material-ui/core';

import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import {useState} from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";




function Register() {
	const [values, setValues] = useState({
		amount: '',
		password: '',
		showPassword: false,
	  });

	  const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	  };
	  
	  const handleMouseDownPassword = (event) => {
		event.preventDefault();
	  };
	  
	  const handlePasswordChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	  };
	  
	  const clickSetupPassword = () => {
		  window.location.href = window.location.origin + '/draft-app/#/register/passwordSetup'
	  }
	  
	return (
		<div className='registerClass'>
		{/* No validation  */}
			<center>
				<div> <a>Details</a><>&#62;&#62;</> <Button onClick={clickSetupPassword}> Setup Password</Button></div>
			</center>
			<center>
			<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { m: 1.5, width: '50ch' },
			}}
			noValidate
			autoComplete="off"
			>
			<FormControl>
			<TextField id="outlined-basic" label="Enter email adress" variant="outlined" />
			<br />
			<TextField id="outlined-basic" label="Name" variant="outlined" />
			<br />
			<TextField id="outlined-basic" label="Department" variant="outlined" />
			<br />
			<TextField id="outlined-basic" label="ID" variant="outlined" />
			<br />
			<br />
            <br />
			
			</FormControl>
			
			</Box>

			<Button variant='contained' onClick={clickSetupPassword}> Next</Button>
			<br />
			<br />


			<FormControl sx={{ m: 1, width: '40ch' }} >
			<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
			label="Password"
			/>
			</FormControl>

			<br />
			<br />
			<br />
			<br />
			</center>
		</div>
	)
}

export default Register
