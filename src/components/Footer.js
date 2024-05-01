// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
//import logo from './Images/logoWhite.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Container } from 'react-bootstrap';

const Footer = () => {


    const certificates = [
        process.env.PUBLIC_URL + '/images/certificate/goodfirms.png',
        process.env.PUBLIC_URL + '/images/certificate/clutch.png',
        process.env.PUBLIC_URL + '/images/certificate/top-developer.png',
        // Add more image URLs as needed
    ];
    return (
        <>
            <Container>

                <footer className="footer_Sec">
                    <div className='footer-inner'>
                        <div className='column'>
                            <div className='footer-logo'>
                                <Link to="/"><img src='brandclever_logo.png' className="logo" alt="logo" /></Link>

                                {/* {certificates.map((image, index) => (
                            <div key={index} className="certificate-item">
                                <img src={image} alt={`Photos ${index + 1}`} className={`grid-item grid-item-${index + 1}`} />
                            </div>
                        ))} */}

                            </div>
                            <p className='footer_description'>Brandclever emerges as a top-tier IT force, delivering smart and proven solutions across the tech spectrum.</p>
                            <ul className='social_media-icon'>
                                <li>
                                    <Link to="https://www.facebook.com/brandclever.in/" target="_blank"><FacebookIcon className='footer_icon' /></Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/brandclever.in/" target="_blank"><InstagramIcon className='footer_icon' /> </Link>
                                </li>
                                <li>
                                    <Link to="https://www.youtube.com/@Brandclever" target="_blank"><YouTubeIcon className='footer_icon' /></Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/company/brandclever/" target="_blank"><LinkedInIcon /></Link>
                                </li>
                            </ul>

                        </div>
                        <div className='column'>
                            <h3>Useful Links</h3>
                            <ul className='quick-links'>
                                <li>
                                    <Link to="/home"><ArrowRightIcon />Home</Link>
                                </li>
                                <li>
                                    <Link to="/about"><ArrowRightIcon />About Us</Link>
                                </li>
                                <li>
                                    <Link to="/service"><ArrowRightIcon />Services</Link>
                                </li>
                                <li>
                                    <Link to="/traning-and-placement"><ArrowRightIcon />Training & Placement</Link>
                                </li>
                                <li>
                                    <Link to="/contact"><ArrowRightIcon />Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='column'>
                            <h3>Services</h3>
                            <ul className='quick-links'>
                                <li>
                                    <Link to="/"><ArrowRightIcon />Web Development</Link>
                                </li>
                                <li>
                                    <Link to="/"><ArrowRightIcon />CMS Solution</Link>
                                </li>
                                <li>
                                    <Link to="/"><ArrowRightIcon />Digital Marketing</Link>
                                </li>
                                <li>
                                    <Link to="/"><ArrowRightIcon />Graphic Designing</Link>
                                </li>
                                <li>
                                    <Link to="/"><ArrowRightIcon />Mern Stack</Link>
                                </li>
                                <li>
                                    <Link to="/"><ArrowRightIcon />Frameworks</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='column footer-address-main'>
                            <h3>Address</h3>
                            <div className='footer-address'><span><LocationOnIcon className='footer_icon' /></span><span>4th Floor, F-301, Bansal Tower, Phase 8B, Industrial Area, Sector 74, Brandclever, Sahibzada Ajit Singh Nagar, Punjab 160055</span> </div>
                            <div className='footer-phone'><Link to='tel:+919872711866'><span><PhoneIcon className='footer_icon' /></span>+91-9872711866</Link></div>
                            <div className='footer-email'><Link to='mailto:career@brandclever.in'><span><EmailIcon className='footer_icon' /></span>career@brandclever.in</Link></div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='footer-copy-text'>
                        <p>Copyright &copy; 2024 <Link to="/" className='home-link'>Brandclever </Link> |<Link to="/term-conditions" style={{ color: "white" }}> <span className='term'> Terms & Conditions </span></Link>
                            | <Link to="/privacy-policy" style={{ color: "white" }}> <span className='privacy'> Privacy Policy </span></Link>
                        </p>
                    </div>
                </footer>
            </Container>
        </>
    );
};


export default Footer;
