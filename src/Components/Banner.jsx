import React from "react";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BannerText from "./BannerText";

const Banner = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    items: 1,
  };

  return (
    <>
      <div className="banner">
        <OwlCarousel className="owl-theme" {...options}>
          <div>
            <img src="/assets/slideshow_2.jpeg" alt="1st" />
            <BannerText title="we are citrus" subtitle="modern & responsive"/>
          </div>
          <div>
            <img src="/assets/slideshow_1.webp" alt="2nd" />
            <BannerText title="Professional design" subtitle="for versatile products"/>
          </div>
          <div>
            <img src="/assets/slideshow_3.webp" alt="3rd" />
            <BannerText title="unique look store" subtitle="with best features"/>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default Banner;
