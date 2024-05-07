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
              <div class="section_blog">
                <div class="img_blog">
                  <img src="images/service/content_test2.jpg" alt="" class="blog_image" />
                </div>
                <div class="main_entry">
                  <div class="title_img">
                    <h3 class="titleofimg">Best web development company near me</h3>
                  </div>
                  <div class="date_author">
                    <p class="dateandauthor">
                      March6, 2024 by Mandeep Singh <br />Search Engine Optimization
                    </p>
                  </div>
                  <div class="about_img">
                    <p class="about_text">
                      Today, everyone is trying to get their website noticed on the
                      search engine. It's not an easy task, as many websites are
                      competing in the market. So, ...
                    </p>
                  </div>
                </div>
                <div class="button_readmore">
                  <Button class="read_more" ><Link to="/blog/details">Read More</Link> </Button>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div class="section_blog">
                <div class="img_blog">
                  <img src="images/service/content_test2.jpg" alt="" class="blog_image" />
                </div>
                <div class="main_entry">
                  <div class="title_img">
                    <h3 class="titleofimg">Best website design company</h3>
                  </div>
                  <div class="date_author">
                    <p class="dateandauthor">
                      March6, 2024 by Mandeep Singh <br />Search Engine Optimization
                    </p>
                  </div>
                  <div class="about_img">
                    <p class="about_text">
                      Today, everyone is trying to get their website noticed on the
                      search engine. It's not an easy task, as many websites are
                      competing in the market. So, ...
                    </p>
                  </div>
                </div>
                <div class="button_readmore">
                  <Button class="read_more"><Link to="/blog/details">Read More</Link> </Button>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div class="section_blog">
                <div class="img_blog">
                  <img src="images/service/content_test2.jpg" alt="" class="blog_image" />
                </div>
                <div class="main_entry">
                  <div class="title_img">
                    <h3 class="titleofimg">Best wordpress development company </h3>
                  </div>
                  <div class="date_author">
                    <p class="dateandauthor">
                      March6, 2024 by Mandeep Singh <br />Search Engine Optimization
                    </p>
                  </div>
                  <div class="about_img">
                    <p class="about_text">
                      Today, everyone is trying to get their website noticed on the
                      search engine. It's not an easy task, as many websites are
                      competing in the market. So, ...
                    </p>
                  </div>
                </div>
                <div class="button_readmore">
                  <Button class="read_more"><Link to="/blog/details">Read More</Link> </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
