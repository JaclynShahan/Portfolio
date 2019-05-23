import React, {Component} from 'react';
import './About.css';
import {Carousel, Icon} from 'antd';

class About extends Component {
    constructor() {
        super()
        this.state = {
           dotPosition: 'left'
        }
    }
   
   render() {
          const { dotPosition } = this.state;
        return (
            <div className="aboutGrid">
            <h2 className="aboutForm paragraph clearColor">
            My name is Jaclyn Shahan. I am a motivated learner hoping to transfer from Management and Billing to a career in full-stack web development. 
            I have experience with React, Redux, Router, Node/Express, SQL/PostgreSQl, and RESTful API's.
            I am a proud mother of 3 with a supportive family and in my spare time I love to paint and do DIY activities.
            I cannot wait to begin my journey as a web developer and look forward to learning and growing in this field.
         </h2>
           <div className="carouselForm clearColor pics">
            <Carousel autoplay className="carousel" dotPosition={dotPosition}>
            <div>
              <img className="images" src={require("./AboutPic.jpg")} />
            </div>
            <div>
              <img className="images" src={require("./FamilyPic.jpg")} />
            </div>
            <div>
              <img className="images" src={require("./zebra.jpg")}/>
            </div>
          </Carousel>
          </div>
          <div>
          <h2 className="resume">View/Download my resume here: <a href="https://docs.google.com/document/d/1p_9mD2PBjQ7gIAadS4KfPKhjNprF_iKQKQCBczu0_TY/edit" target="_blank"><Icon className="fileIcon" type="file"/> </a> </h2>
          </div>
        
          
         </div>
        )
    }
}

export default About;