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
          <img
            alt="картинка уровня"
            src={current.picture}
            className="level__picture"
          />
        </div>
        <h1 className="mb-3 mt-2">{current.name}</h1>
        {next && unopened > 0 ? (
          <>
            <p className="text-secondary mb-1 text-size-secondary">
              и {unopened} {unopenedtext} до {next.name}
            </p>
          </>
        ) : null}
        {!next && unopened === 0 ? (
          <>
            <p className="pr-4 pl-4 text-left">
              ВОУ! Похоже, ты освоил ВСЕ основные движения на роликах и достиг
              наивысшего уровня мастерства!
            </p>

            <p className="pr-4 pl-4 text-left">
              Возможно, теперь ты хочешь стать чемпионом по слалому или слайдам?
              А может ты хочешь осуществить кругосветное путешествие на роликах?
            </p>
            <p className="pr-4 pl-4 text-left">
              Обратись к своему тренеру, чтобы он направил тебя!
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}
