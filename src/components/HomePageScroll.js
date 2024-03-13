import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function HomePageScroll() {


    return (
        <div style={{ background: "gray" }}>
            <Container>
                <Row>
                    <Col md={6}>
                        <p>Case Study</p>
                        <h4>Adidas </h4>
                        <p>Scores the perfect digital landing in UAE</p>
                        <Col md={6}>
                            <p>2M+</p>
                        </Col>
                    </Col>
                    <Col md={6}>
                        <h1>image </h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
