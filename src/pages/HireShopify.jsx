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
        data={[
          {
            title: "Book a Free Consultation Call",
            image: "https://aronwebsolutions.com/public/front/images/requirement.png",
            description: "Initiate your Shopify project journey by booking a free consultation call with Aron Web Solutions. This call provides you with the opportunity to connect with our team of experts, allowing us to understand your business requirements."

          },
          {
            title: "Discuss The Shopify Projects",
            image: "https://aronwebsolutions.com/public/front/images/resume.png",
            description: "We will focus on a comprehensive discussion about your Shopify project. We encourage you to share your ideas, brand identity, target audience, and desired functionalities. This discussion sets the foundation for a collaborative and effective Shopify project."
          },
          {
            title: "Project Execution & Delivery",
            image: "https://aronwebsolutions.com/public/front/images/finalize.png",
            description: "Our dedicated team of Shopify experts starts working diligently on your project, adhering to the specified timeline and delivering exceptional results. Throughout this phase, we maintain open communication, ensuring that you are informed about the project's progress."
          },
          {
            title: "Daily / Weekly / Monthly Reporting",
            image: "https://aronwebsolutions.com/public/front/images/assign-task.png",
            description: "We provide regular reports, tailored to your preference, on a daily, weekly, or monthly basis. These reports encompass the project's progress, milestones achieved, and any challenges encountered, along with proposed solutions"
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
            question: "What is Shopify, and why is it popular for e-commerce?",
            answer: "Shopify is a leading e-commerce platform that allows businesses to create and manage online stores. Its popularity stems from its user-friendly interface, customizable templates, secure transactions, and a range of powerful features tailored to e-commerce needs."
          },
          {
            question: "Can I make changes to my Shopify store after it's live?",
            answer: "Absolutely. You have complete control over your Shopify store and can make changes such as adding products, updating content, modifying design elements, and integrating new features even after it's live."
          },
          {
            question: "How can a Shopify expert help improve my online store?",
            answer: "Shopify experts have specialized knowledge to enhance your store's design, functionality, and performance. They can optimize the user experience, integrate third-party apps, customize themes, and implement strategies for increased conversions and sales."
          },
          {
            question: "How long does setting up a Shopify store with your expert help take?",
            answer: "The timeframe varies depending on the complexity of the project. A simple store setup may take a few days, while a more customized and feature-rich store can take several weeks. Timelines are typically discussed and agreed upon during project consultation."
          }, {
            question: "Do Shopify experts provide SEO services for my store?",
            answer: "Yes, many Shopify experts offer SEO services to optimize your store for search engines. They can help with keyword research, meta tags, page speed optimization, and other SEO strategies to improve visibility and ranking."
          },
          {
            question: "Can I get support and maintenance for my Shopify store post-launch?",
            answer: "Yes, Shopify experts often provide ongoing support and maintenance services. This includes updates, security patches, troubleshooting, and ensuring your store operates smoothly and securely."
          },
          {
            question: "How secure is Shopify for processing customer payments?",
            answer: "Shopify is highly secure for processing payments. It is PCI DSS compliant, ensuring that all payment transactions and customer data are handled securely and meet industry standards for payment processing."
          },
          {
            question: "Are there limits to the customization of a Shopify store?",
            answer: "While Shopify provides a structured environment, it offers extensive customization options. Experts can tailor themes, add custom code, and utilize apps to achieve a wide range of design and functional enhancements to suit your unique business needs."
          }
        ]}
      />

    </>
  );
}
