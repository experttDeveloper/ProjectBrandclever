import React from 'react';
import TopHeader from '../components/TopHeader';
import ContactSection from '../components/hiredeveloper/ContactSection';
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
                <TopHeader  title="Hire
                Top Rated
                Wix Professional Experts"
                description="Take Your Website to the Next Level with Our Wix Experts" />
            </div>

            <WhyChoose
                title="Brandlever For Your Wix Project"
                description1="At Wix, we provide the option to enlist the services of skilled Wix web designers and developers who can craft a visually striking website or online store according to your needs."
                description2="Our team of proficient web developers and designers excels in producing aesthetically pleasing websites that prioritize user-friendliness and responsiveness. With our experienced expert Wix designers, we are committed to helping you build a website that will match your brand identity. Whether you want a simple design or a new modern look wix website design, our team can give a customized solution to bring it to life. Recognized as a Wix Partner, Aron Web Solutions extends a comprehensive website design solution suitable for businesses of all scales. We handle every aspect, allowing you to concentrate on the core of your business."
                images={["https://aronwebsolutions.com/public/uploads/65707b237b675.png", "https://aronwebsolutions.com/public/uploads/upwork_wix-17.png"]}
                experties={[
                    "Custom Wix Website Design",
                    "Store Development",
                    "Responsive Design Solutions",
                    "SEO Optimization",
                    "App Integration",
                    "Elegant Graphic Elements",
                    "Maintenance and Support",
                    "Custom Wix Code",
                    "Performance Analytics"
                ]}

            />
            <Testimonial />
            <ServiceSection
                data={[
                    {
                        title: "Wix Website Design",
                        image: "https://aronwebsolutions.com/public/front/images/wix_design.png",
                        points: [

                        ],
                        description: "Our expert designers will create a visually stunning and user-friendly website that perfectly reflects your brand, ensuring you make a lasting impression on visitors."
                    },
                    {
                        title: "Wix Custom Development",
                        image: "https://aronwebsolutions.com/public/front/images/wix_dev.png",
                        points: [

                        ],
                        description: "Our Wix Custom Development service has you covered. We customize your site to meet unique business needs, providing advanced features and functionalities that set you apart from the rest."
                    },
                    {
                        title: "Wix Migration",
                        image: "https://aronwebsolutions.com/public/front/images/wix_migration.png",
                        points: [

                        ],
                        description: "Our Wix Migration service ensures a smooth transition. We'll take care of transferring your content and functionality, so you can enjoy the benefits of the Wix platform without the hassle."
                    }
                ]}

            />

            <ExpertiesSection
                data={[
                    {
                        title: "Strategic Planning",
                        image: "https://aronwebsolutions.com/public/front/images/strategic_planning_wix.png",
                        description: "Our approach involves strategic planning. We develop comprehensive strategies, ensuring that every element serves a purpose and contributes to the overall success of the project."

                    },
                    {
                        title: "Collaborative Process",
                        image: "https://aronwebsolutions.com/public/front/images/collaborative_process_wix.png",
                        description: "We involve our clients at every stage, welcoming feedback and ensuring that the final product aligns seamlessly with their vision and goals."
                    },
                    {
                        title: "Attention to Detail",
                        image: "https://aronwebsolutions.com/public/front/images/attention_detail_wix.png",
                        description: "We pay attention to detail, ensuring that every aspect of the website is refined and polished, from the visual elements to the backend functionalities."
                    },
                    {
                        title: "Attention to Detail",
                        image: "https://aronwebsolutions.com/public/front/images/proven_track_record_wix.png",
                        description: "Our track record speaks for itself. With a portfolio of successful projects and satisfied clients, we have demonstrated our ability to deliver exceptional results."
                    }
                ]}

            />

            <ProcessSection
                data={[
                    {
                        title: "Discovery Session",
                        image: "https://aronwebsolutions.com/public/front/images/requirement.png",
                        description: "The journey begins with a thorough Discovery Session. We sit down with you to understand your vision, goals, and unique requirements for your Wix project."

                    },
                    {
                        title: "Customized Planning",
                        image: "https://aronwebsolutions.com/public/front/images/resume.png",
                        description: "We prioritize transparency, ensuring you have a clear roadmap of the entire process, from design to development and beyond."
                    },
                    {
                        title: "Design and Development",
                        image: "https://aronwebsolutions.com/public/front/images/finalize.png",
                        description: "This phase includes iterative design reviews, allowing you to provide feedback and ensure that the project aligns with your expectations."
                    },
                    {
                        title: "Testing and Launch",
                        image: "https://aronwebsolutions.com/public/front/images/assign-task.png",
                        description: "Before launching your Wix project to the world, we undergo rigorous Testing and Quality Assurance. Once we're confident in its performance, we move on to the exciting Launch phase."
                    }
                ]}
            />

            <ImageSection
            />
            <PaymentSection
            />
            <FaqSection
                data={[
                    {
                        question: "What sets Aron Web Solutions apart from other Wix service providers",
                        answer: "Aron Web Solutions stands out for its commitment to personalized service. We go beyond standard templates, offering bespoke designs and functionalities that align smoothwith your brand, ensuring your website is unique and memorable."
                    },
                    {
                        question: "How involved will I be in the Wix website design process with Aron Web Solutions?",
                        answer: "At Aron Web Solutions, we believe in collaboration. You'll be an integral part of the design process, from initial discussions to design reviews. Your feedback ensures the final product meets your vision and goals."
                    },
                    {
                        question: "What post-launch support do you offer for Wix websites?",
                        answer: "Our commitment extends beyond launch. We provide comprehensive post-launch support, including updates, maintenance, and assistance with any queries or concerns you may have about your Wix website."
                    },
                    {
                        question: "Can you help migrate my existing website to Wix, and what's the process?",
                        answer: "SEO is a priority at Aron Web Solutions. We implement effective strategies, optimizing content, meta tags, and other elements to enhance your website's visibility on search engines and drive organic traffic."
                    }, {
                        question: "What is the typical timeline for completing a Wix project?",
                        answer: "Project timelines vary based on complexity. During the planning phase, we provide a detailed project plan outlining milestones and expected completion dates, keeping you informed throughout the process."
                    },
                    {
                        question: "Can you integrate third-party apps into my Wix website?",
                        answer: "Aron Web Solutions has expertise in integrating various third-party apps to enhance the functionality of your Wix website, ensuring it meets your specific business requirements."
                    },
                    {
                        question: "How do I get started with Aron Web Solutions for my Wix project?",
                        answer: "Getting started is easy. Simply reach out to us through our contact page or give us a call. We'll schedule a consultation to understand your needs, discuss the project scope, and provide you with a personalized plan to kickstart your Wix project with Aron Web Solutions."
                    },
                    {
                        question: "What customization options are available for Magento development services?",
                        answer: "We offer highly customizable solutions, ensuring that your Magento website aligns with your unique brand identity. Whether it's specific branding guidelines or a distinct look, we tailor the design to your needs."
                    }
                ]}
            />

        </>
    )
}
