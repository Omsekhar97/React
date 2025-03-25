import React from 'react';
import '../Components/css/Style.css';

// import image1 from "../Components/assets/contact.jpg"

import image1 from "../Components/assets/14.jpg";


const ContactUs = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your message has been sent successfully!");
    };



    return (

        <>
            <div className="contact-section">
                {/* Contact Banner */}
                <div className="contact-banner">
                    <h2 className="contact-title">Contact us</h2>
                    <p className="contact-subtitle">
                        Unlock business potential - contact expert consultants now!
                    </p>
                </div>

                {/* Contact Information Section */}
                <div className="contact-info-section">
                    <h3 className="contact-heading">Explore our global offices on a journey</h3>
                    <p className="contact-description">
                        Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your queries.
                    </p>

                    {/* Content Wrapper */}
                    <div className="contact-content">
                        {/* Image */}
                        <div className="contact-image-wrapper">
                            <img
                                src={image1}
                                alt="Office"
                                className="contact-image"
                            />
                        </div>

                        {/* Contact Details */}
                        <div className="contact-details">
                            <h4 className="location-title">USA - Location</h4>
                            <p>1500 S Dairy Ashford Rd, Suite 355, Houston, TX-77077</p>

                            <h4 className="location-title">India - Location</h4>
                            <p>D. No. 38, 2nd Floor, Arjun Plaza, SP Road, Nizampet, Hyderabad, Telangana - 500085</p>

                            <h4 className="location-title">Email Address</h4>
                            {/* <p>info@cfsols.ai</p> */}
                            <p><a href="mailto: info@cfsols.ai" style={{ textDecoration: 'none', color: 'white' }}>info@cfsols.ai</a></p>

                            <h4 className="location-title">Phone</h4>
                            {/* <p>+91 9391790454</p> */}
                            <p><a href="callto: +919391790454" style={{ textDecoration: 'none', color: 'white' }}>+91 93917 90454</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="input-row">
                        <input type="text" placeholder="Your Name" className="form-input" required />
                        <input type="email" placeholder="Your Email" className="form-input" required />
                    </div>
                    <div className="input-row">
                        <input type="text" placeholder="Your Phone" className="form-input" required />
                        <input type="text" placeholder="Subject" className="form-input" required />
                    </div>
                    <div className="input-row">
                        <textarea placeholder="Message" className="form-input" required></textarea>
                    </div>
                    <div className="button-row">
                        <button type="submit" className="submit-button">Send Message</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactUs;  
