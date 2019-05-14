import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import router from './router';
import {Link} from 'react-router-dom';
import { Icon } from 'antd';
import HomePic from './images/HomePic.jpg';
import {Layout} from 'antd';



class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
   const {
     Header
   } = Layout;
  
  return (
    <div>
  <Layout>
      <Header className="topnav">
        <Link to='/Contact'>Contact</Link>
        <Link to='/Projects'>Projects</Link>
        <Link to='/About'>About</Link>
        <Link to='/'>Home</Link>
      </Header>
    </Layout>

    

      {router}
      
     
    
       
      
     

    </div>
   
  );
  }
}

export default App;
