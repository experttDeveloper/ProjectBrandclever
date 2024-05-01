import React, { useState } from 'react'
import TopHeader from '../components/TopHeader'
import { Col, Container, Row } from 'react-bootstrap'
import HireDeveloperForm from '../components/HireDeveloperForm';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Email, WhatsApp } from '@mui/icons-material';

const services = [
    {
        id: 1,
        image: "https://aronwebsolutions.com/public/front/images/PHP_CMS_Development.webp",
        title: "Framework CMS Development",
        description: "Framework CMS development allows for a more efficient and customizable way of creating, organizing, and publishing digital content on a website.",
        service: ["Content Management Interface", "Multi-language Support", "Version Control and Revision History", "SEO Optimization Tools", "Responsive Design Support"]
    },
    {
        id: 2,
        image: "https://aronwebsolutions.com/public/front/images/Custom_PHP_Framework_Development.webp",
        title: "Custom Framework Development",
        description: "Build a unique and scalable framework With a more personalized approach to building websites and applications, giving a more efficient and effective result.",
        service: ["Modular Architecture", "Scalability and Flexibility", "Granular Security Controls", "Site Optimized Performance", "API Support for Integration"]
    },
    {
        id: 3,
        image: "https://aronwebsolutions.com/public/front/images/PHP_Framework_API_Integration.webp",
        title: "Framework API Integration",
        description: "With this service, The framework becomes more versatile and able to handle a wide range of tasks, making it a valuable tool for businesses and developers.",
        service: ["Versatile API Support", "Data Synchronization", "Authentication Mechanisms", "Error Handling and Logging", "Rate Limiting and Throttling"]
    }

]


const workFlows = [
    {
        id: 1,
        image: "https://aronwebsolutions.com/public/front/images/requirement.png",
        title: "Project Assessment and Planning",
        description: "Before diving into framework development, it's essential to assess the project's goals, scope, and specific needs. Plan the project timeline and allocate resources accordingly. Choose the most suitable framework based on the project's requirements to set the foundation for development."
    },
    {
        id: 2,
        image: "https://aronwebsolutions.com/public/front/images/resume.png",
        title: "Development and Customization",
        description: "Develop core functionalities like routing, database interactions, and security measures. Customize and extend the framework by implementing necessary plugins and extensions, ensuring adherence to coding best practices."
    },
    {
        id: 3,
        image: "https://aronwebsolutions.com/public/front/images/finalize.png",
        title: "Integration and Testing",
        description: "Thoroughly test the framework, including unit and functional testing, to identify and rectify bugs and performance issues. Security measures should be in place to safeguard against potential vulnerabilities."
    },
    {
        id: 4,
        image: "https://aronwebsolutions.com/public/front/images/assign-task.png",
        title: "Deployment and Maintenance",
        description: "Provide ongoing maintenance and updates to keep the framework secure and up-to-date. Be prepared to offer user support and promptly address any post-deployment issues that may arise. These steps ensure a successful framework service according to the project needs."
    },
]

const questionAnsers = [
    {
        id: 1,
        question: "What is the framework service, and how can it benefit my website?",
        answer: "The framework is a comprehensive platform designed to build visually appealing, highly functional, and user-friendly websites. It ensures optimal performance across various devices, providing a seamless browsing experience for your customers."
    },
    {
        id: 2,
        question: "How does your Custom Framework Development service benefit my projects?",
        answer: "Custom Framework Development provides a more personalized approach to building websites and applications, resulting in a unique, scalable, and effective solution for your specific needs."
    },
    {
        id: 3,
        question: "How do advanced framework tools contribute to project success?",
        answer: "Advanced framework tools, including Laravel, Codeigniter, Cake PHP, and others, enhance efficiency and enable the creation of visually stunning and functional projects. These tools ensure precision and success in project development."
    },
    {
        id: 4,
        question: "What are the advantages of Framework CMS Development?",
        answer: "Framework CMS Development offers an efficient and customizable way to create, organize, and publish digital content on a website. It streamlines content management and enhances the overall user experience."
    },
    {
        id: 5,
        question: "How flexible is your framework service for different business needs?",
        answer: "Our framework is highly flexible and versatile, catering to diverse industries and business requirements. It can be tailored to meet specific needs, making it an ideal solution for businesses across various sectors."
    },
    {
        id: 6,
        question: "What is Framework API Integration, and why is it valuable for businesses?",
        answer: "Framework API Integration enhances the versatility of the framework, enabling it to handle a wide range of tasks. This makes it a valuable tool for businesses and developers seeking efficient and multifunctional solutions."
    },
    {
        id: 7,
        question: "How do Framework Plugins increase the overall framework experience?",
        answer: "Framework Plugins add new features, improve performance, and provide a more user-friendly experience, making the framework more appealing and adaptable to users' needs."
    },
    {
        id: 8,
        question: "What do Performance & Testing involve in the framework services?",
        answer: "Performance & Testing involve fine-tuning the framework for optimal speed and responsiveness, ensuring a smooth and efficient user experience."
    },

]




