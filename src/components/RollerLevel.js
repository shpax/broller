import React from "react";
import "./RollerLevel.css";

export default function RollerLevel({ current, next }) {
  const unopened = current.awards.filter((aw) => !aw.isOpened).length;
  const unopenedtext =
    unopened <= 1 ? "ачивка" : unopened < 5 ? `ачивки` : `ачивок`;
  return (
    <div className="roller-level bg-white m-1 mb-3 pt-0 pb-3 text-center shadow-sm rounded">
      <div className="level">
        <div>
          <img src={current.picture} className="level__picture" />
        </div>
        <h1 className="mb-4 mt-2">{current.name}</h1>
        {next ? (
          <>
            <p className="text-secondary mb-1 text-size-secondary">
              и {unopened} {unopenedtext} до {next.name}
            </p>
          </>
        ) : (
          <>
            <h6>ты достиг масимального уровня мастерства,</h6>
            <h6>я тобой горжусь!</h6>
          </>
        )}
      </div>
    </div>
  );
}
