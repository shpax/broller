import React from "react";

export default function RollerLevel({ current, next }) {
  const unopened = current.awards.filter((aw) => !aw.isOpened).length;
  const unopenedtext =
    unopened <= 1 ? "ачивка" : unopened < 5 ? `ачивки` : `ачивок`;
  return (
    <div className="roller-level bg-white m-1 mb-3 p-2 pt-4 pb-3 text-center shadow-sm rounded">
      <div className="level">
        <h1 className="mb-4 mt-2">{current.name}</h1>
        {next ? (
          <>
            <p className="text-secondary mb-1 text-size-secondary">
              {unopened} {unopenedtext}, чтобы называть себя
            </p>
            <h4 className="text-secondary">{next.name}</h4>
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
