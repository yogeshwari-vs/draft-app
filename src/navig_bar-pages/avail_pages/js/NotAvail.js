import React from 'react'
import {Button, TextField} from '@material-ui/core';

function NotAvail() {
  const clickToRedirect = () => {
		window.location.href = window.location.origin + "/draft-app/#/delivery";

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
