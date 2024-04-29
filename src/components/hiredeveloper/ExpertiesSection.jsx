import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function ExpertiesSection({ data }) {
    return (
        <div>
            <div className="expertiseandreviews">
                <div className="container">
                    <Row className="aboutpersonnel">
                        {
                            data.map((ele, key) => {
                                return (
                                    <Col md={6}>
                                        <div className="expertise_section" key={key}>
                                            <div className="img_es">
                                                <img src={ele.image} alt={ele.title} />
                                            </div>
                                            <div className="content_es">
                                                <p className="text_expertise_reviews">
                                                    <h4 className="title_expertise_reviews">
                                                        {ele.title}
                                                    </h4>
                                                    {ele.description}
                                                </p>
                                            </div>
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
