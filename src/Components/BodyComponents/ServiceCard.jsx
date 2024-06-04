import React from "react";

const ServiceCard = (dets) => {
  return (
    <>
      <div className="singleService">
        <div className="serviceImage">
          <img src={dets.image} alt="1st" />
        </div>
        <div className="serviceName">
          <h3>{dets.name}</h3>
        </div>
        <div className="serviceDisc">
          Pellentesquemattis arcu malesuada in. Don ecurna sem, rutrum sit amet
          pellentesque vel suscipit at metus...
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
