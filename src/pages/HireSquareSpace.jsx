import React from 'react';
import TopHeader from '../components/TopHeader';
import WhyChoose from '../components/hiredeveloper/WhyChooseSection';
import Testimonial from '../components/hiredeveloper/TestimonialSection';
import ServiceSection from '../components/hiredeveloper/ServiceSection';
import ProcessSection from '../components/hiredeveloper/ProcessSection';
import PaymentSection from '../components/hiredeveloper/PaymentSection';
import ImageSection from '../components/hiredeveloper/ImageSection';
import ExpertiesSection from '../components/hiredeveloper/ExpertiesSection';

export default function HireSquareSpace() {
    return (
        <>
            <div>
                <TopHeader title="Connect with a Squarespace Expert"
                    description="Get expert assistance for your Squarespace projects. Our specialists offer custom website design, troubleshooting, and platform optimization to help you achieve your online goals." />
            </div>

            <WhyChoose
                title="Brandclever for Your Squarespace Project?"
                description1="Brandclever is your ideal partner for any Squarespace project. With a team of skilled and experienced Squarespace professionals, we can help you design, create, and maintain the perfect Squarespace website to meet your business needs and goals."
                description2="Our services include everything from designing and launching your website to providing ongoing support and maintenance. We offer a range of solutions, from custom Squarespace themes to SEO optimization, and our team is always available to answer your questions. Our focus is on delivering excellent customer service and outstanding results. From conception to completion, we're here to ensure your Squarespace website looks amazing and functions flawlessly. With Brandclever, you can trust that your Squarespace project is in capable hands."
                images={["https://aronwebsolutions.com/public/uploads/6571b81996a38.png", "https://aronwebsolutions.com/public/uploads/3-144.png"]}
                experties={[
                    "Custom Website Design",
                    "E-commerce Integration",
                    "Mobile Responsiveness",
                    "Content Management Systems",
                    "SEO Optimization",
                    "Custom Code Development",
                    "Social Media Integration",
                    "Advanced Analytics and Reporting",
                    "Domain Management and Hosting"
                ]}

            />
            <Testimonial />
            <ServiceSection
                heading="Our Core Squarespace Service Included"
                subHeading="We Make It Simple To Create A Professional Website In No Time"
                data={[
                    {
                        title: "Custom Squarespace Website Design",
                        image: "images/hire/big_ser1.png",
                        points: [],
                        description: "Our main service is creating visually stunning Squarespace websites tailored to your brand. We ensure that your online presence stands out, with a unique design that reflects your business's values and goals. Our team collaborates with you to understand your vision, translating it into a compelling online experience."
                    },
                    {
                        title: "Mobile-Friendly Design",
                        image: "images/hire/big_ser2.png",
                        points: [],
                        description: "We emphasize mobile responsiveness to make sure your Squarespace website looks great and works smoothly across all devices. This provides your audience with a consistent and engaging experience, whether they're on a smartphone, tablet, or desktop. Our designs are optimized for speed and user-friendliness."
                    },
                    {
                        title: "E-commerce Integration for Squarespace",
                        image: "images/hire/big_ser3.png",
                        points: [],
                        description: "Boost your online sales with our integrated e-commerce solutions for Squarespace. We design your site for seamless transactions, ensuring customers can browse, shop, and make purchases without any issues or delays. Our solutions are built to support high traffic and secure payments."
                    }

                ]}

            />

            <ExpertiesSection
                data={[
                    {
                        title: "Squarespace Customization Expertise",
                        image: "images/hire/space_exp1.png",
                        description: "We customize your Squarespace site to align with your brand's unique identity, ensuring it stands out. Our tailored approach makes your website truly one-of-a-kind, helping you attract more customers."
                    },
                    {
                        title: "E-commerce Mastery",
                        image: "images/hire/space_exp2.png",
                        description: "We specialize in Squarespace e-commerce solutions, transforming your online shop into a powerful revenue generator. With our expertise, you can optimize sales and create a seamless shopping experience."
                    },
                    {
                        title: "Comprehensive Support and Training",
                        image: "images/hire/space_exp3.png",
                        description: "We offer ongoing support and training to ensure you're comfortable managing your Squarespace site. Our friendly experts guide you through any challenges, providing valuable advice along the way."
                    },
                    {
                        title: "Continuous Support and Maintenance",
                        image: "images/hire/space_exp4.png",
                        description: "We offer continuous assistance to keep your Squarespace website secure, updated, and running at its best. Our maintenance services ensure optimal performance and a reliable user experience."
                    }

                ]}

            />

            <ProcessSection
                heading="Our Effective Approach To Start Squarespace Project"
                data={[
                    {
                        title: "Discovery and Consultation",
                        image: "images/hire/annoucment.png",
                        description: "In this initial phase, we gather information about your brand, target audience, and the specific features you desire for your Squarespace site. This understanding allows us to customize the project to meet and exceed your expectations."
                    },
                    {
                        title: "Custom Design and Development",
                        image: "images/hire/discussion.png",
                        description: "We design and develop a unique Squarespace website, selecting color schemes, layouts, and other elements that reflect your brand identity. The result is a visually appealing and functional website that aligns with your goals."
                    },
                    {
                        title: "User-Centric Design and Optimization",
                        image: "images/hire/implementation.png",
                        description: "After the initial design phase, we optimize your Squarespace site for user-friendliness. We focus on intuitive navigation and usability, ensuring visitors can easily find what they're looking for and engage with your content."
                    },
                    {
                        title: "Launch and Continuous Support",
                        image: "images/hire/reporting.png",
                        description: "Following the launch, we offer ongoing support to address any issues and keep your site updated. Our goal is to ensure your Squarespace project continues to perform optimally and remains successful in the long run."
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

        </>
    )
}
