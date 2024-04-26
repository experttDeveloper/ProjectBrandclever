import React from 'react';
import TopHeader from '../components/TopHeader';
import ContactSection from '../components/hiredeveloper/ContactSection';
import WhyChoose from '../components/hiredeveloper/WhyChooseSection';
import Testimonial from '../components/hiredeveloper/TestimonialSection';
import ServiceSection from '../components/hiredeveloper/ServiceSection';
import ProcessSection from '../components/hiredeveloper/ProcessSection';
import PaymentSection from '../components/hiredeveloper/PaymentSection';
import FaqSection from '../components/hiredeveloper/FaqSection';

export default function HireMagento() {
    return (
        <>
            <div>
                <TopHeader title={"hire magento devloper"} description={""} />
            </div>

            <ContactSection
                title="Hire Professional Magento Experts For Online Store"
                description="Creating a customer-centric Websites that deliver the best results"
                images={["images/hire/shopify.png", "images/hire/clutch_shopify-17.png"]}
            />
            <WhyChoose
                title="Brandclever For Magento Development Service?"
                description1="Aron Web Solutions delivers a comprehensive range of services in Magento development and e-commerce strategy."
                description2="Our team covers the entire spectrum, from designing and structuring your Magento platform to the successful delivery, optimization, and continuous support and maintenance. Our Magento developers possess an impressive depth of expertise in the Magento platform, ensuring that your e-commerce aspirations are in capable hands."
                image="https://aronwebsolutions.com/public/front/images/magento_right.webp"
                experties={[
                    "End-to-End Magento Solutions",
                    "Magento Development",
                    "Customization",
                    "E-commerce Strategy",
                    "User-friendly Design",
                    "Security Assurance",
                    "Optimal performance",
                    "Secure payment gateways",
                    "Round-the-Clock Support"
                ]}

            />
            <Testimonial 
            
            
            />
            <ServiceSection />
            <ProcessSection />
            <PaymentSection />
            <FaqSection />

        </>
    )
}
