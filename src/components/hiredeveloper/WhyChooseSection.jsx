import React from 'react'
import { Col, Row } from 'react-bootstrap';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function WhyChoose({ title, description1, description2, image, experties }) {

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
                                    <p className="content_whychoose">
                                        {description1}
                                        <br />
                                        <br />
                                        {description2}
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="whychoose_img">
                                <img src={image} alt="brandclever" />
                                {/* <img src="images/hire/stay.webp" alt="brandclever" /> */}
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
