import React from 'react';
import '../Components/css/Style.css';

// import image1 from "../Components/assets/contact.jpg" 16 18 20

import image1 from "../Components/assets/16.jpg";
import image2 from "../Components/assets/18.jpg";
import image3 from "../Components/assets/20.jpg";


const Clients = () => {
    return (
        <>
            <div className="clients-section">
                {/* Clients Banner */}
                <div className="clients-banner">
                    <h2 className="clients-title">Clients</h2>
                </div>

                {/* Our Specialists Section */}
                <div className="clientele-section">
                    <h3 className="specialists-title">Our Specialists</h3>
                    <h2 className="clientele-title">Our Clientele</h2>
                    <p className="clientele-description">
                        We do all kinds of software development for our clients and provide managed services & implementation of Cloud Infrastructure all over the world.
                    </p>

                    {/* Client Cards */}
                    <div className="client-cards">
                        <div className="client-card">
                            <img src={image1} alt="Madison Franklin" className="client-image" />
                            <h4 className="client-name">Madison Franklin</h4>
                            <p className="client-company">Theory Soft</p>
                        </div>

                        <div className="client-card">
                            <img src={image2} alt="Megan Davis" className="client-image" />
                            <h4 className="client-name">Megan Davis</h4>
                            <p className="client-company">Celer Soft</p>
                        </div>

                        <div className="client-card">
                            <img src={image3} alt="Harper Jones" className="client-image" />
                            <h4 className="client-name">Harper Jones</h4>
                            <p className="client-company">GGAV IT Solutions Inc</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Clients;  
