import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Kofi Mensah',
      position: 'CEO, GhanaTech Solutions',
      message: 'Elorm delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise were outstanding. He truly understands the Ghanaian market.',
      avatar: '👨‍💼'
    },
    {
      name: 'Adwoa Asante',
      position: 'Product Manager, Accra Innovations',
      message: 'Working with Elorm was a pleasure. He transformed our ideas into a beautiful, functional web application that resonates with our local audience.',
      avatar: '👩‍💻'
    },
    {
      name: 'Yaw Boateng',
      position: 'CTO, Tema Digital Hub',
      message: 'Elorm\'s full-stack development skills helped us scale our application efficiently. His understanding of both local and international standards is remarkable!',
      avatar: '👨‍🔬'
    },
    {
      name: 'Akua Osei',
      position: 'Founder, Cape Coast Creative',
      message: 'Elorm brought our vision to life with incredible precision. His work on our website has significantly boosted our online presence in Ghana.',
      avatar: '👩‍🎨'
    },
    {
      name: 'Emmanuel Richter',
      position: 'Director, Kumasi Business Center',
      message: 'Professional, reliable, and innovative. Elorm\'s expertise in modern web technologies has been a game-changer for our business operations.',
      avatar: '👨‍💼'
    },
    {
      name: 'Efua Addo',
      position: 'Marketing Lead, Takoradi Ventures',
      message: 'Elorm\'s ability to create user-friendly interfaces that work seamlessly across devices has greatly improved our customer engagement.',
      avatar: '👩‍💼'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-avatar">{testimonial.avatar}</div>
              <p className="testimonial-message">"{testimonial.message}"</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-position">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
