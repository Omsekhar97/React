import React from 'react';
import '../Components/css/Style.css';

const services = [
    { title: "Cloud Consulting", description: "We provide consulting, migration and management services for the largest public cloud platforms in the world.", highlighted: false, link: "/services/cloud-consulting" },
    { title: "Cloud Security", description: "Cloud computing is the delivery of hosted services, including software, hardware, and storage, over the Internet.", highlighted: false, link: "/services/cloud-security" },
    { title: "Cloud Migration", description: "Cloud migrations are not just a quick lift-shift of your current infrastructure to the Cloud, it needs to follow a certain set.", highlighted: false, link: "/services/cloud-migration" },
    { title: "Cloud Management", description: "Cloud management is the process of maintaining oversight and administrative control of cloud computing products.", highlighted: false, link: "/services/cloud-management" },
    { title: "Software Testing", description: "Our QA lab has full range of outsourcing software testing services. We can provide you with any type of testing.", highlighted: false, link: "/services/software-testing" },
    { title: "Data Warehousing", description: "Data warehousing can lead up to a 50% decrease in cost. We provide Services to help companies gain control.", highlighted: false, link: "/services/data-warehousing" },
    { title: "Software Development", description: "We offers complete range of development services to cater to the needs of the industries that it focuses on.", highlighted: false, link: "/services/software-development" },
    { title: "IT Consulting", description: "We design winning strategies in meeting this need. We deliver value and performance through our mastery of digital advances.", highlighted: false, link: "/services/it-consulting" }
];

const Services = () => {
    return (
        <>
            <div className="services-page">
                {/* Top Section - Services Header */}
                <section className="services-header">
                    <div className="header-content">
                        <h1>Services</h1>
                    </div>
                </section>

                {/* Our Services Section - Two Columns */}
                <section className="our-services">
                    <div className="services-container">
                        {/* Left Side - Headings */}
                        <div className="services-left">
                            <h5>OUR SERVICES</h5>
                            <h2>IT for Intelligence & Innovation</h2>
                        </div>

                        {/* Right Side - Paragraph */}
                        <div className="services-right">
                            <p>
                                CareerForge Tech Solutions has years of experience in Design, Technology and Consulting.
                                We are dedicated to provide the best business solutions to the small and medium businesses
                                at an affordable price. We understand the uniqueness of your entity so as your business needs.
                                CareerForge Tech Solutions is a company specialized in the following services.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="services-section">
                <div className="services-grid">
                    {services.map((service, index) => (
                        <a
                            key={index}
                            href={service.link}
                            className={`service-card-link ${service.highlighted ? 'highlighted' : ''}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <div className="service-card">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
