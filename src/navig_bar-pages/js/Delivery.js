import React from 'react'
import '../css/Delivery.css';
import firebase from 'firebase';
import LogoutHorizbar from '../../Components/js/LogoutHorizbar';

import {useLocation} from 'react-router-dom';
import {Link, useNavigate} from 'react-router-dom';



function Delivery() {

	var available, status_robot, delivValues
	var string = window.location.href;
	var countKeysArray = [];
	var emailAddressLogin
	var emailAddressRegister

	const navigate = useNavigate()
	const location = useLocation();

	// Robot availability
	firebase.database().ref('availability').on('value', (snap) =>{
		available = snap.val()
	})
	//console.log(available)


	const availFunction = () => {
		var emailAddress
		emailAddressRegister = location.state.emailAddress;
		emailAddressLogin = location.state.emailAddressValue
	
		if (emailAddressLogin === undefined){
			emailAddress = emailAddressRegister
		}
		else{
			emailAddress = emailAddressLogin
		}
		console.log("Here it isssss.....",emailAddress)
		if (available == "yes") {
			navigate('/delivery/yesavail',{state:{emailAddress:emailAddress, signal:'yes'}});

			//window.location.href = string + '/yesavail';
			//window.location.href = 'http://localhost:3000/simul';
			//window.location.href = 'https://yogeshwari-vs.github.io/simul';
		}
		else {
			navigate('/delivery/notavail',{state:{emailAddress:emailAddress}});
			//window.location.href = string +	'/notavail'	;
		}
	}

	// Robot status
	firebase.database().ref('currentDelivery/status').on('value', (snap) =>{
		status_robot = snap.val()
	})
	var userName

	// firebase.database().ref('previousDeliveries' + '/' + userName ).on('value', (snap) =>{
	// 	delivValues = snap.val()
	// })

	// console.log(delivValues)


	var reference = firebase.database().ref('previousDeliveries' + '/' + userName);
	var countKeys = 0
	reference.orderByKey().on('child_added', function(data){
		console.log(data.key);
		countKeysArray[countKeys] = data.key
		countKeys += 1
		})
	//------------------------------------------------------------------------------------------
	console.log(countKeysArray)

	//--------------------------------------------------------------------------------------------
	



	return (
		<>
		<div className = 'Delivery-page '>
		<LogoutHorizbar />

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
		
		{/* <div className='appendCard' id = "appendCard"><Card title = 'Delivery information' body = '.......'/></div> */}

		</center>
		{/* <div className='appendItem'> </div>
		<button onClick={clickFuncTest}>
			Press
		</button>

		<div className='Cardalignment' id = 'Cardalignment'>
		</div> */}
		
		</>
	);
}

export default Delivery;



