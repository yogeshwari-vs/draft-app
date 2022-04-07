    import React from 'react';
    import '../css/Horizbar.css';
    import { TextField, Button } from '@material-ui/core';
    import {BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom';
    import LoginOrSignup from './LoginOrSignup';


    function Horizbar() {

        var originString = window.location.origin;

        const logoutFunc = () => {
            //console.log(originString + '/draft-app/#/login')
            window.location.href = originString + "/login";


        }
        return (
            <>
                <div className='Title'>
                        Delivery Robot
                </div>

                {/* <a href='/login'>
                <div className='Login' >
                    Login
                </div>
                
                </a> */}    
                <br />

                
            </>
        )
    }

    export default Horizbar
