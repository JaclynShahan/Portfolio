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
            <div className="backgroundClass">
            <div>
              <h2 className="aboutForm">
                My name is Jaclyn Shahan. I am a motivated learner hoping to transfer from Management and Billing to a career in full-stack web development. 
                I have experience with React, Redux, Router, Node/Express, SQL/PostgreSQl, and RESTful API's.
                I am a proud mother of 3 with a supportive family and in my spare time I love to paint and do DIY activities.
                I cannot wait to begin my journey as a web developer and look forward to learning and growing in this field.
             </h2>
               </div>
                <form className="carouselForm clearColor">
            <Carousel autoplay className="carousel" dotPosition={dotPosition}>
            <div>
              <img className="images" src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/60150255_10218163437853379_8579273649947672576_n.jpg?_nc_cat=103&_nc_ht=scontent-dfw5-2.xx&oh=241e6e21a0d9a70441e8d212092b93a7&oe=5D5A55EA" />
            </div>
            <div>
              <img className="images" src={require("./FamilyPic.jpg")} />
            </div>
            <div>
              <img className="images" src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/50278760_10217318370567225_4661217857617526784_n.jpg?_nc_cat=101&_nc_ht=scontent-dfw5-2.xx&oh=13157b08332699f2dea6a91758b24a6e&oe=5D6347AE" />
            </div>
            <div>
              <img className="images" src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/56214361_10217858761556662_5831365101659095040_n.jpg?_nc_cat=111&_nc_ht=scontent-dfw5-2.xx&oh=b64229ac1102374a0ee31a0d136776a8&oe=5D51DB61"/>
            </div>
          </Carousel>
          </form>
          <div>
          <h2 className="resume">View/Download my resume here: <a href="https://docs.google.com/document/d/1p_9mD2PBjQ7gIAadS4KfPKhjNprF_iKQKQCBczu0_TY/edit" target="_blank"><Icon className="fileIcon" type="file"/> </a> </h2>
          </div>
        
          
         </div>
        )
    }
}

export default About;