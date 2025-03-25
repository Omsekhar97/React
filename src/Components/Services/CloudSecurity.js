import React from 'react';
import '../css/Style.css';

// import image from '../assets/contact.jpg';

import image1 from '../assets/17.jpg';
import image2 from '../assets/4.jpg';
import image3 from '../assets/3.jpg';


const CloudSecurity = () => {
    return (
        <>
            {/* <section className="about-us-section">
                <div className="about-us-header">
                    <h2>Cloud Security</h2>
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
                        <h5>CLOUD SECURITY</h5>
                        <h1>
                            Cloud Security Services We Provide
                        </h1>
                        <p>
                            Cloud computing is the delivery of hosted services, including software, hardware, and storage, over the Internet. The benefits of rapid deployment, flexibility, low up-front costs, and scalability, have made cloud computing virtually universal among organizations of all sizes, often as part of a hybrid/multi-cloud infrastructure architecture. Cloud security refers to the technologies, policies, controls, and services that protect cloud data, applications, and infrastructure from threats.
                        </p>
                    </div>
                </div>
            </section> */}


            <section className="about-us-section">

                {/* Header Section with Full Width Background */}
                <div className="about-us-header">
                    <h2>Cloud Security</h2>
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
                            <h5>CLOUD SECURITY</h5>
                            <h1 style={{ color: 'white', fontSize: '34px' }}>
                                Cloud Security Services We Providee
                            </h1>
                            <p>
                                Cloud computing is the delivery of hosted services, including software, hardware, and storage, over the Internet. The benefits of rapid deployment, flexibility, low up-front costs, and scalability, have made cloud computing virtually universal among organizations of all sizes, often as part of a hybrid/multi-cloud infrastructure architecture. Cloud security refers to the technologies, policies, controls, and services that protect cloud data, applications, and infrastructure from threats.
                            </p>
                        </div>
                    </div>
                </div>

            </section>


            {/* Cloud Security Services Section */}
            <section className="cloud-security-section">
                <h3 className="cloud-security-subHeading">OUR FEATURES</h3>
                <h2 className="cloud-security-heading">Cloud Security Services We Provide</h2>
                <p className="cloud-security-paragraph">
                    Cloud security is a responsibility that is shared between the cloud provider and the customer. There are basically three categories of responsibilities in the Shared Responsibility Model: responsibilities that are always the provider’s, responsibilities that are always the customer’s, and responsibilities that vary depending on the service model: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), or Software as a Service (SaaS), such as cloud email.
                </p>
                <p className="cloud-security-paragraph">
                    The security responsibilities that are always the provider’s are related to the safeguarding of the infrastructure itself, as well as access to, patching, and configuration of the physical hosts and the physical network on which the compute instances run and the storage and other resources reside.
                </p>
                <p className="cloud-security-paragraph">
                    The security responsibilities that are always the customer’s include managing users and their access privileges (identity and access management), the safeguarding of cloud accounts from unauthorized access, the encryption and protection of cloud-based data assets, and managing its security posture (compliance).
                </p>

                <h3 className="cloud-security-smallHeading">Cloud Security Services We Provide</h3>
                <p className="cloud-security-paragraph">
                    Because the public cloud does not have clear perimeters, it presents a fundamentally different security reality. This becomes even more challenging when adopting modern cloud approaches such as automated Continuous Integration and Continuous Deployment (CI/CD) methods, distributed serverless architectures, and ephemeral assets like Functions as a Service and containers.
                </p>

                <p className="cloud-security-boldText">
                    Some of the advanced cloud-native security challenges and the multiple layers of risk faced by today’s cloud-oriented organizations include:
                </p>
            </section>

            <section className="features-section">
                <div className="container">

                    <div className="features-grid">
                        {[
                            {
                                title: "Increased Attack Surface",
                                description: "The public cloud environment has become a large and highly attractive attack surface for hackers who exploit poorly secured cloud ingress ports in order to access and disrupt workloads and data in the cloud. Malware, Zero-Day, Account Takeover and many other malicious threats have become a day-to-day reality."
                            },
                            {
                                title: "Lack of Visibility and Tracking",
                                description: "In the IaaS model, the cloud providers have full control over the infrastructure layer and do not expose it to their customers. The lack of visibility and control is further extended in the PaaS and SaaS cloud models. Cloud customers often cannot effectively identify and quantify their cloud assets or visualize their cloud environmets."
                            },
                            {
                                title: "Ever-Changing Workloads",
                                description: "Cloud assets are provisioned and decommissioned dynamically—at scale and at velocity. Traditional security tools are simply incapable of enforcing protection policies in such a flexible and dynamic environment with its ever-changing and ephemeral workloads."
                            },
                            {
                                title: "Complex Environments",
                                description: "Managing security in a consistent way in the hybrid and multicloud environments favored by enterprises these days requires methods and tools that work seamlessly across public cloud providers, private cloud providers, and on-premise deployments—including branch office edge protection for geographically distributed organizations."
                            },
                            {
                                title: "DevOps, DevSecOps and Automation",
                                description: "Organizations that have embraced the highly automated DevOps CI/CD culture must ensure that appropriate security controls are identified and embedded in code and templates early in the development cycle. Security-related changes implemented after a workload has been deployed in production can undermine the organization’s security posture as well as lengthen time to market."
                            },
                            {
                                title: "Granular Privilege & Key Management",
                                description: "Often cloud user roles are configured very loosely, granting extensive privileges beyond what is intended or required. One common example is giving database delete or write permissions to untrained users or users who have no business need to delete or add database assets. At the application level, improperly configured keys and privileges expose sessions to security risks."
                            },
                            // {
                            //     title: "Complex Environments",
                            //     description: "Managing security in a consistent way in the hybrid and multicloud environments favored by enterprises these days requires methods and tools that work seamlessly across public cloud providers, private cloud providers, and on-premise deployments—including branch office edge protection for geographically distributed organizations."
                            // }
                        ].map((feature, index) => (
                            <div className="feature-card" key={index}>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="cloud-compliance-container">
                <div className="cloud-compliance-card">
                    <h3>Cloud Compliance and Governance</h3>
                    <p>
                        All the leading cloud providers have aligned themselves with most of the well-known accreditation programs such as PCI 3.2, NIST 800-53, HIPAA, and GDPR.
                        However, customers are responsible for ensuring that their workload and data processes are compliant. Given the poor visibility as well as the dynamics of the
                        cloud environment, the compliance audit process becomes close to mission impossible unless tools are used to achieve continuous compliance checks and issue
                        real-time alerts about misconfigurations.
                    </p>
                </div>
            </div>

        </>
    );
};

export default CloudSecurity;
