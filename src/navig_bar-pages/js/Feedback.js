import React from 'react'
import Navbar from '../../Components/js/Navbar';
import LogoutHorizbar from '../../Components/js/LogoutHorizbar';
import { TextField, Button } from '@material-ui/core'
import {useState} from 'react';
import database from '../../firebase';

function Feedback() {

	const [name, setName] = useState();  
	const [feedback, setFeedback] = useState();
	var userLocation

	const clickSubmit = () => {
		userLocation = 'feedback/' + name
		database.ref(userLocation).set({feedback: feedback})
		
		alert('Thankyou for your feedback!')
	}
	return (
		<div>
		<div style={{position: "relative", zIndex:3}}>
		<Navbar />

		</div>

		<center>
			<h1>Feedback</h1>
			<TextField id="outlined-basic" label="Name" variant="outlined"  onChange={(e)=> setName(e.target.value)}/>
				<br />
			<br />
			<TextField id="outlined-basic" label="Feedback" variant="outlined"  onChange={(e)=> setFeedback(e.target.value)}/>

			<br />
			<br />
			<Button variant='contained' onClick={clickSubmit}>Submit</Button>
		</center>
		</div>
	)
	}

export default Feedback
    