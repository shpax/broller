import React, { useState } from "react";

import RollerLevel from "../components/RollerLevel";
import AchievementList from "../components/AchievementList";
import WelcomeSection from "../components/WelcomeSection";

import Carousel from "@brainhubeu/react-carousel";

import "./Awards.css";

function Awards({ levels, currentLevel, nextLevel }) {
  const achievements = levels.map((lvl, i) => (
    <AchievementList
      list={lvl.awards}
      level={lvl}
      header={`${lvl.name}`}
      key={i}
    />
  ));

  let startPosition =
    1 + levels.indexOf(levels.find((lvl) => lvl.id === currentLevel.id));

  if (startPosition > levels.length) {
    startPosition = levels.length;
  }

  const [position, setPosition] = useState(startPosition);

  return (
    <div className="container mt-3 awards">
      <div className="row">
        <div className="col-12 col-lg-6">
          <RollerLevel current={currentLevel} next={nextLevel} />
        </div>

        <div className="col-12 col-lg-6">
          <Carousel
            plugins={["fastSwipe"]}
            animationSpeed={100}
            value={position}
            onChange={setPosition}
          >
            {[<WelcomeSection key={-1} />, ...achievements]}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Awards;
