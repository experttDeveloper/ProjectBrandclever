import React, { useRef, useState } from 'react';
import '../css/updatecontact.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Instagram, LinkedIn } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

export default function UpdateContact() {
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
            errors.name = 'Name is required';
            isValid = false;
        }

        // Email validation
        if (!email) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
            isValid = false;
        }

        // Subject validation
        if (!subject) {
            errors.subject = 'Subject is required';
            isValid = false;
        }

        // Message validation
        if (!message) {
            errors.message = 'Message is required';
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
                .post('https://developer.brandclever.in/brand/admin/form/contactForm.php', formData)
                .then((res) => {
                    if (res.data.status) {
                        document.getElementById('statusMsg').innerText = res.data.message;
                        myFormRef.current.reset();
                        setFormData({ name: '', email: '', subject: '', message: '' });
                    }
                })
                .catch((error) => {
                    console.log("error", error)
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
        <div class="updated_container form_updated">
            <span class="big-circle"></span>
            <img src="img/shape.png" class="square" alt="" />
            <div class="form">
                <div class="contact-info">
                    <h3 class="title">Send us a Message!</h3>
                    <p class="text">
                        We're here to help with any questions you might have. Connect with our expert team to get the guidance you need for outstanding results. Simply fill out this quick form, and we'll get back to you soon.
                    </p>

                    <div class="info">
                        <div class="information">
                            <i class="fas fa-phone"></i>
                            <p>+91-9872711866</p>
                        </div>
                        <div class="information">
                            <i class="fas fa-envelope"></i>
                            <p>career@brandclever.in</p>
                        </div>
                        <div class="information">
                            <i class="location_brand fas fa-map-marker-alt"></i>

                            <p>4th Floor, F-301, Bansal Tower, Phase 8B, Industrial Area, Sector 74, Brandclever, Sahibzada Ajit Singh Nagar, Punjab 160055</p>
                        </div>

                    </div>

                    <div class="social-media">
                        <p>Connect with us :</p>
                        <div class="social-icons">
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

                <div class="contact-form custom_form">
                    <span class="circle one"></span>
                    <span class="circle two"></span>

                    <form ref={myFormRef} onSubmit={addFormData} className='updated_contact_sec'>
                        <h3 class="title">Contact us</h3>
                        <div class="input-container">
                            <input type="text" name="name" class="input" placeholder="Name*" onChange={handleInputChange} />
                        </div>
                        <div class="input-container">
                            <input type="email" name="email" class="input" placeholder="Email*" onChange={handleInputChange} />
                        </div>
                        <div class="input-container">
                            <input type="text" name="subject" class="input" placeholder="Subjet*" onChange={handleInputChange} />
                        </div>
                        <div class="input-container textarea">
                            <textarea name="message" class="input" placeholder="Message*" onChange={handleInputChange}></textarea>
                        </div>
                        <input type="submit" value="Submit" class="contact_submit_btn" />
                        <span id="statusMsg"></span>
                    </form>
                </div>
            </div>
        </div>
    )
}
