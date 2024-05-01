import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/logoWhite.png';
import { Col, Row } from 'react-bootstrap';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const serviceMenus = [
  {
    id: 1,
    icon: 'images/service/website_design.png',
    title: "Website Designing",
    url: "/website-design"
  },
  {
    id: 2,
    icon: 'images/service/website_develop.png',
    title: "Web Development",
    url: "/web-development"
  },
  {
    id: 3,
    icon: 'images/service/graphic_design.png',
    title: "Graphic Design",
    url: "/graphic-degin"
  },
  {
    id: 4,
    icon: 'images/service/mern_stack.png',
    title: "Mern Stack",
    url: "/mern-stack"
  },
  {
    id: 5,
    icon: 'images/service/content_strategy.png',
    title: "Content Strategy",
    url: "/content-strategy"
  },
  {
    id: 6,
    icon: 'images/service/framework.png',
    title: "Framework",
    url: "/framework"
  },
  {
    id: 7,
    icon: 'images/service/cms_solution.png',
    title: "CMS Solutions",
    url: "/cms-solution"
  },
  {
    id: 8,
    icon: 'images/service/landing_page.png',
    title: "Landing Page",
    url: "/landing-page"
  },
  {
    id: 9,
    icon: 'images/service/ecommerce.png',
    title: "E-Commerce",
    url: "/ecommerce"
  },
  {
    id: 10,
    icon: 'images/service/digital_marketing.png',
    title: "Digital Marketing",
    url: "/digital-marketing"
  },
  {
    id: 11,
    icon: 'images/service/web_application.png',
    title: "Web Application Development",
    url: "/web-application"
  },
  {
    id: 12,
    icon: 'images/service/software_testing.png',
    title: "Software Testing",
    url: "/software-testing"
  }

]

