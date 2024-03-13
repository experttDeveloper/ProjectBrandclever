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
        image: "https://aronwebsolutions.com/public/front/images/Inbound_Marketing.webp",
        title: "Inbound Marketing",
        description: "We utilize Inbound Marketing strategies to seamlessly connect your business with your target audience. By creating meaningful interactions and valuable experiences, we help nurture leads and drive conversions, enhancing your brand's presence and credibility.",
        service: ["Content-Centric Approach", "Lead Generation Strategies", "Customer-Centric Engagement", "Educational Content Creation", "Relationship Building"]
    },
    {
        id: 2,
        image: "https://aronwebsolutions.com/public/front/images/SEO_optimization.webp",
        title: "Search Engine Optimization(SEO)",
        description: "We excel in SEO techniques that boost your website's ranking, making it easier for potential customers to find you. By optimizing keywords, enhancing website speed, and improving user experience, we drive organic traffic to your site and increase the chances of meaningful conversions.",
        service: ["On-Page Optimization", "Quality Backlink Building", "Keyword Research and Integration", "Site Speed and Mobile Optimization", "Analytics and Reporting"]
    },
    {
        id: 3,
        image: "https://aronwebsolutions.com/public/front/images/Social_Media_Marketing.webp",
        title: "Social Media Marketing",
        description: "We leverage social media platforms to amplify your brand's message, connect with your audience, and drive traffic that can ultimately lead to increased sales and business growth.",
        service: ["Social Platform Management", "Content Calendar Planning", "Audience Engagement Strategies", "Social Advertising Campaigns", "Social Analytics and Insights"]
    }

]


const workFlows = [
    {
        id: 1,
        image: "https://aronwebsolutions.com/public/front/images/requirement.png",
        title: "Project Analysis",
        description: "Our goal is to gain a deep understanding of your project, creating a strong foundation. This analysis is a compass, guiding us to plot the optimal route to achieve your project's future goals."
    },
    {
        id: 2,
        image: "https://aronwebsolutions.com/public/front/images/resume.png",
        title: "Innovative Ideation",
        description: "Our team brainstorms and strategizes, aiming to craft innovative digital marketing ideas. We align these ideas with your project's vision and goals, ensuring they are not only creative but also purposeful."
    },
    {
        id: 3,
        image: "https://aronwebsolutions.com/public/front/images/finalize.png",
        title: "Strategic Optimization",
        description: "We plan and implement innovative ideas to optimize your business website. The objective is clear to transform these ideas into actionable strategies that will make your project stand out"
    },
    {
        id: 4,
        image: "https://aronwebsolutions.com/public/front/images/assign-task.png",
        title: "Reach The Target",
        description: "We implement a holistic approach, covering SEO, social media, content marketing, PPC, and beyond. We track progress, analyze data, and optimize strategies to achieve and maintain that top spot."
    },
]

