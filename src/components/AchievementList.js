import React from "react";
import Achievement from "../components/Achievement";
import "./AchievementList.css";

export default function AchievementList({ name, isOpened }) {
  return (
    <div className="achievement-list container-fluid mt-3">
      <div className="row">
        <div className="col-4">
          <Achievement name="longfoot" />
        </div>
        <div className="col-4">
          <Achievement name="longfoot" />
        </div>
        <div className="col-4">
          <Achievement name="longfoot" />
        </div>
      </div>
    </div>
  );
}
