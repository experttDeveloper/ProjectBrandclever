import React, { useState } from 'react'
import TopHeader from '../TopHeader'
import { Col, Container, Row } from 'react-bootstrap'
import HireDeveloperForm from '../HireDeveloperForm';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Email, WhatsApp } from '@mui/icons-material';

const designServices = [
    {
        id: 1,
        image: "https://aronwebsolutions.com/public/front/images/two_3d_Designs.webp",
        title: "2D/3D Designs",
        description: "Transform your ideas into visuals with Aron Web Solutions' expertly crafted 2D and 3D designs. Our skilled designers use the latest techniques to bring your concepts to life, providing a visually stunning dimension to your projects.",
        service: ["Creative Visualization", "Detailed Design Elements", "Conceptual Rendering", "3D Modeling", "High-Quality Graphics"]
    },
    {
        id: 2,
        image: "https://aronwebsolutions.com/public/front/images/Logo_Designs.webp",
        title: "Logo Designs",
        description: "Make a lasting first impression with a distinctive and memorable logo crafted by Aron Web Solutions. Our logo designs are tailored to encapsulate your brand's essence, ensuring that your identity stands out in a crowded market.",
        service: ["Unique Brand Identity", "Memorable and Timeless", "Scalable and Versatile", "Conceptual Symbolism", "Consistent with Branding"]
    },
    {
        id: 3,
        image: "https://aronwebsolutions.com/public/front/images/Mobile_Application_Designs.webp",
        title: "Mobile Application Designs",
        description: "Enrich user experiences and engagement through our mobile application designs. Aron Web Solutions combines creativity and functionality, resulting in an outstanding mobile app design.",
        service: ["Intuitive User Interfaces", "Responsive Design", "User-Centric Navigation", "Cross-Platform Consistency", "Engaging Visual Elements"]
    }

]


const designApproach = [
    {
        id: 1,
        image: "https://aronwebsolutions.com/public/front/images/requirement.png",
        title: "Start With Brief",
        description: "We initiate the process with a comprehensive briefing session, where we collect and discuss vital project specifics. This session serves as the cornerstone for a prosperous and well-planned design project."
    },
    {
        id: 2,
        image: "https://aronwebsolutions.com/public/front/images/resume.png",
        title: "Brainstorm Design Ideas",
        description: "At this stage, we create an environment where ideas flow freely. We explore diverse directions and innovative approaches to breathe life into the project's vision, ensuring it takes on a vibrant and imaginative form."
    },
    {
        id: 3,
        image: "https://aronwebsolutions.com/public/front/images/finalize.png",
        title: "Review Process",
        description: "This involves evaluating alignment with project goals, creativity, and client specifications. Constructive feedback guides the iterative refinement of designs, ensuring they meet the desired standards."
    },
    {
        id: 4,
        image: "https://aronwebsolutions.com/public/front/images/assign-task.png",
        title: "Present Final Product",
        description: "This stage involves showcasing the finished product. Transparent collaboration with the client allows for any necessary adjustments, resulting in a design that exceeds expectations and aligns perfectly with the project's objectives."
    },
]

