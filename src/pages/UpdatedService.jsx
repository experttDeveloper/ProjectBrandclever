import React from 'react'
import '../css/updateservice.css'
import JoinTeam from '../components/JoinTeam'
import TopHeader from '../components/TopHeader'
import Portfolio from '../components/Portfolio';
import { Link } from 'react-router-dom'
import services from '../data/Service.json'
import { Container } from 'react-bootstrap';


export default function UpdatedService() {


    return (
        <div>
            <TopHeader title="Our Service" description="Brandclever emerges as a top-tier IT force, delivering smart and proven 
                            solutions across the tech spectrum. With our extensive expertise and experience,
                            we're quickly becoming the leader in providing innovative software services for every 
                            domain."/>
            <div class="hexagons_outer section_ptb">
                <div class="container">
                    <div class="hexagons-title text-center">
                        <h2 class="fs-48 fs-34-mob">We Serve All Industries</h2>
                        <p class="fs-20 mb-0">We stay on top of our industry by being experts in yours.</p>
                    </div>
                    <div class="hex_1bx">
                        {services.data.slice(0, 3).map((service, key) => {
                            return (
                                <div class="ctm_hex_dv1" id="borer_bx_1">
                                    <div class="ctm_hex_dv2">
                                        <Link to={service.url}>
                                            <div class="ctm_hex_dv3" id="bg_inner_bx1">
                                                <img src={service.icon}  alt={service.title}/>
                                                <span class="text-center fs-20 fw-500">{service.title}</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div class="hex_2bx">
                        {services.data.slice(3, 7).map((service, key) => {
                            return (
                                <div class="ctm_hex_dv1" id="borer_bx_4">
                                    <div class="ctm_hex_dv2">
                                        <Link to={service.url}>
                                            <div class="ctm_hex_dv3" id="bg_inner_bx4">
                                                <img src={service.icon} alt={service.title}/>
                                                <span class="text-center fs-20 fw-500">{service.title} </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div class="hex_1bx third_box">
                        {services.data.slice(7, 10).map((service, key) => {
                            return (
                                <div class="ctm_hex_dv1" id="borer_bx_1">
                                    <div class="ctm_hex_dv2">
                                        <Link to={service.url}>
                                            <div class="ctm_hex_dv3" id="bg_inner_bx1">
                                                <img src={service.icon} alt={service.title}/>
                                                <span class="text-center fs-20 fw-500">{service.title}</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                        <div className='Responsive_section_service'>
                            <Container>
                                <div className='Main_service'>
                                    <div className='Sub_main_siv'>
                                        <img src=" images/service/website_develop.png" alt="responsive_images"/>
                                        <h6>Web Development</h6>
                                    </div>
                                   
                                    <div className='Sub_main_siv'>
                                        <img src=" images/service/graphic_design.png" alt="responsive_images"/>
                                        <h6>Graphic Design</h6>
                                    </div>
                                    <div className='Sub_main_siv'>
                                        <img src=" images/service/cms_solution.png" alt="responsive_images"/>
                                        <h6>CMS Solution</h6>
                                    </div>
                                    <div className='Sub_main_siv'>
                                        <img src="images/service/content_strategy.png  " alt="responsive_images"/>
                                        <h6>Framework</h6>
                                    </div>
                                    <div className='Sub_main_siv'>
                                        <img src="images/service/mern_stack.png " alt="responsive_images"/>
                                        <h6>Content Strategy</h6>
                                    </div>
                                    <div className='Sub_main_siv'>
                                        <img src="images/service/digital_marketing.png " alt="responsive_images"/>
                                        <h6>Digital Marketing</h6>
                                    </div>
                              
                                </div>
                            </Container>
                        </div>
            </div>

            <Portfolio />
            <JoinTeam />
        </div>
    )
}
