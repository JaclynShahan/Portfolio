import React, { Component } from 'react'
import './Home.css'
import { Layout, Divider, Icon } from 'antd'
class Home extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    const { Sider, Content } = Layout

    return (
      <Layout className='clearColor'>
        <Layout className='clearColor'>
          <Sider className='grid-container clearColor'>
            <Divider />
            <p className='h3'>Skillset:</p>
            <Divider />

            <img
              className='item2'
              src={require('./CSS.svg')}
            />
            <img
              className='item3'
              src={require('./Express.png')}
            />
            <img
              className='item4'
              src={require('./HTML5.png')}
            />
            <img
              className='item5'
              src={require('./JavaScript.png')}
            />
            <img
              className='item6'
              src={require('./Massive.jpg')}
            />
            <img
              className='item7'
              src={require('./Node.png')}
            />
            <img
              className='item8'
              src={require('./PostgreSQL.png')}
            />
            <img
              className='item9'
              src={require('./React-Redux.png')}
            />
            <img
              className='item10'
              src={require('./React-Router.svg')}
            />
            <img
              className='item11'
              src={require('./React.png')}
            />
            <img
              className='item12'
              src={require('./SQL.png')}
            />
            <img
              className='item13'
              src={require('./RethinkDB.png')}
            />
          </Sider>
          <Content className='clearColor'>
            <br />
            <Divider />
            <h1 className='h1'>Hi, I'm Jaclyn...</h1>
            <h2 className='h2'>
              <Icon type='thunderbolt' /> Full-Stack Web Developer
              <Icon type='thunderbolt' />
            </h2>
            <Divider />
            <img
              className='image border'
              src='https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmPsdytcrdqhmB3KcQogecqogMzDsz4ax6jHXBNiA4GivH/aeroplane-airplane-aviation-6511-min.png'
            />
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default Home
