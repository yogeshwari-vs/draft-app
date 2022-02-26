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

	//const robot_ = require('../../Photos/Robot.png').default
	const robot1 = require('../../Photos/Robot_1.png')

	return (
		<div className = 'Home-page'>
		<center>
			<h2>Home🏡</h2>
			<br /><br />
			<div>
				<h1> Robot Designs </h1>
				<div>
					<img src={Robot} />   {/* alt='1' */}
				</div>
				<br />
				<img src={Robot_1} />
				
				<img src={Robot_2} />

				<br />
				<br />
			</div>
			
			<div className='YT-video'>
				<YouTube videoId={"-lBpGBWOcuU"} opts={opts} />	
			</div>

		</center>
		</div>
	)
}

export default Home
