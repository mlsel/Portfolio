import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Home.css';
import { Button} from 'rsuite';
import { FaAngleDown } from "react-icons/fa6";

const Home = React.forwardRef(({ scrollToAbout }, ref) => {

  return (
    <>
      <section className="hero" ref={ref} id="heim">
        <div className="content">
          <h1>Hei, jeg er Magnar</h1>
          <p>Jeg er en Front-End Utvikler, opptatt av å skisse og utvikle brukervennlige webapplikasjoner.</p>
          <Link to="/prosjekter"><Button size="lg" className="cta-button" appearance="primary">Sjekk ut mine prosjekt</Button>
          </Link>

          <span className='scroll-arrow'><Button className='arrow' onClick={scrollToAbout}>
            Om meg <FaAngleDown />
          </Button></span>
        </div>
      </section>
    </>
  );
});

export default Home;
