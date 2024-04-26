import React from 'react'
import { Col, Row } from 'react-bootstrap';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HireDeveloperForm from '../HireDeveloperForm';

export default function ContactSection({ title, description, images }) {

    return (
        <div>
            <div className="content_form_shopify">
                <div className="container ">
                    <Row className="main_content_shopifypg">
                        <Col md={6}>
                            <div className="content_main">
                                <h2 className="inner_content">
                                    {title}
                                </h2>
                                <p className="hiring_shopify">
                                    {description}
                                </p>
                                <div className="shopify_clutch_logo">
                                    <div className="shopifylogo">
                                        <img src={images[0]} alt="brandclever" />
                                    </div>
                                    <div className="clutchlogo">
                                        <img src={images[1]} alt="brandclever" />
                                    </div>
                                </div>
                                <div className="contact_shopify">
                                    <div className="whatsapp_shopify">
                                        <WhatsAppIcon />
                                        <p className="whatsapp_number">+91-9872711866</p>
                                    </div>
                                    <div className="mail_shopify">
                                        <MailOutlineIcon />
                                        <p className="email_id">career@brandclever.in</p>
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
                </div>
            </div>
        </div>
    )
}
