import { CardContent, CardMedia, Typography, Card, Button } from '@mui/material'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function TestimonialSection({ heading, data }) {
    return (
        <div>
            <div className='web_second_sdit'>
                <Container>
                    <div className='service_testinm'>
                        <h2>{heading}</h2>
                        <Row>
                            {data.map((ele, key) => {
                                return (
                                    <Col md={4} >
                                        <Card sx={{ maxWidth: 345, padding: '10px' }}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={ele.image}
                                                alt="Product Image"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {ele.title}
                                                </Typography>
                                                <Typography variant="p" color="text.secondary">
                                                    {ele.description}
                                                </Typography>
                                                <div className='Custom_lists_edit'>
                                                    {
                                                        ele.points.map((point, key) => {
                                                            return (

                                                                <p><VerifiedIcon /> <b>{point}</b> </p>
                                                            )
                                                        })
                                                    }
                                                </div>

                                            </CardContent>
                                            <Button className='get_quote_btn' size="small">Get a Quote</Button>
                                        </Card>
                                    </Col>
                                )
                            })}

                        </Row>

                    </div>
                </Container>
            </div>
        </div>
    )
}
