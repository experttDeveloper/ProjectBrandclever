import React, { useState } from 'react'
import TopHeader from '../components/TopHeader'
import { Col, Container, Row } from 'react-bootstrap'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import blogs from '../data/Blog.json'

export default function Blog() {

  const [visibleBlogs, setVisibleBlogs] = useState(6);

  const loadMoreBlogs = () => {
    setVisibleBlogs(visibleBlogs + 3); // Load 3 more blogs
  };

  const convertTitleToURL = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-'); // Convert to lowercase and replace spaces with dashes
  };

  return (
    <div>
      <TopHeader title={"Blogs"} description={"Navigating Offshore Software Development: What You Should Know"} />
      <div className='blog_main'>
        <Container>
          <Row>
            {
              blogs.data.slice(0,visibleBlogs).map((ele, key) => {
                const blogURL = `/blog/${convertTitleToURL(ele.title2)}`;

                return (
                  <Col md={4} key={key}>
                    <Card className='blog_card'>
                      <CardMedia
                        image={ele.image}
                        title="green iguana"
                        sx={{height:"180px",width:"100%"}}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className='blog_title1'>
                          {ele.title1}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='blog_title2'>
                          {ele.title2}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Link to={blogURL}>
                          <Button className='blog_read_more'>read more</Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
          <Row className="text-center mt-4">
            {visibleBlogs < blogs.data.length && (
              <Col>
                <Button onClick={loadMoreBlogs}  className='get_quote_btn'>Load More</Button>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </div>
  )
}
