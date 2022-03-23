import React from 'react'
import '../css/Card.css';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
//import { Link } from '@material-ui/core';

function Card({title,body }) {
	

	var canDeliv = "/delivery/candeliv";
	var prevDeliv = "/delivery/prevdeliv"
	return (
		<>
		<div className='Card' >
			<div className='Card-title'>
				<b>{title}</b>
			</div>
			<div className='Card-body'>
				<p>{body}</p>
			</div>
		</div>
		</>
	)
}

export default Card



