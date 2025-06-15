import React, { useEffect } from 'react';

const AnimatedTimeline = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll('[data-animate]');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const containerStyle = {
    fontSize: '1.25rem',
    lineHeight: 1.6,
    maxWidth: '800px',
    // margin: '0 auto',
    // padding: '2rem 1rem',
    position: 'relative',
  };

  const headingStyle = {
    fontSize: '1.75rem',
    fontWeight: 700,
    marginBottom: '1rem',
  };
  const headingStyle2 = {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '1rem',
  };

  const textStyle = {
    marginBottom: '1.5rem',
  };

  const timelineStyle = {
    listStyle: 'none',
    paddingLeft: '2rem',
    margin: '2rem 0',
    position: 'relative',
  };

  const verticalLineStyle = {
    content: '""',
    position: 'absolute',
    left: '10px',
    top: 0,
    width: '2px',
    height: '100%',
    background: '#e0e0e0',
  };

  const getItemStyle = (isVisible) => ({
    position: 'relative',
    paddingLeft: '1.5rem',
    marginBottom: '2rem',
    fontWeight: 400,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  });

  const dotStyle = {
    position: 'absolute',
    left: '-14px',
    top: '0.5em',
    width: '14px',
    height: '14px',
    background: 'linear-gradient(135deg, #2a9d8f, #00b4d8)',
    border: '2px solid white',
    borderRadius: '50%',
    boxShadow: '0 0 5px rgba(0,0,0,0.2)',
    zIndex: 1,
  };

  return (
    <div style={containerStyle}>
      <p style={headingStyle}>Born by Research. Backed by Results.</p>

      <p style={textStyle}>
        Founded by visionaries <strong>Rahul Bansal</strong> and <strong>Nitish Jain</strong>, 
        Nataraj Hydrocarbons was built with a shared ambition to combat India’s plastic 
        waste crisis with real-world, scalable innovation.
      </p>

      <p style={headingStyle2}>Timeline</p>
      <ul style={timelineStyle}>
        <div style={verticalLineStyle}></div>

        {[
          { year: '2022', text: 'Founded in Kolkata by Rahul Bansal & Nitish Jain' },
          { text: 'In-house pyrolysis reactors developed & tested' },
          { text: 'Initial production capacity: 50,000 litres/month' },
          { text: '100% repeat client orders from industrial buyers' },
          { text: 'Now scaled to 150,000+ litres/month, expanding to 350,000 litres/month in FY26' },
        ].map((item, index) => (
          <li
            key={index}
            data-animate
            style={getItemStyle(false)}
            className="timeline-item"
          >
            <span style={dotStyle}></span>
            {item.year && <strong>{item.year}</strong>}
            {item.year && ' – '}
            {item.text}
          </li>
        ))}
      </ul>

      <p style={textStyle}>
        Together, they’ve created a company that doesn’t just promise change — it delivers it. 
        Backed by repeat industrial clients and global investors, NHC is scaling up production and impact every month.
      </p>
    </div>
  );
};

export default AnimatedTimeline;
