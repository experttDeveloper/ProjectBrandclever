import React, { useEffect, useRef, useState } from 'react';
import '../css/seo.css'
import { Button, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import qs from 'qs';
import { toast } from 'react-toastify';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import { ErrorOutline } from '@mui/icons-material';

export default function SeoAudit() {

    const [websiteUrl, SetWebsiteUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const [data, setData] = useState({})
    const section1Ref = useRef(null);
    const [placeholder, setPlaceholder] = useState('|');
    const txt = "Enter Website Url e.g. https://google.com";
    const txtLen = txt.length;
    let char = 0;

    useEffect(() => {
        let timeOut;
        const typeIt = () => {
          const humanize = Math.round(Math.random() * (200 - 30)) + 30;
          timeOut = setTimeout(() => {
            char++;
            const type = txt.substring(0, char);
            setPlaceholder(type + '|');
    
            if (char === txtLen) {
              setPlaceholder(type);
              clearTimeout(timeOut);
            } else {
              typeIt();
            }
          }, humanize);
        };
    
        typeIt();
    
        return () => clearTimeout(timeOut);
      }, []);


    function isValidURL(url) {
        const regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        return regex.test(url);
    }


    const handleScrollToSection = (sectionRef) => {
        const target = sectionRef.current;
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70, // Adjust for fixed header height
            behavior: 'smooth'
          });
        }
      };
    

    const handleSubmit = () => {

        try {
            if (!websiteUrl) {
                toast.error("Website url is required !")
                return
            }
            if (!isValidURL(websiteUrl)) {
                toast.error("Invalid Website Url!")
                return
            }

            setLoading(true);

            const data = qs.stringify({
                'url': websiteUrl
            });

            const config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://brandclever.in/developer/sm/seoaudit/seoaudit.php',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log("res",response.data)
                    if (response.data.status === "success") {
                        setShowTable(true);
                        handleScrollToSection(section1Ref);
                        setData(response.data)
                        setLoading(false);
                        return
                    }
                    setLoading(false)
                })
                .catch((error) => {
                    console.log("error", error)
                });
            setLoading(false)
        } catch (error) {
            console.log("error", error)
            toast.error("Response not found")
        }
    };
    return (
        <div className='seo_analyzer'>
            <div className='gradient_top_banner_main'>

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
                                placeholder={placeholder}
                                inputProps={{ 'aria-label': 'search google maps' }}
                                onChange={(e) => SetWebsiteUrl(e.target.value)}
                                value={websiteUrl}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <Button className='anlayze' onClick={handleSubmit} disabled={loading}>Anlayze</Button>
                            </IconButton>
                        </Paper>
                    </div>
                </div>
            </Container>
            </div>
            <div className='banner_down_main_div'>
                <Container>
                    <div className='The benefits_main'>
                        <div className='top_heading_down_sec'>
                            <h2>The benefits you'll get with SEO Analyzer</h2>
                        </div>
                        <Row>
                            <Col md={4}>
                                <div className='seo_report'>
                                    <img src='/images/seo/report.png' alt='img' className='img_seo' />
                                    <h3 className='seo_title'>Free SEO Report</h3>
                                    <p className='seo_desc'>Get a detailed report on your website. See what you have done correctly and where your pages are lacking.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='seo_report'>
                                    <img src='/images/seo/error.png' alt='img' className='img_seo' />
                                    <h3 className='seo_title'>Find SEO Issues
                                    </h3>
                                    <p className='seo_desc'>Easily find SEO related issues on your website and get actionable data to fix them before they become a problem.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='seo_report'>
                                    <img src='/images/seo/repair.png' alt='img' className='img_seo' />
                                    <h3 className='seo_title'>Fix Issues for FREE</h3>
                                    <p className='seo_desc'>Overhaul your website and get rid of all SEO issues. Ensure your website's SEO issues are fixed with the free SEO audit.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <div className='tabel_set_seo_analize_main' >
                    <Container>
                            <div class="main_div_basic_seo_page" ref={section1Ref}>
                                <div class="basic_seo_heading">
                                    <h4>Seo Reports</h4>
                                </div>
                                {
                                    showTable ? (

                                <div className='main_down_brdr'>
                                    <Row>
                                    <Col md={6}>
                                            <div className='Common_Keywords_main_div'>
                                                <div className='common_heading_main'>
                                                    <h4>Reponse Time</h4>
                                                    <h5><HelpIcon/></h5>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className='paragrap_right_side'>
                                            <h5>{data.websiteResponseTime ?<InfoIcon/> :<ErrorOutline style={{color:"#f73f3f"}}/>}</h5>
                                                <p>{data.websiteResponseTime ? `${data.websiteResponseTime} ms` : "None"}</p>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className='Common_Keywords_main_div'>
                                                <div className='common_heading_main'>
                                                    <h4>Sitemap</h4>
                                                    <h5><HelpIcon/></h5>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className='paragrap_right_side'>
                                                <h5>{data.sitemapData ?<InfoIcon/> :<ErrorOutline style={{color:"#f73f3f"}} />}</h5>
                                                <p>{data.sitemapData ? "Yes" : "Not Exist"}</p>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className='Common_Keywords_main_div'>
                                                <div className='common_heading_main'>
                                                    <h4>Robot.txt</h4>
                                                    <h5><HelpIcon/></h5>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className='paragrap_right_side'>
                                            <h5>{data.robotData ?<InfoIcon/> :<ErrorOutline style={{color:"#f73f3f"}}/>}</h5>
                                                <p>{data.robotData ? "Your site has a robots.txt file which includes one or more Disallow: directives. Make sure that you only block parts you don't want to be indexed." : "Not Exist"}</p>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className='Common_Keywords_main_div'>
                                                <div className='common_heading_main'>
                                                    <h4>Canonical Tag</h4>
                                                    <h5><HelpIcon/></h5>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className='paragrap_right_side'>
                                            <h5>{data.canonicalTag ?<InfoIcon/> :<ErrorOutline style={{color:"#f73f3f"}}/>}</h5>
                                                <p>{data.canonicalTag ? "Your homepage is using the canonical link tag." : "Not Exist"}</p>
                                            </div>
                                        </Col>
                                        
                                    </Row>
                                </div>
                                    ):(
                                        <p className='generate_reort'>No any report generated Yet.</p>
                                    )
                                }
                            </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}
