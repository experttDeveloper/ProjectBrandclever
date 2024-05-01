import React, { } from 'react'
import TopHeader from '../components/TopHeader'
import { Container } from 'react-bootstrap'
import ContactSection from '../components/hiredeveloper/ContactSection';
import ProcessSection from '../components/hiredeveloper/ProcessSection';
import FaqSection from '../components/hiredeveloper/FaqSection';
import ServiceSection from '../components/services/ServiceSection';
import TestimonialSection from '../components/services/TestimonialSection';

export default function WebDesigning() {
    return (
        <div className='development_service nests'>
            <TopHeader title="Web Designing" />
            <ContactSection
                title={<>
                    Designing <br />
                    Stunning Websites With <br />
                    Our Expert Website Designer
                </>}
                description="Attract, engage, and convert with our impactful website design service"

            />
            <ServiceSection
                data={[
                    {
                        title: 'Get User-Friendly Website For Higher Conversion',
                        description: "We're India's leading website design agency, crafting websites that are both search engine friendly and easily accessible on mobile devices. Our focus is on creating custom business websites that perfectly match your needs. We offer a comprehensive range of services, covering everything from designing and developing to maintaining an impactful online presence for your business. You can choose the specific web development services that align with your requirements. If you're unsure which services are the best fit, don't hesitate to contact us. We'll guide you through the technical details, and scope of work, and even provide a clear cost estimate to help you make an informed decision.",
                        image: "https://aronwebsolutions.com/public/front/images/services_detail_banner999.webp"
                    },
                    {
                        title: 'We Use Advanced Tools To Complete Your ProjectAdvanced Tools Or Software We Use for Your Projects',
                        description: "Need some design inspiration? Someone who can utilize their imaginative abilities to make a design that will really pop?",
                        image: "https://aronwebsolutions.com/public/front/images/services_detail_banner888.webp",
                        points: [
                            "Wix",
                            "WordPress",
                            "Figma",
                            "Shopify",
                            "Bigcommerce",
                            "Webflow",
                            "Magento",
                            "Adobe Illustrator",
                            "Adobe Photoshop",
                            "Woocomerce"
                        ]
                    }
                ]}
            />
            <TestimonialSection
                heading="Website Design Services We Offer"
                data={[
                    {
                        title: "Landing Pages",
                        description: "Crafting attention-grabbing landing pages that captivate visitors, convey your message effectively, and encourage desired actions, driving engagement and conversions.",
                        points: [
                            'Conversion-Driven Design',
                            "Custom Branding Options",
                            "A/B Testing Capabilities",
                            "Mobile-Responsive Pages",
                            "Analytics and Insights"

                        ],
                        image: "https://aronwebsolutions.com/public/front/images/Web_Application_development.webp"
                    },
                    {
                        title: "Email Templates",
                        description: "Designing visually appealing and functional email templates that enhance your email marketing campaigns, ensuring consistency and professionalism across all communications.",
                        points: [
                            'Mobile Responsiveness',
                            "Clear Call-to-Action (CTA)",
                            "Branding Consistency",
                            "A/B Testing Capability",
                            "Editable and Customizable"

                        ],
                        image: "https://aronwebsolutions.com/public/front/images/ecommerce_development.webp"
                    },
                    {
                        title: "Creative Web Layouts",
                        description: "Creating unique and aesthetically pleasing web layouts that provide a delightful user experience, making your website stand out and leave a lasting impression.",
                        points: [
                            'Unique Branding Elements',
                            "Engaging Visual Graphics",
                            "Responsive Design",
                            "SEO-Friendly Structures",
                            "User-Centric Navigation"

                        ],
                        image: "https://aronwebsolutions.com/public/front/images/Website_Maintenance.webp"
                    }
                ]}

            />

            <Container>
                <ProcessSection
                    heading="Our Seamless Process For Website Design"
                    data={[
                        {
                            title: "Strategic",
                            image: "https://aronwebsolutions.com/public/front/images/requirement.png",
                            description: "We understand the needs of your business and the criteria and objectives for your website. We analyze the specific criteria and goals you have for your website."

                        },
                        {
                            title: "Designing & Developing",
                            image: "https://aronwebsolutions.com/public/front/images/resume.png",
                            description: "We'll start the design of your website and construct a wireframe at this stage. On the CMS, code, and server realization, we will work on their appeal."
                        },
                        {
                            title: "Testing",
                            image: "https://aronwebsolutions.com/public/front/images/finalize.png",
                            description: "This is a critical step where we scrutinize every aspect of the website, ensuring its functionality and performance meet the highest standards."
                        },
                        {
                            title: "Maintaining",
                            image: "https://aronwebsolutions.com/public/front/images/assign-task.png",
                            description: "We continuously monitor the website's performance, security, and functionality. Regular updates and improvements are implemented to keep the website aligned with the latest industry standards."
                        }
                    ]}
                />
            </Container>

            <FaqSection
                data={[
                    {
                        question: "What sets your website design services apart from others?",
                        answer: "We differentiate ourselves by combining search engine-friendly designs with mobile accessibility. Our focus on custom solutions ensures your website perfectly aligns with your business needs, providing a unique online presence."
                    },
                    {
                        question: "How do I choose the right web development services for my business?",
                        answer: "Feel free to contact us! We guide you through technical details, discuss the scope of work, and provide clear cost estimates. Our goal is to empower you to make informed decisions tailored to your requirements."
                    },
                    {
                        question: "Which tools and software do you use for website development?",
                        answer: "We leverage advanced tools and software such as Wix, WordPress, Figma, Shopify, Bigcommerce, Webflow, Magento, Adobe Illustrator, Adobe Photoshop, and Woocommerce to ensure the efficiency and excellence of your projects."
                    },
                    {
                        question: "What specific website design services do you offer?",
                        answer: "Our services include crafting attention-grabbing landing pages, designing email templates for effective campaigns, creating unique web layouts, ensuring responsive web design, and developing websites using powerful tools like Webflow."
                    }, {
                        question: "Why is responsive web design important for my business website?",
                        answer: "Responsive design ensures your website seamlessly adapts to various devices and screen sizes, providing a consistent and optimal user experience. This enhances user engagement and accessibility."
                    },
                    {
                        question: "Can you explain the process of designing and developing a website with your agency?",
                        answer: "Certainly! We follow a strategic process, beginning with understanding your business needs, and then moving on to designing and developing the website. We prioritize testing for functionality and performance before continuous monitoring and maintenance."
                    },
                    {
                        question: "How do you ensure the security of my website after it's developed?",
                        answer: "Security is a priority. We conduct thorough testing during development and implement industry-standard security measures. Regular monitoring, updates, and improvements are part of our maintenance process to keep your website secure."
                    },
                    {
                        question: "How do you handle ongoing maintenance and updates for my website?",
                        answer: "Our maintenance process involves continuous monitoring of your website's performance, security, and functionality. Regular updates and improvements are implemented to keep your website aligned with the latest industry standards and technology advancements."
                    }
                ]}
            />
        </div>
    )
}
