// import './styles/normalise.css';

// import Pin from './components/Pin.js';
// import Modal from './components/Modal.js';
// import ModalAndPin from './components/ModalAndPin.js';
// import FinalBoard from './components/FinalBoard.js';
// import Sample from './Sample';
// import Login from './290521login';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components4/Header';
import Signup from './components4/Signup';
import Login from './components4/Login';


// import AppPorInter from './AppPorInter'
// import Apppinterest from './Apppinterest'
// import Apppin from './Apppin'

function App() {
	return (
		<>
		<BrowserRouter>
      {/* <Wrapper /> */}
      <Switch>
        <Route path='/' exact component={Header} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
		</>
	);
}

export default App;
