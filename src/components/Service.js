import React from 'react';
import './Service.css';

const Service = () => {
  const categories = [
    {
      title: 'Web Development Services',
      emoji: '💻',
      services: [
        {
          tech: ['Custom Development'],
          title: 'Web Development',
          desc: 'Custom web applications built with modern frameworks for everything from simple landing pages to full-scale e-commerce solutions.',
          link: '#'
        },
        {
          tech: ['CMS Development'],
          title: 'WordPress Development',
          desc: 'Custom WordPress sites that are fast, responsive, and designed to reflect your brand’s identity.',
          link: '#'
        }
      ]
    },
    {
      title: 'Design Services',
      emoji: '🎨',
      services: [
        {
          tech: ['UI/UX Design'],
          title: 'UI/UX Design',
          desc: 'User-centered designs that combine functionality with aesthetic appeal, ensuring every interface feels intuitive and purposeful.',
          link: '#'
        },
        {
          tech: ['Digital Design'],
          title: 'E-Card Creation',
          desc: 'Stylish and professional digital cards for events, business branding, or personal use.',
          link: '#'
        }
      ]
    },
    {
      title: 'Marketing Services',
      emoji: '📈',
      services: [
        {
          tech: ['Social Media Marketing'],
          title: 'Social Media Ads',
          desc: 'Targeted social campaigns that boost visibility, attract customers, and grow your online presence effectively.',
          link: '#'
        },
        {
          tech: ['Local SEO'],
          title: 'Google Page Registration',
          desc: 'Helping brands establish a verified Google presence to improve local visibility and search ranking.',
          link: '#'
        }
      ]
    },
    {
      title: 'Management Services',
      emoji: '📊',
      services: [
        {
          tech: ['System Development'],
          title: 'Management Systems',
          desc: 'Efficient, easy-to-use systems for handling inventory, clients, or internal operations.',
          link: '#'
        }
      ]
    }
  ];

  return (
    <section className="services-section">
      {categories.map(category => (
        <div key={category.title} className="category-section">
          <h2 className="category-title">{category.emoji} {category.title}</h2>
          <div className="projects-grid">
            {category.services.map((service, index) => (
              <div key={index} className="project-card">
                <p className="tech-stack">{service.tech.join(', ')}</p>
                <h3 className="project-title">{service.title}</h3>
                <p className="project-desc">{service.desc}</p>
                <button className="view-btn" onClick={() => window.open(service.link, '_blank')}>Learn More</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Service;
