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
import ProcessSection from '../hiredeveloper/ProcessSection';
import FaqSection from '../hiredeveloper/FaqSection';

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
        <div className='development_service nests'>
            <TopHeader title="Web Development" />
            <ContactSection
                title={<>
                    Building <br />
                    Beautiful Websites that Drive <br />
                    Results and Inspire Engagement
                </>}
                description="From concept to launch, we'll handle your website development with precision and expertise"
            // images={["https://aronwebsolutions.com/public/uploads/Laravel_upwork-55.png", "https://aronwebsolutions.com/public/uploads/Laravel_freelancer-18.png"]}
            />
            <div className='development_main_full_div'>
                <Container>


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
                                    src='https://aronwebsolutions.com/public/front/images/web_dev_right.webp'
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
                                <h2>We Use Advanced Tools To Complete Your Project</h2>
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
                </Container>
            </div>
            <div className='web_second_sdit'>
                <Container>
                    <div style={{ padding: '20px' }}>
                        <h2>Web Development Services We Offer</h2>
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
                                        <div className='Custom_lists_edit'>
                                            <p><VerifiedIcon /> <b>Customized Solutions</b> </p>
                                            <p><VerifiedIcon /> <b>Scalable Architecture</b> </p>
                                            <p><VerifiedIcon /> <b>Responsive Design </b></p>
                                            <p><VerifiedIcon /><b> User-Friendly Interface</b> </p>
                                            <p><VerifiedIcon /><b> Strong Functionality</b></p></div>
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
                                        <div className='Custom_lists_edit'>
                                            <p><VerifiedIcon /><b> Secure Payment Gateways</b> </p>
                                            <p><VerifiedIcon /><b> Product Catalog Managemen</b> </p>
                                            <p><VerifiedIcon /> <b>User-Friendly Checkout</b> </p>
                                            <p><VerifiedIcon /> <b>Mobile Optimization</b> </p>
                                            <p><VerifiedIcon /><b> Inventory Management </b></p></div>
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
                                        <div className='Custom_lists_edit'>
                                            <p><VerifiedIcon /> <b>Customized Solutions</b> </p>
                                            <p><VerifiedIcon /><b>Scalable Architecture</b> </p>
                                            <p><VerifiedIcon /> <b>Responsive Design</b> </p>
                                            <p><VerifiedIcon /> <b>User-Friendly Interface</b> </p>
                                            <p><VerifiedIcon /> <b>Strong Functionality</b></p></div>
                                    </CardContent>
                                    <Button className='get_quote_btn' size="small">Get a Quote</Button>
                                </Card>
                            </Col>
                        </Row>
                        
                    </div>
                    </Container>
                    </div>
                    <Container>
                    <ProcessSection
                        data={[
                            {
                                title: "Discovery and Consultation",
                                image: "https://aronwebsolutions.com/public/front/images/requirement.png",
                                description: "This is the phase where we learn about your brand, target audience, and the specific functionalities you envision. The more we understand, the better we can tailor the project to meet your expectations."

                            },
                            {
                                title: "Custom Design and Development",
                                image: "https://aronwebsolutions.com/public/front/images/resume.png",
                                description: "From choosing the right color schemes and layouts to incorporating your brand elements, we create a visually appealing and functional Squarespace website that aligns with your goals."
                            },
                            {
                                title: "User-Friendly Interface and Optimization",
                                image: "https://aronwebsolutions.com/public/front/images/finalize.png",
                                description: "Once the design is in place, we focus on making your Squarespace project user-friendly. We ensure that the navigation is intuitive, making it easy for visitors to explore and engage with your site."
                            },
                            {
                                title: "Launch and Ongoing Support",
                                image: "https://aronwebsolutions.com/public/front/images/assign-task.png",
                                description: "We provide ongoing support, addressing any issues, and ensuring your site stays up-to-date and performs optimally. Our goal is to see your Squarespace project thrive long after the initial launch."
                            }
                        ]}
                    />
                </Container>
         
                <FaqSection
                    data={[
                        {
                            question: "Why should I choose Aron Web Solutions for my Laravel project?",
                            answer: "We are a top web development company with certified Laravel experts, ensuring your project is handled by skilled professionals with in-depth knowledge of the Laravel framework."
                        },
                        {
                            question: "What sets Aron Web Solutions apart in Laravel development?",
                            answer: "Our team keeps up with the latest technology trends, maintains a client-centric approach, and focuses on understanding your business, ensuring personalized solutions that make your online presence stand out."
                        },
                        {
                            question: "What is your step-by-step approach to starting Laravel development services?",
                            answer: "We initiate with a comprehensive project assessment, followed by detailed planning, an agile development process, and rigorous testing and quality assurance throughout the project lifecycle."
                        },
                        {
                            question: "What types of Laravel development services do you offer?",
                            answer: "We specialize in custom web application development, API development, migration services, and CMS development using Laravel, providing tailored solutions to meet your specific business needs."
                        }, {
                            question: "How experienced is Aron Web Solutions in Laravel development?",
                            answer: "Our effective approach begins with a Project Briefing, followed by creating a Customization Blueprint, involving an iterative Development and Feedback process, and concluding with rigorous Quality Assurance before the official launch"
                        },
                        {
                            question: "Does Aron Web Solutions offer ongoing support for my BigCommerce site?",
                            answer: "Yes, our commitment doesn't end with project completion. We offer ongoing support and maintenance services to keep your BigCommerce site secure, up-to-date, and functioning optimally for long-term success."
                        },
                        {
                            question: "How does Aron Web Solutions incorporate client feedback?",
                            answer: "Throughout the Development phase, we ensure an iterative process with frequent feedback loops. This allows you to review and provide input at various stages, ensuring the project aligns with your expectations."
                        },
                        {
                            question: "What is the Project Briefing in Aron Web Solutions' approach?",
                            answer: "The Project Briefing is the first step in our approach, where we gather detailed information about your business objectives, target market, and specific features you envision for your BigCommerce store."
                        }
                    ]}
                />
        </div>
    )
}
