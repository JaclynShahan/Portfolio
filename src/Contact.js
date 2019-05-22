import React, {Component} from 'react';
import './Contact.css';
import {Input, Divider, Button} from 'antd';
import axios from 'axios';

class Contact extends Component {
    constructor() {
        super() 
        this.state = {
            name: '',
            email: '',
            message: '',
            sendStatus: 'true'
        }
    }
    handleChange(e, type) {
        this.setState({ [type]: e.target.value })
      }

      submitMessage(e) {
        e.preventDefault()
        axios.post("/api/sendEmail", {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
          })
          .then(response => console.log(response))
        e.target.reset()
        console.log("sent")
        this.setState({ sendStatus: "true" })
      }
    render() {
        const { TextArea } = Input;
        return (
            <div>
                <form className="form">
                <header>
                    <h1>Please feel free to contact me: 
                    <a href="https://github.com/JaclynShahan" target="_blank">
                    <img className="imageSize" src={require("./images/GitHubIcon.jpg")}/>
                    </a>
                    <a href="https://www.linkedin.com/in/jaclyn-shahan-68a160138/" target="_blank">
                    <img className="imageLinkedIn" src={require("./images/LinkedInIcon.png")}/>
                    </a>
                    </h1>
                    <Divider/>
                    <h3>Enter your info below to contact me. All messages get immediatly sent to my inbox at Jaclyndshahan@gmail.com</h3>
                    <Divider/>
                </header>
                <div className="inputBox">
                    <Input 
                    className="inputName inputClass" 
                    size="large" 
                    placeholder="Name"
                    onChange={e => this.handleChange(e, 'name')}
                    />
                
                    <Input 
                    className="inputName inputClass" 
                    size="large" 
                    placeholder="Email"
                    onChange={e => this.handleChange(e, 'email')}
                    />
                    <TextArea 
                    rows={4} 
                    placeholder="Leave me message..." 
                    className="message inputClass"
                    onChange={e => this.handleChange(e, 'message')}
                    />
                    <br></br>
                    <Button onSubmit={e => this.submitMessage(e)} type="primary">Submit</Button>
                
                </div>
                  
                 
                
                    
                </form>

            </div>
        )
    }
}

export default Contact;