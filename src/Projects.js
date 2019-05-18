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
            <body className="gridStyle">
            <div className="projects">
                <img src={require("./images/Patient-Profile.png")} />
            </div>
            <div className="projects">
            <img src={require("./images/Madlibs.png")} />
            </div>
            <div className="projects">
                <img src={require("./images/Parent-Social-Media.png")} />
            </div>
            <div className="projects">
                <img src={require("./images/Rick-And-Morty.png")} />
            </div>
            </body>

  
        
        )
    }
}

export default Projects;