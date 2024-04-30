import React from 'react';
import TopHeader from '../components/TopHeader';
import WhyChoose from '../components/hiredeveloper/WhyChooseSection';
import Testimonial from '../components/hiredeveloper/TestimonialSection';
import ServiceSection from '../components/hiredeveloper/ServiceSection';
import ProcessSection from '../components/hiredeveloper/ProcessSection';
import PaymentSection from '../components/hiredeveloper/PaymentSection';
import FaqSection from '../components/hiredeveloper/FaqSection';
import ImageSection from '../components/hiredeveloper/ImageSection';
import ExpertiesSection from '../components/hiredeveloper/ExpertiesSection';

export default function HireMagento() {
    return (
        <>
            <div>
                <TopHeader title="Recruit Experienced Magento Experts for Your Online Store"
                    description="Creating a customer-centric website involves more than just a visually pleasing design. It requires an in-depth understanding of your audience's needs, preferences, and behavior patterns. This approach leads to websites that not only draw visitors but also engage them, leading to conversions and loyalty." />
            </div>
            <WhyChoose
                title="Brandclever For Magento Development Service?"
                description1="Brandclever offers a wide array of services for Magento development and e-commerce strategy."
                description2="Our team provides a complete range of services, from designing and structuring your Magento platform to ensuring successful delivery, optimization, and ongoing support and maintenance. Our Magento developers bring extensive experience with the Magento platform, ensuring your e-commerce goals are in expert hands."
                images={["images/hire/shopify.png", "images/hire/clutch_shopify-17.png"]}
                experties={[
                    "Comprehensive Magento Solutions",
                    "Magento Development",
                    "Customizations",
                    "E-Commerce Strategy",
                    "User-Friendly Design",
                    "Security Guarantee",
                    "High Performance",
                    "Secure Payment Gateways",
                    "24/7 Support",
                ]}

            />
            <Testimonial />
            <ServiceSection
                heading="Our Magento Development Services"
                subHeading="Our Customised development service offers a user-friendly upgrade and scaling solution"
                data={[
                    {
                        title: "Magento Design and Creation",
                        image: "images/hire/magento_ser1.png",
                        points: [

                        ],
                        description: "We ensure your online store not only looks fantastic but also functions seamlessly. Whether you're building from the ground up or enhancing an existing store, we have the expertise to take your e-commerce business to the next level."
                    },
                    {
                        title: "Configuration and Customization",
                        image: "images/hire/magento_ser.png",
                        points: [

                        ],
                        description: "The last phase in launching your Magento development services is the setup and customization of your online store. This includes installing the Magento platform, configuring key settings, and integrating with your existing website, if needed."
                    },
                    {
                        title: "Strategy and Implementation",
                        image: "images/hire/magento_ser3.png",
                        points: [

                        ],
                        description: "This stage involves creating a detailed project plan that defines the scope, key milestones, and a timeline for project completion. We ensure every aspect matches your vision and keep you updated throughout the development journey."
                    }
                ]}

            />

            <ExpertiesSection
                data={[
                    {
                        title: "Intuitive User Interface Design",
                        image: "images/hire/magento_exp1.png",
                        description: "We focus on delivering a seamless user experience (UX) with designs that are intuitive and simple to navigate, allowing visitors to find what they need effortlessly."

                    },
                    {
                        title: "Quick Page Load Times",
                        image: "images/hire/magento_exp2.png",
                        description: "Websites that load slowly can drive visitors away. We optimize our designs for fast loading times, providing your audience with a smooth and enjoyable browsing experience."
                    },
                    {
                        title: "Expandability",
                        image: "images/hire/magento_ex3.png",
                        description: "Our designs are scalable to support your business's growth, enabling you to add new features and functionality as your needs evolve."
                    },
                    {
                        title: "Support and Maintenance Services",
                        image: "images/hire/magento_exp4.png",
                        description: "We provide continuous support and maintenance services to ensure your website operates smoothly. You can rely on us for technical assistance and necessary updates."
                    }
                ]}

            />

            <ProcessSection
                heading="Our Step By Step Approach to Start The Magento Development Services"
                data={[
                    {
                        title: "Discovery Session",
                        image: "images/hire/annoucment.png",
                        description: "In this stage, our team works closely with you to gather insights into your e-commerce requirements. We aim to understand your business objectives, product range, target market, and any other specific needs."
                    },
                    {
                        title: "Project Proposal and Agreement",
                        image: "images/hire/discussion.png",
                        description: "After the discovery session, we create a detailed project proposal that defines the services we will deliver. The proposal provides a comprehensive breakdown of the project's scope and key components."
                    },
                    {
                        title: "Execution and Project Management",
                        image: "images/hire/implementation.png",
                        description: "In this phase, we design a detailed project plan that establishes the scope, key milestones, and the schedule for project completion. We ensure that each aspect aligns with your expectations and keep you updated throughout the development."
                    },
                    {
                        title: "Launch and Customization",
                        image: "images/hire/reporting.png",
                        description: "The final stage in launching your Magento project involves setting up and customizing your online store. This step includes installing the Magento platform, configuring essential settings, and integrating with any existing websites, if necessary."
                    }
                ]}
            />

            <ImageSection
                images={[
                    {
                        firstImage: "images/hire/magento_port1.png",
                        secondImage: 'images/hire/magento_port2.png'
                    },
                    {
                        firstImage: "images/hire/magento_port3.png",
                        secondImage: 'images/hire/magento_port4.png'
                    },
                    {
                        firstImage: "images/hire/magento_port5.png",
                        secondImage: 'images/hire/magento_port6.png'
                    }
                ]}
            />
            <PaymentSection
            />
            <FaqSection
                data={[
                    {
                        question: "What distinguishes Brandclever in Magento development services?",
                        answer: "We offer a full range of services, from design and development to ongoing support and maintenance. Our team's deep expertise in Magento ensures that your e-commerce project is in capable hands."
                    },
                    {
                        question: "What's your step-by-step process for Magento development projects?",
                        answer: "Our process begins with a consultation to understand your needs. This is followed by a detailed project proposal and agreement. We then proceed with planning, development, and customizing the Magento website to match your brand's identity."
                    },
                    {
                        question: "Why is user-friendly design essential in Magento development?",
                        answer: "User-friendly design is crucial for a successful Magento website. We focus on creating intuitive layouts, allowing visitors to navigate easily and find what they need. This enhances the overall user experience and fosters customer engagement."
                    },
                    {
                        question: "How do you handle the migration of products, customer data, and order history when upgrading to Magento?",
                        answer: "Our Magento migration services ensure a smooth transition. We manage the migration of products, customer data, and order history with minimal downtime and disruption, ensuring a seamless upgrade experience."
                    },
                    {
                        question: "What sets your Magento theme development services apart?",
                        answer: "Our Magento theme development emphasizes unique themes that reflect your brand's style while providing a user-friendly experience. We aim for visually appealing designs that enhance your online store's aesthetic."
                    },
                    {
                        question: "Do you offer post-launch support and maintenance for Shopify stores?",
                        answer: "Yes, many Shopify experts offer ongoing support and maintenance after launch.This includes updates, security patches, troubleshooting, and ensuring your store operates smoothly and securely."
                    },
                    {
                        question: "What kind of support and maintenance services do you offer?",
                        answer: "We offer continuous support and maintenance to keep your Magento website running smoothly. Our team is available for technical assistance and updates whenever needed."
                    },
                    {
                        question: "What customization options are available for Magento development services?",
                        "answer": "We offer highly customizable solutions, ensuring your Magento website aligns with your unique brand identity. Whether it's branding guidelines or a specific look, we tailor the design to meet your needs."
                    }
                ]}
            />

        </>
    )
}
