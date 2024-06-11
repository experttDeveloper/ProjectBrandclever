import React from 'react';
import '../css/seo.css'
import { Button, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Col, Row } from 'react-bootstrap';

export default function SeoAudit() {
    return (
        <div className='seo_analyzer'>
            <Container>

                <div className='benner_main_div'>
                    <div className='content_banner'>
                        <h1>SEO Analyzer</h1>
                        <p>Perform in-depth SEO Analysis of your website.<br></br>
                            See if your pages are optimized and get actionable data if they aren't.</p>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                        >

                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Enter Website Url e.g. https://google.com"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <Button className='anlayze'>Anlayze</Button>
                            </IconButton>

                        </Paper>
                    </div>
                </div>
            </Container>
            <div className='banner_down_main_div'>

            <Container>
                <div className='The benefits_main'>
                    <div className='top_heading_down_sec'>
                        <h2>The benefits you'll get with SEO Analyzer</h2>
                    </div>
                    <Row>
                        <Col md={4}>
                        <div className='seo_report'>
                            <img src='/images/seo/report.png' alt='img' className='img_seo'/>
                            <h3 className='seo_title'>Free SEO Report</h3>
                            <p className='seo_desc'>Get a detailed report on your website. See what you have done correctly and where your pages are lacking.</p>
                        </div>
                        </Col>
                        <Col md={4}>
                        <div className='seo_report'>
                            <img src='/images/seo/error.png' alt='img' className='img_seo'/>
                            <h3 className='seo_title'>Find SEO Issues
                            </h3>
                            <p className='seo_desc'>Easily find SEO related issues on your website and get actionable data to fix them before they become a problem.</p>
                        </div>
                        </Col>
                        <Col md={4}>
                        <div className='seo_report'>
                            <img src='/images/seo/repair.png' alt='img' className='img_seo'/>
                            <h3 className='seo_title'>Fix Issues for FREE</h3>
                            <p className='seo_desc'>Overhaul your website and get rid of all SEO issues. Ensure your website's SEO issues are fixed with the free SEO audit.</p>
                        </div>

                        </Col>

                    </Row>
                </div>

            </Container>
            </div>
        </div>
    )
}
