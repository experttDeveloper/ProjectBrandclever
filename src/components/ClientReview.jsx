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
      name: 'David',
      country: 'Israel',
      rating:5,
      image: testimonialImg[0],
      tecnology: tecNoImg[5],
      text: 'Working with Brandclever was a real pleasure. It is professional, communicative and always available. I will definitely like to work with Brandclever in the future!'
    },
    {
      id: 2,
      name: 'JP ',
      rating:5,
      country: 'Netherland',
      image: testimonialImg[1],
      tecnology: tecNoImg[11],
      text: 'A talented, dedicated and very nice professional. Great communication. Thank you very much for all your help.'
    },
    {
      id: 3,
      name: 'Simone',
      rating:5,
      country: 'Australia',
      image: testimonialImg[2],
      tecnology: tecNoImg[9],
      text: "I would highly recommend Brandclever. It was a pleasure working with Manish. He wrote clean, well-commented code, followed instructions without a problem, and voluntarily sent me a status update. I'd give him 6 stars if I could."
    },
    {
      id: 4,
      name: 'Alex',
      rating:5,
      country: 'United kingdom',
      image: testimonialImg[3],
      tecnology: tecNoImg[16],
      text: 'Brandclever is very well structured and organised. He gives very clear instructions on any technical questions. Brandclever clearly knows his was around web builds. His communication is very consistent and always finds the time to carry out the work and fast.I look forward to working to working with them again.'
    }
  ];

const ClientReview = () => {
    

    
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
                                    <p>{testimonials[0].text}
                                    </p>
                                    <div className='clint_name_star'>
                                        <div className='clint_name'>
                                            <h3>{testimonials[0].name}</h3>
                                            <p>{testimonials[0].country}</p>
                                        </div>
                                        <div className='star_clint'>
                                            <Rating value={testimonials[0].rating} readOnly />
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
                                <p>{testimonials[1].text}
                                </p>
                                <div className='clint_name_star'>
                                    <div className='clint_name'>
                                        <h3>{testimonials[1].name}</h3>
                                        <p>{testimonials[1].country}</p>
                                    </div>
                                    <div className='star_clint'>
                                        <Rating value={testimonials[1].rating} readOnly />
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
                                    <p>{testimonials[2].text}
                                    </p>
                                    <div className='clint_name_star'>
                                        <div className='clint_name'>
                                            <h3>{testimonials[2].name}</h3>
                                            <p>{testimonials[2].country}</p>
                                        </div>
                                        <div className='star_clint'>
                                        <Rating value={testimonials[2].rating} readOnly />
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
                                <p>{testimonials[3].text}
                                </p>
                                <div className='clint_name_star'>
                                    <div className='clint_name'>
                                        <h3>{testimonials[3].name}</h3>
                                        <p>{testimonials[3].country}</p>
                                    </div>
                                    <div className='star_clint'>
                                        <Rating value={testimonials[3].rating} readOnly />
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