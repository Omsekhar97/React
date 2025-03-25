import React from 'react';
import '../css/Style.css';

// import image from '../assets/contact.jpg';

import image1 from '../assets/17.jpg';
import image2 from '../assets/4.jpg';
import image3 from '../assets/3.jpg';


const CloudMigration = () => {
    return (
        <>
            {/* <section className="about-us-section">
                <div className="about-us-header">
                    <h2>Cloud Migration</h2>
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
                        <h5>CLOUD MIGRATION</h5>
                        <h1>
                            Cloud Migration Services We Provide
                        </h1>
                        <p>
                            Cloud migrations are not just a quick lift-shift your current infrastructure to the Cloud, it needs to follow a certain set of processes to achieve the successful migration to any cloud. Our experts have helped companies to successfully migrate their infrastructure to Cloud without any disruption and they make sure it is fast, cost-optimized, and also they are efficient in setting up automation processes to take full advantage of the Cloud.
                        </p>

                        <p>
                            If you’re already having any app running on managed data centers or on private servers, Migration is the first step to be eligible to take advantage of the cloud. As migration process, we define your cloud journey, plan steps accordingly and execute efficiently. Your business-critical applications and databases may need re-architecting, re-platforming or operational support. Or you may be working with difficult data and analytics use cases, with huge data volumes, several data pipelines, or complex environments. Regardless of your pain-point to migrating to the cloud, our wide range of cloud expertise means you have access to support before, during and after the migration.
                        </p>
                    </div>
                </div>
            </section> */}

            <section className="about-us-section">

                {/* Header Section with Full Width Background */}
                <div className="about-us-header">
                    <h2>Cloud Migration</h2>
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
                            <h5>CLOUD MIGRATION</h5>
                            <h1 style={{ color: 'white', fontSize: '34px' }}>
                                Cloud Migration Services We Provide
                            </h1>
                            <p>
                                Cloud migrations are not just a quick lift-shift your current infrastructure to the Cloud, it needs to follow a certain set of processes to achieve the successful migration to any cloud. Our experts have helped companies to successfully migrate their infrastructure to Cloud without any disruption and they make sure it is fast, cost-optimized, and also they are efficient in setting up automation processes to take full advantage of the Cloud.
                            </p>

                            <p>
                                If you’re already having any app running on managed data centers or on private servers, Migration is the first step to be eligible to take advantage of the cloud. As migration process, we define your cloud journey, plan steps accordingly and execute efficiently. Your business-critical applications and databases may need re-architecting, re-platforming or operational support. Or you may be working with difficult data and analytics use cases, with huge data volumes, several data pipelines, or complex environments. Regardless of your pain-point to migrating to the cloud, our wide range of cloud expertise means you have access to support before, during and after the migration.
                            </p>
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
};

export default CloudMigration;  
