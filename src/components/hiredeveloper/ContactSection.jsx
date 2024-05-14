import React from 'react'
import { Col, Row } from 'react-bootstrap';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HireDeveloperForm from '../HireDeveloperForm';
import { Link } from 'react-router-dom';

export default function ContactSection({ title, description }) {

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
                                
                                <div className="contact_shopify">
                                    <div className="whatsapp_shopify">
                                        <WhatsAppIcon />
                                        <Link to="https://api.whatsapp.com/send?phone=919872711866">
                                        <p className="whatsapp_number">+91-9872711866</p>
                                        </Link>
                                    </div>
                                    <div className="mail_shopify">
                                        <MailOutlineIcon />
                                        <Link to="mailto:career@brandclever.in">
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
                </div>
            </div>
        </div>
    )
}
