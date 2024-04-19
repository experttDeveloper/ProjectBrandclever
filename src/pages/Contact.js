import React from 'react';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';
import TopHeader from '../components/TopHeader';
import { Col, Container, Row } from 'react-bootstrap';
import { Typography } from '@mui/material';
import { EmailOutlined, LocationCityOutlined, PhoneAndroid } from '@mui/icons-material';
import RoomIcon from '@mui/icons-material/Room';


const Contact = () => {
  const divStyle = {
    background: `url(${process.env.PUBLIC_URL}/images/contact-bg-banner-desktop.png)`,
    backgroundSize: 'cover',
    // Add other background-related properties if needed
  };

  const expert = [
    process.env.PUBLIC_URL + '/images/cont-idea-img.jpg',
  ];

  return (
    <>
      <TopHeader
        title={"Connect With Us"}
        description={"Reach out to us with any questions, feedback, or inquiries you may have. We're here to help! Contact us today and let's start the conversation."}
      />
      <div className='contact_us_section'>
        <div className="contact_us_first">

          <Container>
            <Row>
              <Col md={6}>
                <Typography variant='h3' >
                  Collaborative Ventures!
                </Typography>
                <Typography variant='h5'>
                  Get in touch to brainstorm your business idea.
                </Typography>
                <Typography variant='p'>
                  Unlock the full potential of your digital product with our comprehensive services. From design and development to scaling for growth, we're here to tailor solutions to your unique business challenges. Let's collaborate to turn your vision into reality.
                </Typography>
              </Col>
              <Col md={6} className='contact_video'>
                <img src='video/contact.gif' className='contact_form_img' />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="contact_us_second">
          <Container>

            <Row>
              <Col md={6}>
                <div className='contact_des'>

                <Typography variant='h3'>
                  Send us a Message!
                </Typography>
                <Typography variant='p'>
                  We are happy to answer any questions. Talk to our team of experts to help make informed decisions for top-notch outcomes. Just fill out this short form and we will get back to you shortly.
                </Typography>
                </div>
                <div className='contact_media'>
                  <Typography variant="subtitle1">
                    <PhoneAndroid />+91-9872711866
                  </Typography>
                  <Typography variant='subtitle1'>
                    <EmailOutlined />career@brandclever.in
                  </Typography>
                  <Typography variant='subtitle1'>
                    <RoomIcon />4th Floor, F-301, Bansal Tower, Phase 8B, Industrial Area, Sector 74, Brandclever, Sahibzada Ajit Singh Nagar, Punjab 160055
                  </Typography>

                </div>
              </Col>
              <Col md={6}>
                <ContactForm />
              </Col>
            </Row>
          </Container>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.2596703031263!2d76.68748917438705!3d30.711099586679968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef8cd36051e7%3A0xdfdada19c12e600f!2sBrandclever!5e0!3m2!1sen!2sin!4v1713517955171!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
};

export default Contact;
