import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const AboutRight = () => {
  const options = {
    loop: true,
    margin:10,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
}

  return (
    <>
      <div className="banner2">
        <OwlCarousel {...options}>
          <div class="item">
            <img src="/assets/as1.webp" alt="1st" />
          </div>
          <div class="item">
            <img src="/assets/as2.webp" alt="2nd" />
          </div>
          <div class="item">
            <img src="/assets/as3.webp" alt="3rd" />
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};
