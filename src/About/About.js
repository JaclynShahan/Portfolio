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
 
            <Carousel className="carousel" dotPosition={dotPosition}>
            <div>
              <img className="images" src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/60150255_10218163437853379_8579273649947672576_n.jpg?_nc_cat=103&_nc_ht=scontent-dfw5-2.xx&oh=241e6e21a0d9a70441e8d212092b93a7&oe=5D5A55EA" />
            </div>
            <div>
              <img className="images" src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/49938933_10217220651924320_6741260078004830208_n.jpg?_nc_cat=100&_nc_ht=scontent-dfw5-2.xx&oh=cdf70d1f03e1da98dc4357e6cecca6c8&oe=5D5B1DCC" />
            </div>
            <div>
              <img className="images" src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/50278760_10217318370567225_4661217857617526784_n.jpg?_nc_cat=101&_nc_ht=scontent-dfw5-2.xx&oh=13157b08332699f2dea6a91758b24a6e&oe=5D6347AE" />
            </div>
            <div>
              <img className="images" src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/56214361_10217858761556662_5831365101659095040_n.jpg?_nc_cat=111&_nc_ht=scontent-dfw5-2.xx&oh=b64229ac1102374a0ee31a0d136776a8&oe=5D51DB61"/>
            </div>
          </Carousel>
          <br></br>
          <footer>
              <h2 className="resume">View/Download my resume here: <a href="https://docs.google.com/document/d/1p_9mD2PBjQ7gIAadS4KfPKhjNprF_iKQKQCBczu0_TY/edit" target="_blank"><Icon className="fileIcon" type="file"/> </a> </h2>
          </footer>
         </div>
        )
    }
}

export default About;