import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function ImageSection() {
    return (
        <div>
            <Container>
                <Row className="shopify_images">
                    <Col md={4}>
                        <div class="images">
                            <div class="image">
                                <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="brandclever" />
                                <img
                                    class="first"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujP_XCpNogxiQMd7av2SPgG656cqFkD_Ty3PM7UBw09SVp3mUY5_HXYbyovY7fygvi4I&usqp=CAU"
                                    alt="brandclever"
                                />
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div class="images">
                            <div class="image">
                                <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                                    alt="brandclever" />
                                <img
                                    class="first"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujP_XCpNogxiQMd7av2SPgG656cqFkD_Ty3PM7UBw09SVp3mUY5_HXYbyovY7fygvi4I&usqp=CAU"
                                    alt="brandclever"
                                />
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div class="images">
                            <div class="image">
                                <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                                    alt="brandclever" />
                                <img
                                    class="first"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujP_XCpNogxiQMd7av2SPgG656cqFkD_Ty3PM7UBw09SVp3mUY5_HXYbyovY7fygvi4I&usqp=CAU"
                                    alt="brandclever"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
               
            </Container>
        </div>
    )
}
