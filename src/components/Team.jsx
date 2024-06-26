import React from 'react';
import '../css/team.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import teams from '../data/Team.json'

export default function Team() {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div>
            <section className="team_section">
                <h2>our team</h2>
                <div className="cards">
                    <Slider {...settings}>
                        {
                            teams.data.map((ele, key) => {
                                return (
                                    <div className="card" key={key}>
                                        <div className="card-img-wrapper">
                                            <img src={ele.image ? ele.image:"https://cdn.icon-icons.com/icons2/2570/PNG/512/image_icon_153794.png"} alt={ele.name} />
                                        </div>
                                        {/* <Link to={"#"} className="social-icon" target='_blank'><i class="fa-regular fa-circle-nodes"></i></Link> */}
                                        <div className="card-content-wrapper">
                                            <a href="#" className="card-content">
                                                <h3>{ele.name}</h3>
                                                <p>{ele.profile}</p>

                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </Slider>
                </div>
            </section>
        </div>
    )
}
