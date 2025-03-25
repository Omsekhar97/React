import React from 'react';
import '../css/Style.css';

// import image from '../assets/contact.jpg';

import image1 from '../assets/17.jpg';
import image2 from '../assets/4.jpg';
import image3 from '../assets/3.jpg';


const CloudManagement = () => {
    return (
        <>
            {/* <section className="about-us-section">
                <div className="about-us-header">
                    <h2>Cloud Management</h2>
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
                        <h5>CLOUD MANAGEMENT</h5>
                        <h1>
                            Cloud Management Services We Provide
                        </h1>
                        <p>
                            Cloud management is the process of maintaining oversight and administrative control of cloud computing products and services, whether deployed in public, private, or hybrid cloud environments. The practice of cloud management combines different software products and technologies together to provide a cohesive management strategy and process.
                        </p>
                        <p>
                            IT organizations are increasingly choosing to reduce their up-front investments in IT infrastructure by deploying their applications into cloud environments. These environments offer on-demand availability of data storage and computing power that organizations need to handle high volumes of data and fluctuating or growing demand for application access and services. Today, there are three common deployment models for cloud computing services:
                        </p>
                    </div>
                </div>
            </section> */}

            <section className="about-us-section">

                {/* Header Section with Full Width Background */}
                <div className="about-us-header">
                    <h2>Cloud Management</h2>
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
                            <h5>CLOUD MANAGEMENT</h5>
                            <h1 style={{ color: 'white', fontSize: '34px' }}>
                                Cloud Management Services We Provide
                            </h1>
                            <p>
                                Cloud management is the process of maintaining oversight and administrative control of cloud computing products and services, whether deployed in public, private, or hybrid cloud environments. The practice of cloud management combines different software products and technologies together to provide a cohesive management strategy and process.
                            </p>
                            <p>
                                IT organizations are increasingly choosing to reduce their up-front investments in IT infrastructure by deploying their applications into cloud environments. These environments offer on-demand availability of data storage and computing power that organizations need to handle high volumes of data and fluctuating or growing demand for application access and services. Today, there are three common deployment models for cloud computing services:
                            </p>
                        </div>
                    </div>
                </div>

            </section>



            <div className="features-section">
                <h3 className="features-title">OUR FEATURES</h3>

                <div className="features-grid">
                    {/* Private Cloud Card */}
                    <div className="feature-card">
                        <h4>Private Cloud</h4>
                        <p>
                            Private cloud infrastructure is operated solely for a single organization. It can be managed internally or by a third party.
                            Private cloud systems can provide flexible storage capacity and computing power for different areas of business,
                            but they lack the element of hands-off management that makes cloud computing an attractive economic model for leveraging IT infrastructure.
                        </p>
                    </div>

                    {/* Public Cloud Card */}
                    <div className="feature-card">
                        <h4>Public Cloud</h4>
                        <p>
                            Public cloud services are delivered over a network that is open for public use. In this model,
                            the IT infrastructure is owned by a private company (Amazon Web Services, Google, Microsoft or Oracle are popular providers)
                            and members of the public can purchase or lease data storage or computing capacity as needed.
                            <br/> <br/> 
                        </p>
                    </div>
                </div>

                {/* Hybrid Cloud Full-Width Card */}
                <div className="feature-card full-width">
                    <h4>Hybrid Cloud</h4>
                    <p>
                        Hybrid cloud environments are comprised of a combination of public and private cloud services from different providers.
                        Organizations may want to keep some data on private cloud servers for privacy and security reasons, while leveraging
                        public cloud applications at a lower price point for less sensitive information. When these public and private environments
                        are interconnected, the result is a hybrid cloud environment. As IT organizations increasingly buy into the
                        infrastructure-as-a-service (IaaS) business model and deploy more applications into the cloud, there is an increased
                        need for structured cloud management processes that enable organizations to monitor their cloud-based applications
                        for compliance and security, facilitate workflow automation and drive timely decision-making and cost savings.
                    </p>
                </div>

                <div className="feature-card full-width">
                    <h4>Why Cloud Management?</h4>
                    <p>
                        In the past decade, we’ve seen an increasing number of IT organizations take advantage of the flexibility and cost savings offered by the cloud-based infrastructure model – so why the sudden need for cloud management tools? In fact, the low deployment costs associated with cloud services have led IT organizations to deploy more and more applications into the cloud. Organizations with high cloud maturity soon ran into issues like:
                        <br /><br />
                        <li>How can we streamline the security monitoring process for all of our cloud-based applications and services?</li>
                        <li>How can we maintain certainty about our compliance status with standards and regulations like the GDPR or PCI DDS while leveraging public cloud?</li>
                        <li>How can we monitor data feeds from across applications for a more holistic perspective on our security and operational status?</li>
                        <li>How can we manage capacity and ensure we deliver on SLAs?</li>
                    </p>
                        <br/>
                    <p>
                        When we look more closely at these questions, we see that they’re all connected to a need for visibility and control over a disparate ecosystem of applications. To achieve the visibility and control required to manage effectively, IT organizations need to view their cloud infrastructure through a consolidated platform that leverages APIs to pull data from every application in the organization’s hybrid cloud or multi-cloud environment – they need a cloud management platform (CPM). Cloud management software platforms allow enterprise IT organizations to optimize and secure their cloud applications, manage compliance and configure real-time monitoring and alerts to prevent data breaches and cyber attacks.
                    </p>
                </div>
            </div>


        </>
    );
};

export default CloudManagement;  
