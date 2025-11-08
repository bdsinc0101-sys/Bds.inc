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
    },
    {
      title: 'Completed Projects',
      emoji: '✅',
      services: [
        {
          tech: ['Web Development'],
          title: 'Rabenj Engineering',
          desc: 'Rabenj Enterprise is an embodiment of highly qualified and experienced technicians carefully selected with broad knowledge on the various disciplines of the engineering industry. Before its inception, individuals who have come together to form this business have achieved excellence in their various fields of endeavor.',
          link: 'https://rabenjengineering.com',
          image: `${process.env.PUBLIC_URL}/images/img 1.png`
        },
        {
          tech: ['WordPress'],
          title: 'Wuripeandsons Lodge',
          desc: 'At Wuripeandsons, our vision is to redefine the art of hospitality, setting new standards of excellence and creating unforgettable experiences for every guest. We aspire to be the preferred destination where luxury, warmth, and innovation converge seamlessly, leaving an indelible mark on the hearts of those we serve.',
          link: 'https://wuripeandsonslodge.com',
          image: `${process.env.PUBLIC_URL}/images/img 2.png`
        },
        {
          tech: ['WordPress'],
          title: 'Accra Excel Leo Club',
          desc: 'We provide the youth of the world with an opportunity for development and contribution, individually and collectively, as responsible members of the local, national and international community.',
          link: 'https://mediumspringgreen-gorilla-642363.hostingersite.com/',
          image: `${process.env.PUBLIC_URL}/images/img 3.png`
        },
        {
          tech: ['WordPress'],
          title: 'Amobilepayment',
          desc: 'Our focus is working with our partners to develop targeted solutions that deliver maximum value to their users. We aim to empower others with our tools, rather than box them in with inflexible off-the-shelf products.',
          link: 'https://www.amobilepayment.com',
          image: `${process.env.PUBLIC_URL}/images/img 4.png`
        },
        {
          tech: ['HTML', 'CSS', 'JavaScript'],
          title: 'Barblanca',
          desc: 'A modern web application',
          link: '#',
          image: `${process.env.PUBLIC_URL}/images/img 5.jpg`
        },
        {
          tech: ['HTML', 'CSS', 'JavaScript'],
          title: 'DL GROUPS',
          desc: 'A dynamic web application',
          link: '#',
          image: `${process.env.PUBLIC_URL}/images/img 6.jpg`
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
                {service.image && <img src={service.image} alt={service.title} className="project-image" />}
                <p className="tech-stack">{service.tech.join(', ')}</p>
                <h3 className="project-title">{service.title}</h3>
                <p className="project-desc">{service.desc}</p>
                <button className="view-btn" onClick={() => service.link !== '#' && window.open(service.link, '_blank')}>Learn More</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Service;
