    import React from 'react';
    import '../css/Horizbar.css';
    import { TextField, Button } from '@material-ui/core';
    import {BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom';
    import LoginOrSignup from './LoginOrSignup';


    function Horizbar() {

        var originString = window.location.origin;

        const clickFunc = () => {
            //console.log(originString + '/draft-app/#/login')
            window.location.href = originString + "/draft-app";


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
                {/* <div className='Login'>
                <Button variant="contained" onClick={clickFunc}>Login</Button>
                </div> */}

                
            </>
        )
    }

    export default Horizbar
