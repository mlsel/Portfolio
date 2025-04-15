import React from 'react';
import '../styling/About.css';
import { 
  FaLocationDot,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaBootstrap,
  FaWind,
  FaWordpress
} from "react-icons/fa6";
import { SiTypescript, SiCraftcms, SiVite, SiJest, SiCypress } from "react-icons/si";

const About = React.forwardRef((props, ref) => {
  return (
    <section id="about" ref={ref}>
      <div className="about-container">
        <div className="about-header">
          <div className="profile-image">
            <img src="https://avatars.githubusercontent.com/u/58907849?v=4" alt="Portrait of me" />
          </div>
          <h1>Om Meg</h1>
          <div className="location">
            <FaLocationDot /> Voss, Norge
          </div>
        </div>

        <div className="about-content">
          <div className="intro">
            Jeg er en Front-End Utvikler med erfaring innen blant annet Figma, HTML, CSS, SCSS, JavaScript, TypeScript, Bootstrap, Tailwind og React. Jeg brenner for å bygge interaktive og brukervennlige applikasjoner som skaper verdi for både brukere og virksomheter.
          </div>

          <div className="skills">
            <div className="skill-group">
              <div className="skill-items">
                <div className="skill-item"><FaHtml5 /><span>HTML5</span></div>
                <div className="skill-item"><FaCss3Alt /><span>CSS3</span></div>
                <div className="skill-item"><FaSass /><span>Sass</span></div>
                <div className="skill-item"><FaJs /><span>JavaScript</span></div>
                <div className="skill-item"><SiTypescript /><span>TypeScript</span></div>
                <div className="skill-item"><FaReact /><span>React</span></div>
                <div className="skill-item"><SiVite /><span>Vite</span></div>
                <div className="skill-item"><FaBootstrap /><span>Bootstrap</span></div>
                <div className="skill-item"><FaWind /><span>Tailwind</span></div>
                <div className="skill-item"><FaFigma /><span>Figma</span></div>
                <div className="skill-item"><SiJest /><span>Jest</span></div>
                <div className="skill-item"><SiCypress /><span>Cypress</span></div>
                <div className="skill-item"><FaWordpress /><span>WordPress</span></div>
                <div className="skill-item"><SiCraftcms /><span>Craft CMS</span></div>
              </div>
            </div>
          </div>

          <div className="experience">
            <p>
              Jeg har jobbet med ulike prosjekter hvor jeg har utviklet funksjonelle og visuelt tiltalende webapplikasjoner. Dette har gitt meg bred erfaring med å bruke moderne rammeverk og verktøy for å lage løsninger som både ser bra ut og fungerer sømløst.
            </p>
            <p>
              Enten jeg jobber som en del av et team eller som selvstendig utvikler, legger jeg stor vekt på struktur, nøyaktighet og god kommunikasjon for å sikre at prosjektene jeg er en del av blir vellykkede. Jeg er alltid motivert for å lære nye teknologier og ta på meg spennende utfordringer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
