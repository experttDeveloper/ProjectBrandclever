import React from "react";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import { Col, Container, Row } from "react-bootstrap";
import { Typography } from "@mui/material";
import {
  EmailOutlined,
  Facebook,
  Instagram,
  LinkedIn,
  LocationCityOutlined,
  PhoneAndroid,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import RoomIcon from "@mui/icons-material/Room";
import SocialContact from "../components/SocialContact";
import MetaTitleDes from "../components/MetaTitleDes";
import UpdateContact from "../components/UpdateContact";
import Meeting from "../Meeting";

const Contact = () => {
  const divStyle = {
    background: `url(${process.env.PUBLIC_URL}/images/contact-bg-banner-desktop.png)`,
    backgroundSize: "cover",
    // Add other background-related properties if needed
  };

  const expert = [process.env.PUBLIC_URL + "/images/cont-idea-img.jpg"];

  return (
    <>
      <MetaTitleDes
        title={"Contact Us - Your Idea Our Innovation- BrandClever"}
        description={
          "Contact Brandclever if you are looking to talk to us about- Web development, Web design, Graphic design, CMS Solutions, or Digital Marketing! Call us Now"
        }
      />
      <TopHeader
        title={"Connect With Us"}
        description={
          "Reach out to us with any questions, feedback, or inquiries you may have. We're here to help! Contact us today and let's start the conversation."
        }
      />
      <UpdateContact />
      <Meeting/>
      <div className="contact_us_section">
        <div className="contact_us_second">
          <Container>
            <Row>
              {/* <Col md={6} className="left_contact">
                <div className="contact_des">
                  <Typography variant="h3">Send us a Message!</Typography>
                  <Typography variant="p">
                    We're here to help with any questions you might have.
                    Connect with our expert team to get the guidance you need
                    for outstanding results. Simply fill out this quick form,
                    and we'll get back to you soon.
                  </Typography>
                </div>
                <div className="contact_media">
                  <Typography variant="subtitle1">
                    <PhoneAndroid />
                    <Link to="tel:+919872711866">+91-9872711866 </Link>
                  </Typography>
                  <Typography variant="subtitle1">
                    <EmailOutlined />
                    <Link to="mailto:career@brandclever.in">
                      career@brandclever.in
                    </Link>
                  </Typography>
                  <Typography variant="subtitle1">
                    <RoomIcon />
                    4th Floor, F-301, Bansal Tower, Phase 8B, Industrial Area,
                    Sector 74, Brandclever, Sahibzada Ajit Singh Nagar, Punjab
                    160055
                  </Typography>
                </div>
              </Col>
              <Col md={6} className="right_contact">
                <ContactForm />
              </Col> */}
            </Row>
          </Container>
        </div>
        <div className="contact_us_first">

          <Container>
            <Row className="contact_row_edits">
              <Col md={6}>
                <Typography variant='h3' >
                  Collaborative Ventures!
                </Typography>
                <Typography variant='h5'>
                  Get in touch to brainstorm your business idea.
                </Typography>
                <Typography variant='p'>
                  Unlock the full potential of your digital venture with our comprehensive suite of services tailored to elevate your online presence. From conceptualization to execution, we're your trusted partner every step of the way. Our holistic approach encompasses meticulous design, agile development, and seamless scalability, ensuring your digital product not only meets but exceeds your expectations.
                </Typography>
              </Col>
              <Col md={6} className='contact_video'>
                {/* {/* <SocialContact/> */}
                <div class="social_media_hover">
                  <ul>
                    <Row>
                      
                        <li className="social_efeect">
                          <a href="#">
                            <Facebook/>
                            <span>  Facebook</span>
                          </a>
                        </li>
                        <li className="social_efeect">
                          <a href="#">
                            <LinkedIn />
                            <span>  LinkedIn</span>
                          </a>
                        </li>
                        <li className="social_efeect">
                          <a href="#">
                            <WhatsApp />
                            <span>  WhatsApp</span>
                          </a>
                        </li>
                        <li className="social_efeect">
                          <a href="#">
                            <Instagram />
                            <span>  Instagram</span>
                          </a>
                        </li>
                    </Row>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.2596703031263!2d76.68748917438705!3d30.711099586679968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef8cd36051e7%3A0xdfdada19c12e600f!2sBrandclever!5e0!3m2!1sen!2sin!4v1713517955171!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
