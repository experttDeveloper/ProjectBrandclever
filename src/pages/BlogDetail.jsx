import React, { useEffect, useState } from 'react'
import TopHeader from '../components/TopHeader'
import FaqSection from '../components/hiredeveloper/FaqSection'
import { Col, Container, Row } from 'react-bootstrap'
import blogs from '../data/Blog.json'
import { useParams } from 'react-router-dom'
import HireDeveloperForm from '../components/HireDeveloperForm';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Comment from '../components/Comment'

export default function BlogDetail() {
    const { title } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {

        const modifyTitle = title.replace(/-/g, " ");

        console.log("modifyTitle", modifyTitle);
        if (modifyTitle) {
            const blogData = blogs.data.find((item) => item.title2.toLowerCase().includes(modifyTitle.toLowerCase()));

            setBlog(blogData)
        }

    }, [])


    return (
        <div>
            <TopHeader title="blog details page" />
            <div className='blog_inner_page_data'>
                <Container>
                    <div className='iner_mains_blog'>
                        <Row>
                            {/* <Col md={6}>
                                <h3 className='blog_detail_title'>{blog.title1}: {blog.title2}</h3>
                            </Col> */}
                            <Col md={12}>
                                <img src={blog.image} alt={blog.title1} className='blog_image' />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <div className='one_side_text_inner_blog'>
                                    <h3>Introduction</h3>
                                    <p dangerouslySetInnerHTML={{ __html: blog.introduction }}></p>
                                    {/* <p>{blog.introduction}</p> */}
                                    <h3>{blog.step1}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: blog.step1Des }}></p>
                                    <h3>{blog.step2}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: blog.step2Des }}></p>
                                    <img src=''></img>
                                    <h3>{blog.step3}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: blog.step3Des }}></p>
                                    {/* <h4>A. Improved customization:</h4> */}
                                    {/* <p>{blog.step3Des}</p> */}
                                    {
                                        blog.step3SubTittleDes?.length && blog.step3SubTittleDes.map((ele, key) => {
                                            return (
                                                <div>
                                                    <h4 className='blog_detail_sub'><FiberManualRecordIcon />{ele.title}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: ele.description }}></p>
                                                </div>

                                            )
                                        })
                                    }
                                    <h3>{blog.step4}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: blog.step4Des }}></p>

                                    <h3>{blog.step5}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: blog.step5Des }}></p>

                                    <h3>{blog.conclusion ? "Conclusion" : ""}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: blog.conclusion }}></p>
                                    {/* <p>{blog.conclusion}
                                    </p> */}
                                </div>
                                <div className='comment_main_section'>
                                    <Comment blogId={blog.id} />
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='blog_detail_form_main'>
                                    <HireDeveloperForm />
                                </div>
                            </Col>
                        </Row>
                        {/* <FaqSection
                            data={[
                                {
                                    question: "What makes your web development service unique?",
                                    answer: "We distinguish ourselves by offering high-quality applications, a transparent development process, and over eleven years of experience working with major companies across a variety of industries."
                                },
                                {
                                    question: "Which technologies do you use in your web development projects?",
                                    answer: "Our team uses a range of advanced tools and frameworks, including PHP, WordPress, Shopify, Node.js, React.js, and Angular, ensuring each project is tailored to meet specific requirements."
                                },
                                {
                                    question: "How do you ensure seamless integration for e-commerce development?",
                                    answer: "We create user-friendly online stores that integrate smoothly with your existing technology stack. Our expertise encompasses both full-scale platforms and customized enhancements."
                                },
                                {
                                    question: "Can you describe your approach to web application development?",
                                    answer: "We handle the entire process, from initial design to ongoing maintenance, ensuring that your web application is secure, scalable, and provides a seamless experience across various devices."
                                },
                                {
                                    question: "What services do you offer for  website development?",
                                    answer: "We specialize in creating custom  stores, whether from scratch or via migration. Our services include theme development, integrations, and robust security implementation."
                                },
                                {
                                    question: "Why is CMS development important for a successful online presence?",
                                    answer: "An effective Content Management System (CMS) is critical for organizing website content. We develop and streamline CMS for various types of websites, including informational sites and e-commerce platforms."
                                },
                                {
                                    question: "What is your approach to web app development projects?",
                                    answer: "We take a strategic approach by understanding your business model, analyzing market trends, and determining optimal product positioning. This allows us to create customized solutions that align with your goals."
                                },
                                {
                                    question: "How do you ensure the quality of your web development projects?",
                                    answer: "We employ an agile development process with highly skilled teams, overseen by experienced managers. Rigorous testing ensures our solutions are bug-free, reliable, secure, and offer a smooth user experience."
                                }
                            ]}
                        /> */}
                    </div>
                </Container>

            </div>

        </div>
    )
}
