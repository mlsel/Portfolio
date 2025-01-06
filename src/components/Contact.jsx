import React from 'react';
import '../styling/Contact.css';

const Contact = () => {

  const email = "mselheim@proton.me";
  const linkedInURL = "https://www.linkedin.com/in/magnar-lussand-selheim/";

  return (
    <section id="contact">
      <h2>Kontakt Meg</h2>
      <p>Jeg vil gjerne høre fra deg! Hvis du har spørsmål, eller bare ønsker å ta en prat, kan du kontakte meg via e-post eller LinkedIn.</p>
      <div className="contact-info">
        <div className="contact-item">
          <div>
            <p className="contact-label">E-post</p>
            <a href={`mailto:${email}`} className="contact-link">
              {email}
            </a>
          </div>
        </div>
        <div className="contact-item">
          <div>
            <p className="contact-label">LinkedIn</p>
            <a href={linkedInURL} target="_blank" rel="noopener noreferrer" className="contact-link">
              /magnar-lussand-selheim/
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
