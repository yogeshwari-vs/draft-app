import '../css/Simul.css';
import {Button, TextField} from '@material-ui/core';
import {useState} from 'react';
import React from 'react';
import firebase from 'firebase';
import database from '../../firebase';
import LoginOrSignup from '../../Components/js/LoginOrSignup';

function Simul() {

	const [dir, setDir] = useState();
	
	const clickFunction = () => {
		database.ref('user').set({
			dir :dir,
		}).catch(alert);

	}
	const forwardFunc = () => {
		database.ref('user').set({
			dir:"straight"
		})
	}

	const stopFunc = () => {
		database.ref('user').set({
			dir:"stop"
		})
	}
	
	var available

	firebase.database().ref('availability').on('value', (snap) =>{
		available = snap.val()
	})



	const locationData = () => {
		if (available === "yes")
		{
			var selectedFrom = document.getElementById('selectionBoxFrom')
			var selectedTo = document.getElementById('selectionBoxTo')

			if (selectedFrom.selectedIndex > 0) {
				var resultFrom = selectedFrom.options[selectedFrom.selectedIndex].value}
		
			if (selectedTo.selectedIndex > 0) {
				var resultTo = selectedTo.options[selectedTo.selectedIndex].value}
			
			console.log(resultFrom)
			console.log(resultTo)
			
			if (resultFrom === resultTo) {
				alert("Sender location cannot be same as Receiver location!")
			}
			else {
			
				database.ref('currentDelivery/Sender').set({
					Location: resultFrom,
					Name: "nil"
				})

				database.ref('currentDelivery/Receiver').set({
					Location: resultTo,
					Name: "nil"
				})
				alert('Delivery order placed!')	
			}

			
		}
		else{
			window.location.href = window.location.href + "delivery/notavail";
		}

		
		//window.location.href = " http://localhost:3000/delivery"

		}
	

		
	return (
		<>
		<center>
			<h1>SIMULATION</h1>
		</center>
		<div className='inputData'>
			<br></br>


			<center>
				
				<h2>Movement of robot </h2>
				
				<h3>Using text command</h3>
				<TextField
				label = "Enter direction"
				margin = "normal"
				style={{width:'25%'}}
				value = {dir}
				onChange={(e)=> setDir(e.target.value)}
				></TextField>
				
				<br />
				<Button onClick={clickFunction} variant='contained'>
					Submit
				</Button>

				<br />
				<br />
				
				<div className='buttonStyle'>
					<h3>Using buttons</h3>		

				<Button 
					onClick={forwardFunc} 
					variant='contained'
					>
					Straight
				</Button>
				</div>
				
				<div className='buttonStyle'>			

				<Button 

					onClick={stopFunc} 
					variant='contained'
					>
					Stop
				</Button>
				</div>

				<div>
					<h3>----------------------------------------------------------------------------------------------------------------------------------------------</h3>
				</div>

				{/* If robot is available */}
				<h2>Delivery from one location to another</h2>

				<select id='selectionBoxFrom'>
					<option selected disabled value="">Select Sender Location</option>
					<option value={"Location A"}>Location A</option>		
					<option value={"Location B"}>Location B</option>		
					<option value={"Location C"}>Location C</option>		
					<option value={"Location D"}>Location D</option>
				</select>
				
				<span />
				<span />
				<span />
				<span />
									
				
				<select id='selectionBoxTo' >
					<option selected disabled value="">Select Receiver Location</option>
					<option value={"Location A"}>Location A</option>		
					<option value={"Location B"}>Location B</option>		
					<option value={"Location C"}>Location C</option>	
					<option value={"Location D"}>Location D</option>	
				</select>

				<br />
				<br />

				<Button onClick={locationData} variant='contained'>
					Submit
				</Button>

			</center>
		</div>
		</>
	);
}

export default Simul
