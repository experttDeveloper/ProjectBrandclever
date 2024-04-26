import React from "react";
import TopHeader from "../components/TopHeader";
import ContactSection from "../components/hiredeveloper/ContactSection";
import WhyChoose from "../components/hiredeveloper/WhyChooseSection";
import Testimonial from "../components/hiredeveloper/TestimonialSection";
import ServiceSection from "../components/hiredeveloper/ServiceSection";
import ProcessSection from "../components/hiredeveloper/ProcessSection";
import PaymentSection from "../components/hiredeveloper/PaymentSection";
import FaqSection from "../components/hiredeveloper/FaqSection";
import ExpertiesSection from "../components/hiredeveloper/ExpertiesSection";
import ImageSection from "../components/hiredeveloper/ImageSection";

export default function HireShopify() {
  return (
    <>
      <div>
        <TopHeader title={"hire sopify devloper"} description={""} />
      </div>

      <ContactSection
        title="Hire Certified, Trusted Professional Shopify Developers"
        description="Hire the best Shopify experts for your ecommerce business"
        images={["images/hire/shopify.png", "images/hire/clutch_shopify-17.png"]}
      />
      <WhyChoose
        title="Aron Web Solution's Shopify Expertise?"
        description1="Looking to Hire Shopify Experts to take your online business to the next level?"
        description2="At Brandclever, we take your Shopify store to the next level. As dedicated Shopify experts, We bring a wealth of experience and expertise to help you build, optimize, and elevate your online store. With our proven track record, we help businesses like yours to go one step ahead in the competitive e-commerce market."
        image="images/hire/stay.webp"
        experties={[
          "Custom Theme Development",
          "App Integration and Optimization",
          "Performance Optimization",
          "SEO Strategy and Implementation",
          "Mobile-First Approach",
          "Conversion Rate Optimization (CRO)",
          "E-commerce Analytics and Insights",
          "Payment Gateway Integration",
          "Round-the-Clock Support"
        ]}
      />
      <Testimonial />
      <ServiceSection
        data={[
          {
            title: "Store build or redesign",
            image: "https://aronwebsolutions.com/public/front/images/store_set_sdf.webp",
            points: [
              'Your Brand Logo Design',
              'Website Design',
              'Payment gateway configuration',
              'Shipping configuration',
              'Collection, Product page & Cart page setup'
            ]
          },
          {
            title: "Store Migration",
            image: "https://aronwebsolutions.com/public/front/images/shopify_theme_fedf.webp",
            points: [
              'Configure your basic administrative settings',
              "Import your store's content and data to Shopify",
              'Organize your products after migration',
              'Set up your shipping details',
              'Set up your payment provider'
            ]
          },
          {
            title: "Shopify App Development",
            image: "https://aronwebsolutions.com/public/front/images/store_set_sdf.webp",
            points: [
              'Development of custom apps',
              'Seamless migration of data and functionalities',
              'Integration of third-party apps',
              'App customization and optimization',
              'CTesting and quality assurance'
            ]
          },
          {
            title: "Troubleshooting",
            image: "https://aronwebsolutions.com/public/front/images/shopify_maintainance_jh.webp",
            points: [
              'Troubleshooting design issue',
              'Troubleshooting settings issue',
              'Troubleshooting errors',
              'Troubleshooting HTML/CSS issue',
              'Troubleshooting SEO issue'
            ]
          },
          {
            title: "Search Engine Optimisation",
            image: "https://aronwebsolutions.com/public/front/images/srch_eng.webp",
            points: [
              'Website Audit& Keyword research',
              'XML Sitemap',
              'Crawl errors & Robots.txt',
              'Google Analytics Setup',
              'Improved search engine ranking'
            ]
          },
          {
            title: "Theme customization",
            image: "https://aronwebsolutions.com/public/front/images/theme_custom.webp",
            points: [
              'Full store setup',
              'Full custom responsive design',
              'Multiple rounds of design revisions',
              'App install & integrations',
              'Build collections, store structure, content, and products'
            ]
          }

        ]}

      />

      <ExpertiesSection
        data={[
          {
            title: "Expertise and Experience",
            image: "https://aronwebsolutions.com/public/front/images/expertise_icon.png",
            description: "Professional Shopify experts with extensive experience in e-commerce solutions. We have a proven track record of successful Shopify projects showcasing our expertise."

          },
          {
            title: "Customized Solutions",
            image: "https://aronwebsolutions.com/public/front/images/customized_solutions.png",
            description: "Tailored approach to understand your unique business needs and preferences. Crafted strategies and solutions designed specifically for your brand and audience."
          },
          {
            title: "Support and Maintenance",
            image: "https://aronwebsolutions.com/public/front/images/support_maintainanec.png",
            description: "Ongoing support and maintenance to ensure your Shopify store runs flawlessly. Quick issue resolution and regular updates to keep your store up-to-date and secure."
          },
          {
            title: "Client-Centric Approach",
            image: "https://aronwebsolutions.com/public/front/images/client-centric-approach.png",
            description: "Prioritization of client satisfaction and exceeding expectations. Client feedback integration and continuous improvement based on insights and suggestions."
          }
        ]}
        
      />
      <ProcessSection
      />

      <ImageSection />

      <PaymentSection
      />
      <FaqSection />

    </>
  );
}
