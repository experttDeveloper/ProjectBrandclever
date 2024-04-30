import React, { useState } from 'react'
import TopHeader from '../TopHeader'
import { Col, Container, Row } from 'react-bootstrap'
import HireDeveloperForm from '../HireDeveloperForm';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Email, WhatsApp } from '@mui/icons-material';
import ContactSection from '../hiredeveloper/ContactSection';

const questionAnsers = [
    {
        id: 1,
        question: "What sets your web development service apart from others?",
        answer: "We stand out by prioritizing top-notch apps, ensuring a clear and smooth development process, and leveraging over eleven years of experience partnering with major companies across diverse fields."
    },
    {
        id: 2,
        question: "What technologies do you use in your web development projects?",
        answer: "Our dedicated team employs cutting-edge tools, including PHP frameworks, WordPress, Shopify, Nodejs, React js, and Angular, to deliver exceptional results tailored to your project's needs."
    },
    {
        id: 3,
        question: "How do you ensure a smooth integration for e-commerce development projects?",
        answer: "Our team crafts easy-to-use online stores tailored to your needs, ensuring seamless integration with your existing tech tools and offering expertise in both full-scale platforms and enhancements."
    },
    {
        id: 4,
        question: "Can you explain your approach to web application development?",
        answer: "From design to ongoing maintenance, we handle all aspects to ensure a secure, scalable, and seamless experience across various devices and platforms."
    },
    {
        id: 5,
        question: "What services do you provide for Magento website development?",
        answer: "We specialize in building customized Magento stores, from the ground up or through seamless migration. Our services cover theme development, integrations, and security implementation."
    },
    {
        id: 6,
        question: "Why is CMS development crucial for an effective online presence?",
        answer: "A well-organized website is essential, and we specialize in developing and streamlining Content Management Systems (CMS) for all types of websites, including informational and e-commerce platforms."
    },
    {
        id: 7,
        question: "What is your strategy for web app development projects?",
        answer: "We adopt a strategic approach, delving into the intricacies of your business model, market dynamics, and product positioning to deliver tailored solutions."
    },
    {
        id: 8,
        question: "How do you ensure the quality of your web development projects?",
        answer: "We maintain an agile and efficient development process, leveraging highly skilled teams overseen by experienced managers. Rigorous testing is conducted to deliver bug-free, reliable, safe, and secure solutions for a seamless user experience."
    },

]

