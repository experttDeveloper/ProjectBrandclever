// ImageSlider.js
import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Rating } from '@mui/material';

const ClientReview = () => {

    useEffect(() => {
        fetch("https://dummy.restapiexample.com/api/v1/employees")
            .then((response) => console.log("responde",response.json()))
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
        responsive: {
            0: {
                items: 1, // Display 1 item at a time on small screens
                nav: true,
            },
            600: {
                items: 2, // Display 3 items at a time on medium screens
                nav: false,
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
                    <div className="item">
                        <div className='Testmono_clint'>
                            <span class="icon">“</span>
                            <div className='tstim_ine'>
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
                    <div className="item">
                        <div className='Testmono_clint'>
                            <span class="icon">“</span>
                            <div className='tstim_ine'>
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
                    <div className="item">
                        <div className='Testmono_clint'>
                            <span class="icon">“</span>
                            <div className='tstim_ine'>
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