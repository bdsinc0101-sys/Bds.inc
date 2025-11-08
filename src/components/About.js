import ProfileCard from './ProfileCard';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left">
          <p>
            I’m Elorm Kwesi Tay, a Full Stack Developer passionate about creating functional, user-centered web applications. I love turning creative ideas into clean, efficient, and scalable solutions. My development philosophy is simple code should be elegant, maintainable, and built for real-world use.
          </p>
        </div>
        <div className="about-center">
          <ProfileCard
            name="Elorm Kwesi Tay"
            title="Full Stack Developer"
            handle="Tay"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/images/data 2.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
        onContactClick={() => window.open('https://www.linkedin.com/in/elorm-tay-165b60236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank')}
          />
        </div>
        <div className="about-right">
          <p>
            My journey began with curiosity about how websites work. Over time, that curiosity evolved into a drive to build technology that connects people and businesses. I’m currently improving my backend development and cloud deployment skills while contributing to open-source projects. Outside of coding, I enjoy football and exploring new tech ideas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
