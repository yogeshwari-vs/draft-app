import React from 'react'
import {Player} from 'video-react';
import Navbar from '../../Components/js/Navbar';
import LogoutHorizbar from '../../Components/js/LogoutHorizbar';


function About() {
	return (
		
		<div className = 'About-page'>
			<Navbar />

		<center>
			<h1>About</h1>
		</center>
		<h4>
		<span /><span />The project, "Solar-based autonomous delivery robot" is being developed by the students of Electronics and Instrumentation department at Madras Institute of Technology, Anna University, namely, Aarthi Meena T, Sowbhagya Lakshmi H T and Yogeshwari V S, under the mentorship of MIT alumnus, Mr.Pragash Durai. <br /> <br />
		<span /><span />The bot is being designed for delivering goods from one location to another for closed communities, like, a college campus, an office, etc, with the ease of an application. Some of the features of the application shall be customised based on the community, like, mode of authentication, locations, etc.<br /><br />
		<span /><span />Safety of the humans as well as the goods is of utmost priority for us. The bot shall be accessed only by the registered users belonging to the closed community. The documents can be accessed by the users involved. The users shall be required to authorise with the application to unlock the bot.<br /><br />
		<span /><span />Multiple deliveries can be done simultaneously. This reduces both energy sources as well the overall time involved. Vision based system along with deep learning models will be used for obstacle avoidance. To reduce the human interference, there will be multiple charging stations installed at specific locations. 
		When the battery level goes below a certain threshold, the bot shall autonomously navigate go to the nearest charging station and will get charged wirelessly.
		</h4>
		
		</div>
	)
}

export default About
