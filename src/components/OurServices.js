import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/OurServices.css';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Col, Row } from 'react-bootstrap';
import services from '../data/Service.json'

export default class OurServices extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='our-services'>
        <div className="services-inner">
          <p className='litle-dess'>Our Services</p>
          <h2>Boost Your Business with Brandclever's Expert Solutions</h2>
          <div className='servic_provid'>

            <Row>
              {
                services.data.slice(0, 3).map((service, key) => {
                  return (
                    <Col md={4}>
                      <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                          <div class="front">
                            <div className='logo_img'>
                              <img className='srv_bg_img' src={`/images/service/bg_srv.png`} />
                              <img className='srv_bg_web' src={service.icon} />
                              <h3>{service.title}</h3>
                              <p>{service.description.substring(0, 342)}...</p>
                            </div>
                          </div>
                          <div class="back">
                            <div className='back_logo_img'>
                              <img className='srv_bg_img' src={`/images/service/bg_srv.png`} />
                              <img className='srv_bg_web' src={service.icon} />
                              <h3>{service.title}</h3>
                            </div>
                            <div class="oposite" bis_skin_checked="1">
                              <ul>
                                {service.tools.map((tool, key) => {
                                  return (
                                    <li><span><DoneAllIcon /></span> {tool}</li>
                                  )
                                })}

                              </ul>
                            </div>
                            <div className='read_more'>
                              <Link to={service.url}>Read More</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  )
                })
              }
             
            </Row>
          </div>
          <div className="read-btnn">
            <Link to="/service" className='button_slide slide_down'>More</Link>
          </div>
        </div>
      </div>
    );
  }
}
