import React from 'react'
import '../css/Register.css';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { TextField, Button } from '@material-ui/core';
import database from '../../firebase';
import firebase from 'firebase';


import {useState} from 'react';





function Register() {
	const [values, setValues] = useState({
		amount: '',
		password: '',
		showPassword: false,
	  });

	const [emailAddress, setEmailAddress] = useState();  
	const [name, setName] = useState();  
	const [department, setDepartment] = useState();  
	const [id, setID] = useState();  
	let user = 'exstingUser'

	//console.log(emailAddress, name, department, id)
	const clickSetupPassword = () => {
		console.log('clicksetuppassword')

		var userKey = emailAddress.split('@')
		var userLocation = 'userAuthentication/' + userKey[0] 
		var checkEmail = firebase.database().ref('userAuthentication');
		var countKeys = 0
		var countKeysArray = [];
		// console.log(userLocation)
		checkEmail.orderByKey().on('child_added', function(data){
			console.log(data.key);
			countKeysArray[countKeys] = data.key
			countKeys += 1
			})
		console.log(countKeysArray)
		var count = 0
		for (count=1; count <= countKeysArray.length; ++count) {
			console.log('for loop')
			console.log(countKeysArray[count])
			if (userKey === countKeysArray[count]) {
				user = "existingUser"
				console.log('existing user')
				
				break
			}
			else {
				user = "newUser"
				console.log('newUser')
			}
			
		}

		if (user === 'newUser') {
			console.log('if condn')
			database.ref(userLocation).set({
				name: name,
				department: department,
				staffID: id,
				password: 'nil'
			})

		window.location.href = window.location.origin + '/draft-app/#/register/passwordSetup'

		}
		else{
			alert('Email address already exists.')
			
		}

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
				'& .MuiTextField-root': { m: 1, width: '100%' },
			}}
			noValidate
			autoComplete="off"
			>
			<FormControl sx={{ m: 0.75, width: '80%' }}>
			<TextField id="outlined-basic" label="Enter email adress" variant="outlined"  onChange={(e)=> setEmailAddress(e.target.value)}/>
			<br />
			<TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e)=> setName(e.target.value)}/>
			<br />
			<TextField id="outlined-basic" label="Department" variant="outlined"onChange={(e)=> setDepartment(e.target.value)} />
			<br />
			<TextField id="outlined-basic" label="ID" variant="outlined" onChange={(e)=> setID(e.target.value)}/>
			<br />
			<br />
            <br />
			
			</FormControl>
			
			</Box>

			<Button variant='contained' onClick={clickSetupPassword}> Next</Button>
			<br />
			<br />

			</center>
		</div>
	)
}

export default Register
