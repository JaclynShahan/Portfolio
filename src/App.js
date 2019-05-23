import React, {Component} from 'react';
import './App.css';
import router from './router';
import {Link} from 'react-router-dom';
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
    <div className="backgroundClass">
  <Layout className="clearColor">
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
