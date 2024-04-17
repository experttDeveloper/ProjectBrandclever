import React from 'react'
import '../css/updateservice.css'
import JoinTeam from '../components/JoinTeam'
import { Col, Row } from 'react-bootstrap'
import TopHeader from '../components/TopHeader'
import Portfolio from '../components/Portfolio'

export default function UpdatedService() {


    return (
        <div>
            <TopHeader title="Our Service" description="Brandclever emerges as a top-tier IT force, delivering smart and proven 
                            solutions across the tech spectrum. With our extensive expertise and experience,
                            we're quickly becoming the leader in providing innovative software services for every 
                            domain."/>

            {/* <section class="serv_main">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
                            <h2 class="sec_inner_title center_inner_page wow fadeInDown" style={{ visibility: "visible", animationName: "fadeInDown" }} >Services</h2>
                            <p class="text-center wow fadeInDown" style={{ visibility: "visible", animationName: "fadeInDown" }}>We are continuously refining ourselves through our Top web development   service to others. We have provided a wide range of services to the industries that are leading the way in how we define our everyday business and growth over the past few years. It’s our constant endeavor to provide smart solutions to transform your brand as we have always treated our customers as our partners.</p>
                        </div>
                    </div>

                    <div class="serv_outr">
                        <div class="serv_btn_outr">
                            <button type="button"><img src="images/service/services_btn_icon.png" alt="img" /></button>
                        </div>
                        <div class="service_shape service_one">
                            <a class="clickk" href="https://www.paradisetechsoft.com/web-development-services"></a>
                            <div class="serv_text_outr">
                                <h2 class="serv_numb"><span>01</span></h2>

                                <h4><strong><a href="https://www.paradisetechsoft.com/web-development-services">Web Development</a></strong></h4>
                                <p><small>We provide advanced web development services tailored to meet your business needs. Focus on quality and cost effective solutions.</small></p>

                            </div>

                        </div>
                        <div class="service_shape service_two">
                            <a class="clickk" href="#"></a>
                            <div class="serv_text_outr">
                                <h2 class="serv_numb"><span>02</span></h2>
                                <h4><strong><a href="#">Web Designing</a></strong></h4>
                                <p><small>We design highly responsive and user friendly websites. We are specialized in custom website designs to create unique experiences for our clients.
                                </small>
                                </p>
                            </div>

                        </div>
                        <div class="service_shape service_three">
                            <a class="clickk" href="https://www.paradisetechsoft.com/moblie-application-services"></a>
                            <div class="serv_text_outr">

                                <h4><strong><a href="https://www.paradisetechsoft.com/moblie-application-services">Mobile Application</a></strong></h4>
                                <p><small>We help you deliver all-device compatible mobile applications </small></p>
                                <h2 class="serv_numb"><span>03</span></h2>
                            </div>
                        </div>
                        <div class="service_shape service_four">
                            <a class="clickk" href="https://www.paradisetechsoft.com/digital-marketing-services"></a>
                            <div class="serv_text_outr">
                                <h4><strong><a href="https://www.paradisetechsoft.com/digital-marketing-services">SEO</a></strong></h4>
                                <p><small>We provide great Digital Marketing services to keep your business ahead and drive more clients and traffic to your website.
                                </small>
                                </p>

                                <h2 class="serv_numb"><span>04</span></h2>
                            </div>
                        </div>
                        <div class="service_shape service_five">
                            <a class="clickk" href="https://www.paradisetechsoft.com/artificial-intelligence-services"> </a>
                            <div class="serv_text_outr">
                                <h4><strong><a href="https://www.paradisetechsoft.com/artificial-intelligence-services">AI</a></strong></h4>
                                <p><small> 4th Industrial Revolution (AI), helps to enhance your business, grow your investments and elevate both quality and trust of our customers.
                                </small>
                                </p>

                                <h2 class="serv_numb"><span>05</span></h2>
                            </div>

                        </div>
                        <div class="service_shape service_six">
                            <a class="clickk" href="#"></a>
                            <div class="serv_text_outr">
                                <h2 class="serv_numb"><span>06</span></h2>
                                <h4><strong><a href="#">Web Graphics</a></strong></h4>
                                <p><small>We create graphics that are unique not just in style and dimension but also that represent core creative ideas.
                                </small>
                                </p>

                            </div>

                        </div>
                    </div>


                    <div class="serv_outr serv_mobile_section">
                        <div class="service_shape service_one">
                            <div class="serv_text_outr">
                                <a class="mobile_service_click" href="https://www.paradisetechsoft.com/web-development-services">
                                    <h4><strong>Web Development</strong></h4></a>
                                <p><small>We provide advanced web development services tailored to meet your business needs. Focus on quality and cost effective solutions.</small></p>
                            </div>
                        </div>
                        <div class="service_shape service_two">
                            <div class="serv_text_outr">
                                <a class="mobile_service_click" href="#">
                                    <img src="../Downloads/serv_one.png" class="serv_icon" alt="img" />
                                    <h4><strong>Website Design</strong></h4></a>
                                <p><small>We design highly responsive and user friendly websites. We are specialized in custom website designs to create unique experiences for our clients.
                                </small>
                                </p>z`
                            </div>
                        </div>
                        <div class="service_shape service_three">
                            <div class="serv_text_outr">
                                <a class="mobile_service_click" href="https://www.paradisetechsoft.com/moblie-application-services">
                                    <h4><strong>Mobile Application</strong></h4></a>
                                <p><small>We help you deliver all-device compatible mobile </small></p>
                            </div>
                        </div>
                        <div class="service_shape service_four">
                            <div class="serv_text_outr">
                                <a class="mobile_service_click" href="https://www.paradisetechsoft.com/digital-marketing-services"><img src="../Downloads/serv_one.png" class="serv_icon" alt="img" />
                                    <h4><strong>SEO</strong></h4></a>
                                <p><small>We provide great Digital Marketing expertise to keep your business ahead and drive more clients and traffic to your website.
                                </small>
                                </p>
                            </div>
                        </div>
                        <div class="service_shape service_five">
                            <div class="serv_text_outr">
                                <a class="mobile_service_click" href="https://www.paradisetechsoft.com/artificial-intelligence-services">
                                    <img src="img/coding.png" class="serv_icon" alt="img" />
                                    <h4><strong>AI</strong></h4></a>
                                <p><small> 4th Industrial Revolution (AI), helps to enhance your business, grow your investments and elevate both quality and trust of our customers.
                                </small>
                                </p>
                            </div>
                        </div>
                        <div class="service_shape service_six">
                            <div class="serv_text_outr">
                                <a class="mobile_service_click" href="#">
                                    <img src="../Downloads/serv_one.png" class="serv_icon" alt="img" />
                                    <h4><strong>Web Graphics</strong></h4></a>
                                <p><small>We create graphics that are unique not just in style and dimension but also that represent core creative ideas.
                                </small>
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </section> */}
            <div class="hexagons_outer section_ptb">
                <div class="container">
                    <div class="hexagons-title text-center">
                        <h2 class="fs-48 fs-34-mob">We Serve All Industries</h2>
                        <p class="fs-20 mb-0">We stay on top of our industry by being experts in yours.</p>
                    </div>
                    <div class="hex_1bx">
                        <div class="ctm_hex_dv1" id="borer_bx_1">
                            <div class="ctm_hex_dv2">
                                <a href="/">
                                    <div class="ctm_hex_dv3" id="bg_inner_bx1">
                                        <img src="images/service/website_design.png" />
                                        <span class="text-center fs-20 fw-500">Website Designing </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="ctm_hex_dv1" id="borer_bx_2">
                            <div class="ctm_hex_dv2">
                                <a href="/">
                                    <div class="ctm_hex_dv3" id="bg_inner_bx2">
                                        <img src="images/service/website_develop.png" />
                                        <span class="text-center fs-20 fw-500">Web Development </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="ctm_hex_dv1" id="borer_bx_3">
                            <div class="ctm_hex_dv2">
                                <a href="/">
                                    <div class="ctm_hex_dv3" id="bg_inner_bx3">
                                        <img src="images/service/graphic_design.png" />
                                        <span class="text-center  fs-20 fw-500">GRAPHIC DESIGNS</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="hex_2bx">
                        <div class="ctm_hex_dv1" id="borer_bx_4">
                            <div class="ctm_hex_dv2">
                                <a href="/">
                                    <div class="ctm_hex_dv3" id="bg_inner_bx4">
                                        <img src="images/service/mern_stack.png" />
                                        <span class="text-center fs-20 fw-500">MERN STACK </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="ctm_hex_dv1" id="borer_bx_5">
                            <div class="ctm_hex_dv2">
                                <a href="/">
                                    <div class="ctm_hex_dv3" id="bg_inner_bx5">
                                        <img src="images/service/content_strategy.png" />
                                        <span class="text-center fs-20 fw-500">CONTENT STRATEGY</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="ctm_hex_dv1" id="borer_bx_6">
                            <div class="ctm_hex_dv2">
                                <a href="/">
                                    <div class="ctm_hex_dv3" id="bg_inner_bx6">
                                        <img src="images/service/framework.png" />
                                        <span class="text-center fs-20 fw-500">FRAMEWORK</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="ctm_hex_dv1" id="borer_bx_7">
                            <div class="ctm_hex_dv2">
                                <a href="/">
                                    <div class="ctm_hex_dv3" id="bg_inner_bx7">
                                        <img src="images/service/cms_solution.png" />
                                        <span class="text-center fs-20 fw-500">CMS SOLUTIONS</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Portfolio/>
            <JoinTeam />
        </div>
    )
}
