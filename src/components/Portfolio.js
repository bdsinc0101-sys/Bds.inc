import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const categories = [
    {
      title: 'Code Projects',
      emoji: '💻',
      projects: [
        {
          tech: ['React', 'Node.js', 'MongoDB'],
          title: 'E-Commerce Platform',
          desc: 'A full-stack e-commerce website with user authentication and payment integration.',
          link: '#'
        },
        {
          tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
          title: 'Task Management App',
          desc: 'A collaborative task management app with real-time updates and drag-and-drop.',
          link: '#'
        },
        {
          tech: ['JavaScript', 'Chart.js', 'OpenWeather API'],
          title: 'Weather Dashboard',
          desc: 'An interactive weather dashboard displaying forecasts from multiple APIs.',
          link: '#'
        }
      ]
    },
    {
      title: 'WordPress Projects',
      emoji: '🌐',
      projects: [
        {
          tech: ['WordPress', 'PHP', 'MySQL'],
          title: 'Corporate Website',
          desc: 'A professional corporate website with custom themes and SEO optimization.',
          link: '#'
        },
        {
          tech: ['WordPress', 'Elementor', 'WooCommerce'],
          title: 'E-Commerce Store',
          desc: 'An online store built on WordPress with payment gateways and inventory management.',
          link: '#'
        },
        {
          tech: ['WordPress', 'Custom Plugins', 'API Integration'],
          title: 'Blog Platform',
          desc: 'A content-rich blog platform with social media integration and analytics.',
          link: '#'
        }
      ]
    },
    {
      title: 'Google My Business Projects',
      emoji: '📍',
      projects: [
        {
          tech: ['Google My Business', 'SEO Tools', 'Analytics'],
          title: 'Local SEO Optimization',
          desc: 'Enhanced local search visibility and optimized business listings.',
          link: '#'
        },
        {
          tech: ['Review Management', 'CRM', 'Automation'],
          title: 'Review Management System',
          desc: 'Automated review monitoring and response system for client businesses.',
          link: '#'
        },
        {
          tech: ['GMB API', 'Dashboard', 'Reporting'],
          title: 'Business Profile Enhancement',
          desc: 'Comprehensive dashboard for managing and improving business profiles.',
          link: '#'
        }
      ]
    },
    {
      title: 'App Projects',
      emoji: '📱',
      projects: [
        {
          tech: ['React Native', 'Firebase', 'Redux'],
          title: 'Fitness Tracking App',
          desc: 'A mobile app for tracking workouts, nutrition, and health metrics.',
          link: '#'
        },
        {
          tech: ['Flutter', 'Dart', 'SQLite'],
          title: 'Social Media App',
          desc: 'A cross-platform social networking app with real-time messaging.',
          link: '#'
        },
        {
          tech: ['Ionic', 'Angular', 'Node.js'],
          title: 'Productivity Tool',
          desc: 'A hybrid app for task management and team collaboration.',
          link: '#'
        }
      ]
    },
    {
      title: 'Management System Projects',
      emoji: '⚙️',
      projects: [
        {
          tech: ['Laravel', 'MySQL', 'Bootstrap'],
          title: 'Inventory Management',
          desc: 'A comprehensive system for tracking inventory, orders, and suppliers.',
          link: '#'
        },
        {
          tech: ['Django', 'PostgreSQL', 'React'],
          title: 'HR Management System',
          desc: 'An HR platform for employee management, payroll, and performance tracking.',
          link: '#'
        },
        {
          tech: ['Spring Boot', 'MongoDB', 'Angular'],
          title: 'Project Tracking System',
          desc: 'A tool for managing projects, timelines, and team productivity.',
          link: '#'
        }
      ]
    },
    {
      title: 'E-card Registration Projects',
      emoji: '🎴',
      projects: [
        {
          tech: ['React', 'Express', 'MongoDB'],
          title: 'Event Registration Portal',
          desc: 'An online portal for event registrations with payment processing.',
          link: '#'
        },
        {
          tech: ['Vue.js', 'Node.js', 'Canvas API'],
          title: 'Digital Card Generator',
          desc: 'A tool for creating and customizing digital greeting cards.',
          link: '#'
        },
        {
          tech: ['PHP', 'MySQL', 'Stripe'],
          title: 'Membership System',
          desc: 'A membership management system with automated renewals and benefits.',
          link: '#'
        }
      ]
    }
  ];

  return (
    <section className="portfolio-section">
      {categories.map(category => (
        <div key={category.title} className="category-section">
          <h2 className="category-title">{category.emoji} {category.title}</h2>
          <div className="projects-grid">
            {category.projects.map((project, index) => (
              <div key={index} className="project-card">
                <p className="tech-stack">{project.tech.join(', ')}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <button className="view-btn" onClick={() => window.open(project.link, '_blank')}>View Project</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
