import React from 'react'
import TopHeader from '../components/TopHeader'
import { Col, Container, Row } from 'react-bootstrap'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div>
      <TopHeader title={"Blogs"} />
      <div className='blog_main'>
        <Container>
          <Row>
            <Col md={4}>
              <Card className='blog_card'>
                <CardMedia
                  image="https://apidots.com/wp-content/uploads/2024/04/how-to-choose-the-right-software-development-company.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='blog_title1'>
                    Software Development
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className='blog_title2'>
                    IT Outsourcing: How to Choose the Right Software Development Company
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to="#">
                    <Button className='blog_read_more'>read more</Button>
                  </Link>
                </CardActions>
              </Card>
            </Col>

            <Col md={4}>
              <Card className='blog_card'>
                <CardMedia className='top_header_card'
                  image="https://apidots.com/wp-content/uploads/2024/04/how-to-choose-the-right-software-development-company.jpg"
                  title="green iguana"
                />
                  <div className='heading_btn_blog_page'>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='blog_title1'>
                    Software Development
                  </Typography>
                    
                  <Typography variant="body2" color="text.secondary" className='blog_title2'>
                    IT Outsourcing: How to Choose the Right Software Development Company
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to="#">
                    <Button className='blog_read_more'>read more</Button>
                  </Link>
                </CardActions>
                </div>
              </Card>
            </Col>

            <Col md={4}>
              <Card className='blog_card'>
                <CardMedia
                  image="https://apidots.com/wp-content/uploads/2024/04/how-to-choose-the-right-software-development-company.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='blog_title1'>
                    Software Development
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className='blog_title2'>
                    IT Outsourcing: How to Choose the Right Software Development Company
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to="#">
                    <Button className='blog_read_more'>read more</Button>
                  </Link>
                </CardActions>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