export default function WebDevelopment() {

    const [showContent, setShowContent] = useState(false);

    const handleShowContent = (id) => {
        setShowContent((prevSelectedQuestion) => (prevSelectedQuestion === id ? null : id));
    }



    return (
        <div className='development_service'>
            <TopHeader title="Web Development" />
            <ContactSection
                title="Building
                Beautiful Websites that Drive
                Results and Inspire Engagement"
                description="From concept to launch, we'll handle your website development with precision and expertise"
                // images={["https://aronwebsolutions.com/public/uploads/Laravel_upwork-55.png", "https://aronwebsolutions.com/public/uploads/Laravel_freelancer-18.png"]}
            />
            <Container>
                <div style={{ padding: '20px' }}>
                    <Row>
                        <Col md={8}>
                            <h2>
                                Building
                                Beautiful Websites that Drive
                                Results and Inspire Engagement
                            </h2>
                            <p>
                                From concept to launch, we'll handle your website development with precision and expertise
                            </p>
                            <Row>
                                <Col md={6}>
                                    <p><WhatsApp /> +91-00000-00000</p>
                                </Col>
                                <Col md={6}>
                                    <p><Email />career@brandclever.in</p>
                                </Col>

                            </Row>
                        </Col>

                        <Col md={4}>
                            <HireDeveloperForm />
                        </Col>
                    </Row>
                </div>

                <div style={{ padding: '20px' }}>
                    <Row>
                        <Col md={6}>
                            <h2>
                                Web Development Service
                            </h2>
                            <p>
                                Our company specializes in creating websites and online applications using the latest and coolest technologies available. Our skilled team of developers can handle different types of projects, like making websites that customers can interact with and creating internal systems for managing things. What sets us apart is that we prioritize making top-notch apps and making sure the development process is clear and smooth. We're all about giving you the best web experience possible! For more than eleven years, we've partnered with big companies across 10 diverse fields. We've honed our skills and knowledge by using the latest and best technologies on the internet, working with some of the most popular brands online. Our focus is on making sure we use the newest and most effective tools to build your web application, tailoring it to your needs. We've got the expertise to make your project shine!
                            </p>
                        </Col>

                        <Col md={6}>
                            <img
                             alt='cms_img'
                                src='http
                                s://aronwebsolutions.com/public/front/images/web_dev_right.webp'
                                height="500px"
                                width="500px"
                            />
                        </Col>
                    </Row>
                </div>

                <div style={{ padding: '20px' }}>
                    <Row>
                        <Col md={6}>
                            <img
                             alt='cms_img'
                                src='https://aronwebsolutions.com/public/front/images/web_dev_left.webp'
                                height="500px"
                                width="500px"
                            />
                        </Col>

                        <Col md={6}>
                            <h1>We Use Advanced Tools To Complete Your Project</h1>
                            <p> Our dedicated team of development ensure that all our projects are built with the most updated applications, coding languages, and technologies, enabling us to create stunning results for our clients. Not only do we use the best tools, but our process is tailored to individually suit each project, ensuring that the final product is one that both our clients and we are proud of.</p>
                            <Row>
                                <Col md={6}>
                                    <p><VerifiedIcon /> PHP frameworks </p>
                                    <p><VerifiedIcon /> WordPress </p>
                                    <p><VerifiedIcon /> Shopify </p>
                                </Col>
                                <Col md={6}>
                                    <p><VerifiedIcon /> Node js </p>
                                    <p><VerifiedIcon /> React js </p>
                                    <p><VerifiedIcon /> Angular js </p>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>

                <div style={{ padding: '20px' }}>
                    <h1>Web Development Services We Offer</h1>
                    <Row>
                        <Col md={4} >
                            <Card sx={{ maxWidth: 345, padding: '10px' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://via.placeholder.com/345x140"
                                    alt="Product Image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Web Application Development
                                    </Typography>
                                    <Typography variant="p" color="text.secondary">
                                        We handle everything from design and integration to ongoing maintenance, ensuring a secure, scalable, and seamless experience across all devices and platforms.
                                    </Typography>
                                    <p><VerifiedIcon /> Customized Solutions </p>
                                    <p><VerifiedIcon /> Scalable Architecture </p>
                                    <p><VerifiedIcon /> Responsive Design </p>
                                    <p><VerifiedIcon /> User-Friendly Interface </p>
                                    <p><VerifiedIcon /> Strong Functionality</p>
                                </CardContent>
                                <Button className='get_quote_btn' size="small">Get a Quote</Button>
                            </Card>
                        </Col>
                        <Col md={4} >
                            <Card sx={{ maxWidth: 345, padding: '10px' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://via.placeholder.com/345x140"
                                    alt="Product Image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        E-commerce Development
                                    </Typography>
                                    <Typography variant="p" color="text.secondary">
                                        Craft an easy-to-use online store tailored to your needs. Our team ensures smooth integration with your current tech tools, offering expertise in both full-scale e-commerce platforms and platform enhancements.
                                    </Typography>
                                    <p><VerifiedIcon /> Secure Payment Gateways </p>
                                    <p><VerifiedIcon /> Product Catalog Managemen </p>
                                    <p><VerifiedIcon /> User-Friendly Checkout </p>
                                    <p><VerifiedIcon /> Mobile Optimization </p>
                                    <p><VerifiedIcon /> Inventory Management</p>
                                </CardContent>
                                <Button className='get_quote_btn' size="small">Get a Quote</Button>
                            </Card>
                        </Col>
                        <Col md={4} >
                            <Card sx={{ maxWidth: 345, padding: '10px' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://via.placeholder.com/345x140"
                                    alt="Product Image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Web Application Development
                                    </Typography>
                                    <Typography variant="p" color="text.secondary">
                                        We handle everything from design and integration to ongoing maintenance, ensuring a secure, scalable, and seamless experience across all devices and platforms.
                                    </Typography>
                                    <p><VerifiedIcon /> Customized Solutions </p>
                                    <p><VerifiedIcon /> Scalable Architecture </p>
                                    <p><VerifiedIcon /> Responsive Design </p>
                                    <p><VerifiedIcon /> User-Friendly Interface </p>
                                    <p><VerifiedIcon /> Strong Functionality</p>
                                </CardContent>
                                <Button className='get_quote_btn' size="small">Get a Quote</Button>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <div style={{ padding: '20px' }}>
                    <Typography variant='h4'>Our Approach To Effective Web Development Process</Typography>
                    <Row>

                        <Col md={3}>
                            <img src='https://aronwebsolutions.com/public/front/images/requirement.png'  alt='cms_img' style={{ border: '2px solid gray', borderRadius: '50%' }} />
                            <Typography variant='h5'> Strategy </Typography>
                            <Typography variant='p'> We adopt a strategic approach to web app development, delving into the intricacies of your business model, market dynamics, and product positioning. </Typography>
                        </Col>
                        <Col md={3}>
                            <img src='https://aronwebsolutions.com/public/front/images/requirement.png'  alt='cms_img' style={{ border: '2px solid gray', borderRadius: '50%' }} />
                            <Typography variant='h5'> Product Design </Typography>
                            <Typography variant='p'> Our methodology involves assembling a multidisciplinary team comprising Strategists, Designers, and Developers. </Typography>
                        </Col>
                        <Col md={3}>
                            <img src='https://aronwebsolutions.com/public/front/images/requirement.png'  alt='cms_img' style={{ border: '2px solid gray', borderRadius: '50%' }} />
                            <Typography variant='h5'> Development </Typography>
                            <Typography variant='p'> We maintain an agile and efficient development process, leveraging highly skilled teams. Each project is overseen by experienced managers dedicated to maintaining high standards of code quality. </Typography>
                        </Col>
                        <Col md={3}>
                            <img src='https://aronwebsolutions.com/public/front/images/requirement.png'  alt='cms_img' style={{ border: '2px solid gray', borderRadius: '50%' }} />
                            <Typography variant='h5'> Quality Assurance </Typography>
                            <Typography variant='p'> We conduct rigorous testing to detect and rectify any bugs or issues. Our aim is to deliver solutions that are not only bug-free but also reliable, safe, and secure for a seamless user experience. </Typography>
                        </Col>
                    </Row>
                </div>

                <div style={{ padding: '20px' }}>
                    <h2>
                        Frequently Asked Questions
                    </h2>
                    <Row>
                        {questionAnsers.map((ele, key) => {
                            return (
                                <Col md={6} key={key}>
                                    <p onClick={() => handleShowContent(ele.id)}> {ele.question}
                                        {showContent === ele.id ? <RemoveIcon /> : <AddIcon />} </p>
                                    {showContent === ele.id && <p>{ele.answer}</p>}
                                </Col>
                            )
                        })}

                    </Row>
                </div>
            </Container>
        </div>
    )
}
