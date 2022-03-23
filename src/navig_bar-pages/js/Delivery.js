import React from 'react'
import '../css/Delivery.css';

import Card from '../../Components/cards/js/Card';

import firebase from 'firebase';



function Delivery() {

	var available, status_robot
	var string = window.location.href;

	// Robot availability
	firebase.database().ref('availability').on('value', (snap) =>{
		available = snap.val()
	})
	console.log(available)

	const availFunction = () => {
		if (available == "yes") {
			window.location.href = string + '/yesavail';
			//window.location.href = 'http://localhost:3000/simul';
			//window.location.href = 'https://yogeshwari-vs.github.io/simul';
		}
		else {
			window.location.href = string +	'/notavail'	;
		}
	}

	// Robot status
	firebase.database().ref('currentDelivery/status').on('value', (snap) =>{
		status_robot = snap.val()
	})

	//console.log(status_robot)

	var cardString = '<div class="card"><div class="container"><h4><b>John Doe</b></h4><p>Architect</p></div></div>'


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
		<br />
		<br />
		<div className='appendCard' id = "appendCard"><Card title = 'Delivery information' body = '.......'/></div>

		</center>
		<div className='appendItem'> </div>
		{/* <button onClick={clickFuncTest}>
			Press
		</button> */}

		<div className='Cardalignment' id = 'Cardalignment'>
		</div>
		
		</>
	);
}

export default Delivery;



{/* */}