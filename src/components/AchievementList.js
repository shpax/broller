import React from "react";
import chunk from "lodash/chunk";
import Achievement from "../components/Achievement";
import "./AchievementList.css";

export default function AchievementList({ list }) {
  const achievementsHtml = chunk(list, 3).map((l, i) => (
    <div className="row" key={i}>
      {l.map((ach, j) => (
        <div className="col-4" key={j}>
          <Achievement data={ach} />
        </div>
      ))}
    </div>
  ));
  return (
    <div className="achievement-list container-fluid mt-3">
      {achievementsHtml}
    </div>
  );
}
