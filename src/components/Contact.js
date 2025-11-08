import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-info-card">
            <h3 className="contact-info-title">Contact Info</h3>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>bds.inc0101@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>0599551331</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Accra, Ghana</span>
            </div>
            <div className="contact-item">
              <FaClock className="contact-icon" />
              <span>Monday – Friday, 9:00 AM – 6:00 PM</span>
            </div>
            <h3 className="contact-social-title">Social Media & Profiles</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/bds.inc0101?igsh=cWVsazlsazNxNnR0&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@codedtechtips?_t=ZM-90LEmYxWKU8&_r=1" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTiktok />
              </a>
              <a href="https://github.com/ecrimah" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-textarea"
              />
            </div>
            <button type="submit" className="form-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
