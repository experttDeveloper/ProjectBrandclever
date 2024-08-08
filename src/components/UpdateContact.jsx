import React, { useRef, useState } from 'react';
import '../css/updatecontact.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Instagram, LinkedIn } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

export default function UpdateContact() {
    
    const [statusMsg, setStatusMsg] = useState('');
    const myFormRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        number: "",
        service: ""
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const validateForm = () => {
        const { name, email, subject, message } = formData;
        let errors = {
            name: '',
            email: '',
            subject: '',
            message: '',
        };
        let isValid = true;

        // Name Validation
        if (!name) {
            errors.name = 'Name is required.';
            isValid = false;
        }

        // Email validation
        if (!email) {
            errors.email = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address.';
            isValid = false;
        }

        // Subject validation
        if (!subject) {
            errors.subject = 'Subject is required.';
            isValid = false;
        }

        // Message validation
        if (!message) {
            errors.message = 'Message is required.';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const addFormData = (evt) => {
        evt.preventDefault();

        if (validateForm()) {
            const formDataObj = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataObj.append(key, value);
            });
            axios
                .post('https://developer.brandclever.in/brand/admin/form/contactForm.php', formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        setStatusMsg("Form submitted successfully.");
                        myFormRef.current.reset();
                        setFormData({ name: '', email: '', subject: '', message: '' }); setErrors({ name: '', email: '', subject: '', message: '' }); // Clear errors on successful submission
                        setTimeout(() => {
                            setStatusMsg('');
                        }, 5000);
                    } else {
                        setStatusMsg("Something went wrong.");
                        setTimeout(() => {
                            setStatusMsg('');
                        }, 5000);
                    }
                })
                .catch((error) => {
                    console.log("error", error);
                    setStatusMsg(error);
                    // console.error(error.response.data.error); // Log detailed error message
                });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setErrors((prevState) => ({
            ...prevState,
            [name]: '',
        }));
    };

    return (
        <div className="updated_container form_updated">
            <span className="big-circle"></span>
            <img src="img/shape.png" className="square" alt="" />
            <div className="form">
                <div className="contact-info">
                    <h3 className="title">Send us a Message!</h3>
                    <p className="text">
                        We're here to help with any questions you might have. Connect with our expert team to get the guidance you need for outstanding results. Simply fill out this quick form, and we'll get back to you soon.
                    </p>

                    <div className="info">
                        <div className="information">
                            <i className="fas fa-phone"></i>
                            <p>+91-9872711866</p>
                        </div>
                        <div className="information">
                            <i className="fas fa-envelope"></i>
                            <p>career@brandclever.in</p>
                        </div>
                        <div className="information">
                            <i className="location_brand fas fa-map-marker-alt"></i>
                            <p>4th Floor, F-301, Bansal Tower, Phase 8B, Industrial Area, Sector 74, Brandclever, Sahibzada Ajit Singh Nagar, Punjab 160055</p>
                        </div>
                    </div>

                    <div className="social-media">
                        <p>Connect with us :</p>
                        <div className="social-icons">
                            <Link to="https://www.instagram.com/brandclever.in/" className="button glow-button" target="_blank">
                                <Instagram />
                            </Link>
                            <Link to="https://www.linkedin.com/company/brandclever/" className="button glow-button" target="_blank">
                                <LinkedIn />
                            </Link>
                            <Link to="mailto:career@brandclever.in" className="button glow-button" target="_blank">
                                <MailOutlineIcon />
                            </Link>
                            <Link to="tel:+91-9872711866" className="button glow-button" target="_blank">
                                <AddIcCallIcon />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="contact-form custom_form">
                    <span className="circle one"></span>
                    <span className="circle two"></span>

                    <form ref={myFormRef} onSubmit={addFormData} className="updated_contact_sec">
                        <h3 className="title">Contact us</h3>
                        <div className="input-container">
                            <input type="text" name="name" className="input" placeholder="Name*" onChange={handleInputChange} />
                            {errors.name && <div className="update_contact_error">{errors.name}</div>}
                        </div>
                        <div className="input-container">
                            <input type="email" name="email" className="input" placeholder="Email*" onChange={handleInputChange} />
                            {errors.email && <div className="update_contact_error">{errors.email}</div>}
                        </div>
                        <div className="input-container">
                            <input type="text" name="subject" className="input" placeholder="Subject*" onChange={handleInputChange} />
                            {errors.subject && <div className="update_contact_error">{errors.subject}</div>}
                        </div>
                        <div className="input-container textarea">
                            <textarea name="message" className="input" placeholder="Message*" onChange={handleInputChange}></textarea>
                            {errors.message && <div className="update_contact_error">{errors.message}</div>}
                        </div>
                        <input type="submit" value="Submit" className="contact_submit_btn" />
                        <p id="statusMsg" className='status_success'>{statusMsg}</p>
                    </form>
                </div>
            </div>
        </div>
    );
}
