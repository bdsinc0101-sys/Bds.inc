import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      position: 'CEO, TechCorp',
      message: 'Alex delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise were outstanding.',
      avatar: '👨‍💼'
    },
    {
      name: 'Jane Smith',
      position: 'Product Manager, StartupXYZ',
      message: 'Working with Alex was a pleasure. He transformed our ideas into a beautiful, functional web application.',
      avatar: '👩‍💻'
    },
    {
      name: 'Mike Johnson',
      position: 'CTO, InnovateTech',
      message: 'Alex\'s full-stack development skills helped us scale our application efficiently. Highly recommended!',
      avatar: '👨‍🔬'
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
