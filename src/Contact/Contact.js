import React, { Component } from 'react'
import './Contact.css'
import { Input, Divider, Button } from 'antd'
import axios from 'axios'

class Contact extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      message: '',
      sendStatus: 'true'
    }
  }
  updateName (name) {
    this.setState({ name })
  }

  updateEmail (email) {
    this.setState({ email })
  }
  updateMessage (message) {
    this.setState({ message })
  }

  onClear = () => {
    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }
  submitMessage = e => {
    e.preventDefault()
    axios
      .post('/api/sendEmail', {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
      .then(response => console.log(response))

    console.log('sent')
    this.setState({ sendStatus: 'true' })
    this.onClear()
  }

  render () {
    const { TextArea } = Input
    return (
      <div className="contactContainer">
        <form className='form'>
          <header>
            <h1>
              Please feel free to contact me:
              <a href='https://github.com/JaclynShahan' target='_blank'>
                <img className='imageSize' src={require('./GitHubIcon.jpg')} />
              </a>
              <a
                href='https://www.linkedin.com/in/jaclynshahan/'
                target='_blank'
              >
                <img
                  className='imageLinkedIn'
                  src={require('./LinkedInIcon.png')}
                />
              </a>
            </h1>
            <Divider />
            <h3>
              Enter your info below to contact me. All messages get immediatly
              sent to my inbox at Jaclyndshahan@gmail.com
            </h3>
            <Divider />
          </header>
          <div className='inputBox'>
            <Input
              className='inputName inputClass'
              size='large'
              placeholder='Name'
              value={this.state.name}
              onChange={e => this.updateName(e.target.value)}
            />

            <Input
              className='inputName inputClass'
              size='large'
              placeholder='Email'
              value={this.state.email}
              onChange={e => this.updateEmail(e.target.value)}
            />
            <TextArea
              rows={4}
              placeholder='Leave me message...'
              className='message inputClass'
              value={this.state.message}
              onChange={e => this.updateMessage(e.target.value)}
            />
            <br />
            <Button onClick={e => this.submitMessage(e)} type='primary'>
              Submit
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default Contact
