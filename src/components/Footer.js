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

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem',
    };

    const certificates = [
        process.env.PUBLIC_URL + '/images/certificate/goodfirms.png',
        process.env.PUBLIC_URL + '/images/certificate/clutch.png',
        process.env.PUBLIC_URL + '/images/certificate/top-developer.png',
        // Add more image URLs as needed
    ];
    return (
        <footer style={footerStyle} >
            <div className='footer-inner'>
                <div className='column'>
                    <div className='footer-logo'>
                        {/* <Link to="/"><img src={logo} className="logo" alt="logo" /></Link> */}

                        {certificates.map((image, index) => (
                            <div key={index} className="certificate-item">
                                <img src={image} alt={`Photos ${index + 1}`} className={`grid-item grid-item-${index + 1}`} />
                            </div>
                        ))}

                    </div>
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
                    <h3>QUICK LINKS</h3>
                    <ul className='quick-links'>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/service">Services</Link>
                        </li>
                        <li>
                            <Link to="/traning-and-placement">Training & Placement</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className='column'>
                    <h3>SERVICES</h3>
                    <ul className='quick-links'>
                        <li>
                            <Link to="/">Web Development</Link>
                        </li>
                        <li>
                            <Link to="/">CMS Solution</Link>
                        </li>
                        <li>
                            <Link to="/">Digital Marketing</Link>
                        </li>
                        <li>
                            <Link to="/">Graphic Designing</Link>
                        </li>
                        <li>
                            <Link to="/">Mern Stack</Link>
                        </li>
                        <li>
                            <Link to="/">Frameworks</Link>
                        </li>
                    </ul>
                </div>
                <div className='column footer-address-main'>
                    <h3>CONTACT US</h3>
                    <div className='footer-address'><span><LocationOnIcon className='footer_icon' /></span><span>4th Floor, F-301, Bansal Tower, Phase 8B, Industrial Area, Sector 74, Brandclever, Sahibzada Ajit Singh Nagar, Punjab 160055</span> </div>
                    <div className='footer-phone'><Link to='tel:+919872711866'><span><PhoneIcon className='footer_icon' /></span>9872711866</Link></div>
                    <div className='footer-email'><Link to='mailto:career@brandclever.in'><span><EmailIcon className='footer_icon' /></span>career@brandclever.in</Link></div>
                </div>
            </div>
            <hr></hr>
            <div className='footer-copy-text'><p>Copyright &copy; 2024 <Link to="/" className='home-link'>Brandclever</Link></p></div>
        </footer>
    );
};


export default Footer;
