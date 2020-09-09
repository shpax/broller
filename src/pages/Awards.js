import React, { useState } from "react";

import RollerLevel from "../components/RollerLevel";
import AchievementList from "../components/AchievementList";
import WelcomeSection from "../components/WelcomeSection";

import Carousel from "@brainhubeu/react-carousel";
import ArrowDots from "../components/ArrowDots";

import "./Awards.css";

let startPosition = null;

function Awards({ levels, currentLevel, nextLevel, roller }) {
  const achievements = levels.map((lvl, i) => (
    <AchievementList
      list={lvl.awards}
      level={lvl}
      header={`${lvl.name}`}
      key={i}
    />
  ));

  if (startPosition === null) {
    startPosition = 0;

    if (currentLevel) {
      startPosition = levels.indexOf(
        levels.find((lvl) => lvl.id === currentLevel.id)
      );
    }

    if (startPosition > levels.length) {
      startPosition = levels.length;
    }
  }

  const [position, setPosition] = useState(startPosition);

  startPosition = position;

  return (
    <div className="container mt-3 awards">
      <div className="row">
        <div className="col-12">
          {currentLevel ? (
            <RollerLevel
              current={currentLevel}
              next={nextLevel}
              roller={roller}
            />
          ) : (
            <WelcomeSection key={-1} />
          )}
        </div>

        <div className="col-12">
          <ArrowDots
            value={position}
            onChange={setPosition}
            number={achievements.length}
          />
          <Carousel
            animationSpeed={300}
            value={position}
            draggable={false}
            plugins={["fastSwipe"]}
            onChange={setPosition}
          >
            {achievements}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Awards;
