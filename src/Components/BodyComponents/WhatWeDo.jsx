import React from "react";
import ServiceCard from "./ServiceCard";

const WhatWeDo = () => {
  return (
    <>
      <div className="whatWeDo">
        <div className="mainWork">
          <div className="mainWorkTitle">
            <h1>
              What <span>we do</span>
            </h1>
          </div>
        </div>
        <div className="allServices">
          <div className="ourWork">
            <p>
              Our Passion leads to design, design leads to performance,
              performance leads to success. We believe that apps and websites
              should not only be eye catching but actually provide a great user
              experience that users will remember.
            </p>
          </div>
          <div className="services">
            <div className="cards">
              <ServiceCard
                image="//citrus-demo.myshopify.com/cdn/shop/files/1_ba27b05b-0f69-4028-bc06-49fb8888f887.png?v=1677915214 100w"
                name="innovaive"
              />
              <ServiceCard
                image="//citrus-demo.myshopify.com/cdn/shop/files/2_749765a3-2d12-4829-b495-9e5fcd284899.png?v=1677915229 100w"
                name="creativity"
              />
              <ServiceCard
                image="//citrus-demo.myshopify.com/cdn/shop/files/3_09561414-705d-47cc-9097-33fa50294b89.png?v=1677915242 100w"
                name="user experience"
              />
              <ServiceCard
                image="//citrus-demo.myshopify.com/cdn/shop/files/4_9e1c8d43-ecda-476e-a167-05da86037e4e.png?v=1677915257 100w"
                name="exclusive support"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