export default function Framework() {

    const [showContent, setShowContent] = useState(false);

    const handleShowContent = (id) => {
        setShowContent((prevSelectedQuestion) => (prevSelectedQuestion === id ? null : id));
    }

    return (
        <div>
            <TopHeader title="Framework" />
            <Container>
                <div style={{ padding: '20px' }}>
                    <Row>
                        <Col md={8}>
                            <h2>
                                Building
                                A Solid Foundation With
                                Our Expert Framework Service
                            </h2>
                            <p>
                                Simplify your website management with our premium framework service
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
                                Building powerful websites with our Unbeatable Framework Services
                            </h2>
                            <p>
                                Our Unbeatable framework is a comprehensive and advanced platform that allows you to build websites that are visually appealing, highly functional, and user-friendly. With the framework, we can create the best and most responsive websites that are optimized for all devices and screen sizes. This means that your website will look and perform equally well on desktops, tablets, and smartphones, giving your customers a smooth browsing experience regardless of the device they are using. One of the key features of our Unbeatable framework is its flexibility and versatility. No matter what your business or industry, our framework can be according to meet all your specific needs and requirements. We have incorporated all the necessary elements and techniques to optimize your website's performance and visibility, helping you reach a wider audience and attract potential customers.
                            </p>
                        </Col>

                        <Col md={6}>
                            <img
                             alt='cms_img'
                                src='https://aronwebsolutions.com/public/front/images/frame_img_right.webp'
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
                                src='https://aronwebsolutions.com/public/front/images/frame_img_left.webp'
                                height="500px"
                                width="500px"
                            />
                        </Col>

                        <Col md={6}>
                            <h1>Simplify your projects with the perfect framework tools for precision and success.</h1>
                            <p> We use advanced framework tools to create your projects to perfection. These tools not only help us achieve a higher level of efficiency but also let us create and design beautiful projects that stand out from the rest. With the advanced tools, we can create stunning visuals and functionality for our projects quickly and easily.</p>
                            <Row>
                                <Col md={6}>
                                    <p><VerifiedIcon /> Laravel </p>
                                    <p><VerifiedIcon /> Codeigniter </p>
                                    <p><VerifiedIcon /> Cake PHP </p>
                                    <p><VerifiedIcon />Yii 2 </p>
                                    <p><VerifiedIcon />Symphony </p>


                                </Col>
                                <Col md={6}>
                                    <p><VerifiedIcon /> Fuel PHP </p>
                                    <p><VerifiedIcon />Jquery </p>
                                    <p><VerifiedIcon /> Reactjs </p>
                                    <p><VerifiedIcon /> Vuejs </p>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>

                <div style={{ padding: '20px' }}>
                    <h1>World Class Framework Services for Your Creative Projects</h1>
                    <Row>
                        {services.map((ele, key) => {
                            return (
                                <Col md={4} >
                                    <Card sx={{ maxWidth: 345, padding: '10px' }} key={key}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={ele.image}
                                            alt="Product Image"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {ele.title}
                                            </Typography>
                                            <Typography variant="p" color="text.secondary">
                                                {ele.description}
                                            </Typography>
                                            {ele.service.map((service, key) => {
                                                return (
                                                    <p key={key}><VerifiedIcon /> {service} </p>
                                                )
                                            })}
                                        </CardContent>
                                        <Button className='get_quote_btn' size="small">Get a Quote</Button>
                                    </Card>
                                </Col>
                            )
                        })}

                    </Row>
                </div>

                <div style={{ padding: '20px' }}>
                    <Typography variant='h4'>Reach New Heights With Our Step By Step Framework Process</Typography>
                    <Row>
                        {workFlows.map((ele, key) => {
                            return (

                                <Col md={3}>
                                    <img src={ele.image}
                                        style={{ border: '2px solid gray', borderRadius: '50%' }}
                                        alt='cms_img'
                                    />
                                    <Typography variant='h5'> {ele.title} </Typography>
                                    <Typography variant='p'> {ele.description} </Typography>
                                </Col>
                            )
                        })}

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
