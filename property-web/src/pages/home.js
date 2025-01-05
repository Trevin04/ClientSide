import React, { useState } from 'react';
import './home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaHome, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';

const Home = () => {
  const propertyData = [
    {
      title: 'Apartments',
      prices: ['600,000LKR Upwards'],
      images: ['/photos/apartment1.jpg', '/photos/apartment2.jpg', '/photos/apartment3.jpg'],
    },
    {
      title: 'Modern Villa',
      prices: ['900,000LKR Upwards'],
      images: ['/photos/villa1.jpeg', './photos/villa2.jpg', './photos/villa3.jpg'],
    },
    {
      title: 'Office Space',
      prices: ['300,000LKR Upwards'],
      images: ['/photos/office1.jpg', '/photos/office2.jpg', '/photos/office3.jpg'],
    },
    {
      title: 'Residential Houses',
      prices: ['400,000LKR Upwards'],
      images: ['/photos/house1.jpg', '/photos/house2.jpg', '/photos/house3.png'],
    },
    {
      title: 'Prime Lands',
      prices: ['100,000LKR Upwards'],
      images: ['/photos/land1.jpg', '/photos/land2.jpg', '/photos/land3.jpg'],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const scrollToFeaturedProperties = () => {
    document.getElementById('featured-properties').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-box">
          <h1>Find Your Dream Property</h1>
          <p>Exceptional real estate solutions tailored to your needs.</p>
          <button className="cta-button" onClick={scrollToFeaturedProperties}>
            Explore Now
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <br />
        <div className="services-grid">
          <div className="service-item">
            <FaHome size={50} />
            <h3>Residential Properties</h3>
            <p>Find your dream place with us.</p>
          </div>
          <div className="service-item">
            <FaBuilding size={50} />
            <h3>Commercial Spaces</h3>
            <p>Explore premium office spaces.</p>
          </div>
          <div className="service-item">
            <FaMapMarkerAlt size={50} />
            <h3>Property Valuation</h3>
            <p>Get accurate valuations for your properties.</p>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="featured-properties" className="featured-properties">
        <h2>Featured Properties</h2>
        <br />
        <div className="properties-grid">
          {propertyData.map((property, propertyIndex) => (
            <div className="property-item" key={propertyIndex}>
              <h3>{property.title}</h3>
              <p>{property.prices[0]}</p>
              <Slider {...settings}>
                {property.images.map((image, idx) => (
                  <img key={idx} src={image} alt={property.title} className="property-image" />
                ))}
              </Slider>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Urban Propertys. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
