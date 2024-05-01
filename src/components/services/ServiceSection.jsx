import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function ServiceSection({ data }) {
    console.log("data", data)
    return (
        <div>
            <div className='development_main_full_div'>
                <Container>
                    <div style={{ padding: '20px' }}>
                        <Row>
                            <Col md={6}>
                                <h2>
                                    {data[0].title}
                                </h2>
                                <p>
                                    {data[0].description}
                                </p>
                            </Col>

                            <Col md={6}>
                                <img
                                    alt='cms_img'
                                    src={data[0].image}
                                    height="500px"
                                    width="500px"
                                />
                            </Col>
                        </Row>
                    </div>

                    <div style={{ padding: '20px' }}>
                        <Row>
                            <Col md={6}>
                                <img
                                    alt='cms_img'
                                    src={data[1].image}
                                    height="500px"
                                    width="500px"
                                />
                            </Col>

                            <Col md={6}>
                                <h2>{data[1].title}</h2>
                                <p> {data[1].description} </p>
                                <Row>
                                    {
                                        data[1].points.map((ele, key) => {
                                            return (
                                                <Col md={6}>
                                                    <p><VerifiedIcon /> {ele} </p>
                                                </Col>
                                            )
                                        })
                                    }

                                </Row>

                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

        </div>
    )
}
