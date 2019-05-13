import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return(
            <div >
            <body className="centerBody" >
            <img className="img" src={require("./images/HomePic.jpg")}/>
                <h1>Hi, I'm Jaclyn</h1>
                <h4>Will put something here eventually</h4>   
            </body>
            </div>
        )
    }
}

export default Home;