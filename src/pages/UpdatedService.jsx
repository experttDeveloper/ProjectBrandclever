import React from 'react'
import '../css/updateservice.css'
import JoinTeam from '../components/JoinTeam'
import TopHeader from '../components/TopHeader'
import Portfolio from '../components/Portfolio';
import { Link } from 'react-router-dom'
import services from '../data/Service.json'


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
                                                <img src={service.icon} />
                                                <span class="text-center fs-20 fw-500">{service.title}</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div class="hex_2bx">
                        {services.data.slice(3, 8).map((service, key) => {
                            return (
                                <div class="ctm_hex_dv1" id="borer_bx_4">
                                    <div class="ctm_hex_dv2">
                                        <Link to={service.url}>
                                            <div class="ctm_hex_dv3" id="bg_inner_bx4">
                                                <img src={service.icon} />
                                                <span class="text-center fs-20 fw-500">{service.title} </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
            <Portfolio />
            <JoinTeam />
        </div>
    )
}
