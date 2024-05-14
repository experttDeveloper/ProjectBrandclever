import React from "react";
import TopHeader from "../components/TopHeader";
import WhyChoose from "../components/hiredeveloper/WhyChooseSection";
import Testimonial from "../components/hiredeveloper/TestimonialSection";
import ServiceSection from "../components/hiredeveloper/ServiceSection";
import ProcessSection from "../components/hiredeveloper/ProcessSection";
import PaymentSection from "../components/hiredeveloper/PaymentSection";
import FaqSection from "../components/hiredeveloper/FaqSection";
import ExpertiesSection from "../components/hiredeveloper/ExpertiesSection";
import ImageSection from "../components/hiredeveloper/ImageSection";
import MetaTitleDes from "../components/MetaTitleDes";

export default function HireShopify() {


  return (
    <>
      <div>
        <TopHeader title={"Hire a Shopify Consultant"} description={"Collaborate with top Shopify experts to enhance your e-commerce site. Our specialists offer custom themes, app integration, and more, ensuring your Shopify store is optimized for success."} />
      </div>
      <MetaTitleDes title={"Hire A Shopify Consultant At Brandclever"} description={"Empower your business with our expert partners in India. Connect with brandclever, We offer a wide range of services tailored to your business needs."} />
      <WhyChoose
        title="Brandclever's Shopify Expertise?"
        description1="Looking to Hire Shopify Experts to take your online business to the next level?"
        description2="At Brandclever, we're committed to taking your Shopify store to new heights. Our team of experienced Shopify specialists brings a deep understanding of e-commerce to build, enhance, and grow your online store. With a track record of success, we help businesses like yours stay ahead in the competitive e-commerce landscape."
        images={["images/hire/shopify.png", "images/hire/clutch_shopify-17.png"]}
        experties={[
          "Bespoke Theme Development",
          "App Integration and Enhancement",
          "Speed and Performance Optimization",
          "Comprehensive SEO Strategy",
          "Mobile-First Design Focus",
          "Conversion Rate Improvements",
          "Detailed E-commerce Analytics",
          "Secure Payment Gateway Integration",
          "24/7 Support and Maintenance"
        ]}
      />
      <Testimonial />
      <ServiceSection
        heading="Our Shopify Services Included"
        subHeading="Building Stores that Inspire and Drive Business Growth"
        data={[
          {
            title: "Store Creation or Revamp",
            image: "images/hire/app_store.png",
            points: [
              "Custom Brand Logo Design",
              "Website Layout and Design",
              "Payment Gateway Setup",
              "Shipping Options Configuration",
              "Product, Collection, and Cart Page Setup"
            ]
          },
          {
            title: "Shopify Store Migration",
            image: "images/hire/app_migration.png",
            points: [
              "Set Up Core Administrative Settings",
              "Transfer Your Store Content",
              "Arrange Products Post-Migration",
              "Configure Shipping Information",
              "Connect Your Payment Provider"
            ]
          },
          {
            title: "Shopify App Development",
            image: "images/hire/app_development.png",
            points: [
              "Creation of Custom Shopify Apps",
              "Efficient Data and Functionality Migration",
              "Third-Party App Integration",
              "App Customization and Optimization",
              "Comprehensive Testing and Quality Assurance",
            ]
          },
          {
            title: "Technical Issue Resolution",
            image: "images/hire/technical_issue.png",
            points: [
              "Resolving Design Problems",
              "Fixing Configuration Issues",
              "Error Diagnosis and Resolution",
              "Addressing HTML/CSS Bugs",
              "Identifying and Correcting SEO Problems",
            ]
          },
          {
            title: "Search Engine Optimisation",
            image: "images/hire/seo.png",
            points: [
              "Comprehensive Website Audit & Keyword Research",
              "XML Sitemap Configuration",
              "Crawl Error Resolution & Robots.txt Management",
              "Google Analytics Setup",
              "Enhanced Search Engine Ranking",
            ]
          },
          {
            title: "Tailored Theme Customization",
            image: "images/hire/them_custom.png",
            points: [
              "Complete Store Setup",
              "Fully Customized Responsive Design",
              "Multiple Design Revision Rounds",
              "App Installation & Integration",
              "Collection, Store Structure, Content, and Product Development",
            ]
          }

        ]}

      />

      <ExpertiesSection
        data={[
          {
            title: "Mastery and Proficiency",
            image: "images/hire/proficient.png",
            description: "Seasoned Shopify specialists with a deep background in e-commerce solutions. Our portfolio of successful Shopify projects is a testament to our experience and skills."

          },
          {
            title: "Tailored Solutions",
            image: "images/hire/technical_solution.png",
            description: "A personalized approach that considers your unique business requirements and preferences. We create strategies and solutions customized to your brand and audience."
          },
          {
            title: "Assistance and Maintenance",
            image: "images/hire/technical_support.png",
            description: "Continuous support and maintenance to ensure smooth operation of your Shopify store. Fast issue resolution and routine updates to keep your store secure and current."
          },
          {
            title: "Customer-Focused Approach",
            image: "images/hire/customers.png",
            description: "A focus on client satisfaction and surpassing expectations. Incorporating client feedback and fostering ongoing improvement through insights and suggestions."
          }
        ]}

      />

      <ProcessSection
        heading="Our Hiring Process To Start the Shopify Projects"
        data={[
          {
            title: "Schedule a Complimentary Consultation Call",
            image: "images/hire/annoucment.png",
            description: "Begin your Shopify project by scheduling a complimentary consultation call with Aron Web Solutions. This call offers you the chance to engage with our team of specialists, giving us insight into your business needs."

          },
          {
            title: "Discuss Your Shopify Projects",
            image: "images/hire/discussion.png",
            description: "We'll engage in an in-depth conversation about your Shopify project. Feel free to share your ideas, brand identity, target audience, and the features you'd like to include. This discussion lays the groundwork for a successful and collaborative."
          },
          {
            title: "Project Implementation & Delivery",
            image: "images/hire/implementation.png",
            description: "Our team of skilled Shopify specialists begins executing your project, following the agreed-upon timeline and delivering outstanding results. During this phase, we keep communication open, ensuring you stay updated on the project's progress."
          },
          {
            title: "Daily/Weekly/Monthly Reporting",
            image: "images/hire/reporting.png",
            description: "We offer customized reports on a daily, weekly, or monthly basis, depending on your preference. These reports include updates on project progress, achieved milestones, and any challenges faced, along with the proposed solutions."
          }
        ]}
      />

      <ImageSection
        images={[
          {
            firstImage: "images/hire/shopifyfirst.png",
            secondImage: 'images/hire/shopify2.png'
          },
          {
            firstImage: "images/hire/shopifythird.png",
            secondImage: 'images/hire/shopifyfour.png'
          },
          {
            firstImage: "images/hire/shopify5.png",
            secondImage: 'images/hire/shopify6.png'
          }
        ]}
      />
      <PaymentSection
      />
      <FaqSection
        data={[
          {
            question: "What is Shopify, and why is it popular for e-commerce?",
            answer: "Shopify is a top e-commerce platform that enables businesses to build and manage online stores. It is widely used due to its intuitive interface, customizable design templates, secure payment processing, and extensive range of features designed to meet e-commerce requirements."
          },
          {
            question: "Can I make changes to my Shopify store after it's live?",
            answer: "Of course. You have full control over your Shopify store, allowing you to make changes like adding new products, updating content, altering design elements, and integrating additional features even after your store is live."
          },
          {
            question: "In what ways can a Shopify expert enhance my online store?",
            answer: "Shopify experts possess specialized skills to improve your store's design, functionality, and performance. They can enhance the user experience, integrate third-party apps, tailor themes to your needs, and devise strategies to boost conversions and sales."
          },
          {
            question: "What's the typical timeframe for setting up a Shopify store with assistance from your experts?",
            answer: "The duration depends on the project's complexity. A basic store setup might take a few days, while a highly customized, feature-rich store could require several weeks. We typically discuss and finalize timelines during the project consultation phase."
          }, {
            question: "Do Shopify experts offer SEO services for my store?",
            answer: "Absolutely. Many Shopify experts provide SEO services to enhance your store's search engine visibility. They can assist with keyword research, meta tags, page speed optimization, and other SEO techniques to boost your store's ranking."
          },
          {
            question: "Is post-launch support and maintenance available for my Shopify store?",
            answer: "Yes, many Shopify experts offer continuous support and maintenance after your store is launched. This typically includes updates, security patches, troubleshooting, and making sure your store runs efficiently and safely."
          },
          {
            question: "How secure is Shopify for handling customer payments?",
            answer: "Shopify offers a high level of security for processing payments. It complies with PCI DSS (Payment Card Industry Data Security Standard), guaranteeing that all payment transactions and customer information are managed securely and meet industry standards for payment processing."
          },
          {
            question: "Are there any restrictions on how much you can customize a Shopify store?",
            answer: "Although Shopify has a defined structure, it allows for significant customization. Experts can modify themes, implement custom code, and use various apps to create a wide array of design and functionality features, adapting the platform to meet your specific business requirements."
          }
        ]}
      />

    </>
  );
}
