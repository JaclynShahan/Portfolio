import React, {Component} from 'react';
import './About.css';

class About extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
<img className="img" src={require("./images/HomePic.jpg")}/>
            </div>
        )
    }
}

export default About;