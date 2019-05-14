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
 

    

      {router}
      
     
    
       
      
     

    </div>
   
  );
  }
}

export default App;
