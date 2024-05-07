import React from 'react'
import { Col, Row } from 'react-bootstrap';
import reviews from '../../data/ClientReview.json'
import { Rating } from '@mui/material';

export default function Testimonial() {
  return (
    <div>
      <div className="testimonials">
        <div className="container">
          <div className="titleoftestimonial">
            <h2 className="title_testimonial">Testimonials</h2>
            <p className="content_title">
              Read the Success Stories of Our Valued Clients
            </p>
          </div>
          <Row className="reviews_hiring">
            <Col md={4}>
              {
                reviews.data.slice(0, 2).map((ele, key) => {
                  return (
                    <Col m={12}>
                      <div className="sopify_dev_title" key={key}>
                        <p className="reviewone">
                          "{ele.review}"
                        </p>
                        <div className="author_img">
                          <h3 className="author">
                          {ele.name}
                          </h3>
                          <Rating value={ele.rating} readOnly/>
                        </div>
                      </div>

                    </Col>
                  )
                })
              }
            </Col>
            <Col md={4}>
              {
                reviews.data.slice(2, 4).map((ele, key) => {
                  return (
                    <Col m={12}>
                      <div className="sopify_dev_title">

                        <p className="reviewone">
                          "{ele.review}"
                        </p>
                        <div className="author_img">
                          <h3 className="author">
                          {ele.name}
                          </h3>
                           <Rating value={ele.rating} readOnly/>
                        </div>
                      </div>

                    </Col>
                  )
                })
              }

            </Col>
            <Col md={4}>
              {
                reviews.data.slice(4, 6).map((ele, key) => {
                  return (
                    <Col m={12}>
                      <div className="sopify_dev_title" key={key}>

                        <p className="reviewone">
                          "{ele.review}"
                        </p>
                        <div className="author_img">
                          <h3 className="author">
                            {ele.name}
                          </h3>
                           <Rating value={ele.rating} readOnly/>
                        </div>
                      </div>
                    </Col>
                  )
                })
              }

            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
