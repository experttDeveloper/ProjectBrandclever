import React from 'react'
import { Col, Row } from 'react-bootstrap';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function PaymentSection() {
  return (
    <div>
        <div className="payment">
        <div className="container">
          <Row className="onbasispayment">
            <Col md={4} className="hire_box_main">
              <div className="box_shadow">
                <div className="first_box_hire">
                  <h3 className="title_onbasis">
                    Hourly Basis <br /> <span className="perhour">$25</span>/hr
                  </h3>
                </div>
                <div className="alltext">
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Cost is cited on hourly basis
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Max, 8 hours a day and 5 days per week
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      A dedicated developer will be allotted
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Communication via: Email, Skype, Phone
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Ideal for Short-term projects
                      <br />
                    </p>
                  </div>
                </div>
                <div className="btn_contact">
                  <button className="btn_contactus">Contact Us</button>
                </div>
              </div>
            </Col>

            <Col md={4} className="hire_box_main">
              <div className="box_shadow">
                <div className="second_box_hire">
                  <h3 className="title_onbasis">
                    Weekly Basis <br /> <span className="perhour">$900</span>/wk
                  </h3>
                </div>
                <div className="alltext">
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Cost is cited on weekly basis
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Max, 8 hours a day and 5 days per week
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      A dedicated developer will be allotted
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Communication via: Email, Skype, Phone
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Favorable for short-term and mid-term projects
                      <br />
                    </p>
                  </div>
                </div>
                <div className="btn_contact">
                  <button className="btn_contactus">Contact Us</button>
                </div>
              </div>
            </Col>

            <Col md={4} className="hire_box_main" >
              <div className="box_shadow">
                <div className="third_box_hire">
                  <h3 className="title_onbasis">
                    Monthly Basis <br /> <span className="perhour">$3200</span>/m
                  </h3>
                </div>
                <div className="alltext">
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Cost is cited on monthly basis
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Max, 8 hours a day and 5 days per week
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      A dedicated developer will be allotted
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Communication via: Email, Skype, Phone
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Favorable for long-term projects
                      <br />
                    </p>
                  </div>
                </div>
                <div className="btn_contact">
                  <button className="btn_contactus">Contact Us</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
