import React, {Component} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import {Layout, Divider} from 'antd';
class Home extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        const {
            Header, Footer, Sider, Content,
          } = Layout;

          let styles = {
              height: '50%',
              width: '50%',
          }
        return(
        
    
    <Layout>
      <Header className="topnav">
        <Link to='/Contact'>Contact</Link>
        <Link to='/Projects'>Projects</Link>
        <Link to='/About'>About</Link>
        <Link to='/'>Home</Link>
      </Header>
      <Layout>
        <Sider>
            <Divider/>
        <p className= "p">Skillset:</p>
        <Divider />
        <p>More Crap</p>
        </Sider>
        <Content className="backgroundClass">
        <br></br>
        <Divider />
        <h1 className="h1">Hi, I'm Jaclyn...</h1>
        <h2 className="h2">"Your task is not to foresee the future, but enable it"</h2>
            <h4 className="h4">-Antonie De Saint Exupery-</h4>
        <Divider />
        <img className="image" src="https://www.memecreator.org/static/images/memes/4571793.jpg"/>
            </Content>
      </Layout>
      
    </Layout>


 
            
        )
    }
}

export default Home;