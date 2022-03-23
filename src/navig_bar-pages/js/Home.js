import React from 'react';

import Robot from '../../Photos/Robot.png';
import Robot_1 from '../../Photos/Robot_1.png';
import Robot_2 from '../../Photos/Robot_2.png';


import YouTube from "react-youtube";

var youTubeID = require("get-youtube-id")

function Home() {

	const opts = {
	  height: "390",
	  width: "640",
	  playerVars: {
		autoplay: 1
	  }
	};

	return (
		<div className = 'Home-page'>
		<center>
			<h1> Working of SBADR</h1>
			<div className='YT-video'>
				<YouTube videoId={"-lBpGBWOcuU"} opts={opts} />	
			</div>
			<br />

			<div>
				<h1> Robot Designs </h1>
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
