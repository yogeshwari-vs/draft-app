import React from 'react'
import {Button, TextField} from '@material-ui/core';
import {useState} from 'react';
import firebase from 'firebase';
import database from '../../../firebase';
import '../css/YesAvail.css';
import {useLocation} from 'react-router-dom';
import { CollectionsOutlined } from '@material-ui/icons';



function YesAvail() {

    var available
	var statusDeliv
	var count = 0;
	var countAgain = 0
	var countLoop = 0
	var userKey 
	var userLocation
	var resultNameFrom
	var countKeys = 0
    var countKeysArray = [];
	var nameValue
	var selectedNameTo

	var emailAddress
	var signal
    const location = useLocation();
    emailAddress = location.state.emailAddress;
	signal = location.state.signal
	userKey = emailAddress.split('@');
	userLocation = 'userAuthentication/' + userKey[0];

	
	// if (signal === 'proceed'){
		var countKeys = 0
		var countKeysArray = [];
		var nameValue
		var selectedNameTo
			
		var checkEmail = firebase.database().ref('userAuthentication');
		var userLocation 

		
	firebase.database().ref('availability').on('value', (snap) =>{
		available = snap.val()
	})

	firebase.database().ref('currentDelivery/status').on('value', (snap) =>{
		statusDeliv = snap.val()
	})
	const getSenderName = () => {

		firebase.database().ref(userLocation + '/name').on('value', (snap) =>{
			resultNameFrom = snap.val()
		})
		console.log('resultNameFrom: ', resultNameFrom	)
	}



	const loop =(resultNameTo) => {
		console.log('inside loop')
		getSenderName()
		if (countLoop%8000 === 0 && statusDeliv !== 'done') {


			firebase.database().ref('currentDelivery/status').on('value', (snap) =>{
				statusDeliv = snap.val()
			})
			//console.log(countLoop)
		}
		if (statusDeliv !== 'done') setTimeout(loop, 0);
		//console.log(statusDeliv)

		countLoop += 1
		if (statusDeliv === 'done') {
			checkIfDone(resultNameFrom,resultNameTo);
		}
	}
	
	const clickToRedirect = () => {
		window.location.href = window.location.origin + "/draft-app/";

	}

	const appendInDatabase = (resultNameTo) => {
		getSenderName()

		//append in previous delivery section of database
		var ID ='xxxxx'
		var pathForSender = 'previousDeliveries/' + resultNameFrom + '/' + ID 
		database.ref(pathForSender).set({
			SR: 'sent',
			note: 'sample text',
			toORfrom: resultNameTo
		})

		var pathForReceiver = 'previousDeliveries/' + resultNameTo + '/' + ID
		database.ref(pathForReceiver).set({
			SR: 'receiver',
			note: 'sample text',
			toORfrom: resultNameFrom
		})

		database.ref('currentDelivery/Sender').set({
			Location: 'nil',
			Name: 'nil'
		})
		database.ref('currentDelivery/Receiver').set({
			Location: 'nil',
			Name: 'nil'
		})
	}
	const checkIfDone = (resultNameFrom,resultNameTo) => {
		console.log(" Out of the loop")
		const element = document.getElementById('confirmOrder').children[0]
		const newElement = document.createTextNode("  ")
		element.replaceChild(newElement, element.childNodes[0])
		document.getElementById('confirmOrder').insertAdjacentHTML('beforeend',"<center><h2>COMPLETED!</h2></center>")
		appendInDatabase(resultNameFrom,resultNameTo);

	}

    const locationData = () => {
		if (available == "yes")
		{
			
			getSenderName()
		
			var selectedLocFrom = document.getElementById('selectionBoxLocFrom')
			var selectedLocTo = document.getElementById('selectionBoxLocTo')
			// var selectedNameFrom = document.getElementById('selectionBoxNameFrom')
			selectedNameTo = document.getElementById('selectionBoxNameTo')
			var id = 'xxxx'

			if (selectedLocFrom.selectedIndex > 0) {
				var resultLocFrom = selectedLocFrom.options[selectedLocFrom.selectedIndex].value}
			if (selectedLocTo.selectedIndex > 0) {
				var resultLocTo = selectedLocTo.options[selectedLocTo.selectedIndex].value}
			// if (selectedNameFrom.selectedIndex > 0) {
			// 	var resultNameFrom = selectedNameFrom.options[selectedNameFrom.selectedIndex].value}
			if (selectedNameTo.selectedIndex > 0) {
				var resultNameTo = selectedNameTo.options[selectedNameTo.selectedIndex].value}
			
			if (resultLocFrom == undefined || resultLocTo == undefined || resultNameTo == undefined ) {
				alert('Some textfield is missing! Kindly select any option to proceed.')
			}

			else if (resultNameFrom == resultNameTo){
				alert("Sender and Recever are same! Please recheck")
			}
			else if (resultLocFrom == resultLocTo) {
				alert("Sender location cannot be same as Receiver location!")
			}
			else {
				database.ref('currentDelivery/Sender').set({
					Location: resultLocFrom,
					Name: resultNameFrom
				})
				database.ref('currentDelivery/Receiver').set({
					Location: resultLocTo,
					Name: resultNameTo
				})
				//alert('Delivery order placed!')	
				var cardString = formatString(resultNameFrom,resultNameTo, resultLocFrom, resultLocTo)
				dispCurrentDelivCard(cardString)

				loop(resultNameFrom,resultNameTo);

			}
		}
		else{
			window.location.href = window.location.origin + "delivery/notavail";
		}
	}

	
		
	const formatString = (resultNameFrom, resultNameTo, resultLocFrom, resultLocTo) => {
		var stringTitle = '<div class="Card"><div class="Card-title"><br /><br /><b>Your current order</b></div><br /><br /><div class="Card-body">'
		var stringSender = '<b>Sender:</b><span /><b>'+ resultNameFrom +'</b><br />'
		var stringReceiver = '<b>Receiver:<span /></b><b>'+ resultNameTo+ '</b><br /><br />'
		var stringLocFrom = '<b>From:<span /></b><b>'+ resultLocFrom+ '</b><br />'
		var stringLocTo = '<b>To:<span /></b><b>'+ resultLocTo + '</b><br /></div></div>'
		var string = stringTitle + stringSender + stringReceiver + stringLocFrom + stringLocTo;
		return string
	}
	const dispCurrentDelivCard = (string) => {
		if (count == 0){
			document.getElementById('confirmOrder').insertAdjacentHTML('beforeend',"<center><h2>Your order has been placed</h2></center>")
			document.getElementById('currentOrderCard').insertAdjacentHTML('afterend',string)
			count = count+1
		}
		else {
			if (countAgain == 0)
			{
			const element = document.getElementById('confirmOrder').children[0]
			const newElement = document.createTextNode("  ")
			element.replaceChild(newElement, element.childNodes[0])
			document.getElementById('confirmOrder').insertAdjacentHTML('beforeend',"<center><h2>Your order has been already been placed</h2></center>")
				
			countAgain = countAgain + 1;
			}
		}
	}
	checkEmail.orderByKey().on('child_added', function(data){
		countKeysArray[countKeys] = data.key
		// console.log('data.key:', data.key)		
		// console.log(countKeysArray)
		userLocation = 'userAuthentication/' + data.key
		// console.log(userLocation)
		firebase.database().ref(userLocation + '/name').on('value', (snap) =>{
			nameValue = snap.val()
			// console.log(nameValue)
		})
		var selectedOption = document.getElementById('selectionBoxNameTo')
		selectedOption.add(new Option(nameValue))
		//var x = document.getElementById("locationList");
		//count the lenth of select optons
		var listLength = selectedOption.length;
		for (var i = 0; i < listLength; i++) {
			for (var j = 0; j < listLength; j++) {
			//i != j This prevents the actual index from being deleted
			//x.options[i].value == x.options[j].value => it finds the duplicate index.
			if (selectedOption.options[i].value == selectedOption.options[j].value && i != j) {
				//Remove duplicate option element
				selectedOption.remove(j);
				//Refresh the list Length
				listLength--;
			}
		}
	}
		countKeys += 1

	})


    return (
        <div>
			
			<Button onClick={clickToRedirect}>  &#60;&#60; <span/> Go back to Home page</Button>
			<div id = 'confirmOrder'></div>
            <center>
            <h1> Place your order!!!</h1>
            </center>

            <center>
                {/* Name selection */}
                {/* <select id='selectionBoxNameFrom'>
					<option selected disabled value="">Select Sender </option>
					<option value={"Aarthi"}>Aarthi</option>		
					<option value={"Sowbhagya"}>Sowbhagya</option>		
				</select> */}
				<span />
				<span />
				<span />
				<span />
				<select id='selectionBoxNameTo' >
					<option selected disabled value="">Select Receiver </option>
					{/* <option value={"Aarthi"}>Aarthi</option>		
					<option value={"Sowbhagya"}>Sowbhagya</option>	 */}
				</select>

                <br />
                <br />
                <br />
                {/* Location selection */}
                <select id='selectionBoxLocFrom'>
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
				<select id='selectionBoxLocTo' >
					<option selected disabled value="">Select Receiver Location</option>
					<option value={"Location A"}>Location A</option>		
					<option value={"Location B"}>Location B</option>		
					<option value={"Location C"}>Location C</option>	
					<option value={"Location D"}>Location D</option>	
				</select>

				<br />
				<br />
				<div 
					style={{position: "relative",zIndex: 0}}>

				</div>
				<Button onClick={locationData} variant='contained'>
					Submit
				</Button>

				<br />
				<br />

				<div id='currentOrderCard'></div>

            </center>
        </div>
    )
}

export default YesAvail
