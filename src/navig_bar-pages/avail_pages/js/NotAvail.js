import React from 'react'
import {Button, TextField} from '@material-ui/core';
import {useLocation} from 'react-router-dom';
import {Link, useNavigate} from 'react-router-dom';

function NotAvail() {

  var emailAddress
  var userKey 
	var userLocation
  const navigate = useNavigate()

  const location = useLocation();
  emailAddress = location.state.emailAddress;

  userKey = emailAddress.split('@');
  userLocation = 'userAuthentication/' + userKey[0];
    
  const clickToRedirect = () => {
    navigate('/delivery',{state:{emailAddress:emailAddress}});

	}

  return (
    <div>
        <Button onClick={clickToRedirect}>  &#60;&#60; <span/> Go back to Delivery page</Button>
        <center>

        <h1>Oops! The robot is currently busy with another delivery.</h1>
      
        </center>
    </div>
  )
}

export default NotAvail
