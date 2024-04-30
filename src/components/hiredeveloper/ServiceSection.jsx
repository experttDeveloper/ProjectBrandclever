import React from 'react'
import { Col, Row } from 'react-bootstrap';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ServiceSection({ data,heading,subHeading }) {

  return (
    <div className="shopify_services">
      <div className="container">
        <div className="title_of_service">
          <h2 className="title_shopifyservices">
            {heading}
          </h2>
          <p className="content_shopifyservices">
            {subHeading}
          </p>
        </div>
        <Row className="services_shopify" style={{ color: "#fff" }}>
          {
            data.map((ele, key) => {
              return (
                <Col md={4} key={key}>
                  <div className='service_include'>
                    <img src={ele.image} alt={ele.title} className="svg_icon" />
                    <h4
                      className="title_shopify_services"
                    >
                      {ele.title}
                    </h4>
                    <p>{ele.description}</p>
                    {ele.points.map((point, key) => {
                      return (
                        <div className="circle_text" key={key}>
                          <CheckCircleIcon className="circle_tick" />
                          <p className="text_expertise">
                            {point}
                          </p>
                        </div>
                      )
                    })}

                  </div>
                </Col>
              )
            })
          }
        </Row>
      </div>
    </div>
  )
}
