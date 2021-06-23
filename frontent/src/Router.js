import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './Aboutrouter';
import Contact from './Contactusrouter';
import Error from './Error';


const Rout= () => {
    return (
        <>
        <Switch>
            <Route exact path='/' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route component={Error}/>
        </Switch>
            {/* <About/>
            <Contact/> */}
        </>
    )
};


export default Rout;