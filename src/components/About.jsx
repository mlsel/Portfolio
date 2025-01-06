import React from 'react';
import '../styling/About.css';
import { FaLocationDot } from "react-icons/fa6";

const About = React.forwardRef((props, ref) => {
  return (
    <section id="about" ref={ref}>
      <div className="about-card">
        <div className="about-image">
          <img src="https://avatars.githubusercontent.com/u/58907849?v=4" alt="Portrait of me" />
        </div>
        <div className="about-content">
          <h2>Om Meg</h2>
          <div className="location">
            <span className="location-icon"><FaLocationDot /></span>
            Voss, Norge
          </div>
          <div className='text'>
            <p>
              Jeg er en Front-End Utvikler med erfaring innen blant annet Figma, HTML, CSS, SCSS, JavaScript, TypeScript, Bootstrap, Tailwind og React. Jeg brenner for å bygge interaktive og brukervennlige applikasjoner som skaper verdi for både brukere og virksomheter. Gjennom utdanning og egne prosjekter har jeg opparbeidet meg solide ferdigheter i å designe og utvikle komplette løsninger, fra skisser og prototyper til ferdig kode.
            </p>
            <p>
              Jeg har jobbet med ulike prosjekter hvor jeg har utviklet funksjonelle og visuelt tiltalende webapplikasjoner. Dette har gitt meg bred erfaring med å bruke moderne rammeverk og verktøy for å lage løsninger som både ser bra ut og fungerer sømløst. Jeg har også erfaring med å samarbeide i team og jobbe selvstendig, noe som gjør meg fleksibel og tilpasningsdyktig i ulike arbeidsmiljøer.
            </p>
            <p>
              Enten jeg jobber som en del av et team eller som selvstendig utvikler, legger jeg stor vekt på struktur, nøyaktighet og god kommunikasjon for å sikre at prosjektene jeg er en del av blir vellykkede. Jeg er alltid motivert for å lære nye teknologier og ta på meg spennende utfordringer.
            </p>
            <p>
              Jeg er klar til å bidra, enten det er som frilanser eller i en fast stilling. Med meg får du en utvikler som er engasjert, pålitelig og dedikert til å levere løsninger av høy kvalitet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