const hireMenus = [
  {
    id: 1,
    icon: 'images/hire/shopify.png',
    title: "Hire Shopify Expert",
    url: "/hire-shopify-expert"
  },
  {
    id: 2,
    icon: 'images/hire/magento.png',
    title: "Hire Magento Expert",
    url: "/hire-magento-expert"
  },
  {
    id: 3,
    icon: 'images/hire/webflow.png',
    title: "Hire Webflow Expert",
    url: "/hire-webflow-expert"
  },
  {
    id: 4,
    icon: 'images/hire/wix.png',
    title: "Hire Wix Expert",
    url: "/hire-wix-expert"
  },
  {
    id: 5,
    icon: 'images/hire/woo.png',
    title: "Hire Woo Expert",
    url: "/hire-woo-commerce-expert"
  },
  {
    id: 6,
    icon: 'images/hire/wordpress.png',
    title: "Hire Wordpress Expert",
    url: "/hire-wordpress-expert"
  },
  {
    id: 7,
    icon: 'images/hire/bigcommerce.png',
    title: "Hire BigCommerce Expert",
    url: "/hire-bigcommerce-expert"
  },
  {
    id: 8,
    icon: 'images/hire/spaceaquare.png',
    title: "Hire Squarespace Expert",
    url: "/hire-squarespace-expert"
  },
  {
    id: 9,
    icon: 'images/hire/laravel.png',
    title: "Hire Laravel Developer",
    url: "/hire-laravel-developer"
  },
  {
    id: 10,
    icon: 'images/hire/reactjs.png',
    title: "Hire ReactJS Developer",
    url: "/hire-reactjs-developer"
  },
  {
    id: 11,
    icon: 'images/hire/talwind.png',
    title: "Hire Tailwind CSS Developer",
    url: "/hire-tailwind-css-developer"
  },
  {
    id: 12,
    icon: 'images/hire/digital_marketing_nav.png',
    title: "Hire Digital Marketing expert",
    url: "/hire-digital-marekting-expert"
  },

]

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isSticky ? 'sticky' : ''}>
        <div className='inner-header'>
          <div className='container'>
            <div className='inner_header_nav'>
              <div className="logo">
                <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
              </div>
              <div className={`menu-toggle ${isMenuOpen ? 'openMenus' : 'closeMenus'}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
                <div className='closeIcon'><i className="fa fa-close"></i></div>
              </div>
              <nav className={isMenuOpen ? 'open' : 'closeToggal'}>
                <ul>

                  <li>
                    <div className="dropdownMenu">
                      <Link to="/service" onClick={closeMenu} className="dropbtn">Services
                        <span class="arrow-right">
                          <span class="ar_line">
                          </span><span class="ar_left">
                          </span>
                        </span>
                      </Link>
                      <div className="dropdown-content">

                        <div className="row">
                          <div className="col-md-3 serv_cns">
                            {serviceMenus.slice(0, 6).map((ele, key) => {
                              return (
                                <div className='service_img'>
                                  <img src={ele.icon} height="32px" width="32px" alt='logo_img' />
                                  <Link to={ele.url}>{ele.title}</Link>
                                </div>
                              )
                            })}
                          </div>
                          <div className="col-md-3 serv_cns">
                            {
                              serviceMenus.slice(6, 12).map((ele, key) => {
                                return (
                                  <div className='service_img'>
                                    <img src={ele.icon} height="32px" width="32px" alt='logo_img' />
                                    <Link to={ele.url}>{ele.title}</Link>
                                  </div>
                                )
                              })
                            }
                          </div>
                          <div className="col-md-6 serv_img">
                            <img src={process.env.PUBLIC_URL + '/images/nav/service_nav.png'} alt='logo_img' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdownMenu">
                      <Link to="#" onClick={closeMenu} className="dropbtn">Hire a Developer
                        <span class="arrow-right">
                          <span class="ar_line">
                          </span><span class="ar_left">
                          </span>
                        </span>
                      </Link>
                      <div className="dropdown-content">

                        <div className="row">
                          <div className="col-md-3 serv_cns">
                            {hireMenus.slice(0, 6).map((ele, key) => {
                              return (
                                <div className='service_img'>
                                  <img src={ele.icon} height="32px" width="32px" alt='logo_img' />
                                  <Link to={ele.url}>{ele.title}</Link>
                                </div>
                              )
                            })}
                          </div>
                          <div className="col-md-3 serv_cns">
                            {
                              hireMenus.slice(6, 12).map((ele, key) => {
                                return (
                                  <div className='service_img'>
                                    <img src={ele.icon} height="32px" width="32px" alt='logo_img' />
                                    <Link to={ele.url}>{ele.title}</Link>
                                  </div>
                                )
                              })
                            }
                          </div>
                          <div className="col-md-6 serv_img">
                            <img src={process.env.PUBLIC_URL + '/images/nav/hiring_nav.png'} alt='logo_img' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='pages_navbar'>
                    <div className="dropdownMenu">
                      <Link to="/about" onClick={closeMenu} className='dropbtn'>Pages
                        <span class="arrow-right">
                          <span class="ar_line">
                          </span><span class="ar_left">
                          </span>
                        </span>
                      </Link>
                      <div className="dropdown-content">
                        <Row>
                          <Col md={4}>
                            <div className='service_img'>
                              <img src='images/menus/about.png' alt='about page' height="32px" width="32px" />
                              <Link to="/about">About</Link>
                            </div>
                            <div className='service_img'>
                              <img src='images/menus/career.png' alt='about page' height="32px" width="32px" />
                              <Link to="/career">Career</Link>
                            </div>
                            <div className='service_img'>
                              <img src='images/menus/portfolio.png' alt='about page' height="32px" width="32px" />
                              <Link to="/portfolio">Portfolio</Link>
                            </div>
                            <div className='service_img'>
                              <img src='images/menus/privacy.png' alt='about page' height="32px" width="32px" />
                              <Link to="/privacy-policy">Privacy Policy</Link>
                            </div>
                            <div className='service_img'>
                              <img src='images/menus/term.png' alt='about page' height="32px" width="32px" />
                              <Link to="/term-conditions">Terms Conditions</Link>
                            </div>
                          </Col>
                          <Col md={8}>

                            <div className=" serv_img">
                              <img src={process.env.PUBLIC_URL + '/images/nav/about_nav.png'} alt='logo_img' />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </li>

                  <li className='review_nav'>
                    <div className="dropdownMenu">
                      <Link to="/review" onClick={closeMenu} className="dropbtn">Reviews
                        <span class="arrow-right">
                          <span class="ar_line">
                          </span><span class="ar_left">
                          </span>
                        </span>
                      </Link>
                      <div className="dropdown-content">
                        <Row>
                          <Col md={4}>
                            <div className='service_img'>
                              <img src='images/menus/google.png' alt='about page' height="26px" width="26px" />
                              <Link to="#">Google</Link>
                            </div>
                            <div className='service_img'>
                              <img src='images/menus/upwork.png' alt='about page' height="26px" width="26px" />
                              <Link to="#">Upwork</Link>
                            </div>
                            <div className='service_img'>
                              <img src='images/menus/linkedin.png' alt='about page' height="26px" width="26px" />
                              <Link to="#">LinkdIn</Link>
                            </div>
                            <div className='service_img'>
                              <img src='images/menus/indeed.png' alt='about page' height="26px" width="26px" />
                              <Link to="#">Indeed</Link>
                            </div>
                          </Col>
                          <Col md={8}>

                            <div className=" serv_img">
                              <img src={process.env.PUBLIC_URL + '/images/nav/review_nav.png'} alt='logo_img' />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </li>
                  <li className='hire_us'>
                    <div className="dropdownMenu">
                      <Link to="/hire-us" onClick={closeMenu} className='dropbtn'>Hire Us
                        <span class="arrow-right">
                          <span class="ar_line">
                          </span><span class="ar_left">
                          </span>
                        </span>
                      </Link>
                      <div className="dropdown-content">
                        <Row>
                          <Col med={4}>
                            <div className='service_img pph_icon'>
                              <img src='images/menus/upwork.png' alt='about page' height="26px" width="26px" />
                              <div className='pph_nav'>
                                <div className='dropdownMenu'>
                                  <Link to="#">Upwork</Link>
                                  <div className="dropdown-content">
                                    <Row>
                                      <Col md={6}>

                                        <Link to="https://www.upwork.com/agencies/brandclever/" target="_blank"><DoneAllIcon /> Brandclever Agency</Link>
                                        <Link to="https://www.upwork.com/freelancers/~01d672b038a81f6f0f" target="_blank"><DoneAllIcon /> Manish Kumar</Link>
                                        <Link to="https://www.upwork.com/freelancers/shobhan3" target="_blank"><DoneAllIcon /> Shobha Negi</Link>
                                        <Link to="https://www.upwork.com/freelancers/shalus3" target="_blank"><DoneAllIcon /> Shalu sharma</Link>


                                      </Col>
                                      <Col md={6}>
                                        <Link to="https://www.upwork.com/freelancers/~013b4df1df24fb5df6" target="_blank"><DoneAllIcon /> Indu Thakur</Link>
                                        <Link to="https://www.upwork.com/freelancers/~017f90265127deec6e" target="_blank"><DoneAllIcon /> Shivani Devi</Link>
                                        <Link to="https://www.upwork.com/freelancers/~01ad788d5e5e96a870" target="_blank"><DoneAllIcon /> Mansi Verma</Link>
                                        <Link to="https://www.upwork.com/freelancers/gurjeets6" target="_blank"><DoneAllIcon /> Gurjeet Singh</Link>
                                        <Link to="https://www.upwork.com/freelancers/~01d54de3c49d7edb8b" target="_blank"><DoneAllIcon /> Ashandeep Singh</Link>
                                      </Col>

                                    </Row>

                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='service_img pph_icon'>
                              <img src='images/menus/pph.png' alt='about page' height="26px" width="26px" />
                              <div className='pph_nav'>
                                <div className='dropdownMenu'>
                                  <Link to="#">PPH</Link>
                                  <div className="dropdown-content">
                                    <Link to="https://www.peopleperhour.com/freelancer/technology-programming/indu-thakur-1-wordpress-seo-expert-top-rated-mwyanvv" target="_blank"><DoneAllIcon /> Indu Thakur</Link>
                                    <Link to="https://www.peopleperhour.com/freelancer/technology-programming/shobha-negi-award-winning-web-developer-zzzjjqqj" target="_blank"><DoneAllIcon /> Shobha Negi</Link>

                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='service_img pph_icon'>
                              <img src='images/menus/fiver.png' alt='about page' height="26px" width="26px" />
                              <div className='pph_nav'>
                                <div className='dropdownMenu'>
                                  <Link to="#">Fiverr</Link>
                                  <div className="dropdown-content fiverr_navbar">
                                    <Link to="https://www.fiverr.com/shobha_negii" target="_blank"><DoneAllIcon /> Shobha Negi</Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='service_img pph_icon'>
                              <img src='images/menus/guru.png' alt='about page' height="26px" width="26px" />
                              <div className='pph_nav'>
                                <div className='dropdownMenu'>
                                  <Link to="#">Guru</Link>
                                  <div className="dropdown-content guru_navbar">
                                    <Link to="https://www.guru.com/freelancers/manish-kumar-221" target="_blank"><DoneAllIcon /> Manish Kumar</Link>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col md={8}>

                            <div className=" serv_img">
                              <img src={process.env.PUBLIC_URL + '/images/nav/hireus_nav.png'} alt='logo_img' />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className='header_btn'>
                  <Link to="/contact" className='' onClick={closeMenu}>Contact Us</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
