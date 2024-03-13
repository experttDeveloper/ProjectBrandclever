import React, { useState } from 'react'
import TopHeader from '../TopHeader'
import { Col, Container, Row } from 'react-bootstrap'
import HireDeveloperForm from '../HireDeveloperForm';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Email, WhatsApp } from '@mui/icons-material';

const services = [
    {
        id: 1,
        image: "https://aronwebsolutions.com/public/front/images/Content_Creation_and_Storage.webp",
        title: "Content Creation and Storage",
        description: "Create and store your content easily with user-friendly CMS tools, ensuring your website's message is clear and engaging.",
        service: ["Dynamic Content Creation", "Centralized Content Storage", "Version Control Features", "Multimedia Integration", "Scalable Content Management"]
    },
    {
        id: 2,
        image: "https://aronwebsolutions.com/public/front/images/User_Access_Control.webp",
        title: "User Access Control",
        description: "Maintain security and control by assigning specific access rights to users, protecting your content from unauthorized changes.",
        service: ["Role-Based Access Permissions", "User Authentication Feature", "Secure User Authorization", "Granular Control Levels", "Activity Logging"]
    },
    {
        id: 3,
        image: "https://aronwebsolutions.com/public/front/images/Workflow_Automation.webp",
        title: "Workflow Automation",
        description: "Fasting your content creation process with automated workflows, reducing manual tasks, and enhancing efficiency.",
        service: ["Content Approval", "Automated Publishing Processes", "Task Assignment and Tracking", "Workflow Customization", "Time-Effective Content Lifecycle"]
    }

]


const workFlows = [
    {
        id: 1,
        image: "https://aronwebsolutions.com/public/front/images/requirement.png",
        title: "Project Initiation",
        description: "This is where you set the foundation for the entire project. Identify what you aim to achieve and why it matters. In addition, outline the project's scope, specifying the deliverables, timelines, and budget constraints."
    },
    {
        id: 2,
        image: "https://aronwebsolutions.com/public/front/images/resume.png",
        title: "Planning and Strategy",
        description: "This plan is the roadmap that guides your project from start to finish. Identify potential risks and create strategies to mitigate them to minimize any disruptions during the project."
    },
    {
        id: 3,
        image: "https://aronwebsolutions.com/public/front/images/finalize.png",
        title: "Execution and Monitoring",
        description: "Monitor the project's progress closely, comparing it to the plan to gauge how well you're staying on track. This phase is all about bringing your plan to life and ensuring it stays on course."
    },
    {
        id: 4,
        image: "https://aronwebsolutions.com/public/front/images/assign-task.png",
        title: "Project Closure",
        description: "Begin by conducting a thorough quality assurance review to ensure all project objectives have been met and that the final product aligns with expectations. Document the project's outcomes and compile a final report."
    },
]

const questionAnsers = [
    {
        id: 1,
        question: "What is a Content Management System (CMS), and why is it crucial for online business?",
        answer: "A Content Management System (CMS) is a digital workspace where you create, organize, and publish web content. It serves as the backbone of your online presence, empowering you to control every aspect of your website without requiring deep technical expertise."
    },
    {
        id: 2,
        question: "How does your Custom Framework Development service benefit my projects?",
        answer: "Advanced content management systems utilize smart tools to streamline content management by organizing data quickly, storing it securely, tracking data, and increasing productivity and efficiency in content management."
    },
    {
        id: 3,
        question: "Which CMS platforms do your company specialize in, and how do you determine the best-fit solution for clients?",
        answer: "We specialize in various CMS platforms, including WordPress, Joomla, Drupal, Typo3, Umbraco, Kentiko, and DotnetNuke. We determine the best-fit solution by understanding the unique requirements of clients and selecting the CMS platform that aligns with their needs."
    },
    {
        id: 4,
        question: "What are the key benefits of using CMS services for content creation?",
        answer: "Workflow Automation in CMS involves automating workflows to fast-track the content creation process, reducing manual tasks, and enhancing efficiency."
    },
    {
        id: 5,
        question: "What is Workflow Automation in CMS?",
        answer: "Workflow Automation in CMS involves automating workflows to fast-track the content creation process, reducing manual tasks, and enhancing efficiency."
    },
    {
        id: 6,
        question: "What role does Content Analytics play in CMS, and how does it enable data-driven decisions for content strategy?",
        answer: "Content Analytics in CMS provides insights into content performance, enabling data-driven decisions for content strategy."
    },
    {
        id: 7,
        question: "What are Content Migration Services, and how do they ensure a smooth transition between platforms?",
        answer: "Content Migration Services involve transferring content from one platform to another, ensuring a smooth transition with expert services."
    },
    {
        id: 8,
        question: "What is the step-by-step process of your CMS Solutions, and how does it maximize content ROI for clients?",
        answer: "Our CMS Solutions involve project initiation, planning and strategy, execution and monitoring, and project closure. This process sets the foundation, creates a roadmap, monitors progress, and ensures a quality outcome to maximize content ROI for clients."
    },

]




export default function CMSSolution() {

    const [showContent, setShowContent] = useState(false);

    const handleShowContent = (id) => {
        setShowContent((prevSelectedQuestion) => (prevSelectedQuestion === id ? null : id));
    }

    return (
        <div>
            <TopHeader title="CMS Solutions" />
            <Container>
                <div style={{ padding: '20px' }}>
                    <Row>
                        <Col md={8}>
                            <h2>
                                Organize,
                                Optimize Your Content
                                With Our Management Service

                            </h2>
                            <p>
                                Simply Your content with our Top Notch Content management service
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
                                Organize Your Content with Ease using Our CMS
                            </h2>
                            <p>
                                A Content Management System, or CMS, is the backbone of your online presence. It's the digital workspace where you create, organize, and publish your web content, whether it's text, images, videos, or any other media. A CMS empowers you to control every facet of your website, without requiring in-depth technical expertise. Our experts have extensive experience in designing, developing, and maintaining CMS solutions. We have a great understanding of various CMS platforms, ensuring you receive the best-fit solution for your unique requirements.
                            </p>
                        </Col>

                        <Col md={6}>
                            <img
                                src='https://aronwebsolutions.com/public/front/images/cms_img_right.webp'
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
                                src='https://aronwebsolutions.com/public/front/images/cms_img_left.webp'
                                height="500px"
                                width="500px"
                            />
                        </Col>

                        <Col md={6}>
                            <h1>Smart tools for smarter content management system!</h1>
                            <p> Advanced content management systems use smart tools to make the process of content management easier. These tools help to streamline the organizational process of managing content. Smart tools help to organize data quickly and store it securely. These advanced tools also help to track data and increase productivity and efficiency when managing content.</p>
                            <Row>
                                <Col md={6}>
                                    <p><VerifiedIcon /> Wordpress </p>
                                    <p><VerifiedIcon /> Joomla </p>
                                    <p><VerifiedIcon /> Drupal </p>
                                    <p><VerifiedIcon />Typo3 </p>


                                </Col>
                                <Col md={6}>
                                    <p><VerifiedIcon /> Umbraco </p>
                                    <p><VerifiedIcon />Kentico </p>
                                    <p><VerifiedIcon /> DotnetNuke </p>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>

                <div style={{ padding: '20px' }}>
                    <h1>Expand Your Content Horizons with CMS Services</h1>
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
                    <Typography variant='h4'>Maximize Your Content ROI with Our Step by Step CMS Solutions</Typography>
                    <Row>
                        {workFlows.map((ele, key) => {
                            return (

                                <Col md={3}>
                                    <img src={ele.image}
                                        style={{ border: '2px solid gray', borderRadius: '50%' }}
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
