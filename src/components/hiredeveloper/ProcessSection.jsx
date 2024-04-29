import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function ProcessSection({ data }) {
    return (
        <div>
            <div className="hiring_process_main">
                <div className="container">
                    <div className="title_hiring">
                        <h2 className="hiringprocesstitle">
                            Our Hiring Process To Start the Shopify Projects
                        </h2>
                    </div>
                    <Row className="processofhiring">
                        {
                            data.map((ele, key) => {
                                return (
                                    <Col md={3}>
                                        <div className="hiring_process" key={key}>
                                            <img
                                                src={ele.image}
                                                alt="brandclever"
                                                className="requirement"
                                            />
                                            <p className="titleofhiring">
                                                <h4 className="boldtext">{ele.title}</h4>{" "}
                                                <br />
                                                {ele.description}
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
