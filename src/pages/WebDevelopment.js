import React, { useState } from 'react'
import TopHeader from '../components/TopHeader'
import { Container } from 'react-bootstrap'
import ContactSection from '../components/hiredeveloper/ContactSection';
import ProcessSection from '../components/hiredeveloper/ProcessSection';
import FaqSection from '../components/hiredeveloper/FaqSection';
import ServiceSection from '../components/services/ServiceSection';
import TestimonialSection from '../components/services/TestimonialSection';

export default function WebDevelopment() {


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

            />
            <ServiceSection
                data={[
                    {
                        title: 'Web Development Service',
                        description: "Our company specializes in creating websites and online applications using the latest and coolest technologies available. Our skilled team of developers can handle different types of projects, like making websites that customers can interact with and creating internal systems for managing things. What sets us apart is that we prioritize making top-notch apps and making sure the development process is clear and smooth. We're all about giving you the best web experience possible! For more than eleven years, we've partnered with big companies across 10 diverse fields. We've honed our skills and knowledge by using the latest and best technologies on the internet, working with some of the most popular brands online. Our focus is on making sure we use the newest and most effective tools to build your web application, tailoring it to your needs. We've got the expertise to make your project shine!",
                        image: "https://aronwebsolutions.com/public/front/images/web_dev_right.webp"
                    },
                    {
                        title: 'We Use Advanced Tools To Complete Your Project',
                        description: "Our dedicated team of development ensure that all our projects are built with the most updated applications, coding languages, and technologies, enabling us to create stunning results for our clients. Not only do we use the best tools, but our process is tailored to individually suit each project, ensuring that the final product is one that both our clients and we are proud of.",
                        image: "https://aronwebsolutions.com/public/front/images/web_dev_left.webp",
                        points: [
                            "PHP frameworks",
                            "WordPress",
                            "Shopify",
                            "Node js",
                            "React js",
                            "Angular js"
                        ]
                    }
                ]}
            />
            <TestimonialSection
                heading="Web Development Services We Offer"
                data={[
                    {
                        title: "Web Application Development",
                        description: "We handle everything from design and integration to ongoing maintenance, ensuring a secure, scalable, and seamless experience across all devices and platforms.",
                        points: [
                            'Customized Solutions',
                            "Scalable Architecture",
                            "Responsive Design",
                            "User-Friendly Interface",
                            "Strong Functionality"

                        ],
                        image: "https://aronwebsolutions.com/public/front/images/Web_Application_development.webp"
                    },
                    {
                        title: "E-commerce Development",
                        description: "Craft an easy-to-use online store tailored to your needs. Our team ensures smooth integration with your current tech tools, offering expertise in both full-scale e-commerce platforms and platform enhancements.",
                        points: [
                            'Secure Payment Gateways',
                            "Product Catalog Management",
                            "User-Friendly Checkout",
                            "Mobile Optimization",
                            "Inventory Management"

                        ],
                        image: "https://aronwebsolutions.com/public/front/images/ecommerce_development.webp"
                    },
                    {
                        title: "Website Maintenance",
                        description: "Gain peace of mind with our flexible website maintenance plans—monthly, hourly, or after-hours. Entrust your website's care to AWS, a trusted maintenance services provider for businesses worldwide",
                        points: [
                            'Regular Updates',
                            "Security Monitoring",
                            "Performance Optimization",
                            "Content Management",
                            "Bug Fixing"

                        ],
                        image: "https://aronwebsolutions.com/public/front/images/Website_Maintenance.webp"
                    }
                ]}

            />

            <Container>
                <ProcessSection
                heading="Our Approach To Effective Web Development Process"
                    data={[
                        {
                            title: "Strategy",
                            image: "https://aronwebsolutions.com/public/front/images/requirement.png",
                            description: "We adopt a strategic approach to web app development, delving into the intricacies of your business model, market dynamics, and product positioning."

                        },
                        {
                            title: "Product Design",
                            image: "https://aronwebsolutions.com/public/front/images/resume.png",
                            description: "Our methodology involves assembling a multidisciplinary team comprising Strategists, Designers, and Developers."
                        },
                        {
                            title: "Development",
                            image: "https://aronwebsolutions.com/public/front/images/finalize.png",
                            description: "We maintain an agile and efficient development process, leveraging highly skilled teams. Each project is overseen by experienced managers dedicated to maintaining high standards of code quality."
                        },
                        {
                            title: "Quality Assurance",
                            image: "https://aronwebsolutions.com/public/front/images/assign-task.png",
                            description: "We conduct rigorous testing to detect and rectify any bugs or issues. Our aim is to deliver solutions that are not only bug-free but also reliable, safe, and secure for a seamless user experience."
                        }
                    ]}
                />
            </Container>

            <FaqSection
                data={[
                    {
                        question: "What sets your web development service apart from others?",
                        answer: "We stand out by prioritizing top-notch apps, ensuring a clear and smooth development process, and leveraging over eleven years of experience partnering with major companies across diverse fields."
                    },
                    {
                        question: "What technologies do you use in your web development projects?",
                        answer: "Our dedicated team employs cutting-edge tools, including PHP frameworks, WordPress, Shopify, Nodejs, React js, and Angular, to deliver exceptional results tailored to your project's needs."
                    },
                    {
                        question: "How do you ensure a smooth integration for e-commerce development projects?",
                        answer: "Our team crafts easy-to-use online stores tailored to your needs, ensuring seamless integration with your existing tech tools and offering expertise in both full-scale platforms and enhancements."
                    },
                    {
                        question: "Can you explain your approach to web application development?",
                        answer: "From design to ongoing maintenance, we handle all aspects to ensure a secure, scalable, and seamless experience across various devices and platforms."
                    }, {
                        question: "What services do you provide for Magento website development?",
                        answer: "We specialize in building customized Magento stores, from the ground up or through seamless migration. Our services cover theme development, integrations, and security implementation."
                    },
                    {
                        question: "Why is CMS development crucial for an effective online presence?",
                        answer: "A well-organized website is essential, and we specialize in developing and streamlining Content Management Systems (CMS) for all types of websites, including informational and e-commerce platforms."
                    },
                    {
                        question: "What is your strategy for web app development projects?",
                        answer: "We adopt a strategic approach, delving into the intricacies of your business model, market dynamics, and product positioning to deliver tailored solutions."
                    },
                    {
                        question: "How do you ensure the quality of your web development projects?",
                        answer: "We maintain an agile and efficient development process, leveraging highly skilled teams overseen by experienced managers. Rigorous testing is conducted to deliver bug-free, reliable, safe, and secure solutions for a seamless user experience."
                    }
                ]}
            />
        </div>
    )
}
