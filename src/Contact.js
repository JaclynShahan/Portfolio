import React, {Component} from 'react';
import './Contact.css';
import {Input, Divider} from 'antd';

class Contact extends Component {
    constructor() {
        super() 
        this.state = {

        }
    }

    render() {
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
                    <Input className="inputName" size="large" placeholder="Name" />
                
                    <Input className="inputName" size="large" placeholder="Email" />
                    <form placeholder="Leave me message" className="message">

                    </form>
                </div>


                </form>

            </div>
        )
    }
}

export default Contact;