import React from 'react'
import { Col, Row } from 'react-bootstrap';
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";

export default function ServiceSection() {
  return (
    <div>
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
       
      </div>
    </div>
  )
}
