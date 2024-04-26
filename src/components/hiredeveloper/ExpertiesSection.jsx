import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function ExpertiesSection() {
    return (
        <div>
            <div className="expertiseandreviews">
                <div className="container">
                    <Row className="aboutpersonnel">
                        <Col md={6}>
                            <div className="expertise_section">
                                <div className="img_es">
                                    <img src="images/hire/expertise_icon.png" alt="" />
                                </div>
                                <div className="content_es">
                                    <p className="text_expertise_reviews">
                                        <h4
                                            className="title_expertise_reviews"

                                        >
                                            Expertise and Experience <br />
                                        </h4>
                                        Professional Shopify experts with extensive experience in
                                        e-commerce solutions. We have a proven track record of
                                        successful Shopify projects showcasing our expertise.
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="expertise_section">
                                <div className="img_es">
                                    <img src="images/hire/customized_solutions.png" alt="brandclever" />
                                </div>
                                <div className="content_es">
                                    <p className="text_expertise_reviews">
                                        <h4
                                            className="title_expertise_reviews"

                                        >
                                            Customized Solutions <br />
                                        </h4>
                                        Tailored approach to understand your unique business needs
                                        and preferences. Crafted strategies and solutions designed
                                        specifically for your brand and audience.
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="aboutpersonnel">
                        <Col md={6}>
                            <div className="expertise_section">
                                <div className="img_es">
                                    <img src="images/hire/support_maintainanec.png" alt="brandclever" />
                                </div>
                                <div className="content_es">
                                    <p className="text_expertise_reviews">
                                        <h4
                                            className="title_expertise_reviews"

                                        >
                                            Support and Maintenance <br />
                                        </h4>
                                        Ongoing support and maintenance to ensure your Shopify
                                        store runs flawlessly. Quick issue resolution and regular
                                        updates to keep your store up-to-date and secure.
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="expertise_section">
                                <div className="img_es">
                                    <img src="images/hire/client-centric-approach.png" alt="brandclever" />
                                </div>
                                <div className="content_es">
                                    <p className="text_expertise_reviews">
                                        <h4
                                            className="title_expertise_reviews"

                                        >
                                            Customized Solutions <br />
                                        </h4>
                                        Prioritization of client satisfaction and exceeding
                                        expectations. Client feedback integration and continuous
                                        improvement based on insights and suggestions.
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
