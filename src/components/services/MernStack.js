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
        image: "https://aronwebsolutions.com/public/front/images/MongoDB_Development.webp",
        title: "MongoDB Development",
        description: "When you choose MongoDB development, you're opting for a database solution that effortlessly scales to match your data's growth, ensuring your business stays agile and responsive to evolving requirements",
        service: ["Scalable NoSQL Databases", "Efficient Data Management", "Schema-less Data Modeling", "High-Performance Queries", "NoSQL Database Expertise"]
    },
    {
        id: 2,
        image: "https://aronwebsolutions.com/public/front/images/Node.js_Development.webp",
        title: "Node.js Development",
        description: "Our skilled experts excel in programming, enabling seamless, lightning-fast connections that effortlessly manage multiple users and data streams. Your application will give real-time features like live chat and dynamic content updates, enriching user experience and enhancing overall application usability.",
        service: ["Event-Driven Architecture", "Cross-Platform Compatibility", "Real-Time Application Development", "Extensive Module Library", "Fast and Scalable Execution"]
    },
    {
        id: 3,
        image: "https://aronwebsolutions.com/public/front/images/Express.js_Development.webp",
        title: "Express.js Development",
        description: "Our team is dedicated to boosting performance by optimizing middleware, supporting security through strong authentication, and creating APIs that seamlessly connect the front end to the back end. You're getting applications with a finely tuned back-end, ensuring secure data transfer and simplified handling.",
        service: ["Minimalist Web Application Framework", "Streamlined RESTful API Development", "Middleware Support", "Fast and Unopinionated", "Simplified Routing System"]
    }

]


const workFlows = [
    {
        id: 1,
        image: "https://aronwebsolutions.com/public/front/images/requirement.png",
        title: "Project Requirement and Planning",
        description: "The initial step involves understanding the client's vision, needs, and goals for the application. It includes detailed discussions, requirements analysis, and setting clear objectives."
    },
    {
        id: 2,
        image: "https://aronwebsolutions.com/public/front/images/resume.png",
        title: "Development and Database Setup",
        description: "The development team focuses on creating the database structure and architecture that will effectively handle data storage, retrieval, and management in the application."
    },
    {
        id: 3,
        image: "https://aronwebsolutions.com/public/front/images/finalize.png",
        title: "Design, Coding, and Testing",
        description: "This stage involves iterative cycles of coding, incorporating feedback, and rigorous testing to ensure the application meets quality standards and functional requirements."
    },
    {
        id: 4,
        image: "https://aronwebsolutions.com/public/front/images/assign-task.png",
        title: "Launch and Maintenance",
        description: "After successful testing and optimization, launch the app. Ongoing maintenance ensures the app remains efficient, secure, and up-to-date, meeting evolving user needs."
    },
]

const questionAnsers = [
    {
        id: 1,
        question: "What makes the MERN stack unique and powerful for web development?",
        answer: "The MERN stack combines MongoDB, Express.js, React, and Node.js to create highly scalable applications. Each component complements the others, providing flexibility, scalability, engaging user interfaces, and rapid application development."
    },
    {
        id: 2,
        question: "What advanced tools does Aron Web Solutions use for MERN stack development?",
        answer: "Aron Web Solutions utilizes advanced tools like MongoDB, Express.js, React, and Node.js to build highly scalable web and mobile applications. These tools accelerate development time, improve application quality, facilitate efficient deployment, and provide robust security."
    },
    {
        id: 3,
        question: "How does Aron Web Solutions enhance user interfaces with interactive UI development using the MERN stack?",
        answer: "Aron Web Solutions creates captivating user interfaces using React and Node.js, ensuring real-time updates, seamless navigation, and an edge in user satisfaction with MERN stack expertise."
    },
    {
        id: 4,
        question: "How does MongoDB benefit my business in application development?",
        answer: "MongoDB development ensures a flexible and scalable database solution that adapts to your data's growth, keeping your business agile and responsive to evolving requirements."
    },
    {
        id: 5,
        question: "What advantages does Node.js development bring to my application?",
        answer: "Node.js development by Aron Web Solutions enables seamless, lightning-fast connections, facilitating real-time features like live chat and dynamic content updates, enhancing overall application usability."
    },
    {
        id: 6,
        question: "How does Express.js development contribute to secure and efficient back-end handling?",
        answer: "Our team optimizes middleware, supports security through strong authentication, and creates APIs that seamlessly connect the front end to the back end. This ensures secure data transfer and simplified handling."
    },
    {
        id: 7,
        question: "What MERN stack services does Aron Web Solutions offer?",
        answer: "Aron Web Solutions provides MongoDB development for scalable databases, Node.js development for lightning-fast connections, Express.js development for optimized middleware and API creation, custom application development combining MERN stack technologies, interactive UI development using React and Node.js, and web services & API development for enhanced app communication."
    },
    {
        id: 8,
        question: "What is the workflow for MERN stack development at Aron Web Solutions?",
        answer: "Our workflow involves understanding client requirements, planning project objectives, developing and setting up the database, iterative cycles of design, coding, and testing, and finally launching the application with ongoing maintenance to ensure efficiency, security, and updates."
    },

]




export default function MernStack() {

    const [showContent, setShowContent] = useState(false);

    const handleShowContent = (id) => {
        setShowContent((prevSelectedQuestion) => (prevSelectedQuestion === id ? null : id));
    }

    return (
        <div>
            <TopHeader title="Mern Stack" />
            <Container>
                <div style={{ padding: '20px' }}>
                    <Row>
                        <Col md={8}>
                            <h2>
                                Develop
                                Scalable Website With
                                Dedicated MERN Stack Developers
                            </h2>
                            <p>
                                Get a Strong & secure End To End Mern stack service that delivers
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
                                Discover MERN's Power Through Our Skilled Development Services
                            </h2>
                            <p>
                                When it comes to web development, we believe in offering solutions that stand out and make a lasting impact. We have in hand expertise in advanced tools like MongoDB, Express.js, React, and Node.js (MERN stack) to create applications that not only meet but exceed expectations. What sets our MERN Stack Service apart is our deep understanding of these technologies and how they complement each other seamlessly. MongoDB provides a flexible and scalable database solution, Express.js streamlines server-side operations, React offers an engaging user interface, and Node.js ensures smooth and rapid application development. It's this unique fusion that allows us to deliver exceptional results tailored to your specific needs. Your success is our ultimate goal, and we're ready to make it happen.
                            </p>
                        </Col>

                        <Col md={6}>
                            <img
                             alt='cms_img'
                                src='https://aronwebsolutions.com/public/front/images/mern_img_right.webp'
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
                                src='https://aronwebsolutions.com/public/front/images/mern_img_left.webp'
                                height="500px"
                                width="500px"
                            />
                        </Col>

                        <Col md={6}>
                            <h1>Advanced Tools We Use For Mern Stack</h1>
                            <p> Discover the powerhouse tools driving our MERN Stack expertise for cutting-edge web development These tools help us create cool websites and apps, and you can find out how they work. It's like having a super toolkit for making exciting and interactive websites for you.</p>
                            <Row>
                                <Col md={6}>
                                    <p><VerifiedIcon /> MongoDB </p>
                                    <p><VerifiedIcon /> Express.js </p>


                                </Col>
                                <Col md={6}>
                                    <p><VerifiedIcon /> React </p>
                                    <p><VerifiedIcon /> Node.js </p>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>

                <div style={{ padding: '20px' }}>
                    <h1>Mern Stack Services We Offer</h1>
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
                    <Typography variant='h4'>Our Effective Workflow For Mern Stack Development</Typography>
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
