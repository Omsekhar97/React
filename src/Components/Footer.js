import React from 'react';
import '../Components/css/Style.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {


    // const handleNewsletterSubmit =() => {
    //     alert("Thank you for subscribing to our newsletter!");
    // };


    return (
        <footer className="footer">
            <h2 className="footer-title">Let’s Start Making Your Thought Succeed!</h2>

            <div className="footer-buttons">
                <button className="contact-btn"><a href="/contactus">Contact Us</a></button>
                <button className="services-btn"><a href="/services">Our Services</a></button>
            </div>


            <div className="footer-content">
                {/* Quick Links */}
                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/clients">Clients</a></li>
                        <li><a href="/contactus">Contact Us</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="footer-column">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="/services/it-consulting">IT Consulting</a></li>
                        <li><a href="/services/software-development">Software Development</a></li>
                        <li><a href="/services/data-warehousing">Data Warehousing</a></li>
                        <li><a href="/services/software-testing">Software Testing</a></li>
                        <li><a href="/services/cloud-management">Cloud Management</a></li>
                        <li><a href="/services/cloud-migration">Cloud Migration</a></li>
                        <li><a href="/services/cloud-security">Cloud Security</a></li>
                        <li><a href="/services/cloud-consulting">Cloud Consulting</a></li>
                    </ul>
                </div>


                {/* Newsletter */}
                <div className="footer-column">
                    <h4>Newsletter</h4>
                    <input type="email" placeholder="Your Email" className="newsletter-input" required />
                    {/* <button className="send-btn" onClick={handleNewsletterSubmit}>Send Message</button> */}
                    <button className="send-btn">Send Message</button>
                </div>

                {/* Location & Social Media */}
                <div className="footer-column1">
                    <h4 style={{ color: '#FFD700' }}>Location & Social Media</h4>
                    <p><FaMapMarkerAlt style={{ color: '#ffcf03' }} /> 1500 S Dairy Ashford Rd, Suite 355, Houston, TX-77077</p>
                    <p><FaMapMarkerAlt style={{ color: '#ffcf03' }} /> D. No. 38, 2nd Floor, Arjun Plaza, SP Road, Nizampet, Hyderabad, Telangana - 500085</p>
                    <p>
                        <FaPhoneAlt style={{ color: '#ffcf03' }} /> <strong>Phone:</strong>
                        <a href="tel:+919391790454"> +91 9391790454</a>
                    </p>
                    <p>
                        <FaEnvelope style={{ color: '#ffcf03' }} /> <strong>Email:</strong>
                        <a href="mailto:info@cfsols.ai"> info@cfsols.ai</a>
                    </p>

                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank"><FaFacebookF /></a>
                        <a href="https://www.x.com" target="_blank"><FaTwitter /></a>
                        <a href="https://www.youtube.com" target="_blank"><FaYoutube /></a>
                        <a href="https://www.linkedin.com" target="_blank"><FaLinkedinIn /></a>
                        {/* <a href="https://www.instagram.com" target="_blank"><FaInstagram /></a> */}
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <button><a href="#">Terms & Conditions</a></button>
                <button><a href="#">Docs</a></button>
                <button><a href="#">Legal</a></button>
                <button><a href="#">Privacy Policy</a></button>

                {/* <button>&copy;2024 All Rights Reserved.</button> */}
                {/* <a href="#">&copy; 2024 All Rights Reserved. </a> */}
                {/* <p style={{ fontWeight: 'bold', color: '#696969', hover : color: '#ffffff' }}>&copy; 2024 All Rights Reserved.</p> */}

                <p
                    style={{ fontWeight: 'bold', color: '#969696' }}
                    onMouseOver={(e) => e.target.style.color = '#FFCF03'}
                    onMouseOut={(e) => e.target.style.color = '#969696'}
                >
                    &copy; 2024 All Rights Reserved.
                </p>

            </div>


        </footer>
    );
};

export default Footer;