const questionAnsers = [
    {
        id: 1,
        question: "Why should I choose Aron Web Solutions for graphic design services?",
        answer: "Aron Web Solutions is dedicated to maintaining high-quality graphic design services. With a portfolio of successful projects and satisfied clients, we use sophisticated graphic design software and technologies to transform your ideas into compelling visuals that drive brand objectives."
    },
    {
        id: 2,
        question: "What makes your graphic design approach unique?",
        answer: "We believe in collaborative partnerships, ensuring that every design we create reflects your brand's essence. Our approach involves a deep understanding of your vision to craft graphics that resonate with your target audience."
    },
    {
        id: 3,
        question: "What is Aron Web Solutions' effective approach to delivering the best graphic design results?",
        answer: "We start with a comprehensive briefing session, brainstorm design ideas, involve a review process for iterative refinement, and finally present the finished product through transparent collaboration with the client to ensure the design exceeds expectations and aligns perfectly with the project's objectives."
    },
    {
        id: 4,
        question: "How can 2D/3D designs benefit my project?",
        answer: "We expertly crafted 2D and 3D designs bring your ideas to life, adding a visually stunning dimension to your projects. Our skilled designers use the latest techniques to transform concepts into compelling visuals."
    },
    {
        id: 5,
        question: "How does Aron Web Solutions give a new edge to mobile application designs?",
        answer: "We enrich user experiences and engagement through creative and functional mobile application designs. Our approach combines creativity and functionality to deliver outstanding mobile app designs."
    },
    {
        id: 6,
        question: "What services does Aron Web Solutions offer for branding collateral?",
        answer: "We craft impactful business cards, brochures, and other branding collateral that reflect your brand identity. Our designs leave a lasting impression on clients and stakeholders, representing your brand's personality exceptionally."
    },
    {
        id: 7,
        question: "How can banner and packaging designs impact my product's visibility?",
        answer: "Our eye-catching banner and packaging designs ensure your product stands out in the digital business or on store shelves. Aron Web Solutions emphasizes designs that speak volumes about your product, enticing your target audience and setting you apart in the market."
    },
    {
        id: 8,
        question: "Which advanced graphic design tools does Aron Web Solutions use?",
        answer: "Aron Web Solutions utilizes industry-leading tools such as Adobe Photoshop, Illustrator, InDesign, Figma, After Effects, Premiere Pro, Corel Draw, Adobe XD, Blender, and ZBrush to create eye-catching and creative designs that grab attention."
    },

]




export default function GraphicDesign() {

    const [showContent, setShowContent] = useState(false);

    const handleShowContent = (id) => {
        setShowContent((prevSelectedQuestion) => (prevSelectedQuestion === id ? null : id));
    }

    return (
        <div>
            <TopHeader title="Graphic Design" />
            <Container>
                <div style={{ padding: '20px' }}>
                    <Row>
                        <Col md={8}>
                            <h2>
                                Experience
                                Eye Catchy Visuals
                                With Premium Design Service
                            </h2>
                            <p>
                                We Create Designs with a purpose and deliver the best results.
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
                                Presenting Your Marketing Features with Creative Graphic Design
                            </h2>
                            <p>
                                At Aron Web Solutions, we believe in maintaining high and best quality graphic design services. We transform your ideas into a clear vision for driving brand objectives through graphic design, using sophisticated, industry leading graphic design software and technologies. With an impressive portfolio of successful projects and satisfied clients, we showcase our ability to craft compelling graphics that resonate with your target audience. We believe in collaborative partnerships, ensuring that every design we create is a reflection of your brand's essence.
                            </p>
                        </Col>

                        <Col md={6}>
                            <img
                                src='https://aronwebsolutions.com/public/front/images/graphic_img_right.webp'
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
                                src='https://aronwebsolutions.com/public/front/images/graphic_img_left.webp'
                                height="500px"
                                width="500px"
                            />
                        </Col>

                        <Col md={6}>
                            <h1>Advanced Graphic Design Tools For Catchy & Creative Designs</h1>
                            <p> The tools that will make high-converting visuals, and striking designs for your next project. These special tools help us create eye-catching and super creative designs that grab attention. It's like having a cool set of design superpowers! Find out how we use these tools to make our designs stand out and look amazing.</p>
                            <Row>
                                <Col md={6}>
                                    <p><VerifiedIcon /> Adobe Photoshop </p>
                                    <p><VerifiedIcon /> Adobe Illustrator </p>
                                    <p><VerifiedIcon /> Adobe InDesign </p>
                                    <p><VerifiedIcon /> Figma </p>
                                    <p><VerifiedIcon /> After Effect </p>
                                </Col>
                                <Col md={6}>
                                    <p><VerifiedIcon /> Adobe premiere pro </p>
                                    <p><VerifiedIcon /> Corel draw </p>
                                    <p><VerifiedIcon /> Adobe xd </p>
                                    <p><VerifiedIcon /> Blender </p>
                                    <p><VerifiedIcon /> ZBrush </p>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>

                <div style={{ padding: '20px' }}>
                    <h1>Transform Your Brand With Our Creative Graphic Design Services</h1>
                    <Row>
                        {designServices.map((ele, key) => {
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
                                        <Button variant="contained" size="small">Get a Quote</Button>
                                    </Card>
                                </Col>
                            )
                        })}

                    </Row>
                </div>

                <div style={{ padding: '20px' }}>
                    <Typography variant='h4'>Our Approach To Effective Web Development Process</Typography>
                    <Row>
                        {designApproach.map((ele, key) => {
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
