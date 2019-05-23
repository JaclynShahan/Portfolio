import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home/Home.js';
import About from './About/About.js';
import Projects from './Projects/Projects.js';
import Contact from './Contact/Contact.js';


export default (
    <Switch>
        <Route exact path="/" component= {Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/Contact" component={Contact} />
    </Switch>
)