import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function ImageSection({ images }) {
    return (
        <div>
            <Container>
                <div className="portfolio_sect">
                    <h2 className="title">
                        Explore Our Latest Creations
                    </h2>
                </div>
                <Row className="shopify_images">
                    {
                        images.map((ele, key) => {
                            return (
                                <Col md={4}>
                                    <div class="images">
                                        <div class="image">
                                            <img src={ele.firstImage} alt="brandclever" />
                                            <img
                                                class="first"
                                                src={ele.secondImage}
                                                alt="brandclever"
                                            />
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }

                </Row>

            </Container>
        </div>
    )
}
