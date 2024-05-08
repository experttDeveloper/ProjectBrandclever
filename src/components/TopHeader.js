import React from 'react'

export default function TopHeader({ title, description }) {

    return (
        <div>
            <div class="main_header">
                <img src="/images/about/main_banner.png" alt="brandclever top image" class="main_header_background-image" />
                <div class="main-heading_title">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    
                </div>
            </div>
            {/* <section className='main_header'>
                <img src='images/about/aboutbanner.jpg' />
                <div className='main-heading_title'>
                    <h1>{title}</h1>
                </div>
            </section> */}
        </div>
    )
}
