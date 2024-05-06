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


export default function HireWix() {
    return (
        <>
            <div>
                <TopHeader title="Get a Wix Expert Onboard"
                    description="Hiring a Wix expert brings in a pro to design, build, and optimize your Wix website, ensuring a customized, feature-rich, and user-friendly site." />
            </div>

            <WhyChoose
                title="Brandclever for Your Wix Project"
                description1="Brandclever offers a team of skilled Wix designers and developers who can create a visually stunning website or online store tailored to your specific requirements."
                description2="Our expert web designers and developers excel in crafting aesthetically pleasing websites that are both user-friendly and responsive. Our experienced Wix designers are dedicated to building a website that aligns with your brand identity. Whether you're looking for a simple design or a contemporary and stylish Wix website, we have the expertise to turn your vision into reality. As a recognized Wix Partner, Brandclever provides a complete website design solution for businesses of all sizes. We take care of everything, allowing you to focus on what matters most to you."
                images={["https://aronwebsolutions.com/public/uploads/65707b237b675.png", "https://aronwebsolutions.com/public/uploads/upwork_wix-17.png"]}
                experties={[
                    "Bespoke Wix Website Design",
                    "Online Store Development",
                    "Responsive Design Services",
                    "SEO Optimization",
                    "Third-Party App Integration",
                    "Stylish Graphic Design",
                    "Ongoing Maintenance and Support",
                    "Custom Wix Scripting",
                    "Performance Analytics and Insights"
                ]}

            />
            <Testimonial />
            <ServiceSection
            heading="Our Core Wix Service Included"
            subHeading="Our Customised development service offers a user-friendly upgrade and scaling solution"
                data={[
                    {
                        title: "Wix Web Design",
                        image: "images/hire/wix_ser1.png",
                        points: [],
                        description: "Our skilled designers will craft a visually appealing and user-friendly website that embodies your brand, helping you make a memorable impression on visitors."
                    },
                    {
                        title: "Wix Custom Site Development",
                        image: "images/hire/wix_ser2.png",
                        points: [],
                        description: "With our Wix Custom Site Development service, we tailor your site to meet specific business requirements. We offer advanced features and functionalities to give you a competitive edge."
                    },
                    {
                        title: "Wix Site Migration",
                        image: "images/hire/wix_ser3.png",
                        points: [],
                        description: "Our Wix Site Migration service ensures a seamless transfer process. We handle the migration of your content and features, allowing you to enjoy the benefits of Wix without any hassle."
                    }
                ]}

            />

            <ExpertiesSection
                data={[
                    {
                        title: "Strategic Approach",
                        image: "images/hire/wix_exp1.png",
                        description: "We adopt a strategic approach to every project, crafting comprehensive strategies that ensure every aspect serves a purpose and contributes to the project's overall success."
                    },
                    {
                        title: "Client-Centric Collaboration",
                        image: "images/hire/wix_exp2.png",
                        description: "Our collaborative process involves our clients at every stage, actively seeking feedback to ensure the final product aligns perfectly with their vision and goals."
                    },
                    {
                        title: "Meticulous Attention to Detail",
                        image: "images/hire/wix_exp3.png",
                        description: "We meticulously attend to every detail, refining and polishing every aspect of the website, from its visual elements to its backend functionalities."
                    },
                    {
                        title: "Proven Track Record",
                        image: "images/hire/wix_exp4.png",
                        description: "Our track record speaks volumes. With a portfolio of successful projects and satisfied clients, we have consistently demonstrated our ability to deliver exceptional results."
                    }
                ]}

            />

            <ProcessSection
              heading="Our Effective Approach To Start Your Wix Project"
                data={[
                    {
                        title: "Project Kickoff",
                        image: "images/hire/annoucment.png",
                        description: "We start with a comprehensive Discovery Session to understand your vision, goals, and unique requirements for your Wix project. During this session, we gather all the information needed to ensure that we fully comprehend your expectations and create a project plan that aligns with your objectives."
                    },
                    {
                        title: "Custom Project Planning",
                        image: "images/hire/discussion.png",
                        description: "In this phase, we develop a customized project plan that provides complete transparency. You get a detailed roadmap of the entire process, from initial design to final development, with clearly defined milestones. This approach ensures that you're always aware of the next steps."
                    },
                    {
                        title: "Design and Build",
                        image: "images/hire/implementation.png",
                        description: "During this stage, we focus on the design and development of your Wix project. We use an iterative approach, allowing for multiple rounds of feedback to ensure that the design matches your expectations. Our team works diligently to create a website that aligns ."
                    },
                    {
                        title: "Quality Testing and Launch",
                        image: "images/hire/reporting.png",
                        description: "Before launching your Wix project to the public, we conduct thorough testing and quality assurance to ensure that everything works flawlessly. This includes testing for functionality, compatibility, and responsiveness. Once we are confident in its performance."
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
                        question: "What makes Brandclever stand out among other Wix service providers?",
                        answer: "Brandclever differentiates itself through its focus on personalized service. We don't rely on generic templates; instead, we create custom designs and functionalities that perfectly align with your brand, making your website unique and memorable."
                    },
                    {
                        question: "How involved will I be in the Wix website design process with Brandclever?",
                        answer: "Brandclever values collaboration. You will be actively involved in the design process, from initial brainstorming to design reviews. Your input helps shape the final product, ensuring it meets your expectations and business goals."
                    },
                    {
                        question: "What kind of post-launch support does Brandclever offer for Wix websites?",
                        "answer": "Our support extends well beyond the launch. We offer comprehensive post-launch assistance, including updates, ongoing maintenance, and answers to any questions or issues you may have with your Wix website."
                    },
                    {
                        question: "Can you migrate my existing website to Wix, and what does the process entail?",
                        answer: "Brandclever can handle the migration of your current website to Wix. We take care of transferring all content, maintaining functionality, and ensuring a smooth transition without downtime or loss of data."
                    },
                    {
                        question: "How long does it typically take to complete a Wix project?",
                        answer: "The timeline for a Wix project depends on its complexity. During the planning stage, we provide a detailed project plan with key milestones and estimated completion dates, keeping you informed throughout the process."
                    },
                    {
                        question: "Can Brandclever integrate third-party apps into my Wix website?",
                        answer: "Yes, Brandclever has extensive experience in integrating third-party apps into Wix websites. We can add a variety of features to enhance your website's functionality and meet your specific business requirements."
                    },
                    {
                        question: "How do I start a Wix project with Brandclever?",
                        answer: "Starting your Wix project with Brandclever is straightforward. Contact us through our website or by phone, and we'll schedule a consultation to understand your needs, discuss the project scope, and create a personalized plan to launch your Wix project."
                    },
                    {
                        question: "What customization options are available for Magento development services?",
                        answer: "We provide highly customizable solutions, allowing you to tailor your Magento website to align with your brand identity. Whether you require specific branding elements or a unique design, we can customize the project to meet your needs."
                    }
                ]}
            />

        </>
    )
}
