// Gallery.js
import React, { Component, useState } from "react";
import "../css/Gallery.css"; // Import your CSS file
import galleryImages from '../data/Gallary.json'
import Loader from "./Loader";
import { Container } from "react-bootstrap";

export default function Gallery() {

  const [activeTab, setActiveTab] = useState('tab1')
  const [isLoading, setIsLoading] = useState(false)

  const handleTabClick = (tabId) => {
    if (tabId !== activeTab) {
      setActiveTab(tabId);
    }

  };


  const tabs = [
    { id: "tab1", label: "All" },
    // { id: 'tab2', label: 'Activity' },
    { id: "tab7", label: "Anniversary" },
    { id: "tab3", label: "Birthday Celebrations" },
    { id: "tab4", label: "Christmas Celebrations" },
    { id: "tab5", label: "Diwali Celebrations" },
    { id: "tab6", label: "Holi Celebrations" },
    // { id: 'tab8', label: 'Videos' },
  ];

  const tabContents = {
    tab1: (
      <>
        <div className="grid-container">
          {galleryImages.data[0].allCategoryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt={`Photos ${index + 1}`}
                className={`grid-item grid-item-${index + 1}`}
              />
            </div>
          ))}
        </div>

      </>
    ),
    tab2: (

      <>
        <div className="grid-container">
          {galleryImages.data[5].anniversaryImg.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt={`Photos ${index + 1}`}
                className={`grid-item grid-item-${index + 1}`}
              />
            </div>
          ))}
        </div>

      </>
    ),
    tab3: (
      <>

        <div className="grid-container">
          {galleryImages.data[2].bdayImg.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt={`Photos ${index + 1}`}
                className={`grid-item grid-item-${index + 1}`}
              />
            </div>
          ))}
        </div>

      </>
    ),
    tab4: (
      <>

        <div className="grid-container">
          {galleryImages.data[1].christmasImg.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt={`Photos ${index + 1}`}
                className={`grid-item grid-item-${index + 1}`}
              />
            </div>
          ))}
        </div>

      </>
    ),
    tab5: (
      <>

        <div className="grid-container">
          {galleryImages.data[3].diwaliImg.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt={`Photos ${index + 1}`}
                className={`grid-item grid-item-${index + 1}`}
              />
            </div>
          ))}
        </div>

      </>
    ),
    tab6: (
      <>

        <div className="grid-container">
          {galleryImages.data[4].holiImg.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt={`Photos ${index + 1}`}
                className={`grid-item grid-item-${index + 1}`}
              />
            </div>
          ))}
        </div>

      </>
    ),
    tab7: (
      <>

        <div className="grid-container">
          {galleryImages.data[5].anniversaryImg.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt={`Photos ${index + 1}`}
                className={`grid-item grid-item-${index + 1}`}
              />
            </div>
          ))}
        </div>

      </>
    ),
    tab8: (
      <>

        <div className="grid-container">
          {galleryImages.data[6].videos.map((video, index) => (
            <div key={index} className="gallery-item">
              <video
                autoPlay
                muted
                loop
                className={`banner-video grid-item grid-item-${index + 1}`}
                poster={process.env.PUBLIC_URL + "/images/job-5.jpg"}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

      </>
    ),
  };



  return (
    <>
      <Container>

     s
      </Container>
    </>
  );
}
