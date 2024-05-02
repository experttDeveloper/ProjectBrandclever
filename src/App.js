import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './responsive.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Service from './pages/Service';
import Footer from './components/Footer';
import WhatsAppWidget from "react-whatsapp-chat-widget";
import { animateScroll as scroll } from 'react-scroll';
import PlacementForm from './components/PlacementForm';
import Portfolio from './pages/Portfolio';
import Review from './pages/Review';
import Career from './pages/Career';
import WebDevelopment from './pages/WebDevelopment';
import './App.css'
import GraphicDesign from './pages/GraphicDesign';
import MernStack from './pages/MernStack';
import DigitalMarketing from './pages/DigitalMarketing';
import ContentStrategy from './pages/ContentStrategy';
import Framework from './pages/FrameWork';
import CMSSolution from './pages/CMSSolution';
import PageNotFound from './pages/PageNotFound'
import AboutPage from './pages/AboutPage';
import UpdatedService from './pages/UpdatedService';
import Contact from './pages/Contact';
import HireShopify from './pages/HireShopify';
import './css/hiredeveloper.css'
import './css/ServiceInnerPage.css'
import TermCondition from './pages/TermCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';
import HireMagento from './pages/HireMagento';
import HireWebFlow from './pages/HireWebFlow';
import HireWix from './pages/HireWix';
import HireWoo from './pages/HireWoo';
import HireWordpress from './pages/HireWordpress';
import HireBigCommerce from './pages/HireBigCommerce';
import HireSquareSpace from './pages/HireSquareSpace';
import HireLaravel from './pages/HireLaravel';
import HireReactjs from './pages/HireReactjs';
import HireTalwindCss from './pages/HireTalwindCss';
import HireDigitalMarketing from './pages/HireDigitalMarketing';
import WebDesigning from './pages/WebDesigning';
import LandingPage from './pages/LandingPage';
import Ecommerce from './pages/Ecommerce';
import WebApplication from './pages/WebApplication';
import SoftwareTesting from './pages/SoftwareTesting';



export default class App extends Component {

  scrollToTop = () => {
    scroll.scrollToTop({
      duration: 5000,
      smooth: 'easeInOutQuart',
    });
  };

  render() {



    return (
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="/service" element={<Service />} /> */}
            <Route path="/service" element={<UpdatedService />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="/traning-and-placement" element={<PlacementForm />} />
            <Route path="/review" element={<Review />} />
            <Route path="/career" element={<Career />} />


            <Route path="/term-conditions" element={<TermCondition />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />


            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/website-design" element={<WebDesigning />} />
            <Route path="/graphic-degin" element={<GraphicDesign />} />

            <Route path="/mern-stack" element={<MernStack />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/content-strategy" element={<ContentStrategy />} />
            <Route path="/framework" element={<Framework />} />
            <Route path="/cms-solution" element={<CMSSolution />} />
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/web-application-development" element={<WebApplication />} />
            <Route path="/software-testing" element={<SoftwareTesting />} />


            <Route path="/hire-shopify-expert" element={<HireShopify />} />
            <Route path="/hire-magento-expert" element={<HireMagento />} />
            <Route path="/hire-webflow-expert" element={<HireWebFlow />} />
            <Route path="/hire-wix-expert" element={<HireWix />} />
            <Route path="/hire-woo-commerce-expert" element={<HireWoo />} />
            <Route path="/hire-wordpress-expert" element={<HireWordpress />} />
            <Route path="/hire-bigcommerce-expert" element={<HireBigCommerce />} />
            <Route path="/hire-squarespace-expert" element={<HireSquareSpace />} />
            <Route path="/hire-laravel-developer" element={<HireLaravel />} />
            <Route path="/hire-reactjs-developer" element={<HireReactjs />} />
            <Route path="/hire-tailwind-css-developer" element={<HireTalwindCss />} />
            <Route path="/hire-digital-marekting-expert" element={<HireDigitalMarketing />} />



            <Route
              path="*"
              element={<PageNotFound />}
            />
          </Routes>
          <Footer />
          {/* <Chat /> */}

        </BrowserRouter>

        <WhatsAppWidget
          phoneNo="9872711866"
          position="right"
          widgetWidth="300px"
          widgetWidthMobile="260px"
          autoOpen={false}
          autoOpenTimer={5000}
          messageBox={true}
          messageBoxTxt="Hi Team, is there any related service available ?"
          iconSize="40"
          iconColor="white"
          iconBgColor="#28a745"
          headerIcon={process.env.PUBLIC_URL + '/images/supports1.png'}
          headerIconColor="pink"
          headerTxtColor="black"
          headerBgColor="#28a745"
          headerTitle=" Ishika Support Team"
          headerCaption="Online"
          bodyBgColor="#bbb"
          chatPersonName="Ishika"
          chatMessage={<> Hi there 👋 <br /><br /> How can I help you? </>}
          footerBgColor="#999"
          placeholder="Type a message.."
          btnBgColor="#28a745"
          btnTxt="Start Chat"
          btnTxtColor="black"
        />

        <button onClick={this.scrollToTop} className='onTop '><i className="fa fa-arrow-circle-up" aria-hidden="true"></i></button>

      </>
    );
  }
}
