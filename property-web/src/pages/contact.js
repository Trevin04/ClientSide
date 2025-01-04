import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <form className="contact-form">
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            className="form-input"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Phone Number Field */}
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className="form-input"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}
