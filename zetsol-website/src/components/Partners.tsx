import React from "react";
import matuskaLogo from "../assets/partners/matuska.png";
import pentaLogo from "../assets/partners/matuska.png";
import exeoLogo from "../assets/partners/matuska.png";
import unLogo from "../assets/partners/matuska.png";
import saonaLogo from "../assets/partners/matuska.png";

const Partners = () => {
  const partners = [
    { name: "Matuska", logo: matuskaLogo },
    { name: "Penta", logo: pentaLogo },
    { name: "Exeo", logo: exeoLogo },
    { name: "Un", logo: unLogo },
    { name: "Saona", logo: saonaLogo },
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title">
          Trusted by companies all over the world
        </h2>
        <div className="partners-logo-grid">
          {partners.map((partner) => (
            <div key={partner.name} className="partner-logo">
              <img src={partner.logo} alt={`${partner.name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
