import React from 'react';
import '../Components/css/Style.css';
const Careers = () => {
    return (
        <div className="careers-page">

            {/* Top Section - Header */}
            <section className="careers-header">
                <div className="header-content">
                    <h1>Careers</h1>
                    <p>We’re hiring skilled professionals to help clients achieve business goals.</p>
                </div>
            </section>

            {/* Work With Us Section */}
            <section className="work-with-us">
                <h5>OUR DYNAMIC TEAM</h5>
                <h2>Work With Us</h2>
                <p>
                    Thank you for your interest in CareerForge Tech Solutions.
                    At this point we have no positions open, however we request you to send us your resume to <a href="mailto:info@cfsols.ai">info@cfsols.ai</a>. We will certainly get back to you at the earliest.
                </p>

                {/* Stats */}
                <div className="stats">
                    <div className="stat-item">
                        {/* <div className="icon">👤⭐</div> */}
                        <div className="icon">👤</div>
                        <h4>Jobs Done</h4>
                        <p>150+</p>
                    </div>
                    <div className="stat-item">
                        {/* <div className="icon">💼😊</div> */}
                        <div className="icon">💼</div>
                        <h4>Satisfied Customers</h4>
                        <p>100+</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Careers;
