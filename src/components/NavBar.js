import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/logoWhite.png';

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
    title: "GRAPHIC DESIGNS",
    url: "/graphic-degin"
  },
  {
    id: 4,
    icon: 'images/service/mern_stack.png',
    title: "MERN STACK",
    url: "/mern-stack"
  },
  {
    id: 5,
    icon: 'images/service/content_strategy.png',
    title: "CONTENT STRATEGY",
    url: "/content-strategy"
  },
  {
    id: 6,
    icon: 'images/service/framework.png',
    title: "FRAMEWORK",
    url: "/framework"
  },
  {
    id: 7,
    icon: 'images/service/cms_solution.png',
    title: "CMS SOLUTIONS",
    url: "/cms-solution"
  },
  {
    id: 8,
    icon: 'images/service/landing_page.png',
    title: "LANDING PAGE",
    url: "/landing-page"
  },
  {
    id: 9,
    icon: 'images/service/ecommerce.png',
    title: "ECOMMERCE",
    url: "/ecommerce"
  },
  {
    id: 10,
    icon: 'images/service/digital_marketing.png',
    title: "DIGITAL MARKETING",
    url: "/digital-marketing"
  },
  {
    id: 11,
    icon: 'images/service/web_application.png',
    title: "WEB APPLICATION DEVELOPMENT",
    url: "/web-application"
  },
  {
    id: 12,
    icon: 'images/service/software_testing.png',
    title: "SOFTWARE TESTING",
    url: "/software-testing"
  }

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
                    <Link to="/about" onClick={closeMenu}>About
                      <span class="arrow-right">
                        <span class="ar_line">
                        </span><span class="ar_left">
                        </span>
                      </span>
                    </Link>
                  </li>
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
                                  <img src={ele.icon} height="30px" width="30px" />
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
                                    <img src={ele.icon} height="30px" width="30px" />
                                    <Link to={ele.url}>{ele.title}</Link>
                                  </div>
                                )
                              })
                            }
                          </div>
                          <div className="col-md-6 serv_img">
                            <img src={process.env.PUBLIC_URL + '/images/menus/ser_new_img.png'} alt='' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdownMenu">
                      <Link to="/career" className="dropbtn">Career
                        <span class="arrow-right">
                          <span class="ar_line">
                          </span><span class="ar_left">
                          </span>
                        </span>
                      </Link>
                      {/* <div className="dropdown-content">
                        <div className="row">
                          <div className="columnMenu">
                            <Link to="/traning-and-placement">Training & Placement
                              <span class="arrow-right">
                                <span class="ar_line">
                                </span><span class="ar_left">
                                </span>
                              </span>

                            </Link>
                          </div>
                          <div className="columnMenu">
                            <img src={process.env.PUBLIC_URL + '/images/menus/ser_new_img.png'} alt='' />
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </li>
                  <li>
                    <Link to="/portfolio" onClick={closeMenu}>Portfolio
                      <span class="arrow-right">
                        <span class="ar_line">
                        </span><span class="ar_left">
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/review" onClick={closeMenu}>Client Review's
                      <span class="arrow-right">
                        <span class="ar_line">
                        </span><span class="ar_left">
                        </span>
                      </span>
                    </Link>
                  </li>
                </ul>
                <div className='get_hed_btnn'>
                  <Link to="/contact" className='button_slide slide_down' onClick={closeMenu}>Get In Touch</Link>
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
