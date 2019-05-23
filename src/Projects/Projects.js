import React, {Component} from 'react';
import './Projects.css';

class Projects extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
      
        return (
            <div>
                <a href="chriswf.com" target="_blank">
                <img className="project1" src={require("./Patient-Profile.png")} />
                </a>
                <a href="chriswf.com" target="_blank"> 
                <img className="project2" src={require("./Parent-Social-Media.png")} />
                </a>
                <a href="chriswf.com" target="_blank">
                <img className="project3" src={require("./Rick-And-Morty.png")} />
                </a>
            </div>

  
        
        )
    }
}

export default Projects;