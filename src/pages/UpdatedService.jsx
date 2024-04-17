import React from 'react'
import '../css/updateservice.css'
import JoinTeam from '../components/JoinTeam'
import { Col, Row } from 'react-bootstrap'
import TopHeader from '../components/TopHeader'
import Portfolio from '../components/Portfolio';
import { Link } from 'react-router-dom'

const services = [
    {
        title: 'Web Development',
        icon: process.env.PUBLIC_URL + '/images/service/website_develop.png',
        description: 'At Brandclever, Our professionals harness modern programming languages and frameworks to construct secure, scalable, high-performing web solutions. Prioritizing functionality, efficiency, and user-friendliness, we ensure an exceptional experience for your audience. Our expertise spans prominent platforms including PHP frameworks, WordPress, and Shopify. Entrust us to elevate your online presence, delivering bespoke web development solutions that resonate with your brand and drive tangible results. Welcome to the pinnacle of web development excellence with Brandclever.',
        additionalInfo: '<ul><li>Shopify Store Development</li><li>Wordpress Site Development</li><li>Landing Page Website</li><li>Backend Development</li><li>Frontend Development</li></ul>',
        url: '/web-development',
        tools: ['Shopify Store Development', 'Wordpress Site Development', 'Landing Page Website', 'Backend Development', 'Frontend Development'],
    },
    {
        title: 'Graphic Design',
        icon: process.env.PUBLIC_URL + '/images/service/graphic_design.png',
        description: "We at Brandclever shape concepts into impactful designs, imprinting professionalism onto your brand. Our creative team crafts visually stunning graphics that command attention and resonate with your audience, utilizing leading tools such as Adobe Photoshop, Coreldraw, Figma, and Illustrator. Let's elevate your brand's visual identity together.",
        additionalInfo: '<ul><li>Banner Designs</li><li>Icon Designs</li><li>Mobile Application Designs</li><li>Logo Designs</li><li>Business Cards</li><li>Brochures</li><ul>',
        url: '/graphic-degin',
        tools: ['Banner Designs', 'Icon Designs', 'Mobile Application Designs', 'Logo Designs', 'Business Cards', 'Brochures'],
    },
    {
        title: 'CMS Solution',
        icon: process.env.PUBLIC_URL + '/images/service/cms_solution.png',
        description: "Unlock seamless digital control with Brandclever's CMS solutions. Empowering your online presence, our Content Management System (CMS) service offers a user-friendly interface for effortless content management. Stay dynamic and authentic as you effortlessly update and expand your website's content—trust in our expertise, backed by leading tools like WordPress, Drupal, Joomla, Wix, Magento, and more.",
        additionalInfo: '<ul><li>Content Creation and Storage</li><li>User Access Control</li><li>Workflow Automation</li><li>Multi-Platform Publishing</li><li>Content Analysis</li><li>Content Migration Services</li></ul>',
        url: '/cms-solution',
        tools: ['Content Creation and Storage', 'User Access Control', 'Workflow Automation', 'Multi-Platform Publishing', 'Content Analysis', 'Content Migration Services'],
    },
    {
        title: 'Content Strategy',
        icon: process.env.PUBLIC_URL + '/images/service/content_strategy.png',
        description: 'Content Management Solutions using technologies like WordPress, Shopify, Magento 2.',
        additionalInfo: '<ul><li>Content Creation and Storage</li><li>User Access Control</li><li>Workflow Automation</li><li>Multi-Platform Publishing</li><li>Content Analysis</li><li>Content Migration Services</li></ul>',
        url: '/content-strategy',
        tools: ['Content Audits', 'Content Calendar and Edit`ing', 'Content Distribution and Promotion', 'Conversion website and landing pages', 'Email & social media copy', 'Optimized blog posts and articles'],
    },
    {
        title: 'Mern Stack',
        icon: process.env.PUBLIC_URL + '/images/service/mern_stack.png',
        description: 'Content Management Solutions using technologies like WordPress, Shopify, Magento 2.',
        additionalInfo: '<ul><li>Content Creation and Storage</li><li>User Access Control</li><li>Workflow Automation</li><li>Multi-Platform Publishing</li><li>Content Analysis</li><li>Content Migration Services</li></ul>',
        url: '/mern-stack',
        tools: ['Shopify Store Development', 'Wordpress Site Development', 'Landing Page Website', 'Backend Development', 'Frontend Development'],
    },
    {
        title: 'Software Testing',
        icon: process.env.PUBLIC_URL + '/images/service/software_testing.png',
        description: 'Content Management Solutions using technologies like WordPress, Shopify, Magento 2.',
        additionalInfo: '<ul><li>Content Creation and Storage</li><li>User Access Control</li><li>Workflow Automation</li><li>Multi-Platform Publishing</li><li>Content Analysis</li><li>Content Migration Services</li></ul>',
        url: '/software-testing',
        tools: ['Email Templates', 'Landing Pages', 'UI Designs', 'Creative Web Layouts', 'Mobile Responsive Websites'],
    },
    {
        title: 'Framework',
        icon: process.env.PUBLIC_URL + '/images/service/framework.png',
        description: 'Content Management Solutions using technologies like WordPress, Shopify, Magento 2.',
        additionalInfo: '<ul><li>Content Creation and Storage</li><li>User Access Control</li><li>Workflow Automation</li><li>Multi-Platform Publishing</li><li>Content Analysis</li><li>Content Migration Services</li></ul>',
        url: '/framework',
        tools: ['PHP - CMS Development', 'Custom PHP Framework Development', 'PHP Framework API Integration', 'PHP Framework Plugin Development', 'Performance optimization', 'PHP Framework Migration'],

    },
]

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
                        {services.slice(0, 3).map((service, key) => {
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
                        {services.slice(3, 8).map((service, key) => {
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