const questionAnsers = [
    {
        id: 1,
        question: "How can digital marketing solutions contribute to my business's revenue growth?",
        answer: "Our digital marketing solutions aim to significantly increase your sales and revenue streams through a strategic approach, engaging campaigns, and persuasive content that effectively converts traffic into leads and loyal customers."
    },
    {
        id: 2,
        question: "What advanced marketing tools does Aron Web Solution use for guaranteed results?",
        answer: "We use advanced tools such as Google Analytics, Google Ads, Semrush, Screaming Frog, Yoast SEO, ActiveCampaign, and Buffer to reach more people and ensure great results in digital marketing."
    },
    {
        id: 3,
        question: "What is Inbound Marketing, and how does it help in connecting my business with the target audience?",
        answer: "Inbound Marketing seamlessly connects your business with the target audience by creating meaningful interactions and valuable experiences. It nurtures leads and drives conversions, enhancing your brand's presence and credibility."
    },
    {
        id: 4,
        question: "How does Aron Web Solution excel in Search Engine Optimization (SEO)?",
        answer: "We excel in SEO techniques that boost your website's ranking, making it easier for potential customers to find you. Optimization of keywords, enhanced website speed, and improved user experience drive organic traffic, increasing the chances of meaningful conversions."
    },
    {
        id: 5,
        question: "How does Aron Web Solution approach Search Engine Marketing (SEM)?",
        answer: "We excel in SEM by strategically placing ads where potential customers actively search for products or services like yours. Through paid search campaigns and optimization, we maximize your ad's reach, click-through rates, and overall return on investment."
    },
    {
        id: 6,
        question: "What is the significance of Email Marketing?",
        answer: "Our Email Marketing strategies engage your audience and nurture leads with personalized, compelling email campaigns that resonate with customers and drive conversions."
    },
    {
        id: 7,
        question: "How does Pay Per Click (PPC) advertising benefit businesses, and what is Aron Web Solution's approach to strategic ad placement?",
        answer: "In PPC advertising, we strategically place ads to capture your target audience's attention. Careful selection of keywords and campaign optimization ensure relevant traffic to your website, contributing to potential conversions."
    },
    {
        id: 8,
        question: "What does the 360 Digital Marketing Approach involve, and how does it contribute to project success?",
        answer: "The 360 Digital Marketing Approach involves project analysis, innovative ideation, strategic optimization and implementation, and reaching the target. This holistic approach covers SEO, social media, content marketing, PPC, and beyond, ensuring project success through progress tracking, data analysis, and strategy optimization."
    },

]




export default function DigitalMarketing() {

    const [showContent, setShowContent] = useState(false);

    const handleShowContent = (id) => {
        setShowContent((prevSelectedQuestion) => (prevSelectedQuestion === id ? null : id));
    }

    return (
        <div>
            <TopHeader title="Digital Marketing" />
            <Container>
                <div style={{ padding: '20px' }}>
                    <Row>
                        <Col md={8}>
                            <h2>
                                Dominate
                                With Value Driven
                                Digital Marketing Service
                            </h2>
                            <p>
                                Maximize your reach, engage your customers, and Experience high ROI
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
                                Drive More Revenue Growth With Our Digital Marketing Solutions
                            </h2>
                            <p>
                                At Aron Web Solution, we are committed to delivering exceptional revenue growth through our comprehensive and targeted digital marketing solutions. Our expert team formulates and implements a strategic marketing approach to your unique business needs, aiming to significantly increase your sales and revenue streams. Through engaging campaigns and persuasive content, we effectively convert this increased traffic into leads, nurturing them into loyal customers. Partner with Aron Web Solutions to not only drive more sales but also achieve sustained revenue growth, ultimately positioning your business for long-term success in the dynamic digital landscape.
                            </p>
                        </Col>

                        <Col md={6}>
                            <img
                                src='https://aronwebsolutions.com/public/front/images/digmar_img_right.webp'
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
                                src='https://aronwebsolutions.com/public/front/images/digmar_img_left.webp'
                                height="500px"
                                width="500px"
                            />
                        </Col>

                        <Col md={6}>
                            <h1>Our Advanced Marketing Tools For Guaranteed Results</h1>
                            <p> We use these special tools to reach more people and get great results. It's like having a secret weapon for success in marketing. Find out how we guarantee success with our advanced tools and take your marketing game to the next level. Exciting results are just a click away!</p>
                            <Row>
                                <Col md={6}>
                                    <p><VerifiedIcon /> Google Analytics </p>
                                    <p><VerifiedIcon /> Google Ads </p>
                                    <p><VerifiedIcon /> Semrush </p>
                                    <p><VerifiedIcon />Screaming Frog </p>


                                </Col>
                                <Col md={6}>
                                    <p><VerifiedIcon /> Yoast SEO </p>
                                    <p><VerifiedIcon /> Active Campaign </p>
                                    <p><VerifiedIcon /> Buffer </p>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>

                <div style={{ padding: '20px' }}>
                    <h1>Our Digital Marketing Services For Proven Results</h1>
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
                    <Typography variant='h4'>Our 360 Digital Marketing Approach For Successful Project</Typography>
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
