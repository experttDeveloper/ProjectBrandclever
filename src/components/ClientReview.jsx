// ImageSlider.js
import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Rating } from '@mui/material';
import '../css/ClientReview.css';
import reviews from '../data/ClientReview.json'


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
                                    <p>{reviews.data[0].review}
                                    </p>
                                    <div className='clint_name_star'>
                                        <div className='clint_name'>
                                            <h3>{reviews.data[0].name}</h3>
                                            <p>{reviews.data[0].country}</p>
                                        </div>
                                        <div className='star_clint'>
                                            <Rating value={reviews.data[0].rating} readOnly />
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
                                <p>{reviews.data[1].review}
                                </p>
                                <div className='clint_name_star'>
                                    <div className='clint_name'>
                                        <h3>{reviews.data[1].name}</h3>
                                        <p>{reviews.data[1].country}</p>
                                    </div>
                                    <div className='star_clint'>
                                        <Rating value={reviews.data[1].rating} readOnly />
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
                                    <p>{reviews.data[2].review}
                                    </p>
                                    <div className='clint_name_star'>
                                        <div className='clint_name'>
                                            <h3>{reviews.data[2].name}</h3>
                                            <p>{reviews.data[2].country}</p>
                                        </div>
                                        <div className='star_clint'>
                                        <Rating value={reviews.data[2].rating} readOnly />
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
                                <p>{reviews.data[3].review}
                                </p>
                                <div className='clint_name_star'>
                                    <div className='clint_name'>
                                        <h3>{reviews.data[3].name}</h3>
                                        <p>{reviews.data[3].country}</p>
                                    </div>
                                    <div className='star_clint'>
                                        <Rating value={reviews.data[3].rating} readOnly />
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
                                    <p>{reviews.data[4].review}
                                    </p>
                                    <div className='clint_name_star'>
                                        <div className='clint_name'>
                                            <h3>{reviews.data[4].name}</h3>
                                            <p>{reviews.data[4].country}</p>
                                        </div>
                                        <div className='star_clint'>
                                        <Rating value={reviews.data[4].rating} readOnly />
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
                                <p>{reviews.data[5].review}
                                </p>
                                <div className='clint_name_star'>
                                    <div className='clint_name'>
                                        <h3>{reviews.data[5].name}</h3>
                                        <p>{reviews.data[5].country}</p>
                                    </div>
                                    <div className='star_clint'>
                                        <Rating value={reviews.data[5].rating} readOnly />
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