import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/OurServices.css';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Col, Row } from 'react-bootstrap';

export default class OurServices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: [
        {
          title: 'Web Development',
          icon: process.env.PUBLIC_URL + '/images/service/web-devlopment.png',
          description: 'Brandclever uses the latest technology in the field of web development, ensuring that all our websites are of high quality.',
          additionalInfo: '<ul><li>Shopify Store Development</li><li>Wordpress Site Development</li><li>Landing Page Website</li><li>Backend Development</li><li>Frontend Development</li></ul>',
          url: '/web-development',
          tools: ['Shopify Store Development', 'Wordpress Site Development', 'Landing Page Website', 'Backend Development', 'Frontend Development'],
        },
        {
          title: 'Graphic Design',
          icon: process.env.PUBLIC_URL + '/images/service/ui-ux-design.png',
          description: 'We provide the best facilities for customer satisfaction by creating professional and beautiful designs, making our customers happy.',
          additionalInfo: '<ul><li>Banner Designs</li><li>Icon Designs</li><li>Mobile Application Designs</li><li>Logo Designs</li><li>Business Cards</li><li>Brochures</li><ul>',
          url: '/graphic-degine',
          tools: ['Banner Designs', 'Icon Designs', 'Mobile Application Designs', 'Logo Designs', 'Business Cards', 'Brochures'],
        },
        {
          title: 'CMS Solution',
          icon: process.env.PUBLIC_URL + '/images/service/graphic.png',
          description: 'Content Management Solutions using technologies like WordPress, Shopify, Magento 2.',
          additionalInfo: '<ul><li>Content Creation and Storage</li><li>User Access Control</li><li>Workflow Automation</li><li>Multi-Platform Publishing</li><li>Content Analysis</li><li>Content Migration Services</li></ul>',
          url: '/cms-solution',
          tools: ['Content Creation and Storage', 'User Access Control', 'Workflow Automation', 'Multi-Platform Publishing', 'Content Analysis', 'Content Migration Services'],
        },
        {
          title: 'Content Strategy',
          icon: process.env.PUBLIC_URL + '/images/service/graphic.png',
          description: 'Content Management Solutions using technologies like WordPress, Shopify, Magento 2.',
          additionalInfo: '<ul><li>Content Creation and Storage</li><li>User Access Control</li><li>Workflow Automation</li><li>Multi-Platform Publishing</li><li>Content Analysis</li><li>Content Migration Services</li></ul>',
          url: '/content-strategy',
          tools: ['Content Audits', 'Content Calendar and Editing', 'Content Distribution and Promotion', 'Conversion website and landing pages', 'Email & social media copy', 'Optimized blog posts and articles'],
        },
        {
          title: 'Mern Stack',
          icon: process.env.PUBLIC_URL + '/images/service/graphic.png',
          description: 'Content Management Solutions using technologies like WordPress, Shopify, Magento 2.',
          additionalInfo: '<ul><li>Content Creation and Storage</li><li>User Access Control</li><li>Workflow Automation</li><li>Multi-Platform Publishing</li><li>Content Analysis</li><li>Content Migration Services</li></ul>',
          url: '/mern-stack',
          tools: ['Shopify Store Development', 'Wordpress Site Development', 'Landing Page Website', 'Backend Development', 'Frontend Development'],
        },
        {
          title: 'Software Testing',
          icon: process.env.PUBLIC_URL + '/images/service/graphic.png',
          description: 'Content Management Solutions using technologies like WordPress, Shopify, Magento 2.',
          additionalInfo: '<ul><li>Content Creation and Storage</li><li>User Access Control</li><li>Workflow Automation</li><li>Multi-Platform Publishing</li><li>Content Analysis</li><li>Content Migration Services</li></ul>',
          url: '/software-testing',
          tools: ['Email Templates', 'Landing Pages', 'UI Designs', 'Creative Web Layouts', 'Mobile Responsive Websites'],
        },
        {
          title: 'Framework',
          icon: process.env.PUBLIC_URL + '/images/service/graphic.png',
          description: 'Content Management Solutions using technologies like WordPress, Shopify, Magento 2.',
          additionalInfo: '<ul><li>Content Creation and Storage</li><li>User Access Control</li><li>Workflow Automation</li><li>Multi-Platform Publishing</li><li>Content Analysis</li><li>Content Migration Services</li></ul>',
          url: '/framework',
          tools: ['PHP - CMS Development', 'Custom PHP Framework Development', 'PHP Framework API Integration', 'PHP Framework Plugin Development', 'Performance optimization', 'PHP Framework Migration'],

        },
      ],
    };
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
                this.state.services.slice(0, 3).map((service, key) => {
                  return (
                    <Col md={4}>
                      <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                          <div class="front">
                            <div className='logo_img'>
                              <img className='srv_bg_img' src={`/images/service/bg_srv.png`} />
                              <img className='srv_bg_web' src={`/images/service/web-dvl.svg`} />
                              <h3>{service.title}</h3>
                              <p>At Brandclever, Our professionals will Utilise modern programming languages and frameworks to build secure, scalable, and high-performing web solutions. We prioritize functionality, efficiency, and user-friendliness, guaranteeing the best experience for your audience. Our Web Development Platforms PHP frameworks        WordPress Shopify...</p>
                            </div>
                          </div>
                          <div class="back">
                            <div className='back_logo_img'>
                              <img className='srv_bg_img' src={`/images/service/bg_srv.png`} />
                              <img className='srv_bg_web' src={`/images/service/web-dvl.svg`} />
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
              {/* <Col md={4}>
                <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                  <div class="flipper">
                    <div class="front">
                      <div className='logo_img'>
                        <img className='srv_bg_img' src={`/images/service/bg_srv.png`} />
                        <img className='srv_bg_web' src={`/images/service/web-dvl.svg`} />
                        <h3>Web Development</h3>
                        <p>At Brandclever, Our professionals will Utilise modern programming languages and frameworks to build secure, scalable, and high-performing web solutions. We prioritize functionality, efficiency, and user-friendliness, guaranteeing the best experience for your audience. Our Web Development Platforms PHP frameworks        WordPress Shopify...</p>
                      </div>
                    </div>
                    <div class="back">
                      <div className='back_logo_img'>
                        <img className='srv_bg_img' src={`/images/service/bg_srv.png`} />
                        <img className='srv_bg_web' src={`/images/service/web-dvl.svg`} />
                        <h3>Web Development</h3>
                      </div>
                      <div class="oposite" bis_skin_checked="1">
                        <ul>
                          <li><span><DoneAllIcon /></span> Shopify Store Development</li>
                          <li><span><DoneAllIcon /></span> Wordpress Site Development</li>
                          <li><span><DoneAllIcon /></span> Landing Page Website</li>
                          <li><span><DoneAllIcon /></span> Backend Development</li>
                          <li><span><DoneAllIcon /></span> Frontend Development</li>
                        </ul>
                      </div>
                      <div className='read_more'>
                        <a href='#'>Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                  <div class="flipper">
                    <div class="front">
                      <div className='logo_img'>
                        <img className='srv_bg_img' src={`/images/service/bg_srv.png`} />
                        <img className='srv_bg_web' src={`/images/service/web-dvl.svg`} />
                        <h3>Digital Marketing</h3>
                        <p>Be the first one to be seen on search engines. We have immense expertise in SEO and
                          marketing to draw new traffic. We're adaptive, serving various industries with different and effective strategies for businesses of any scale or sector. Our Digital Marketing Tools Google Analytics Semrush Google Ads Active Campaign Ahrefs...</p>
                      </div>
                    </div>
                    <div class="back">
                      <div className='back_logo_img'>
                        <img className='srv_bg_img' src={`/images/service/bg_srv.png`} />
                        <img className='srv_bg_web' src={`/images/service/web-dvl.svg`} />
                        <h3>Digital Marketing</h3>
                      </div>
                      <div class="oposite" bis_skin_checked="1">
                        <ul>
                          <li><span><DoneAllIcon /></span> Search Engine Optimization(SEO)</li>
                          <li><span><DoneAllIcon /></span> Social Media Marketing</li>
                          <li><span><DoneAllIcon /></span> Search Engine Marketing(SEM)</li>
                          <li><span><DoneAllIcon /></span> Analytics Consultation</li>
                          <li><span><DoneAllIcon /></span> Inbound Marketing</li>
                        </ul>
                      </div>
                      <div className='read_more'>
                        <a href='#'>Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                  <div class="flipper">
                    <div class="front">
                      <div className='logo_img'>
                        <img className='srv_bg_img' src={`/images/service/bg_srv.png`} />
                        <img className='srv_bg_web' src={`/images/service/web-dvl.svg`} />
                        <h3>Graphic Design</h3>
                        <p>We transform ideas into creative designs, leaving a professional mark on your brand.
                          Our creative team provides quality and attention-grabbing pixels and stop-scrolling graphics. Let's create graphics that speak and connect your brand with your audience. Our Graphic design Tools Adobe Photoshop Coreldraw Figma Illustrator Ado...</p>
                      </div>
                    </div>
                    <div class="back">
                      <div className='back_logo_img'>
                        <img className='srv_bg_img' src={`/images/service/bg_srv.png`} />
                        <img className='srv_bg_web' src={`/images/service/web-dvl.svg`} />
                        <h3>Graphic Design</h3>
                      </div>
                      <div class="oposite" bis_skin_checked="1">
                        <ul>
                          <li><span><DoneAllIcon /></span> Logo Designst</li>
                          <li><span><DoneAllIcon /></span> Banner Designs</li>
                          <li><span><DoneAllIcon /></span> Mobile Application Designs</li>
                          <li><span><DoneAllIcon /></span> Brochures</li>
                          <li><span><DoneAllIcon /></span> Icon Designs</li>
                        </ul>
                      </div>
                      <div className='read_more'>
                        <a href='#'>Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col> */}
            </Row>
          </div>

          {/* <div className="service-row">
              {this.state.services.map((service, index) => (
                <div className='col serviceCount'>
                <div key={index} className="frontCont">
                  <img src={service.icon} alt={service.title} />
                  <h3>{service.title}</h3>                 

                </div>
                </div>
              ))} 
            </div> */}
          <div className="read-btnn">
            <Link to="/service" className='button_slide slide_down'>Read More</Link>
          </div>
        </div>
      </div>
    );
  }
}
