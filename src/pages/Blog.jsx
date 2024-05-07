import React from 'react'
import TopHeader from '../components/TopHeader'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

export default function Blog() {
  return (
    <div>
      <TopHeader title={"Blogs"} />
      <div className='blog_main'>

        <Container>
          <Row>
            
            <Col md={4}>
              <div className="section_blog">
                <div className="img_blog">
                  <img src="../images/service/content_test2.jpg" alt="" className="blog_image" />
                </div>
                <div className="main_entry">
                  <div className="title_img">
                    <h3 className="titleofimg">Best web development company near me</h3>
                  </div>
                  <div className="date_author">
                    <p className="dateandauthor">
                      March6, 2024 by Mandeep Singh <br />Search Engine Optimization
                    </p>
                  </div>
                  <div className="about_img">
                    <p className="about_text">
                      Today, everyone is trying to get their website noticed on the
                      search engine. It's not an easy task, as many websites are
                      competing in the market. So, ...
                    </p>
                  </div>
                </div>
                <div className="button_readmore">
                  <Button className="read_more" ><Link to="/blog/details">Read More</Link> </Button>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="section_blog">
                <div className="img_blog">
                  <img src="images/service/content_test2.jpg" alt="" className="blog_image" />
                </div>
                <div className="main_entry">
                  <div className="title_img">
                    <h3 className="titleofimg">Best website design company</h3>
                  </div>
                  <div className="date_author">
                    <p className="dateandauthor">
                      March6, 2024 by Mandeep Singh <br />Search Engine Optimization
                    </p>
                  </div>
                  <div className="about_img">
                    <p className="about_text">
                      Today, everyone is trying to get their website noticed on the
                      search engine. It's not an easy task, as many websites are
                      competing in the market. So, ...
                    </p>
                  </div>
                </div>
                <div className="button_readmore">
                  <Button className="read_more"><Link to="/blog/details">Read More</Link> </Button>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="section_blog">
                <div className="img_blog">
                  <img src="images/service/content_test2.jpg" alt="" className="blog_image" />
                </div>
                <div className="main_entry">
                  <div className="title_img">
                    <h3 className="titleofimg">Best wordpress development company </h3>
                  </div>
                  <div className="date_author">
                    <p className="dateandauthor">
                      March6, 2024 by Mandeep Singh <br />Search Engine Optimization
                    </p>
                  </div>
                  <div className="about_img">
                    <p className="about_text">
                      Today, everyone is trying to get their website noticed on the
                      search engine. It's not an easy task, as many websites are
                      competing in the market. So, ...
                    </p>
                  </div>
                </div>
                <div className="button_readmore">
                  <Button className="read_more"><Link to="/blog/details">Read More</Link> </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
