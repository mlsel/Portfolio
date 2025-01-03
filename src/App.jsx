import React, { useRef } from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Heim from './components/Home';
import Om from './components/About';
import Prosjekter from './components/Projects';
import Kontakt from './components/Contact';
import Footer from './components/Footer';
import { CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './App.css';


function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <CustomProvider theme="dark">
      <div className="App">
        <Header scrollToHome={scrollToHome} />
        <Routes>
        <Route
            path="/"
            element={
              <>
                <Heim ref={homeRef} scrollToAbout={scrollToAbout} />
                <Om ref={aboutRef} />
                <Footer />
              </>
            }
          />
          <Route
            path="/prosjekter"
            element={
              <>
                <Prosjekter />
                <Footer />
              </>
            }
          />
          <Route
            path="/kontakt"
            element={
              <>
                <Kontakt />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
      </CustomProvider>
  );
}

export default App;
