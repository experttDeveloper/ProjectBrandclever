// ImageSlider.js
import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Rating } from '@mui/material';
import '../css/ClientReview.css';

const testimonialImg = [
    process.env.PUBLIC_URL + '/images/testimonial/boy.png',
    process.env.PUBLIC_URL + '/images/testimonial/girl.png',
    process.env.PUBLIC_URL + '/images/testimonial/boy.png',
    process.env.PUBLIC_URL + '/images/testimonial/girl.png',
    process.env.PUBLIC_URL + '/images/testimonial/boy.png',
  ];

  const tecNoImg = [
    process.env.PUBLIC_URL + '/images/tech/laravel.png', // 0
    process.env.PUBLIC_URL + '/images/tech/magento.png', // 1
    process.env.PUBLIC_URL + '/images/tech/mongo_db.png', // 2
    process.env.PUBLIC_URL + '/images/tech/mysql.png',  // 3
    process.env.PUBLIC_URL + '/images/tech/node_js.png', // 4
    process.env.PUBLIC_URL + '/images/tech/php.png',  // 5
    process.env.PUBLIC_URL + '/images/tech/python.png',  // 6 
    process.env.PUBLIC_URL + '/images/tech/react.png',  //  7
    process.env.PUBLIC_URL + '/images/tech/shopify.png',  // 8
    process.env.PUBLIC_URL + '/images/tech/wordpress.png',  // 9
    process.env.PUBLIC_URL + '/images/tech/zoho_sl.png',   // 10
    process.env.PUBLIC_URL + '/images/tech/squre_Spc.png', // 11
    process.env.PUBLIC_URL + '/images/tech/wix_ol.png', // 12
    process.env.PUBLIC_URL + '/images/tech/presta_Shp.png', // 13
    process.env.PUBLIC_URL + '/images/tech/bigcommerce.png', // 14
    process.env.PUBLIC_URL + '/images/tech/Logo-Google-Cloud.png', // 15 
    process.env.PUBLIC_URL + '/images/tech/air-table.png', // 16
  ];


  const testimonials = [
    {
      id: 1,
      name: 'Solomon',
      country: 'United States',
      date: '25. January, 2024',
      image: testimonialImg[0],
      tecnology: tecNoImg[5],
      text: 'Our project was related to CRM implementation. Brandclever was very helpful and completed the tasks we needed'
    },
    {
      id: 2,
      name: 'Judi ',
      country: 'United States',
      date: '03. November, 2023',
      image: testimonialImg[1],
      tecnology: tecNoImg[11],
      text: 'Branclever did an excellent job - not only with the verbage, but cleaning up my site to make it more clear and concise for my customers. She also added SEO (which I had no knowledge of how to do it). I had a few tweaks and she did what I asked of her - making my site light and welcoming. If need be I would definitely use her again. Thank you Brandclever.'
    },
    {
      id: 3,
      name: 'Alex Evans',
      country: 'United Kingdom',
      date: '07. December, 2023',
      image: testimonialImg[2],
      tecnology: tecNoImg[9],
      text: 'Manish is very well structured and organised. He gives very clear instructions on any technical questions. He clearly knows his was around web builds. His communication is very consistent and always finds the time to carry out the work and fast. I look forward to working to working with them again.'
    },
    {
      id: 4,
      name: 'Kathy',
      country: 'United States',
      date: '12. January, 2024',
      image: testimonialImg[3],
      tecnology: tecNoImg[16],
      text: 'The project started, was done, and completed in an exceptional, 10-star way. Mansi, Manish and his team were great on all levels: communication, documentation, UX designs, planning, implementation, and always on time. I highly recommend Manish and his team'
    },
    {
      id: 5,
      name: 'Adam Viszler',
      country: 'United Kingdom',
      date: '28. November, 2023',
      image: testimonialImg[4],
      tecnology: tecNoImg[5],
      text: 'Very very satisfied with Manish. He did an outstanding job! I had a complicated multilayered project for him and he did everything exactly as asked. Satisfied my expectations. Will try to work with Manish again in the future when I can.'
    },
    // Add more testimonials as needed
  ];

const ClientReview = () => {
    

    useEffect(() => {
        fetch("https://dummy.restapiexample.com/api/v1/employees")
            .then((response) => console.log("responde", response.json()))
            .then((json) => console.log(json));
    })

    const options = {
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        slideBy: 2,
        responsive: {
            0: {
                items: 1, // Display 1 item at a time on small screens
                nav: false,
                loop:true
            },
            768: {
                items: 2, // Display 3 items at a time on medium screens
                nav: true,
            },
            1000: {
                items: 2, // Display 5 items at a time on large screens
                nav: true,
                loop: false,
            },
        },
    };

    return (
        <div className='testy_section'>
            <div className='container'>
                <div className='testi_heding'>
                    <p className='litle-dess'>Testimonial</p>
                    <h2>Satisfied Clients Say</h2>
                </div>
                <OwlCarousel className="owl-theme" {...options}>
                    <div className='custom_review_tab'>

                        <div className="item">
                            <div className='Testmono_clint'>
                                <div className='icon_client'>
                                    <span class="icon">“</span>
                                </div>
                                <div className='tstim_ine'>
                                    <h1>slide1</h1>
                                    <p>Lorem Ipsum simpy dummy
                                        text of the printing and types
                                        industry has been the industr
                                        standard dummy.
                                    </p>
                                    <div className='clint_name_star'>
                                        <div className='clint_name'>
                                            <h3>Raleigh Friend</h3>
                                            <p>CEO, Seoly</p>
                                        </div>
                                        <div className='star_clint'>
                                            <Rating value={4} readOnly />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className='Testmono_clint'>
                            <div className='icon_client'>
                                <span class="icon">“</span>
                            </div>

                            <div className='tstim_ine'>
                                <h1>slide2</h1>
                                <p>Lorem Ipsum simpy dummy
                                    text of the printing and types
                                    industry has been the industr
                                    standard dummy.
                                </p>
                                <div className='clint_name_star'>
                                    <div className='clint_name'>
                                        <h3>Raleigh Friend</h3>
                                        <p>CEO, Seoly</p>
                                    </div>
                                    <div className='star_clint'>
                                        <Rating value={4} readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='custom_review_tab'>
                        <div className="item">
                            <div className='Testmono_clint'>
                                <div className='icon_client'>
                                    <span class="icon">“</span>
                                </div>
                                <div className='tstim_ine'>
                                    <h1>slide3</h1>
                                    <p>Lorem Ipsum simpy dummy
                                        text of the printing and types
                                        industry has been the industr
                                        standard dummy.
                                    </p>
                                    <div className='clint_name_star'>
                                        <div className='clint_name'>
                                            <h3>Raleigh Friend</h3>
                                            <p>CEO, Seoly</p>
                                        </div>
                                        <div className='star_clint'>
                                            <Rating value={4} readOnly />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className='Testmono_clint'>
                            <div className='icon_client'>
                                <span class="icon">“</span>
                            </div>
                            <div className='tstim_ine'>
                                <h1>slide4</h1>
                                <p>Lorem Ipsum simpy dummy
                                    text of the printing and types
                                    industry has been the industr
                                    standard dummy.
                                </p>
                                <div className='clint_name_star'>
                                    <div className='clint_name'>
                                        <h3>Raleigh Friend</h3>
                                        <p>CEO, Seoly</p>
                                    </div>
                                    <div className='star_clint'>
                                        <Rating value={4} readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
};

export default ClientReview;