import React, { Component } from 'react';
import axios from 'axios';
import TopHeader from './TopHeader';
import { Col, Container, Row } from 'react-bootstrap';
import { Button, TextField, Typography } from '@mui/material';
import { EmailOutlined, LocationCityOutlined, PhoneAndroid } from '@mui/icons-material';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.myFormRef = React.createRef();
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      errors: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  }

  validateForm = () => {
    const { name, email, subject, message } = this.state;
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

    this.setState({ errors });
    return isValid;
  };


  addFormData = (evt) => {
    evt.preventDefault();

    if (this.validateForm()) {
      const formData = new FormData();
      Object.entries(this.state).forEach(([key, value]) => {
        formData.append(key, value);
      });

      axios
        .post('https://developer.brandclever.in/brand/admin/form/contactForm.php', formData)
        .then((res) => {
          console.log(res.data.success);
          document.getElementById('successMsg').innerText = res.data.success;

          this.myFormRef.current.reset();
        })
        .catch((error) => {
          console.error(error.response.data.error); // Log detailed error message
        });
    }
  };


  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: '',
      },
    }));
  };


  render() {
    const { errors } = this.state;

    return (
      <>

        <TopHeader
          title={"Connect With Us"}
          description={"Reach out to us with any questions, feedback, or inquiries you may have. We're here to help! Contact us today and let's start the conversation."}
        />
        <div className='contact_us_section'>
          <Container>
            <Row>
              <Col md={6}>
                <Typography variant='h3'>
                  Collaborative Ventures!
                </Typography>
                <Typography variant='h5'>
                  Get in touch to brainstorm your business idea.
                </Typography>
                <Typography variant='p'>
                  Unlock the full potential of your digital product with our comprehensive services. From design and development to scaling for growth, we're here to tailor solutions to your unique business challenges. Let's collaborate to turn your vision into reality.
                </Typography>
              </Col>
              <Col md={6}>
                <img src='https://devexhub.com/images/phone.png' />
              </Col>
            </Row>


            <Row>
              <Col md={6}>
                <Typography variant='h3'>
                  Send us a Message!
                </Typography>
                <Typography variant='p'>
                  We are happy to answer any questions. Talk to our team of experts to help make informed decisions for top-notch outcomes. Just fill out this short form and we will get back to you shortly.
                </Typography>
                <Typography variant='p'>
                  <PhoneAndroid />+91-9872711866
                </Typography>
                <Typography variant='p'>
                  <EmailOutlined />career@brandclever.in
                </Typography>
                <Typography variant='p'>
                  <LocationCityOutlined />4th Floor, F-301, Bansal Tower, Phase 8B, Industrial Area, Sector 74, Brandclever, Sahibzada Ajit Singh Nagar, Punjab 160055
                </Typography>
              </Col>
              <Col md={6}>
                <form ref={this.myFormRef} onSubmit={this.addFormData}>
                  <div className="form-group">
                    <TextField
                      variant="outlined"
                      type="text"
                      className={`form-control ${errors.name && 'is-invalid'}`}
                      id="name"
                      placeholder="Name *"
                      name="name"
                      onChange={this.handleInputChange}
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
                      onChange={this.handleInputChange}
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
                      onChange={this.handleInputChange}
                    />
                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                  </div>
                  <div className="form-group">
                    <textarea
                      className={`form-control ${errors.message && 'is-invalid'}`}
                      id="message"
                      placeholder="Message *"
                      name="message"
                      onChange={this.handleInputChange}
                      rows="3"
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>
                  <Button type="submit" className="btn btn-primary button_slide slide_down" variant="contained">
                    Submit
                  </Button>
                  <span id='successMsg'></span>
                </form>
              </Col>
            </Row>

          </Container>
        </div>

        {/* <div id="contactForm" className="contactForm p-5" >
          <div className="container2">
            <div className="contactForm-inner">

              <div className="form-right">
                <h3>GET IN TOUCH</h3>
                <p>Our Subject Matter Experts Are Change Catalysts. Book Your First Presentation with Our Experts Today.</p>
                <form ref={this.myFormRef} onSubmit={this.addFormData}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={`form-control ${errors.name && 'is-invalid'}`}
                      id="name"
                      placeholder="Name *"
                      name="name"
                      onChange={this.handleInputChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className={`form-control ${errors.email && 'is-invalid'}`}
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Email *"
                      name="email"
                      onChange={this.handleInputChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={`form-control ${errors.subject && 'is-invalid'}`}
                      id="subject"
                      placeholder="Subject *"
                      name="subject"
                      onChange={this.handleInputChange}
                    />
                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                  </div>
                  <div className="form-group">
                    <textarea
                      className={`form-control ${errors.message && 'is-invalid'}`}
                      id="message"
                      placeholder="Message *"
                      name="message"
                      onChange={this.handleInputChange}
                      rows="3"
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>
                  <button type="submit" className="btn btn-primary button_slide slide_down">
                    Submit
                  </button>
                  <span id='successMsg'></span>
                </form>
              </div>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}