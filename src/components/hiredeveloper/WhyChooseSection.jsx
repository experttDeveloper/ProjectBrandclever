import React from 'react'
import { Col, Row } from 'react-bootstrap';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HireDeveloperForm from '../HireDeveloperForm';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from 'react-router-dom';

export default function WhyChoose({ title, description1, description2, images, experties }) {

    return (
        <div>
            <div className="whychoose_shopify">
                <div className="container">
                    <Row className="whychooseshopify">
                        <Col md={6}>
                            <div className="whychoose_content">
                                <div className="whycoose_img">
                                    <h2 className="title_whychoose">
                                        Why Choose {title}
                                    </h2>
                                    <p className="content_whychoose" >
                                        {description1}
                                        <br />
                                        <br />
                                        <span dangerouslySetInnerHTML={{ __html: description2 }}>
                                        </span>
                                    </p>
                                </div>
                                <div className="contact_shopify">
                                    <div className="whatsapp_shopify">
                                        <WhatsAppIcon />
                                        <Link to="https://wa.me/9872711866?text=Hello%20there!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank">
                                            <p className="whatsapp_number">+91-9872711866</p>
                                        </Link>
                                    </div>
                                    <div className="mail_shopify">
                                        <MailOutlineIcon />
                                        <Link style={{ textTransform: "lowercase" }} to='mailto:career@brandclever.in'>
                                            <p className="email_id">career@brandclever.in</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form_shopify_hire">
                                <div className="form_inner">
                                    <HireDeveloperForm />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="expertitsetile">
                        <h4 className="titleexpertise">Our Expertise Included</h4>
                    </div>
                    <Row className="expertise">
                        {
                            experties.map((ele, key) => {
                                return (
                                    <Col md={4}>
                                        <div className="circle_text" key={key}>
                                            <CheckCircleIcon className="circle_tick" />
                                            <p className="text_expertise">
                                                {ele}
                                            </p>
                                        </div>
                                    </Col>

                                )
                            })
                        }

                    </Row>
                </div>
            </div>
        </div>
    )
}
