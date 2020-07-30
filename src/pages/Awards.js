import React, { useEffect } from "react";

import RollerLevel from "../components/RollerLevel";
import AchievementList from "../components/AchievementList";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css"; //Allows for server-side rendering.
import "react-owl-carousel2/src/owl.theme.default.css"; //Allows for server-side rendering.

const options = {
  items: 1,
  dots: true,
};

function Awards({ levels, currentLevel, nextLevel }) {
  useEffect(() => {
    console.log("awards");
  });

  const achievements = levels.map((lvl, i) => (
    <AchievementList list={lvl.awards} key={i} />
  ));
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 col-lg-6">
          <RollerLevel current={currentLevel} next={nextLevel} />
        </div>

        <div className="col-12 col-lg-6">
          <div className="navContainer"></div>
          <OwlCarousel options={options}>{achievements}</OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default Awards;
