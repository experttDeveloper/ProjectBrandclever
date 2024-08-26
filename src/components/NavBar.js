import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './Images/logoWhite.png';
import { Col, Row } from 'react-bootstrap';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const serviceMenus = [
  {
    id: 1,
    icon: '/images/service/website_develop.png',
    title: "Web Development",
    url: "/web-development"
  },
  {
    id: 2,
    icon: '/images/service/website_design.png',
    title: "Website Designing",
    url: "/website-design"
  },
  {
    id: 3,
    icon: '/images/service/graphic_design.png',
    title: "Graphic Design",
    url: "/graphic-design"
  },
  {
    id: 4,
    icon: '/images/service/mern_stack.png',
    title: "Mern Stack",
    url: "/mern-stack"
  },
  {
    id: 5,
    icon: '/images/service/content_strategy.png',
    title: "Content Strategy",
    url: "/content-strategy"
  },
  {
    id: 6,
    icon: '/images/service/framework.png',
    title: "Framework",
    url: "/framework"
  },
  {
    id: 7,
    icon: '/images/service/cms_solution.png',
    title: "CMS Solutions",
    url: "/cms-solution"
  },
  {
    id: 8,
    icon: '/images/service/landing_page.png',
    title: "Landing Page",
    url: "/landing"
  },
  {
    id: 9,
    icon: '/images/service/ecommerce.png',
    title: "E-Commerce",
    url: "/ecommerce"
  },
  {
    id: 10,
    icon: '/images/service/digital_marketing.png',
    title: "Digital Marketing",
    url: "/digital-marketing"
  },
  {
    id: 11,
    icon: '/images/service/web_application.png',
    title: "Web Application Development",
    url: "/web-application-development"
  },
  {
    id: 12,
    icon: '/images/service/software_testing.png',
    title: "Software Testing",
    url: "/software-testing"
  }

]

