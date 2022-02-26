import React from 'react'
import '../css/Delivery.css';

import Card from '../../Components/cards/js/Card';

import firebase from 'firebase';



function Delivery() {

	var available

	//console.log("1:", available)

	firebase.database().ref('availability').on('value', (snap) =>{
		available = snap.val()
	})

	var string = window.location.href;

	const availFunction = () => {
		if (available == "yes") {
			window.location.href = string + '/yesavail'	
			//window.location.href = string +"/simul";
		}
		else {
			window.location.href = string +	'/notavail'	;
		}
	}
	
	return (
		<>
		<div className = 'Delivery-page '>
		<center>
			<h1>Delivery</h1>
		</center>
		<br></br>
		</div>

		<center>
		<button className='buttonBox' onClick={availFunction}>
			<div className='buttonElement'>
				+  New Delivery
			</div>
			
		</button>
		</center>

		{/* <center>
		<h2>Available : {availDisplay} </h2>
		</center> */}
		
		
		
		<div className='Card-alignment'>
		<center>
		<br></br>
		<Card 
			title = 'Previous deliveries'
			imageUrl ='https://cdn.pixabay.com/photo/2020/09/14/20/39/vans-5572117_960_720.png'
			body = 'This card contains information about the previous deliveries'
			card_name={"prevDeliv"}
		/>
			<br></br>
		
			<br></br>
			
			<br></br>

		<Card 
			title = 'Cancelled deliveries'
			imageUrl ='https://cdn.pixabay.com/photo/2020/09/14/20/39/vans-5572117_960_720.png'
			body = 'This card contains information about the cancelled deliveries'
			card_name={"canDeliv"}
		/>
		</center>
		<br />
		<br />
		</div>
		</>
	);
}

export default Delivery;
