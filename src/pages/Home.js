import React from 'react'
import Banner from '../components/Banner'
// import PlatForms from '../components/PlatForms'
//import FruitsCarousel from '../components/FruitsCarousel';
//import Activity from '../components/Activity';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ContactForm from '../components/ContactForm';
import Tabs from '../components/Tabs';
import Tachnology from '../components/Tachnology';
import AboutInfo from '../components/AboutInfo';
import OurServices from '../components/OurServices';
import Icons from '../components/Icons';
import DatabaseSec from '../components/DatabaseSec';
import Faq from '../components/Faq';
import HomePageScroll from '../components/HomePageScroll';
import ClientReview from '../components/ClientReview';
import Portfolio from '../components/Portfolio';
import { Container } from 'react-bootstrap';
import MetaTitleDes from '../components/MetaTitleDes';

const Home = () => {

  // const columnImages = [
  //   process.env.PUBLIC_URL + '/images/frelancer.png',
  //   process.env.PUBLIC_URL + '/images/up-work.png',
  //   process.env.PUBLIC_URL + '/images/pph.png',
  //   process.env.PUBLIC_URL + '/images/guru.png',
  // ];

  // const backgroundImage = [
  //   process.env.PUBLIC_URL + '/images/develop.jpg',
  //   process.env.PUBLIC_URL + '/images/meeting.jpg',
  //   process.env.PUBLIC_URL + '/images/job.jpg',
  //   process.env.PUBLIC_URL + '/images/job-5.jpg',
  // ];  
  const aboutInfo = [
    process.env.PUBLIC_URL + '/images/about.jpg',
    process.env.PUBLIC_URL + '/images/crown.png',
  ];



  const technologyImages = [
    process.env.PUBLIC_URL + '/images/tech/shopify.png',
    process.env.PUBLIC_URL + '/images/tech/wordpress.png',
    process.env.PUBLIC_URL + '/images/tech/magento.png',
    process.env.PUBLIC_URL + '/images/tech/php.png',
    process.env.PUBLIC_URL + '/images/tech/my_sql_lg.png',
    process.env.PUBLIC_URL + '/images/tech/laravel.png',
    process.env.PUBLIC_URL + '/images/tech/react.png',
    process.env.PUBLIC_URL + '/images/tech/nd_js.png',
    process.env.PUBLIC_URL + '/images/tech/mongo_db.png',
  ];

  return (
    <>
      <MetaTitleDes title={"BrandClever - Leading IT Service Provider In India"} description={"We are one of the leading IT service providers offering a range of CMS solutions, digital marketing, Graphic design & web development services worldwide."} />
      <div className='page'>
        <Banner />
        <Tachnology techImages={technologyImages} />

        <AboutInfo imgAbout={aboutInfo} />
        {/* <HomePageScroll /> */}
        {/* <FruitsCarousel bgImage={backgroundImage} /> */}

        <OurServices />
        {/* <PlatForms images={columnImages} /> */}
        {/* <Tabs /> */}
        <Portfolio />
        {/* <Activity /> */}

        {/* <TestimonialCarousel /> */}
        <ClientReview />
        <Icons />
        <DatabaseSec />


        <div className='faq_Contact_Sec'>
          <Container>
            <Faq />
            <div style={{ width: '100%' }}>

              <h2 className='contact_use_heading'>Send Us a Message</h2>
              <ContactForm />
            </div>

          </Container>
        </div>
      </div>

    </>
  );
};

export default Home;
