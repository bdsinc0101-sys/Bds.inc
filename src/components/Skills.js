import React from 'react';
import './Skills.css';

const Skills = () => {
  const categories = [
    {
      title: 'Programming Languages',
      emoji: '💻',
      skills: [
        {
          tech: ['Proficiency: 85%'],
          title: 'PHP',
          desc: 'A server-side scripting language designed for web development.',
          link: '#'
        },
        {
          tech: ['Proficiency: 70%'],
          title: 'Python',
          desc: 'A versatile programming language used for web development, data science, and automation.',
          link: '#'
        },
        {
          tech: ['Proficiency: 80%'],
          title: 'JavaScript',
          desc: 'A programming language for creating interactive web pages and applications.',
          link: '#'
        }
      ]
    },
    {
      title: 'Web Technologies',
      emoji: '🌐',
      skills: [
        {
          tech: ['Proficiency: 90%'],
          title: 'HTML/CSS',
          desc: 'Markup and styling languages for building web pages.',
          link: '#'
        }
      ]
    },
    {
      title: 'Databases',
      emoji: '🗄️',
      skills: [
        {
          tech: ['Proficiency: 90%'],
          title: 'MySQL',
          desc: 'A relational database management system for storing and retrieving data.',
          link: '#'
        },
        {
          tech: ['Proficiency: 75%'],
          title: 'Oracle',
          desc: 'An enterprise-grade relational database management system.',
          link: '#'
        }
      ]
    },
    {
      title: 'Content Management',
      emoji: '📝',
      skills: [
        {
          tech: ['Proficiency: 85%'],
          title: 'WordPress',
          desc: 'A popular content management system for building websites.',
          link: '#'
        }
      ]
    },
    {
      title: 'Digital Marketing',
      emoji: '📈',
      skills: [
        {
          tech: ['Proficiency: 75%'],
          title: 'Social Media Management',
          desc: 'Managing and optimizing social media presence for businesses.',
          link: '#'
        },
        {
          tech: ['Proficiency: 80%'],
          title: 'Google Page Registration',
          desc: 'Registering and optimizing Google My Business pages.',
          link: '#'
        }
      ]
    },
    {
      title: 'Creative Services',
      emoji: '🎨',
      skills: [
        {
          tech: ['Proficiency: 70%'],
          title: 'E-card Creation',
          desc: 'Designing and creating digital greeting cards.',
          link: '#'
        }
      ]
    },
    {
      title: 'Tools & Software',
      emoji: '🛠️',
      skills: [
        {
          tech: ['Design Tool'],
          title: 'Figma',
          desc: 'A collaborative interface design tool.',
          link: '#'
        },
        {
          tech: ['Code Editor'],
          title: 'Visual Studio Code',
          desc: 'A source code editor with support for debugging and version control.',
          link: '#'
        },
        {
          tech: ['Version Control'],
          title: 'GitHub',
          desc: 'A platform for hosting and collaborating on code repositories.',
          link: '#'
        },
        {
          tech: ['Design Tool'],
          title: 'Canva',
          desc: 'An online design tool for creating graphics and presentations.',
          link: '#'
        },
        {
          tech: ['Image Editor'],
          title: 'Adobe Photoshop',
          desc: 'A raster graphics editor for photo editing and digital art.',
          link: '#'
        },
        {
          tech: ['Development Environment'],
          title: 'XAMPP',
          desc: 'A free and open-source cross-platform web server solution stack.',
          link: '#'
        }
      ]
    }
  ];

  return (
    <section className="skills-section">
      {categories.map(category => (
        <div key={category.title} className="category-section">
          <h2 className="category-title">{category.emoji} {category.title}</h2>
          <div className="projects-grid">
            {category.skills.map((skill, index) => (
              <div key={index} className="project-card">
                <p className="tech-stack">{skill.tech.join(', ')}</p>
                <h3 className="project-title">{skill.title}</h3>
                <p className="project-desc">{skill.desc}</p>
                <button className="view-btn" onClick={() => window.open(skill.link, '_blank')}>View Details</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
