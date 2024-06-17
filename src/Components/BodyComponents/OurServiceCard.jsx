import React from "react";

const OurServiceCard = (details) => {
  return (
    <>
      <div className="oneCard">
        <div className="detailPart">
          <h3>{details.heading}</h3>
          <p>{details.dets}</p>
        </div>
        <div className="svgPart">
            <img src={`${details.imgSource}`} alt="9th" />
        </div>
      </div>
    </>
  );
};

export default OurServiceCard;
