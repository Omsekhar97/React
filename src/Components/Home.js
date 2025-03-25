import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import '../Components/css/Style.css';

import image from "../Components/assets/Hero.png";

import image1 from "../Components/assets/13.jpg";
import image2 from "../Components/assets/14.jpg";
import image3 from "../Components/assets/11.jpg";
import image4 from "../Components/assets/16.jpg";
import image5 from "../Components/assets/22.jpg";


const services = [
  { name: "Cloud Management", link: "/services/cloud-management" },
  { name: "Cloud Migration", link: "/services/cloud-migration" },
  { name: "Cloud Security", link: "/services/cloud-security" },
  { name: "Cloud Consulting", link: "/services/cloud-consulting" },
];


const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-content">
            {/* <h1 className="hero-title">
              Best way to <br />
              <span>Grow your Brand.</span>
            </h1> */}
            <h1 className="hero-title">
              Best Way to Grow your Brand.
            </h1>
            <p className="hero-text">
              Business consulting services focus on defining, optimizing, and aligning
              our client’s business strategies with IT initiatives.
            </p>
            {/* <button className="hero-button" style={{ textDecoration: 'none', color:'white' }}><a href="./contactus">Get In Touch</a></button> */}
            <br /><br />

            <a href="./contactus" className="hero-button" style={{ textDecoration: 'none', color: 'white' }}>
              Get In Touch
            </a>


            {/* Social Media Section */}
            <div className="social-media">
              <p>Follow us on social media</p>
              <div className="social-icons">
                <a href="https://www.facebook.com" className="social-icon" target="_blank"><FaFacebookF /></a>
                <a href="https://www.x.com" className="social-icon" target="_blank"><FaTwitter /></a>
                <a href="https://www.linkedin.com" className="social-icon" target="_blank"><FaLinkedinIn /></a>
                <a href="https://www.youtube.com" className="social-icon" target="_blank"><FaYoutube /></a>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="hero-image">
            <div className="image-bg"></div>
            <img src={image} alt="Professional" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h3 className="section-subtitle">OUR SERVICES</h3>
          <h2 className="section-title">Services We Provide</h2>
          <p className="section-description">
            CareerForge Tech Solutions has years of experience in Design,
            Technology & Consulting. We are dedicated to providing the best
            business solutions to small & medium businesses at an affordable price.
          </p>

          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className={`service-circle ${service.highlighted ? "" : ""}`}>
                <a href={service.link} className="service-link">
                  {service.name}
                </a>
              </div>
            ))}
          </div>

          <button className="more-services-btn"><a href="./Services">More Services</a></button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-us">
        <div className="about-container">
          {/* <div className="about-images">
            <img src={image1} alt="Team member" className="img1" />
            <img src={image2} alt="Discussion" className="img2" />
            <img src={image3} alt="Meeting" className="img3" />
          </div> */}

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

          <div className="about-content">
            <h3>ABOUT US</h3>
            <h1>The history of our business</h1>
            <p>
              CareerForge Tech Solutions is a global IT service provider founded to assist corporations
              in better managing their operations through cost-effective professional services and technology.
              Headquartered in Houston, USA, we have years of experience in Design, Technology, and Consulting.
            </p>
            <p>
              We specialize in IT Consulting Services, Software & Enterprise Application Development,
              Data Warehousing, Database Development, and Software Testing services.
            </p>

            <div className="about-values">
              <p>
                Our values represent who we are, at our best. Our core values are an active part of everything we do.
                We focus on doing what's right while driving amazing outcomes for our clients.
              </p>
            </div>

            {/* <button className="read-more-button">Read More</button> */}
            <button className="more-services-btn"><a href="./about-us">Read More</a></button>

          </div>
        </div>
      </section>

      {/* Vision & Mision Section */}
      <section className="vision-mission">
        <div className="vision-mission-container">

          {/* Left Side - Vision & Mission */}
          <div className="text-sections">
            <div className="text-section">
              <h2>Our Vision</h2>
              <p>
                Envisioning a future of boundless technological prowess, CareerForge Tech Solutions aims to be the foremost catalyst
                for individual and organizational success in the IT domain. Our vision is to redefine the landscape of IT training
                and staffing, fostering a community of highly skilled professionals who drive innovation and shape the digital future.
              </p>
            </div>

            <div className="text-section">
              <h2>Our Mission</h2>
              <p>
                At CareerForge Tech Solutions, our mission is to bridge the gap between potential and proficiency in the IT realm.
                We are dedicated to providing unparalleled training programs that empower individuals with the knowledge and skills
                essential for success in the dynamic world of technology.
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
              <img src={image5} alt="Quick Support" className="card-img" />
              <div className="card-overlay"></div>
              <div className="card-content">
                <h3>Quick Support</h3>
                <p>L1, L2 & L3 level support teams working 24x7.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  );
};


export default Home;
