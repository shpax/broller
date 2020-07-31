import React from "react";

export default function RollerLevel({ current, next }) {
  const unopened = current.awards.filter((aw) => !aw.isOpened).length;
  const unopenedtext =
    unopened <= 1 ? "ачивка" : unopened < 5 ? `ачивки` : `ачивок`;
  return (
    <div className="roller-level bg-white m-1 mb-3 p-2 pt-4 pb-3 text-center shadow-sm rounded">
      <div className="level">
        <h2>{current.name},</h2>
        {next ? (
          <>
            <h6>
              {unopened} {unopenedtext}, чтобы называть себя
            </h6>
            <h2>{next.name}</h2>
          </>
        ) : (
          <>
            <h6>ты достиг масимального уровня мастерства,</h6>
            <h6>я тобой горжусь!</h6>
          </>
        )}
      </div>
      <div className="pt-2">
        <a className="btn btn-link text-primary" href="/">
          открыть плейлист
        </a>
      </div>
    </div>
  );
}
