import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';

const ContactForm = () => {
  const myFormRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    number: ""
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
    <>
      <form ref={myFormRef} onSubmit={addFormData} style={{ width: '100%', padding: '3rem' }}>
        <div className="form-group">
          <TextField
            variant="outlined"
            type="text"
            className={`form-control ${errors.name && 'is-invalid'}`}
            id="name"
            placeholder="Name *"
            name="name"
            onChange={handleInputChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="form-group">
          <TextField
            variant="outlined"
            type="email"
            className={`form-control ${errors.email && 'is-invalid'}`}
            id="email"
            aria-describedby="emailHelp"
            placeholder="Email *"
            name="email"
            onChange={handleInputChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="form-group">
          <TextField
            variant="outlined"
            type="text"
            className={`form-control ${errors.subject && 'is-invalid'}`}
            id="subject"
            placeholder="Subject *"
            name="subject"
            onChange={handleInputChange}
          />
          {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
        </div>
        <div className="form-group">
          <textarea
            className={`form-control ${errors.message && 'is-invalid'}`}
            id="message"
            placeholder="Message *"
            name="message"
            onChange={handleInputChange}
            rows="3"
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>
        <Button type="submit" className="button_slide slide_down form_submit_btn" sx={{ background: '#54a154' }}>
          Submit
        </Button>
        <span id="statusMsg"></span>
      </form>
    </>
  );
};

export default ContactForm;
