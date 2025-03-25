import React from 'react';
import '../css/Style.css';

// import image from '../assets/contact.jpg';

import image1 from '../assets/17.jpg';
import image2 from '../assets/4.jpg';
import image3 from '../assets/3.jpg';


const CloudConsulting = () => {
    return (
        <>
            {/* <section className="about-us-section">
                <div className="about-us-header">
                    <h2>Cloud Consulting</h2>
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
                        <h5>CONSULTING SERVICES</h5>
                        <h1>
                            Cloud Consultation Services We Provide
                        </h1>
                        <p>
                            CareerForge Tech Solutions provides consulting, migration and management services for the largest public cloud platforms in the world, offering managed services for AWS. We empower companies to realize the full potential of the cloud, letting them to leverage our expertise, tools, and experience to address their business requirements.
                        </p>
                    </div>
                </div>
            </section> */}

            <section className="about-us-section">

                {/* Header Section with Full Width Background */}
                <div className="about-us-header">
                    <h2>Cloud Consulting</h2>
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
                            <h5>CONSULTING SERVICES</h5>
                            <h1 style={{ color: 'white', fontSize: '34px' }}>
                                Cloud Consultation Services We Provide
                            </h1>
                            <p>
                                CareerForge Tech Solutions provides consulting, migration and management services for the largest public cloud platforms in the world, offering managed services for AWS. We empower companies to realize the full potential of the cloud, letting them to leverage our expertise, tools, and experience to address their business requirements.
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            <section className="features-section">
                <div className="container">
                    <h4 className="section-subtitle">OUR FEATURES</h4>
                    <h2 className="section-title">Cloud Consultation Sectors We Provide</h2>

                    <div className="features-grid">
                        {[
                            {
                                title: "Infrastructure",
                                description: "Optimize operations with our Infrastructure service—seamless IT systems, robust networks, and scalable architecture for enhanced performance and efficiency."
                            },
                            {
                                title: "Data Warehouse Augmentation",
                                description: "Enhance data warehousing with our service. Optimize storage, improve accessibility, and boost analytical capabilities for informed decision-making and efficiency."
                            },
                            {
                                title: "Consulting",
                                description: "Strategic consulting for optimal business solutions. Tailored advice, actionable insights, and expert guidance to drive your success forward effectively."
                            },
                            {
                                title: "Cloud Environment Optimization",
                                description: "Maximize efficiency and performance with our Cloud Environment Optimization service,enhancing your cloud infrastructure for optimal results and cost-effectiveness."
                            },
                            {
                                title: "Platform As A Service",
                                description: "PaaS simplifies software development with a cloud-based platform, offering tools and services for efficient application creation, deployment, and management."
                            },
                            {
                                title: "On-Demand Scalability",
                                description: "Instantly adapt to changing needs with our On-Demand Scalability service, ensuring optimal performance and efficiency for your business growth."
                            }
                        ].map((feature, index) => (
                            <div className="feature-card" key={index}>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default CloudConsulting;  
