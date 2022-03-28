import {BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Horizbar from './Components/js/Horizbar';
import Navbar from './Components/js/Navbar';
import About from './navig_bar-pages/js/About';
import Contact from './navig_bar-pages/js/Contact';
import Delivery from './navig_bar-pages/js/Delivery';
import Direction from './navig_bar-pages/js/Direction';
import Feedback from './navig_bar-pages/js/Feedback';
import Instructions from './navig_bar-pages/js/Insructions';
import Home from './navig_bar-pages/js/Home';
import Simul from './navig_bar-pages/js/Simul';
import PrevDeliv from './Components/cards/js/PrevDeliv';
import CanDeliv from './Components/cards/js/CanDeliv';
import YesAvail from './navig_bar-pages/avail_pages/js/YesAvail';
import NotAvail from './navig_bar-pages/avail_pages/js/NotAvail';
import LoginOrSignup from './Components/js/LoginOrSignup';
import Register from './Components/js/Register';
import PasswordSetup from './Components/js/PasswordSetup'

function App() {

	return (
	<>
	
	<HashRouter >
		<div className='Title-app'>
			<Horizbar />
			<Navbar />
		</div>

    <Routes>
		<Route path='/home' exact element= {<Home />} />
		<Route path='/about' exact element= {<About />}/>
		<Route path='/contact' exact element = {<Contact />} />
		<Route path='/delivery' exact element= {<Delivery />}/>
		<Route path='/direction' exact element= {<Direction />}/>
		<Route path='/login' exact element={<LoginOrSignup />} />
		<Route path='/simul' exact element = { <Simul />} />
		<Route path='/delivery/prevdeliv' exact element = {<PrevDeliv/>} />
		<Route path='/delivery/candeliv' exact element = {<CanDeliv />}/>
		<Route path='/fb' exact element = {<Feedback />} />
		<Route path='/instr' exact element = {<Instructions />} />
		<Route path='/delivery/yesavail' exact element = {<YesAvail />}/>
		<Route path='/delivery/notavail' exact element = {<NotAvail />}/>
		<Route path='/register' exact element = { <Register />} />
		<Route path='/register/passwordSetup' exact element = { < PasswordSetup />} />
    </Routes>
	</HashRouter>

	</>
  );
}

export default App;

