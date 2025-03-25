import React from 'react';
import '../css/Style.css';

// import image from '../assets/contact.jpg';

import image1 from '../assets/17.jpg';
import image2 from '../assets/4.jpg';
import image3 from '../assets/3.jpg';


const SoftwareDevelopment = () => {
    return (
        <>
            {/* <section className="about-us-section">
                <div className="about-us-header">
                    <h2>Software Development</h2>
                </div>

                <div className="about-us-content">
                    <div className="about-us-images-triangle">
                        <div className="top-images-row">
                            <div className="image-box">
                                <img src={image} alt="Team Collaboration" />
                            </div>
                            <div className="image-box">
                                <img src={image} alt="Training Session" />
                            </div>
                        </div>
                        <div className="bottom-image">
                            <img src={image} alt="Document Discussion" />
                        </div>
                    </div>

                    <div className="about-us-text">
                        <h5>OUR SERVICES</h5>
                        <h1>
                            Software Development
                        </h1>
                        <p>
                            We offers complete range of development services to cater to the needs of the industries that it focuses on. We also ensures successful deployment of its business applications big data product platforms through its range of implementation services.
                        </p>
                    </div>
                </div>
            </section> */}

            <section className="about-us-section">

                {/* Header Section with Full Width Background */}
                <div className="about-us-header">
                    <h2>Software Development</h2>
                </div>

                {/* Content Section with Full Width Background */}
                <div className="about-us-content-wrapper">
                    <div className="about-us-content">
                        <div className="about-us-images-triangle">
                            <div className="top-images-row">
                                <div className="image-box">
                                    <img src={image1} alt="Team Collaboration" />
                                </div>
                                <div className="image-box">
                                    <img src={image2} alt="Training Session" />
                                </div>
                            </div>
                            <div className="bottom-image">
                                <img src={image3} alt="Document Discussion" />
                            </div>
                        </div>

                        <div className="about-us-text">
                            <h5>OUR SERVICES</h5>
                            <h1 style={{ color: 'white', fontSize: '34px' }}>
                                Software Development
                            </h1>
                            <p>
                                We offers complete range of development services to cater to the needs of the industries that it focuses on. We also ensures successful deployment of its business applications big data product platforms through its range of implementation services.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default SoftwareDevelopment;  
