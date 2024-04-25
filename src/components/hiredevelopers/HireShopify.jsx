import React from "react";
import TopHeader from "../TopHeader";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HireDeveloperForm from "../HireDeveloperForm";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import { Col, Row } from "react-bootstrap";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function HireShopify() {
  return (
    <>
      <div>
        <TopHeader title={"hire sopify devloper"} description={""} />
      </div>
      <div className="content_form_shopify">
        <div className="container ">
          <Row className="main_content_shopifypg">
            <Col md={6}>
              <div className="content_main">
                <h2 className="inner_content">
                  Hire <br />
                  Certified, Trusted <br />
                  Professional Shopify Developers
                </h2>
                <p className="hiring_shopify">
                  Hire the best Shopify experts for your ecommerce business
                </p>
                <div className="shopify_clutch_logo">
                  <div className="shopifylogo">
                    <img src="images/hire/shopify.png" alt="" />
                  </div>
                  <div className="clutchlogo">
                    <img src="images/hire/clutch_shopify-17.png" alt="" />
                  </div>
                </div>
                <div className="contact_shopify">
                  <div className="whatsapp_shopify">
                    <WhatsAppIcon />
                    <p className="whatsapp_number">+91-9872711866</p>
                  </div>
                  <div className="mail_shopify">
                    <MailOutlineIcon />
                    <p className="email_id">career@brandclever.in</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="form_shopify_hire">
                <div className="form_inner">
                  <HireDeveloperForm />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="whychoose_shopify">
        <div className="container">
          <Row className="whychooseshopify">
            <Col md={6}>
              <div className="whychoose_content">
                <div className="whycoose_img">
                  <h2 className="title_whychoose">
                    Why Choose Brandclever's Shopify Expertise?
                  </h2>
                  <p className="content_whychoose">
                    Looking to Hire Shopify Experts to take your online business
                    to the next level? <br />
                    <br />
                    At Brandclever, we take your Shopify store to the next
                    level. As dedicated Shopify experts, We bring a wealth of
                    experience and expertise to help you build, optimize, and
                    elevate your online store. With our proven track record, we
                    help businesses like yours to go one step ahead in the
                    competitive e-commerce market.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="whychoose_img">
                <img src="images/hire/stay.webp" alt="" />
              </div>
            </Col>
          </Row>
          <div className="expertitsetile">
            <h4 className="titleexpertise">Our Expertise Included</h4>
          </div>
          <Row className="expertise">
            <Col md={4}>
              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  {" "}
                  Custom Theme Development <br />
                </p>
              </div>
              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  App Integration and Optimization
                  <br />
                </p>
              </div>
              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Performance Optimization
                  <br />
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  {" "}
                  Custom Theme Development <br />
                </p>
              </div>
              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  App Integration and Optimization
                  <br />
                </p>
              </div>
              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Performance Optimization
                  <br />
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Custom Theme Development <br />
                </p>
              </div>
              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  App Integration and Optimization
                  <br />
                </p>
              </div>
              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Performance Optimization
                  <br />
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="testimonials">
        <div className="container">
          <div className="titleoftestimonial">
            <h2 className="title_testimonial">Testimonials</h2>
            <p className="content_title">
              Read the Success Stories of Our Valued Clients
            </p>
          </div>
          <Row className="reviews_hiring">
            <Col md={4}>
              <div className="sopify_dev_title">

                <p className="reviewone">
                  “ He was exceptionally quick, highly efficient, and truly
                  professional! I wholeheartedly recommend working with him. I
                  encountered an issue with my Facebook Pixel and the Purchase
                  event, but he promptly resolved it, and now everything is
                  operating perfectly. ”
                </p>
                <div className="author_img">
                  <p className="author">
                    Sidoine's
                  </p>
                  <img
                    src="images/hire/shopifylogo.png"
                    className="authorimagelogo"
                  />
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="sopify_dev_title">

                <p className="reviewone">
                  “ Sehr nettes Team, einfache Kommunikation und schnelle
                  Lieferung. Top Qualität der Arbeit! Ich würde BrandClever
                  würklich weiterempfehlen da die zusammenarbeit sehr gut war.
                  Vielen Dank! Gerne wieder! ”
                </p>
                <div className="author_img">
                  <p className="author">
                    Luca Koller
                  </p>
                  <img
                    src="images/hire/shopifylogo.png"
                    className="authorimagelogo"
                  />
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="sopify_dev_title">

                <p className="reviewone">
                  “ BrandClever provided excellent services with attention
                  to quality and timely deliverables. Sunil understanding of my
                  project needs and working diligently with the team was
                  commendable. I highly recommend them for Shopify design and App
                  development. Thank you for exceeding my expectations! ”
                </p>
                <div className="author_img">
                  <p className="author">
                    Jeremy Fritzhand
                  </p>
                  <img
                    src="images/hire/shopifylogo.png"
                    className="authorimagelogo"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="shopify_services">
        <div className="container">
          <div className="title_of_service">
            <h2 className="title_shopifyservices">
              Our Shopify Services Included
            </h2>
            <p className="content_shopifyservices">
              Building Stores that Inspire and Drive Business Growth
            </p>
          </div>
          <Row className="services_shopify" style={{ color: "#fff" }}>
            <Col md={4}>
              <RoomPreferencesIcon className="svgiconss" />
              <h4
                className="title_shopify_services"
              
              >
                Store build or redesign
              </h4>
              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Your Brand Logo Design <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Website Design <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Payment gateway configuration <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Shipping configuration <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Collection, Product page & Cart page setup
                  <br />
                </p>
              </div>
            </Col>

            <Col md={4}>
              <ImportExportIcon className="svgiconss" />
              <h4
                className="title_shopify_services"
              
              >
                Store Migration
              </h4>
              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Configure your basic administrative settings <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Import your store's content and data to Shopify <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Organize your products after migration <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Set up your shipping details <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Set up your payment provider
                  <br />
                </p>
              </div>
            </Col>

            <Col md={4}>
              <ImportExportIcon className="svgiconss" />
              <h4
                className="title_shopify_services"
              
              >
                Shopify App Development
              </h4>
              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Development of custom apps <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Seamless migration of data and functionalities <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Integration of third-party apps <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  App customization and optimization <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Testing and quality assurance
                  <br />
                </p>
              </div>
            </Col>
          </Row>

          <Row className="services_shopify" style={{ color: "#fff" }}>
            <Col md={4}>
              <TroubleshootIcon className="svgiconss" />
              <h4
                className="title_shopify_services"
              
              >
                Troubleshooting
              </h4>
              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Troubleshooting design issue <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Troubleshooting settings issue <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Troubleshooting errors <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Troubleshooting HTML/CSS issue <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Troubleshooting SEO issue
                  <br />
                </p>
              </div>
            </Col>

            <Col md={4}>
              <ScreenSearchDesktopIcon className="svgiconss" />
              <h4
                className="title_shopify_services"
              
              >
                Search Engine Optimisation
              </h4>
              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Website Audit& Keyword research <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  XML Sitemap <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Crawl errors & Robots.txt <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Google Analytics Setup <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Improved search engine ranking
                  <br />
                </p>
              </div>
            </Col>

            <Col md={4}>
              <DashboardCustomizeIcon className="svgiconss" />
              <h4
                className="title_shopify_services"
              
              >
                Theme customization
              </h4>
              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Full store setup <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Full custom responsive design <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Multiple rounds of design revisions
                  <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  App install & integrations <br />
                </p>
              </div>

              <div className="circle_text">
                <CheckCircleIcon className="circle_tick" />
                <p className="text_expertise">
                  Build collections, store structure, content, and products
                  <br />
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="expertiseandreviews">
          <div className="container">
            <Row className="aboutpersonnel">
              <Col md={6}>
                <div className="expertise_section">
                  <div className="img_es">
                    <img src="images/hire/expertise_icon.png" alt="" />
                  </div>
                  <div className="content_es">
                    <p className="text_expertise_reviews">
                      <h4
                        className="title_expertise_reviews"
                      
                      >
                        Expertise and Experience <br />
                      </h4>
                      Professional Shopify experts with extensive experience in
                      e-commerce solutions. We have a proven track record of
                      successful Shopify projects showcasing our expertise.
                      <br />
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="expertise_section">
                  <div className="img_es">
                    <img src="images/hire/customized_solutions.png" alt="" />
                  </div>
                  <div className="content_es">
                    <p className="text_expertise_reviews">
                      <h4
                        className="title_expertise_reviews"
                      
                      >
                        Customized Solutions <br />
                      </h4>
                      Tailored approach to understand your unique business needs
                      and preferences. Crafted strategies and solutions designed
                      specifically for your brand and audience.
                      <br />
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="aboutpersonnel">
              <Col md={6}>
                <div className="expertise_section">
                  <div className="img_es">
                    <img src="images/hire/support_maintainanec.png" alt="" />
                  </div>
                  <div className="content_es">
                    <p className="text_expertise_reviews">
                      <h4
                        className="title_expertise_reviews"
                      
                      >
                        Support and Maintenance <br />
                      </h4>
                      Ongoing support and maintenance to ensure your Shopify
                      store runs flawlessly. Quick issue resolution and regular
                      updates to keep your store up-to-date and secure.
                      <br />
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="expertise_section">
                  <div className="img_es">
                    <img src="images/hire/client-centric-approach.png" alt="" />
                  </div>
                  <div className="content_es">
                    <p className="text_expertise_reviews">
                      <h4
                        className="title_expertise_reviews"
                      
                      >
                        Customized Solutions <br />
                      </h4>
                      Prioritization of client satisfaction and exceeding
                      expectations. Client feedback integration and continuous
                      improvement based on insights and suggestions.
                      <br />
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="hiring_process_main">
        <div className="container">
          <div className="title_hiring">
            <h2 className="hiringprocesstitle">
              Our Hiring Process To Start the Shopify Projects
            </h2>
          </div>
          <Row className="processofhiring">
            <Col md={3}>
              <div className="hiring_process">
                <img
                  src="images/hire/requirement.png"
                  alt=""
                  className="requirement"
                />
                <p className="titleofhiring">
                  <h4 className="boldtext">Book a Free Consultation Call</h4>{" "}
                  <br />
                  Initiate your Shopify project journey by booking a free
                  consultation call with BrandClever. This call provides
                  you with the opportunity to connect with our team of experts,
                  allowing us to understand.
                </p>
              </div>
            </Col>

            <Col md={3}>
              <div className="hiring_process">
                <img
                  src="images/hire/resume.png"
                  alt=""
                  className="requirement"
                />
                <p className="titleofhiring">
                  <h4 className="boldtext">Discuss The Shopify Projects</h4>
                  <br />
                  We will focus on a comprehensive discussion about your Shopify
                  project. We encourage you to share your ideas, brand identity,
                  target audience, and desired functionalities. This discussion
                  sets the foundation.
                </p>
              </div>
            </Col>

            <Col md={3}>
              <div className="hiring_process">
                <img
                  src="images/hire/finalize.png"
                  alt=""
                  className="requirement"
                />
                <p className="titleofhiring">
                  <h4 className="boldtext">Project Execution & Delivery</h4>
                  <br />
                  Our dedicated team of Shopify experts starts working diligently
                  on your project, adhering to the specified timeline and
                  delivering exceptional results. Throughout this phase, we
                  maintain open communication.
                </p>
              </div>
            </Col>

            <Col md={3}>
              <div className="hiring_process">
                <img
                  src="images/hire/assign-task.png"
                  alt=""
                  className="requirement"
                />
                <p className="titleofhiring">
                  <h4 className="boldtext">
                    Daily / Weekly / Monthly Reporting
                  </h4>
                  <br />
                  We provide regular reports, tailored to your preference, on a
                  daily, weekly, or monthly basis. These reports encompass the
                  project's progress, milestones achieved, and any challenges
                  encountered.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="shopify_images">
            <Col md={4}>
              <div class="images">
                <div class="image">
                  <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" />
                  <img
                    class="first"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujP_XCpNogxiQMd7av2SPgG656cqFkD_Ty3PM7UBw09SVp3mUY5_HXYbyovY7fygvi4I&usqp=CAU"
                  />
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div class="images">
                <div class="image">
                  <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" />
                  <img
                    class="first"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujP_XCpNogxiQMd7av2SPgG656cqFkD_Ty3PM7UBw09SVp3mUY5_HXYbyovY7fygvi4I&usqp=CAU"
                  />
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div class="images">
                <div class="image">
                  <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" />
                  <img
                    class="first"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujP_XCpNogxiQMd7av2SPgG656cqFkD_Ty3PM7UBw09SVp3mUY5_HXYbyovY7fygvi4I&usqp=CAU"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row className="shopify_images">
            <Col md={4}>
              <div class="images">
                <div class="image">
                  <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" />
                  <img
                    class="first"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujP_XCpNogxiQMd7av2SPgG656cqFkD_Ty3PM7UBw09SVp3mUY5_HXYbyovY7fygvi4I&usqp=CAU"
                  />
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div class="images">
                <div class="image">
                  <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" />
                  <img
                    class="first"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujP_XCpNogxiQMd7av2SPgG656cqFkD_Ty3PM7UBw09SVp3mUY5_HXYbyovY7fygvi4I&usqp=CAU"
                  />
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div class="images">
                <div class="image">
                  <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" />
                  <img
                    class="first"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujP_XCpNogxiQMd7av2SPgG656cqFkD_Ty3PM7UBw09SVp3mUY5_HXYbyovY7fygvi4I&usqp=CAU"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="payment">
        <div className="container">
          <Row className="onbasispayment">
            <Col md={4} className="hire_box_main">
              <div className="box_shadow">
                <div className="first_box_hire">
                  <h3 className="title_onbasis">
                    Hourly Basis <br /> <span className="perhour">$25</span>/hr
                  </h3>
                </div>
                <div className="alltext">
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Cost is cited on hourly basis
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Max, 8 hours a day and 5 days per week
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      A dedicated developer will be allotted
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Communication via: Email, Skype, Phone
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Ideal for Short-term projects
                      <br />
                    </p>
                  </div>
                </div>
                <div className="btn_contact">
                  <button className="btn_contactus">Contact Us</button>
                </div>
              </div>
            </Col>

            <Col md={4} className="hire_box_main">
              <div className="box_shadow">
                <div className="second_box_hire">
                  <h3 className="title_onbasis">
                    Weekly Basis <br /> <span className="perhour">$900</span>/wk
                  </h3>
                </div>
                <div className="alltext">
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Cost is cited on weekly basis
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Max, 8 hours a day and 5 days per week
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      A dedicated developer will be allotted
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Communication via: Email, Skype, Phone
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Favorable for short-term and mid-term projects
                      <br />
                    </p>
                  </div>
                </div>
                <div className="btn_contact">
                  <button className="btn_contactus">Contact Us</button>
                </div>
              </div>
            </Col>

            <Col md={4} className="hire_box_main" >
              <div className="box_shadow">
                <div className="third_box_hire">
                  <h3 className="title_onbasis">
                    Monthly Basis <br /> <span className="perhour">$3200</span>/m
                  </h3>
                </div>
                <div className="alltext">
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Cost is cited on monthly basis
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Max, 8 hours a day and 5 days per week
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      A dedicated developer will be allotted
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Communication via: Email, Skype, Phone
                      <br />
                    </p>
                  </div>
                  <div className="circle_text">
                    <CheckCircleIcon className="circle_tick" />
                    <p className="text_expertise">
                      Favorable for long-term projects
                      <br />
                    </p>
                  </div>
                </div>
                <div className="btn_contact">
                  <button className="btn_contactus">Contact Us</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="faqs">
        <div className="container">
          <div className="title_faqs">
            <h2 className="titlefaqs">Frequently Asked Questions</h2>
          </div>
          <div className="accordionfaq">
            <div className="left_side_faq">

              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    What is Shopify, and why is it popular for e-commerce?
                  </AccordionSummary>
                  <AccordionDetails>
                    Shopify is a leading e-commerce platform that allows
                    businesses to create and manage online stores. Its popularity
                    stems from its user-friendly interface, customizable
                    templates, secure transactions, and a range of powerful
                    features tailored to e-commerce needs.
                  </AccordionDetails>
                </Accordion>
              </div>

              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    Can I make changes to my Shopify store after it's live?
                  </AccordionSummary>
                  <AccordionDetails>
                    Absolutely. You have complete control over your Shopify store
                    and can make changes such as adding products, updating
                    content, modifying design elements, and integrating new
                    features even after it's live.
                  </AccordionDetails>
                </Accordion>
              </div>

              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    How can a Shopify expert help improve my online store?
                  </AccordionSummary>
                  <AccordionDetails>
                    Shopify experts have specialized knowledge to enhance your
                    store's design, functionality, and performance. They can
                    optimize the user experience, integrate third-party apps,
                    customize themes, and implement strategies for increased
                    conversions and sales.
                  </AccordionDetails>
                </Accordion>
              </div>

              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    Do Shopify experts provide SEO services for my store?
                  </AccordionSummary>
                  <AccordionDetails>
                    Yes, many Shopify experts offer SEO services to optimize your
                    store for search engines. They can help with keyword research,
                    meta tags, page speed optimization, and other SEO strategies
                    to improve visibility and ranking.
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            <div className="right_side_faq">
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    How long does setting up a Shopify store with your expert help
                    take?
                  </AccordionSummary>
                  <AccordionDetails>
                    The timeframe varies depending on the complexity of the
                    project. A simple store setup may take a few days, while a
                    more customized and feature-rich store can take several weeks.
                    Timelines are typically discussed and agreed upon during
                    project consultation.
                  </AccordionDetails>
                </Accordion>
              </div>
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    Can I get support and maintenance for my Shopify store
                    post-launch?
                  </AccordionSummary>
                  <AccordionDetails>
                    Yes, Shopify experts often provide ongoing support and
                    maintenance services. This includes updates, security patches,
                    troubleshooting, and ensuring your store operates smoothly and
                    securely.
                  </AccordionDetails>
                </Accordion>
              </div>
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    How secure is Shopify for processing customer payments?
                  </AccordionSummary>
                  <AccordionDetails>
                    Shopify is highly secure for processing payments. It is PCI
                    DSS compliant, ensuring that all payment transactions and
                    customer data are handled securely and meet industry standards
                    for payment processing.
                  </AccordionDetails>
                </Accordion>
              </div>
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    Are there limits to the customization of a Shopify store?
                  </AccordionSummary>
                  <AccordionDetails>
                    While Shopify provides a structured environment, it offers
                    extensive customization options. Experts can tailor themes,
                    add custom code, and utilize apps to achieve a wide range of
                    design and functional enhancements to suit your unique
                    business needs.
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
