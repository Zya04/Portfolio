import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Zya Nassurally</h1>
      <h3>
          Développeur web <span>Front-end</span>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
