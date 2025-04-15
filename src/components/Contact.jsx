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
        <a href={`mailto:${email}`} className="contact-item">
          <p className="contact-label">E-post</p>
          <p className="contact-link">{email}</p>
        </a>
        <a href={linkedInURL} target="_blank" rel="noopener noreferrer" className="contact-item">
          <p className="contact-label">LinkedIn</p>
          <p className="contact-link">/magnar-lussand-selheim/</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
