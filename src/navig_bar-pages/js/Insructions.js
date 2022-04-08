import React from 'react'
import Navbar from '../../Components/js/Navbar';
import LogoutHorizbar from '../../Components/js/LogoutHorizbar';

function Insructions() {
	return (
		<div>
			<Navbar />

			<center>
			<h1>INSTRUCTIONS</h1>

			</center>
			<h4>
			<span /><span />1. Click on the Delivery option in the navigation bar for placing an order. Login or register (in case of new user) to get directed to Delivery page <br />
			<span /><span />2. Click the New delivery button. <br/>
			<span /><span /><span /><span /> REMEMBER! Placing the order should be done only by the sender.<br/>
			<span /><span />3. If the robot is available, you will be directed to a new page where you can select the receiver and locations. The receiver should also be a registered user. <br />
			<span /><span />4. An alert will appear if there are any discrepencies with the information submitted. <br />
			<span /><span />5. After placing the order, a confirmation message shall be sent to the receiver. After confirmation, the order will be implemented by the bot.  <br />
			<span /><span />6. The bot will reach sender's location to collect the documents. An alert message will be sent to the sender when nearing the location.  <br />
			<span /><span />7. After authorization through the application, the lid will be unlocked and sender will be requested to place the documents. The lid gets locked once it is closed by the user.  <br />
			<span /><span />8. The bot then navigates autonomously towards the receiver location. On nearing the location, an alert message is sent to the receiver<br />
			<span /><span />9. The receiver can collect the documents after authorization through the app. <br />
			<span /><span /> <span /><span /> Make sure to close the lid after loading(if sender) and unloading(if receiver) the documents. <br />

			</h4>

		</div>
	)
}

export default Insructions
    