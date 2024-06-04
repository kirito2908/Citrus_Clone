import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/docs/assets/owlcarousel/assets/owl.carousel.css";

export const AboutRight = () => {

    const options = {
        loop: true,
        margin: 10,
        nav: false,
        // autoplay: true,
        items: 1,
      };

    return (
        <>
      <div className="banner2">
        <OwlCarousel className="owl-theme" {...options}>
          <div>
            <img src="/assets/as1.webp" alt="1st" />
          </div>
          <div>
            <img src="/assets/as2.webp" alt="2nd" />
          </div>
          <div>
            <img src="/assets/as3.webp" alt="3rd" />
          </div>
        </OwlCarousel>
      </div>
    </>
  )
}
