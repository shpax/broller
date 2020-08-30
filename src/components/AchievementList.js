import React from "react";
import chunk from "lodash/chunk";
import Achievement from "../components/Achievement";
import "./AchievementList.css";

export default function AchievementList({ list, header, level }) {
  const { awardClosedPicture, awardOpenedPicture } = level;
  const achievementsHtml = chunk(list, 3).map((l, i) => (
    <div className="row" key={i}>
      {l.map((ach, j) => (
        <div className="col-4" key={j}>
          <Achievement
            data={ach}
            image={ach.isOpened ? awardOpenedPicture : awardClosedPicture}
          />
        </div>
      ))}
    </div>
  ));
  return (
    <div className="achievement-list container-fluid mt-3">
      {!!header ? (
        <div className="row">
          <div className="col-12 text-center pb-2 h5">{header}</div>
        </div>
      ) : null}
      {achievementsHtml}
    </div>
  );
}
