import React, {Component} from 'react';
import './Contact.css';
import {Input, Divider, Button} from 'antd';

class Contact extends Component {
    constructor() {
        super() 
        this.state = {

        }
    }

    render() {
        const { TextArea } = Input;
        return (
            <div>
                <form className="form">
                <header>
                    <h1>Please feel free to contact me</h1>
                    <Divider/>
                    <h3>Enter your info below to contact me. All messages get immediatly sent to my inbox.</h3>
                    <Divider/>
                </header>
                <div className="inputBox">
                    <Input className="inputName inputClass" size="large" placeholder="Name" />
                
                    <Input className="inputName inputClass" size="large" placeholder="Email" />
                    <TextArea rows={4} placeholder="Leave me message..." className="message inputClass" />
                    <br></br>
                    <Button type="primary">Submit</Button>
                </div>
                <footer>
                    <a href="https://github.com/JaclynShahan" target="_blank">
                    <img className="imageSize" src={require("./images/GitHubIcon.jpg")}/>
                    </a>
                </footer>
                    
                </form>

            </div>
        )
    }
}

export default Contact;