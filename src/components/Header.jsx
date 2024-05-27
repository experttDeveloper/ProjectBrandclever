import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {


    return (
        <div>
            <header className="header_section">
                <div className='inner-header'>
                    <div className='container'>
                        <div className='inner_header_nav'>
                            <div className="logo">
                                <Link to="/"><img src="#" className="logo" alt="logo" /></Link>
                            </div>
                            <div className={`menu-toggle  openMenus closeMenus`} >
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className='closeIcon'><i className="fa fa-close"></i></div>
                            </div>
                            <nav className="open  closeToggal">
                                <ul>
                                    <li>
                                        <div className="dropdownMenu">
                                            <Link to="/service" className="dropbtn">Services
                                                <span class="arrow-right">
                                                    <span class="ar_line">
                                                    </span><span class="ar_left">
                                                    </span>
                                                </span>
                                            </Link>

                                            <div className="dropdown-content">

                                                <div className="row">
                                                    <div className="col-md-3 serv_cns">

                                                        <div className='service_img'>
                                                            <img src="" height="32px" width="32px" alt='logo_img' />
                                                            <Link to="/about">test1</Link>
                                                        </div>
                                                        <div className='service_img'>
                                                            <img src="" height="32px" width="32px" alt='logo_img' />
                                                            <Link to="/about">test1</Link>
                                                        </div>
                                                        <div className='service_img'>
                                                            <img src="" height="32px" width="32px" alt='logo_img' />
                                                            <Link to="/about">test1</Link>
                                                        </div>
                                                        <div className='service_img'>
                                                            <img src="" height="32px" width="32px" alt='logo_img' />
                                                            <Link to="/about">test1</Link>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-3 serv_cns">
                                                        <div className='service_img'>
                                                            <img src="" height="32px" width="32px" alt='logo_img' />
                                                            <Link to="/service">test1</Link>
                                                        </div>
                                                        <div className='service_img'>
                                                            <img src="" height="32px" width="32px" alt='logo_img' />
                                                            <Link to="/service">test1</Link>
                                                        </div>
                                                        <div className='service_img'>
                                                            <img src="" height="32px" width="32px" alt='logo_img' />
                                                            <Link to="/review">test1</Link>
                                                        </div>
                                                        <div className='service_img'>
                                                            <img src="" height="32px" width="32px" alt='logo_img' />
                                                            <Link to="/contact">test1</Link>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6 serv_img">
                                                        <img src={'/images/nav/service_nav.png'} alt='logo_img' />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
