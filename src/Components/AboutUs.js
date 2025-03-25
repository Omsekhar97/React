import React from 'react';
import '../Components/css/Style.css'; // Make sure Home.css has all the styles
import { FaCheck } from 'react-icons/fa'; // Importing FaCheck for core values section


// import image from "../Components/assets/contact.jpg"; 

import image1 from "../Components/assets/13.jpg";
import image2 from "../Components/assets/14.jpg";
import image3 from "../Components/assets/11.jpg";
import image4 from "../Components/assets/16.jpg";



const AboutUs = () => {
    const values = [
        "Excellence In Training And Staffing",
        "Innovation In Technologies",
        "Integrity In Services",
        "Personalized Approach To Individual Needs",
        "Collaboration With Candidates And Clients",
        "Adaptability In The Fast-Paced World Of IT",
        "Client-Centric Focus To Contribute To Their Goals",
        "Diversity And Inclusion To Create Inclusivity",
        "Community Impact To Make Positive Impact On Broader Community"
    ];

    return (
        <>
            {/* About Us Section 1 - Triangular Images and Vision */}

            <section className="about-us-section">

                {/* Header Section with Full Width Background */}
                <div className="about-us-header">
                    <h2>About Us</h2>
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
                            <h5>OUR VISION</h5>
                            <p>
                                Envisioning a future of boundless technological prowess, CareerForge Tech Solutions aims to be the foremost catalyst for individual and organizational success in the IT domain. Our vision is to redefine the landscape of IT training and staffing, fostering a community of highly skilled professionals who drive innovation and shape the digital future.
                            </p>
                            <p>
                                By seamlessly integrating cutting-edge training methodologies with strategic staffing solutions, we aspire to be the trusted enabler that propels both careers and businesses to unparalleled heights.
                            </p>
                        </div>
                    </div>
                </div>

            </section>



            {/* About Us Section 2 - Mission, Goals & Images */}
            <section className="vision-mission">
                <div className="vision-mission-container">

                    {/* Left Side - Vision & Mission */}
                    <div className="text-sections">
                        <div className="text-section">
                            {/* <h2>OUR MISSION</h2> */}
                            <h3 style={{ color: 'yellow' }}>OUR MISSION</h3>
                            <p>
                                At CareerForge Tech Solutions, our mission is to bridge the gap between potential and proficiency in the IT realm. We are dedicated to providing unparalleled training programs that empower individuals with the knowledge and skills essential for success in the dynamic world of technology. Simultaneously, we strive to connect businesses with the right IT talent through our staffing services, ensuring a symbiotic relationship that propels both individuals and organizations toward excellence. Our commitment to innovation, integrity, and personalized solutions forms the cornerstone of our mission.
                            </p>
                        </div>

                        <div className="text-section">
                            <h3 style={{ color: 'yellow' }}>OUR GOALS</h3>
                            <p>
                                Our goal is to become a recognized leader in IT training and staffing by building a robust talent pipeline with a diverse range of skilled IT professionals. Embrace a culture of continuous improvement, staying agile and responsive to industry trends. Establish strategic partnerships with key players in IT Industry, including technology firms, educational institutions, and professional organizations by consistently delivering top-notch staffing solutions that align with their unique needs.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Cards */}
                    <div className="cards-container">
                        <div className="card">
                            <img src={image4} alt="Experience" className="card-img" />
                            <div className="card-overlay"></div>
                            <div className="card-content">
                                <h3>Experience</h3>
                                <p>Certified Technicians with greater industry experience.</p>
                            </div>
                        </div>

                        <div className="card">
                            <img src={image2} alt="Quick Support" className="card-img" />
                            <div className="card-overlay"></div>
                            <div className="card-content">
                                <h3>Quick Support</h3>
                                <p>L1, L2 & L3 level support teams working 24x7.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Core Values Section */}
            <section className="core-values-section">
                <h2 className="core-values-title">Our Core Values</h2>
                <p className="core-values-description">
                    Our values represent who we are, at our best. Our core values are an active part of everything we do.
                    We focus on doing what’s right while driving amazing outcomes for our client.
                </p>

                <div className="core-values-grid">
                    {/* First Row - 4 points */}
                    <div className="core-values-row">
                        {values.slice(0, 4).map((value, index) => (
                            <div key={index} className="core-value-item">
                                <FaCheck className="check-icon" />
                                <span>{value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Second Row - 3 points */}
                    <div className="core-values-row">
                        {values.slice(4, 7).map((value, index) => (
                            <div key={index + 4} className="core-value-item">
                                <FaCheck className="check-icon" />
                                <span>{value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Third Row - 2 points */}
                    <div className="core-values-row">
                        {values.slice(7, 9).map((value, index) => (
                            <div key={index + 7} className="core-value-item">
                                <FaCheck className="check-icon" />
                                <span>{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* <section>
                <div >
                    <h4>Excellence In Training And Staffing</h4>
                    <h4>Innovation In Technologies</h4>
                    <h4>Integrity In Servicesv</h4>
                    <h4>Personalized Approach To Individual Needs</h4>
                    <h4>Collaboration With Candidates And Clients</h4>
                    <h4>Adaptability In The Fast-Paced World Of IT</h4>
                    <h4>Client-Centric Focus To Contribute To Their Goals</h4>
                    <h4>Diversity And Inclusion To Create Inclusivity</h4>
                    <h4>Community Impact To Make Positive Impact On Broader Community</h4>
                </div>
            </section>   */}
            
        </>
    );
};

export default AboutUs;
