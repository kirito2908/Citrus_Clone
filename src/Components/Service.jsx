import React from "react";
import OurServiceCard from "./BodyComponents/OurServiceCard";

const Service = () => {
  return (
    <>
      <div className="mainService">
        <div className="service">
          <div className="ourService">
            <h1>our <span>services</span></h1>
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
                imgSource="assets/9.avif"
              />
              <OurServiceCard
                heading="CONSULTANCY"
                dets="At risus viverra adipiscing at in tellus integer. Sed turpis tincidunt id aliquet. Porttitor leo a diam sollicitudin tempor id eu."
                imgSource="assets/11.avif"
              />
              <OurServiceCard
                heading="WORDPRESS & WOO COMMERCE"
                dets="Pellentesque pulvinar pellentesque habitant morbi. Pellentesque dignissim enim sit amet venenatis urna."
                imgSource="assets/13.avif"
              />
            </div>
            <div className="rightServices">
            <OurServiceCard className="rightCards"
                heading="MOBILE & WEB DESIGN"
                dets="Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Enim tortor at auctor urna nunc id."
                imgSource="assets/10.avif"
              />
            <OurServiceCard className="rightCards"
                heading="WEB DEVELOPMENT"
                dets="Eget egestas purus viverra accumsan in nisl. Quam elementum pulvinar etiam non quam. Fermentum odio eu feugiat pretium."
                imgSource="assets/12.avif"
              />
            <OurServiceCard className="rightCards"
                heading="IOS DEVELOPMENT"
                dets="Purus sit amet luctus venenatis lectus magna fringilla urna. Nisl vel pretium lectus quam id leo."
                imgSource="assets/14.avif"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
