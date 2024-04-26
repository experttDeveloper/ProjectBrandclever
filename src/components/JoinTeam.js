import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class JoinTeam extends Component {
  render() {

    return (
        <div className='join-team'>
        <div className='join-team-inner'>
          <div className='left-side'>
            <div className='team-content'>
              <h3>Join the Brandclever team!</h3>
              <p>
                Explore cutting-edge technologies and engage in exciting projects beyond your imagination.
              </p>
              <Link to='/traning-and-placement'>Apply Now</Link>
            </div>
          </div>
          <div className='right-side grid-images'>
            <div className="display-flex-wrap">
              <div className="img-wrap">
                <img src={process.env.PUBLIC_URL + '/images/gallery/anniversary/3.jpeg'} alt="gallery_img" style={{height:"210px" ,objectFit:"cover"}}/>
              </div>
              <div className="img-wrap">
                <div className="img-wrap-inner"> 
                  <img src={process.env.PUBLIC_URL + '/images/join/1.jpg'} alt="gallery_img" />
                </div>
                <div className="img-wrap-inner">
                  <img src={process.env.PUBLIC_URL + '/images/gallery/diwali/5.jpeg'} alt="gallery_img" />
                </div>
              </div>
            </div>
          </div>
        </div>  
    </div>
    )
  }
}
