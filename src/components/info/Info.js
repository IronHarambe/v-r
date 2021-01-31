import React from "react";
import InfoCard from "./infoCard/InfoCard";
import "./Info.scss";

function Info() {
  return (
    //   Introuction Text
    <div className="info">
      <div className="intro__text">
        <h1>V + R</h1>
        <h5>Your Home For VR & AR Services!</h5>
      </div>

      {/* Service Information Cards */}
      <div className="info__cards">
        <InfoCard
          img="/img/icons/fly.jpg"
          title="What We Do"
          description="We provide unique VR & AR services! We do various
        immersive simulations and gamming experiences. We can transform your ideas
        into reality."
        ></InfoCard>

        <InfoCard
         img="/img/icons/rocket.jpg"
          title="Who We Are"
          description="Our team consists of vetrans with many experiences in this industry,
          as well as upcomming talent. We have experiences with the latest VR and AR technology!"
        ></InfoCard>

        <InfoCard
         img="/img/icons/person.jpg"
          title="Work Ethic"
          description="We are a delight to work with and we provide free consultation.
          Our team provides excellent customer service and we get along well with our clients. "
        ></InfoCard>

        <InfoCard
         img="/img/icons/globe.jpg"
          title="Mission"
          description="We aim to provide the best VR and AR services you deserve. We want to bring
          innovative and creative solutions to your problems. We aim to change the game.  "
        ></InfoCard>
      </div>
    </div>
  );
}

export default Info;
