import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaAngleDown } from "react-icons/fa6";

const Home = React.forwardRef(({ scrollToAbout }, ref) => {

  return (
    <>
      <section className="hero" ref={ref} id="heim">
        <div className="content">
          <h1>Hei, jeg er Magnar</h1>
          <p>Jeg er en Front-End Utvikler, opptatt av å skisse og utvikle brukervennlige nettsider.</p>
          <Link to="/prosjekter"><button className="cta-button">Sjekk ut mine prosjekt</button></Link>

          <button className="scroll-arrow" onClick={scrollToAbout}>
            Om meg <FaAngleDown />
          </button>
        </div>
      </section>
    </>
  );
});

export default Home;
