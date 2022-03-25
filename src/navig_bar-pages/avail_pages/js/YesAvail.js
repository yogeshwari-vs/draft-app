import React from 'react'
import {Button, TextField} from '@material-ui/core';
import {useState} from 'react';
import firebase from 'firebase';
import database from '../../../firebase';
import '../css/YesAvail.css';


function YesAvail() {

    var available
	var statusDeliv
	var count = 0;
	var countAgain = 0
	

	firebase.database().ref('availability').on('value', (snap) =>{
		available = snap.val()
	})

	firebase.database().ref('currentDelivery/status').on('value', (snap) =>{
		statusDeliv = snap.val()
	})


    const locationData = () => {
		if (available == "yes")
		{
			var selectedLocFrom = document.getElementById('selectionBoxLocFrom')
			var selectedLocTo = document.getElementById('selectionBoxLocTo')
			var selectedNameFrom = document.getElementById('selectionBoxNameFrom')
			var selectedNameTo = document.getElementById('selectionBoxNameTo')
			var id = 'xxxx'

			if (selectedLocFrom.selectedIndex > 0) {
				var resultLocFrom = selectedLocFrom.options[selectedLocFrom.selectedIndex].value}
			if (selectedLocTo.selectedIndex > 0) {
				var resultLocTo = selectedLocTo.options[selectedLocTo.selectedIndex].value}
			if (selectedNameFrom.selectedIndex > 0) {
				var resultNameFrom = selectedNameFrom.options[selectedNameFrom.selectedIndex].value}
			if (selectedNameTo.selectedIndex > 0) {
				var resultNameTo = selectedNameTo.options[selectedNameTo.selectedIndex].value}

			console.log(resultNameFrom)
			
			if (resultLocFrom == undefined || resultLocTo == undefined || resultNameTo == undefined || resultNameFrom == undefined ) {
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


					
				window.location.href = "https://yogeshwari-vs.github.io/draft-app/#/delivery";
				

			}
		}
		else{
			window.location.href = window.location.href + "delivery/notavail";
		}
	}

	
		
	const formatString = (resultNameFrom, resultNameTo, resultLocFrom, resultLocTo) => {
		var stringTitle = '<div class="Card"><div class="Card-title"><b>Your current order</b></div><br /><br /><div class="Card-body">'
		var stringSender = '<b>Sender:</b><span /><b>'+ resultNameFrom +'</b><br />'
		var stringReceiver = '<b>Receiver:<span /></b><b>'+ resultNameTo+ '</b><br />'
		var stringLocFrom = '<h4>Location</h4><span /><b>From:<span /></b><b>'+ resultLocFrom+ '</b><br />'
		var stringLocTo = '<b>From:<span /></b><b>'+ resultLocTo + '</b><br /></div></div>'
		var string = stringTitle + stringSender + stringReceiver + stringLocFrom + stringLocTo;
		return string
	}
	const dispCurrentDelivCard = (string) => {
		if (count == 0){
			document.getElementById('confirmOrder').insertAdjacentHTML('beforeend',"<center><h2>Your order has been placed</h2></canter>")
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
	

	
    return (
        <div>
			<div id = 'confirmOrder'></div>
            <center>
            <h1> Place your order!!!</h1>
            </center>

            <center>
                {/* Name selection */}
                <select id='selectionBoxNameFrom'>
					<option selected disabled value="">Select Sender </option>
					<option value={"Aarthi"}>Aarthi</option>		
					<option value={"Sowbhagya"}>Sowbhagya</option>		
				</select>
				<span />
				<span />
				<span />
				<span />
				<select id='selectionBoxNameTo' >
					<option selected disabled value="">Select Receiver </option>
					<option value={"Aarthi"}>Aarthi</option>		
					<option value={"Sowbhagya"}>Sowbhagya</option>	
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
