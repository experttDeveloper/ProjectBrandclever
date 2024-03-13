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
        image: "https://aronwebsolutions.com/public/front/images/Content_Audits.webp",
        title: "Content Audits",
        description: "A content audit involves a comprehensive assessment of your existing content. It helps identify what works, what needs improvement, and what can be repurposed or retired.",
        service: ["Assess Existing Content", "Identify Content Gaps", "Evaluate Relevance", "Analyze Performance Metrics", "Recommendations for Improvement"]
    },
    {
        id: 2,
        image: "https://aronwebsolutions.com/public/front/images/Content_Calendar%20_and_Editing.webp",
        title: "Content Calendar and Editing",
        description: "A content calendar outlines your content schedule and helps maintain consistency. It includes planning, writing, and editing content. Effective editing ensures that your content is error-free, engaging, and aligns with your brand.",
        service: ["Structured Publishing Schedule", "Editorial Calendar Management", "Content Editing and Refinement", "Consistency in Tone and Style", "Alignment with Marketing Goals"]
    },
    {
        id: 3,
        image: "https://aronwebsolutions.com/public/front/images/Content_Distribution_and_Promotion.webp",
        title: "Content Distribution and Promotion",
        description: "This service involves sharing your content across various platforms, such as social media, email, and partnerships. It's a strategy to reach your target audience and drive traffic to your content.",
        service: ["Multi-Channel Distribution", "Targeted Promotion Strategies", "Amplification Across Platforms", "Engagement Initiatives", "Metrics Tracking for Performance"]
    }

]


const workFlows = [
    {
        id: 1,
        image: "https://aronwebsolutions.com/public/front/images/requirement.png",
        title: "Client Goal Alignment",
        description: "Understanding their goals helps to customize the content to achieve specific outcomes, whether it's increasing brand awareness, driving sales, or enhancing customer engagement."
    },
    {
        id: 2,
        image: "https://aronwebsolutions.com/public/front/images/resume.png",
        title: "Audience Research and Segmentation",
        description: "This step involves creating detailed buyer personas, which enable you to create content that resonates with the specific needs and preferences of different customer segments."
    },
    {
        id: 3,
        image: "https://aronwebsolutions.com/public/front/images/finalize.png",
        title: "Content Planning and Creation",
        description: "Focus on producing high-quality, informative, and engaging content that aligns with the client's objectives and audience interests."
    },
    {
        id: 4,
        image: "https://aronwebsolutions.com/public/front/images/assign-task.png",
        title: "Performance Analysis",
        description: "Regularly monitor content performance through analytics, tracking key metrics. Use this data to make informed adjustments to your content strategy."
    },
]

const questionAnsers = [
    {
        id: 1,
        question: "What makes a killer content strategy, and why is it essential for businesses?",
        answer: "A killer content strategy targets prospective clients by addressing their pain points, goals, and motivations. It ensures successful implementation by focusing on the type of content your audience consumes and is interested in, aligning it with your brand."
    },
    {
        id: 2,
        question: "How does content strategy help in understanding the audience's interests, and what is the focus of your company in this regard?",
        answer: "Our content strategy focuses on determining the type of content your targeted audience is interested in by aligning it with your brand. We use a personalized content strategy to identify your audience's interests, goals, and preferences."
    },
    {
        id: 3,
        question: "How does a content calendar and editing contribute to maintaining consistency in content creation?",
        answer: "A content calendar outlines your content schedule, ensuring consistency in planning, writing, and editing. Effective editing ensures error-free, engaging content that aligns with your brand, contributing to a seamless content creation process."
    },
    {
        id: 4,
        question: "What modern tools does your company use to manage and improve content?",
        answer: "We use modern tools such as Jasper.ai, Grammarly, Quillbot, Plagscan, Copy.ai, Quetext, and Hemingway to manage and improve content. These tools are designed to organize, classify, and enhance your content using sophisticated algorithms"
    },
    {
        id: 5,
        question: "What is the purpose of a content audit, and how does it benefit businesses?",
        answer: "A content audit involves a comprehensive assessment of existing content, identifying what works, needs improvement, or can be repurposed or retired. It helps businesses understand the effectiveness of their content, optimize it, and enhance overall performance."
    },
    {
        id: 6,
        question: "What is the significance of content distribution and promotion?",
        answer: "Content distribution and promotion involve sharing content across various platforms to reach the target audience and drive traffic. It's a strategic approach to enhance visibility, engagement, and brand reach."
    },
    {
        id: 7,
        question: "What are conversion-focused websites and landing pages, and how do they contribute to business success?",
        answer: "Conversion-focused web pages and landing pages are designed to persuade visitors to take specific actions, such as making a purchase or signing up. Optimized for high conversion rates and user-friendly design, they contribute to business success by encouraging desired actions."
    },
    {
        id: 8,
        question: "What is the significance of optimized blog posts and articles?",
        answer: "Optimized blog posts and articles are well-researched and keyword-rich, improving search engine rankings and providing valuable information to readers. They contribute to brand authority, audience trust, and enhanced online visibility."
    },

]




export default function ContentStrategy() {

    const [showContent, setShowContent] = useState(false);

    const handleShowContent = (id) => {
        setShowContent((prevSelectedQuestion) => (prevSelectedQuestion === id ? null : id));
    }

    return (
        <div>
            <TopHeader title="Content Strategy" />
            <Container>
                <div style={{ padding: '20px' }}>
                    <Row>
                        <Col md={8}>
                            <h2>
                                Maximize
                                Meaningful Content
                                That Converts & Drives Results
                            </h2>
                            <p>
                                We deliver Content that connects and converts For Your Business
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
                            Content That Connects, Strategy That Delivers
                            </h2>
                            <p>
                            A killer content strategy always targets your prospective clients, addressing their pain points, goals, and motivation. Making content is not enough if you really want to target the audience or your strategy will be successfully implemented. It's about what type of content your audience is consuming, and what type of content they are actually interested in. This is what our company is focused on. Our content strategy will help us to know what type of content your targeted audience is interested in. We focused on aligning your content with your brand. Our personalized content strategy will help to determine your goals, KPIs, etc.
                            </p>
                        </Col>

                        <Col md={6}>
                            <img
                                src='https://aronwebsolutions.com/public/front/images/cont_stra_right.webp'
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
                                src='https://aronwebsolutions.com/public/front/images/cont_stra_left.webp'
                                height="500px"
                                width="500px"
                            />
                        </Col>

                        <Col md={6}>
                            <h1>Our Latest Tools will handle all your content</h1>
                            <p> We use some modern and up to date tools that will manage your whole content. We will manage all your content from creating to managing. Our Latest Tools are designed to help manage, organize, and improve all your content. These advanced tools use sophisticated algorithms to quickly and accurately process vast amounts of data. With these tools, we can easily organize and classify your content to bring out the best of your ideas.</p>
                            <Row>
                                <Col md={6}>
                                    <p><VerifiedIcon /> Jasper.ai </p>
                                    <p><VerifiedIcon /> Grammarly </p>
                                    <p><VerifiedIcon /> Quillbot </p>
                                    <p><VerifiedIcon />Plagscan </p>


                                </Col>
                                <Col md={6}>
                                    <p><VerifiedIcon /> Copy.ai </p>
                                    <p><VerifiedIcon /> Quetext </p>
                                    <p><VerifiedIcon /> Hemingway </p>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>

                <div style={{ padding: '20px' }}>
                    <h1>Conversion-Focused Services To Boost Your ROI</h1>
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
                    <Typography variant='h4'>Our Best Approach For Effective Content Strategy</Typography>
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
