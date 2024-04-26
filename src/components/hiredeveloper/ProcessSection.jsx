import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function ProcessSection() {
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
                        <Col md={3}>
                            <div className="hiring_process">
                                <img
                                    src="images/hire/requirement.png"
                                    alt="brandclever"
                                    className="requirement"
                                />
                                <p className="titleofhiring">
                                    <h4 className="boldtext">Book a Free Consultation Call</h4>{" "}
                                    <br />
                                    Initiate your Shopify project journey by booking a free
                                    consultation call with BrandClever. This call provides
                                    you with the opportunity to connect with our team of experts,
                                    allowing us to understand.
                                </p>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="hiring_process">
                                <img
                                    src="images/hire/resume.png"
                                    alt="brandclever"
                                    className="requirement"
                                />
                                <p className="titleofhiring">
                                    <h4 className="boldtext">Discuss The Shopify Projects</h4>
                                    <br />
                                    We will focus on a comprehensive discussion about your Shopify
                                    project. We encourage you to share your ideas, brand identity,
                                    target audience, and desired functionalities. This discussion
                                    sets the foundation.
                                </p>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="hiring_process">
                                <img
                                    src="images/hire/finalize.png"
                                    alt="brandclever"
                                    className="requirement"
                                />
                                <p className="titleofhiring">
                                    <h4 className="boldtext">Project Execution & Delivery</h4>
                                    <br />
                                    Our dedicated team of Shopify experts starts working diligently
                                    on your project, adhering to the specified timeline and
                                    delivering exceptional results. Throughout this phase, we
                                    maintain open communication.
                                </p>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="hiring_process">
                                <img
                                    src="images/hire/assign-task.png"
                                    alt="brandclever"
                                    className="requirement"
                                />
                                <p className="titleofhiring">
                                    <h4 className="boldtext">
                                        Daily / Weekly / Monthly Reporting
                                    </h4>
                                    <br />
                                    We provide regular reports, tailored to your preference, on a
                                    daily, weekly, or monthly basis. These reports encompass the
                                    project's progress, milestones achieved, and any challenges
                                    encountered.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    
                </div>
            </div>
        </div>
    )
}
