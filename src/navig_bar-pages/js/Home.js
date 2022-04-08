import React from 'react';
import Robot from '../../Photos/Robot.png';
import Robot_1 from '../../Photos/Robot_1.png';
import Robot_2 from '../../Photos/Robot_2.png';
import Navbar from '../../Components/js/Navbar';
import LogoutHorizbar from '../../Components/js/LogoutHorizbar';
import {useLocation} from 'react-router-dom';


import YouTube from "react-youtube";

var count = 1
var emailAddress


function Home() {

	const opts = {
	  height: "350",
	  width: "80%	",
	  playerVars: {
		autoplay: 1
	  }
	};

	// var emailAddressValue

	// const location = useLocation();

	// if(count === 1) {
	// 	console.log('IF condn')
	// 	emailAddress = location.state.emailAddress;
	// 	emailAddressValue = emailAddress
	// 	count = count + 1;
	// }
	return (
		<div className = 'Home-page'>
			<Navbar />

		
		<center>
			<h2> Working</h2>
			<div className='YT-video'>
				<YouTube videoId={"-lBpGBWOcuU"} opts={opts} />	
			</div>
			<br />

			<div>
				<h2> Robot Designs </h2>
				<img src={Robot} width={300} height={300}/>   {/* alt='1' */}
				<span />				
				<span />				
				<img src={Robot_1} width={300} height={300}/>
				<span />				
				<span />
				<img src={Robot_2} width={300} height={300}/>


			</div>
			

			

		</center>
		</div>
	)
}

export default Home
