import React, { Component } from 'react'
import './Projects.css'

class Projects extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <div className="projectContainer">
        <a href="http://patients.jaclynds.com" target='_blank'>
          <img className='project1' src={require('./Patient-Profile.png')} />
        </a>
        <a href="http://parentforum.jaclynds.com" target='_blank'>
          <img
            className='project2'
            src={require('./ParentForum.png')}
          />
        </a>
        <a href="http://ricknmorty.jaclynds.com" target='_blank'>
          <img className='project3' src={require('./Rick-And-Morty.png')} />
        </a>
      </div>
    )
  }
}

export default Projects