const hireMenus = [
  {
    id: 1,
    icon: '/images/hire/shopify.png',
    title: "Hire Shopify Expert",
    url: "/hire-shopify-expert"
  },
  {
    id: 2,
    icon: '/images/hire/magento.png',
    title: "Hire Magento Expert",
    url: "/hire-magento-expert"
  },
  {
    id: 3,
    icon: '/images/hire/webflow.png',
    title: "Hire Webflow Expert",
    url: "/hire-webflow-expert"
  },
  {
    id: 4,
    icon: '/images/hire/wix.png',
    title: "Hire Wix Expert",
    url: "/hire-wix-expert"
  },
  {
    id: 5,
    icon: '/images/hire/woo.png',
    title: "Hire Woo Expert",
    url: "/hire-woo-commerce-expert"
  },
  {
    id: 6,
    icon: '/images/hire/wordpress.png',
    title: "Hire Wordpress Expert",
    url: "/hire-wordpress-expert"
  },
  {
    id: 7,
    icon: '/images/hire/bigcommerce.png',
    title: "Hire BigCommerce Expert",
    url: "/hire-bigcommerce-expert"
  },
  {
    id: 8,
    icon: '/images/hire/spaceaquare.png',
    title: "Hire Squarespace Expert",
    url: "/hire-squarespace-expert",
    className:"space_sqaure"
  },
  {
    id: 9,
    icon: '/images/hire/laravel.png',
    title: "Hire Laravel Developer",
    url: "/hire-laravel-developer"
  },
  {
    id: 10,
    icon: '/images/hire/reactjs.png',
    title: "Hire ReactJS Developer",
    url: "/hire-reactjs-developer"
  },
  {
    id: 11,
    icon: '/images/hire/talwind.png',
    title: "Hire Tailwind CSS Developer",
    url: "/hire-tailwind-css-developer"
  },
  {
    id: 12,
    icon: '/images/hire/digital_marketing_nav.png',
    title: "Hire Digital Marketing expert",
    url: "/hire-digital-marekting-expert"
  },

]

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const [hideDropDown, setHideDropdown] = useState(false);
  const navigate = useNavigate()

  const handleClickContact = ()=>{
    navigate("/contact")
  }


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const hideHandleDropDown = () => {
    setHideDropdown(!hideDropDown);
    closeMenu()
  }



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
                  <li onMouseEnter={() => setHideDropdown(false)}>
                    <div className="dropdownMenu">
                      <Link to="/service" onClick={closeMenu} className="dropbtn">Services
                        <span class="arrow-right">
                          <span class="ar_line">
                          </span><span class="ar_left">
                          </span>
                        </span>
                      </Link>

                      <div className={`dropdown-content ${hideDropDown ? "hidedropdown" : ""}`}>
                        <div className="row">
                          <div className="col-md-3 serv_cns">
                            {serviceMenus.slice(0, 6).map((ele, key) => {
                              return (
                                <div className='service_img' >
                                  <img src={ele.icon} height="32px" width="32px" alt='logo_img' />
                                  <Link to={ele.url} onClick={hideHandleDropDown}>{ele.title}</Link>
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
                                    <Link to={ele.url} onClick={hideHandleDropDown}>{ele.title}</Link>
                                  </div>
                                )
                              })
                            }
                          </div>
                          <div className="col-md-6 serv_img">
                            <img src={'/images/nav/service_nav.png'} alt='logo_img' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li onMouseEnter={() => setHideDropdown(false)}>
                    <div className="dropdownMenu">
                      <Link to="#" onClick={closeMenu} className="dropbtn">Hire a Developer
                        <span class="arrow-right">
                          <span class="ar_line">
                          </span><span class="ar_left">
                          </span>
                        </span>
                      </Link>

                      <div className={`dropdown-content ${hideDropDown ? "hidedropdown" : ""}`}>

                        <div className="row">
                          <div className="col-md-3 serv_cns">
                            {hireMenus.slice(0, 6).map((ele, key) => {
                              return (
                                <div className='service_img'>
                                  <img src={ele.icon} height="32px" width="32px" alt='logo_img'  />
                                  <Link to={ele.url} onClick={hideHandleDropDown}>{ele.title}</Link>
                                </div>
                              )
                            })}
                          </div>
                          <div className="col-md-3 serv_cns">
                            {
                              hireMenus.slice(6, 12).map((ele, key) => {
                                return (
                                  <div className='service_img'>
                                    <img src={ele.icon} height="32px" width="32px" alt='logo_img' className={ele.className}/>
                                    <Link to={ele.url} onClick={hideHandleDropDown}>{ele.title}</Link>
                                  </div>
                                )
                              })
                            }
                          </div>
                          <div className="col-md-6 serv_img">
                            <img src={'/images/nav/hiring_nav.png'} alt='logo_img' />
                          </div>
                        </div>
                      </div>

                    </div>
                  </li>
                  <li className='pages_navbar' onMouseEnter={() => setHideDropdown(false)}>
                    <div className="dropdownMenu">
                      <Link to="/about" onClick={closeMenu} className='dropbtn'>Pages
                        <span class="arrow-right">
                          <span class="ar_line">
                          </span><span class="ar_left">
                          </span>
                        </span>
                      </Link>

                      <div className={`dropdown-content ${hideDropDown ? "hidedropdown" : ""}`}>
                        <Row>
                          <Col md={4}>
                            <div className='service_img'>
                              <img src='/images/menus/about.png' alt='about page' height="32px" width="32px" />
                              <Link to="/about" onClick={hideHandleDropDown}>About</Link>
                            </div>
                            <div className='service_img'>
                              <img src='/images/menus/career.png' alt='about page' height="32px" width="32px" />
                              <Link to="/career" onClick={hideHandleDropDown}>Career</Link>
                            </div>
                            <div className='service_img'>
                              <img src='/images/menus/portfolio.png' alt='about page' height="32px" width="32px" />
                              <Link to="/portfolio" onClick={hideHandleDropDown}>Portfolio</Link>
                            </div>
                            <div className='service_img'>
                              <img src='/images/menus/blog.png' alt='about page' height="32px" width="32px" />
                              <Link to="/blog" onClick={hideHandleDropDown}>blog</Link>
                            </div>
                            <div className='service_img'>
                              <img src='/images/menus/privacy.png' alt='about page' height="32px" width="32px" />
                              <Link to="/training-and-placement" onClick={hideHandleDropDown}>Traning & Placement</Link>
                            </div>
                            <div className='service_img'>
                              <img src='/images/menus/fraud.png' alt='about page' height="32px" width="32px" />
                              <Link to="/fraud" onClick={hideHandleDropDown}>Fraud Disclaimer</Link>
                            </div>

                            {/* <div className='service_img'>
                              <img src='images/menus/term.png' alt='about page' height="32px" width="32px" />
                              <Link to="/term-conditions">Terms Conditions</Link>
                            </div> */}
                          </Col>
                          <Col md={8}>

                            <div className=" serv_img_new">
                              <img src={'/images/nav/about_nav.png'} alt='logo_img' />
                            </div>
                          </Col>
                        </Row>
                      </div>

                    </div>
                  </li>

                  <li className='review_nav' onMouseEnter={() => setHideDropdown(false)}>
                    <div className="dropdownMenu">
                      <Link to="/review" onClick={closeMenu} className="dropbtn">Reviews
                        <span class="arrow-right">
                          <span class="ar_line">
                          </span><span class="ar_left">
                          </span>
                        </span>
                      </Link>
                      <div className={`dropdown-content ${hideDropDown ? "hidedropdown" : ""}`}>
                        <Row>
                          <Col md={4}>
                            <div className='service_img'>
                              <img src='/images/menus/google.png' alt='about page' height="26px" width="26px" />
                              <Link to="https://www.google.com/search?q=brandclever+google+reviews&sca_esv=8f14c8c94b33adc6&sxsrf=ACQVn0-YomRngzIUeWaPpQkocnbm6xeIvA%3A1714648454031&ei=hnUzZrmwAZKM4-EPrtK00AU&oq=brandclever+googl&gs_lp=Egxnd3Mtd2l6LXNlcnAiEWJyYW5kY2xldmVyIGdvb2dsKgIIATIHECEYoAEYCjIHECEYoAEYCjIHECEYoAEYCkiVFVCjAVjVCnABeAGQAQCYAb4BoAHgB6oBAzAuNrgBAcgBAPgBAZgCB6ACnAjCAgcQIxiwAxgnwgIKEAAYsAMY1gQYR8ICEBAAGIAEGLADGEMYyQMYigXCAg4QABiABBiwAxiSAxiKBcICDRAAGIAEGLADGEMYigXCAgQQIxgnwgIKECMYgAQYJxiKBcICCxAuGIAEGMcBGK8BwgIFEAAYgATCAgIQJsICCBAAGIAEGKIEwgIFECEYoAGYAwCIBgGQBgmSBwMxLjagB6Ed&sclient=gws-wiz-serp#lrd=0x390fef8cd36051e7:0xdfdada19c12e600f,1,,,," target="_blank" onClick={hideHandleDropDown}>Google</Link>
                            </div>
                            <div className='service_img'>
                              <img src='/images/menus/upwork.png' alt='about page' height="26px" width="26px" />
                              <Link to="https://www.upwork.com/agencies/brandclever/" target="_blank" onClick={hideHandleDropDown}>Upwork</Link>
                            </div>
                            {/* <div className='service_img'>
                              <img src='images/menus/linkedin.png' alt='about page' height="26px" width="26px" />
                              <Link to="#">LinkdIn</Link>
                            </div> */}
                            <div className='service_img'>
                              <img src='/images/menus/indeed.png' alt='about page' height="26px" width="26px" />
                              <Link to="https://in.indeed.com/cmp/Brandclever/reviews" target="_blank" onClick={hideHandleDropDown}>Indeed</Link>
                            </div>
                            <div className='service_img'>
                              <img src='/images/menus/glassdor.png' alt='about page' height="26px" width="26px" />
                              <Link to="https://www.glassdoor.co.in/Overview/Working-at-Brandclever-in-EI_IE7371543.11,25.htm" target="_blank" onClick={hideHandleDropDown}>Glassdoor</Link>
                            </div>
                          </Col>
                          <Col md={8}>

                            <div className=" serv_img">
                              <img src={'/images/nav/review_nav.png'} alt='logo_img' />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </li>
                  <li className='hire_us' onMouseEnter={() => setHideDropdown(false)}>
                    <div className="dropdownMenu">
                      <Link to="#" onClick={closeMenu} className='dropbtn'>Hire Us
                        <span class="arrow-right">
                          <span class="ar_line">
                          </span><span class="ar_left">
                          </span>
                        </span>
                      </Link>
                      <div className={`dropdown-content ${hideDropDown ? "hidedropdown" : ""}`}>
                        <Row>
                          <Col med={4}>
                            <div className='service_img pph_icon'>
                              <img src='/images/menus/upwork.png' alt='about page' height="26px" width="26px" />
                              <div className='pph_nav'>
                                <div className='dropdownMenu'>
                                  <Link to="#">Upwork</Link>
                                  <div className={`dropdown-content ${hideDropDown ? "hidedropdown" : ""}`}>
                                    <Row>
                                      <Col md={6}>

                                        <Link to="https://www.upwork.com/agencies/brandcleveragency/" target="_blank" onClick={hideHandleDropDown}><DoneAllIcon /> Brandclever Agency</Link>
                                        <Link to="https://www.upwork.com/freelancers/~01d58975667dec8fe1" target="_blank" onClick={hideHandleDropDown}><DoneAllIcon /> Manish Kumar</Link>
                                        <Link to="https://www.upwork.com/freelancers/shobhan3" target="_blank" onClick={hideHandleDropDown}><DoneAllIcon /> Shobha Negi</Link>
                                        <Link to="https://www.upwork.com/freelancers/shalus3" target="_blank" onClick={hideHandleDropDown}><DoneAllIcon /> Shalu sharma</Link>


                                      </Col>
                                      <Col md={6}>
                                        <Link to="https://www.upwork.com/freelancers/~013b4df1df24fb5df6" target="_blank" onClick={hideHandleDropDown}><DoneAllIcon /> Indu Thakur</Link>
                                        <Link to="https://www.upwork.com/freelancers/~017f90265127deec6e" target="_blank" onClick={hideHandleDropDown}><DoneAllIcon /> Shivani Devi</Link>
                                        <Link to="https://www.upwork.com/freelancers/~01ad788d5e5e96a870" target="_blank" onClick={hideHandleDropDown}><DoneAllIcon /> Mansi Verma</Link>
                                        <Link to="https://www.upwork.com/freelancers/gurjeets6" target="_blank" onClick={hideHandleDropDown}><DoneAllIcon /> Gurjeet Singh</Link>
                                        {/* <Link to="https://www.upwork.com/freelancers/~01d54de3c49d7edb8b" target="_blank"><DoneAllIcon /> Ashandeep Singh</Link> */}
                                      </Col>

                                    </Row>

                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='service_img pph_icon'>
                              <img src='/images/menus/pph.png' alt='about page' height="26px" width="26px" />
                              <div className='pph_nav'>
                                <div className='dropdownMenu'>
                                  <Link to="#">PPH</Link>
                                  <div className={`dropdown-content ${hideDropDown ? "hidedropdown" : ""}`}>
                                    <Link to="https://www.peopleperhour.com/freelancer/technology-programming/indu-thakur-1-wordpress-seo-expert-top-rated-mwyanvv" target="_blank" onClick={hideHandleDropDown}><DoneAllIcon /> Indu Thakur</Link>
                                    <Link to="https://www.peopleperhour.com/freelancer/technology-programming/shobha-negi-award-winning-web-developer-zzzjjqqj" target="_blank" onClick={hideHandleDropDown}><DoneAllIcon /> Shobha Negi</Link>

                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='service_img pph_icon'>
                              <img src='/images/menus/fiver.png' alt='about page' height="26px" width="26px" />
                              <div className='pph_nav'>
                                <div className='dropdownMenu'>
                                  <Link to="#">Fiverr</Link>
                                  <div className="dropdown-content fiverr_navbar">
                                    <Link to="https://www.fiverr.com/shobha_negii" target="_blank" onClick={hideHandleDropDown}><DoneAllIcon /> Shobha Negi</Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='service_img pph_icon'>
                              <img src='/images/menus/guru.png' alt='about page' height="26px" width="26px" />
                              <div className='pph_nav'>
                                <div className='dropdownMenu'>
                                  <Link to="#">Guru</Link>
                                  <div className="dropdown-content guru_navbar">
                                    <Link to="https://www.guru.com/freelancers/manish-kumar-221" target="_blank" onClick={hideHandleDropDown}><DoneAllIcon /> Manish Kumar</Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col md={8}>

                            <div className=" serv_img">
                              <img src={'/images/nav/hireus_nav.png'} alt='logo_img' />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </li>
                </ul>
                
                <div className='header_btn' onClick={handleClickContact}>
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
