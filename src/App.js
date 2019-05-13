import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import router from './router';
import {Link} from 'react-router-dom';
import { Icon } from 'antd';
import HomePic from './images/HomePic.jpg';



class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
   
  
  return (
    <div>
    <div className="backgroundClass">

      <div className="topnav" id="myTopnav"> 
        <Link to='/Contact'>Contact</Link>
        <Link to='/Projects'>Projects</Link>
        <Link to='/About'>About</Link>
        <Link to='/'>Home</Link>
      </div>

      {router}
      
      </div>
    
       
      
      <footer className="bottomnav" id="myTopnav">

      </footer>

    </div>
   
  );
  }
}

export default App;
