import React, { useEffect, useRef, useState } from 'react'
import Menu from './menucard';
import { Col, Row } from 'react-bootstrap';

export default function HomePageScroll() {

    const [menuData] = useState(Menu);

    useEffect(() => {
        const handleScroll = () => {
            const showcaseContainer = document.querySelector('.showcase-container');
            const showcaseElements = document.querySelectorAll('.showcase');

            if (showcaseContainer && showcaseElements) {
                const scrollPosition = showcaseContainer.scrollTop;

                showcaseElements.forEach((element, index) => {
                    const slideHeight = element.offsetHeight;
                    const slideTop = element.offsetTop - showcaseContainer.offsetTop;

                    if (slideTop <= scrollPosition && slideTop + slideHeight > scrollPosition) {
                        element.classList.add('highlighted');
                    } else {
                        element.classList.remove('highlighted');
                    }
                });
            }
        };

        const showcaseContainer = document.querySelector('.showcase-container');
        if (showcaseContainer) {
            showcaseContainer.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (showcaseContainer) {
                showcaseContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className='container_slider'>
            <div className="showcase-container">
                <Row>
                    {menuData.map((curElem, index) => (
                        <div key={index} className="showcase">
                            <Col md={6}>
                                <h1>hello</h1>
                            </Col>
                            <Col md={6}>
                                <div className="image"><img src={curElem.image} alt="image" /></div>
                            </Col>
                        </div>
                    ))}
                </Row>
            </div>
        </div>
    );
}