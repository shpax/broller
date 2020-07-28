import React from "react";

import RollerLevel from "../components/RollerLevel";
import AchievementList from "../components/AchievementList";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css"; //Allows for server-side rendering.
import "react-owl-carousel2/src/owl.theme.default.css"; //Allows for server-side rendering.

const options = {
  items: 1,
  dots: true,
};

function Awards() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 col-lg-6">
          <RollerLevel />
        </div>

        <div className="col-12 col-lg-6">
          <div className="navContainer"></div>
          <OwlCarousel options={options}>
            <AchievementList />
            <AchievementList />
            <AchievementList />
            <AchievementList />
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default Awards;
