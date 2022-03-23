import {useState} from 'react';
import { TextField, Button } from '@material-ui/core'
import React from 'react'
import FormControl from '@mui/material/FormControl';

import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


function LoginOrSignup() {

    const [username, setUsername] = useState();  
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
    console.log(username)
    console.log(values.password)
    
    return (
        <div>
            <center>
            <h3>Login or SignUp</h3>
            <br />
            <TextField
            label = 'Username/emailID'
            margin='normal'
            style={{width:'32%'}}
            onChange={(e)=> setUsername(e.target.value)}
            >
            </TextField>
            <br />

            <FormControl sx={{ m: 1, width: '34ch' }} variant="standard">
			<InputLabel htmlFor="standard-adornment-password"> Password</InputLabel>
			<Input
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
            <Button variant='contained'>Submit</Button>
            <br />
            <br/>
            <Button variant='contained'>Register</Button>
            <br />
            <br />
            Don't have an account? <a href='/register'>Register</a>
            </center>

            <br />
            <br />

            <center>



            </center>
        </div>
    )
}

export default LoginOrSignup
