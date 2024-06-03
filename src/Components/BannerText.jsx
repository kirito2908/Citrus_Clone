import React from "react";

const BannerText = (dets) => {
  return (
    <div className="imageDisc">
      <div>
        <h1>{dets.title}</h1>
        <h4>{dets.subtitle}</h4>
        <button type="button">Browse Now</button>
      </div>
    </div>
  );
};

export default BannerText;
