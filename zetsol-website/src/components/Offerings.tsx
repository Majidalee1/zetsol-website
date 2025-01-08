import React from "react";
import staffAugmentationImg from "../assets/staff-augmentation.jpg";
import dedicatedTeamImg from "../assets/dedicated-team.jpg";
import developmentCenterImg from "../assets/development-center.jpg";

const Offerings = () => {
  const offerings = [
    {
      title: "Staff Augmentation",
      image: staffAugmentationImg,
      alt: "Staff augmentation service",
    },
    {
      title: "Dedicated Team",
      image: dedicatedTeamImg,
      alt: "Dedicated team service",
    },
    {
      title: "Development Center",
      image: developmentCenterImg,
      alt: "Development center service",
    },
  ];

  return (
    <section className="offerings-section">
      <div className="offerings-container">
        <h2 className="offerings-title">Our Offerings</h2>
        <div className="offerings-grid">
          {offerings.map((offering) => (
            <div key={offering.title} className="offering-card">
              <div className="offering-image-container">
                <img src={offering.image} alt={offering.alt} />
                <div className="offering-overlay"></div>
                <h3 className="offering-card-title">{offering.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
