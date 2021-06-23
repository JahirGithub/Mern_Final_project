// import logo from './logo.svg';
// import './App.css';

// function App() {
  
//   return (

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/* Edit <code>src/App.js</code>  */}
//           <h1>Hi ,I am Jahuruddin Sk!</h1>
//         </p>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

// export default App;

        // Navbar part

import React from 'react';
import Navbar from './components2/Navbar';
import './App.css';
import Home from './components2/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components2/pages/Services';
import Products from './components2/pages/Products';
import ContactUs from './components2/pages/ContactUs';
import SignUp from './components2/pages/SignUp';
import Marketing from './components2/pages/Marketing';
import Consulting from './components2/pages/Consulting';
import FinalBoard from './components2/pages/FinalBoard';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/finalBoard' component={FinalBoard} />
      </Switch>
    </Router>
  );
}

export default App;
      // Navbar part