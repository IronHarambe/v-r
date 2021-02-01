import React from "react";
import "./Contact.scss";
import ContactCard from "./contactCard/ContactCard";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__banner">
        <h2>GET IN TOUCH!</h2>
      </div>

      <div className="contact__cards">
        <ContactCard
          img="/img/icons/phone.png"
          title="Phone"
          desc="0470217130"
        ></ContactCard>

        <ContactCard
          img="/img/icons/map.png"
          title="Location"
          desc="185 Marys Hope Road, Claremont,
          Tasmania, 7010"
        ></ContactCard>

        <ContactCard
          img="/img/icons/mail.png"
          title="Email"
          desc="V+RServices@gmail.com"
        ></ContactCard>
      </div>
    </div>
  );
}

export default Contact;
