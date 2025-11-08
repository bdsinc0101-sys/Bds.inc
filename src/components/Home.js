import React from 'react';
import LiquidEther from './LiquidEther';
import TextType from './TextType';

const Home = () => {
  return (
    <section className="home-section" style={{ position: 'relative', height: '100vh', color: 'white', padding: '2rem', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
      <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', paddingRight: '2rem' }}>
        <TextType
          text={[
            "Hi, I'm Elorm Tay.",
            "I am a versatile Full Stack Developer with a passion for crafting exceptional web experiences.",
            "Welcome to my portfolio, where I showcase my journey through the world of technology and innovation.",
            "As a Full Stack Developer, I have honed my skills in both front-end and back-end technologies, allowing me to create dynamic, interactive, and user-friendly web applications."
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          textColors={['#FF94B4', '#ffffff', '#ffffff', '#ffffff', '#ffffff']}
          loop={false}
          noDelete={true}
          as="div"
          style={{ fontSize: '1.5rem', lineHeight: '1.6' }}
        />
        <button
          style={{
            backgroundColor: '#FF94B4',
            border: 'none',
            padding: '0.75rem 1.5rem',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            borderRadius: '5px',
            marginTop: '1rem'
          }}
          onClick={() => alert('CV download feature coming soon!')}
        >
          Download CV
        </button>
      </div>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: '20px',
        boxShadow: '0 0 30px #FF94B4',
        padding: '1rem',
        zIndex: 1
      }}>
        <img
          src="/images/profile.png"
          alt="Profile"
          style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: '20px', objectFit: 'cover' }}
        />
      </div>
    </section>
  );
};

export default Home;
