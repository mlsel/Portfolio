import React from 'react';
import './About.css';

const About = React.forwardRef((props, ref) => {
  return (
    <section id="about" ref={ref}>
      <h2>Om Meg</h2>
      <p>
        Jeg er en Front-End Utvikler med erfaring innen Figma, HTML, CSS, SCSS, JavaScript, Bootstrap, Tailwind og React. Jeg elsker å bygge interaktive og brukervennlige applikasjoner. 
      </p>
    </section>
  );
});

export default About;
