import React from "react";
import OurServiceCard from "./BodyComponents/OurServiceCard";

const Service = () => {
  return (
    <>
      <div className="mainService">
        <div className="service">
          <div className="ourService">
            <h1>our services</h1>
            <p>
              Our Passion leads to design, design leads to performance,
              performance leads to success. We believe that apps and websites
              should not only be eye catching but actually provide a great user
              experience that users will remember.
            </p>
          </div>
          <div className="mainServices">
            <div className="leftServices">
              <OurServiceCard
                heading="IDENTITY & BRANDING"
                dets="Adipiscing diam donec adipiscing tristique risus nec. Volutpat diam
            ut venenatis tellus in metus vulputate."
                imgSource="https://citrus-demo.myshopify.com/cdn/shop/files/9.png?v=1613636017&width=80"
              />
              <OurServiceCard
                heading="IDENTITY & BRANDING"
                dets="Adipiscing diam donec adipiscing tristique risus nec. Volutpat diam
            ut venenatis tellus in metus vulputate."
                imgSource="https://citrus-demo.myshopify.com/cdn/shop/files/9.png?v=1613636017&width=80"
              />
              <OurServiceCard
                heading="IDENTITY & BRANDING"
                dets="Adipiscing diam donec adipiscing tristique risus nec. Volutpat diam
            ut venenatis tellus in metus vulputate."
                imgSource="https://citrus-demo.myshopify.com/cdn/shop/files/9.png?v=1613636017&width=80"
              />
            </div>
            <div className="rightServices">
            <OurServiceCard className="rightCards"
                heading="IDENTITY & BRANDING"
                dets="Adipiscing diam donec adipiscing tristique risus nec. Volutpat diam
            ut venenatis tellus in metus vulputate."
                imgSource="https://citrus-demo.myshopify.com/cdn/shop/files/9.png?v=1613636017&width=80"
              />
            <OurServiceCard className="rightCards"
                heading="IDENTITY & BRANDING"
                dets="Adipiscing diam donec adipiscing tristique risus nec. Volutpat diam
            ut venenatis tellus in metus vulputate."
                imgSource="https://citrus-demo.myshopify.com/cdn/shop/files/9.png?v=1613636017&width=80"
              />
            <OurServiceCard className="rightCards"
                heading="IDENTITY & BRANDING"
                dets="Adipiscing diam donec adipiscing tristique risus nec. Volutpat diam
            ut venenatis tellus in metus vulputate."
                imgSource="https://citrus-demo.myshopify.com/cdn/shop/files/9.png?v=1613636017&width=80"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
