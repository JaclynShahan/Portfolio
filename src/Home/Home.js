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
        
    <Layout className="clearColor">
   <Layout className="clearColor">
        <Sider className="grid-container clearColor" >
            <Divider/>
        <p className= "h3">Skillset:</p>
        <Divider />
        
        <img className="item2" src="http://chriswf.com/static/media/css-icon.b1d1fae6.svg" />  
        <img className="item3" src="http://chriswf.com/static/media/express-icon.d3501596.png" />
        <img className="item4" src="http://chriswf.com/static/media/html5-icon.da3c36ab.png" />
        <img className="item5" src="http://chriswf.com/static/media/javascript-icon.e797a8c5.png"/>
        <img className="item6" src="data:image/png;base64,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" />
        <img className="item7" src="http://chriswf.com/static/media/node-icon.270f55ff.png"/>
        <img className="item8" src="http://chriswf.com/static/media/react-router-icon.02419671.svg" />
        <img className="item9" src="http://chriswf.com/static/media/reactjs-icon.580ffd26.png" />
        <img className="item10" src="http://chriswf.com/static/media/redux-icon.59c46753.png" />
        <img className="item11" src="http://chriswf.com/static/media/massive-icon.436787a1.jpg" />
        <img className="item12" src="http://chriswf.com/static/media/postgresql-icon.50156c71.png" />
        <img className="item13" src="https://cdn.iconscout.com/icon/free/png-256/rethinkdb-283025.png"/>

        </Sider>
        <Content className="clearColor">
        <br></br>
        <Divider />
        <h1 className="h1">Hi, I'm Jaclyn...</h1>
        <h2 className="h2">"Your task is not to foresee the future, but enable it"</h2>
            <h4 className="h4">-Antonie De Saint Exupery-</h4>
        <Divider />
        <img className="image" src="https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmPsdytcrdqhmB3KcQogecqogMzDsz4ax6jHXBNiA4GivH/aeroplane-airplane-aviation-6511-min.png"/>
            </Content>
      </Layout>
    </Layout>


 
            
        )
    }
}

export default Home;