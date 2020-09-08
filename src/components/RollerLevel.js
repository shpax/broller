import React from "react";
import "./RollerLevel.css";

export default function RollerLevel({ current, next, roller }) {
  const unopened = current.awards.filter((aw) => !aw.isOpened).length;
  const rollerNameText = roller && roller.name ? `${roller.name},` : "";
  return (
    <div className="roller-level mb-4">
      <div className="roller-level__hint mb-2 mt-2 pl-1">
        {rollerNameText} твой уровень:
      </div>
      <div className="">
        <div className="level">
          <div className="bg-white text-center shadow rounded">
            <img
              alt="картинка уровня"
              src={current.picture}
              className="level__picture rounded"
            />
          </div>
          {/* {next && unopened > 0 ? (
            <>
              <p className="text-secondary mb-1 text-size-secondary pt-3 pb-3 text-right">
                и {unopened} {unopenedtext} до {next.name}
              </p>
            </>
          ) : null} */}
          {!next && unopened === 0 ? (
            <>
              <p className="pr-4 pl-4 text-left">
                ВОУ! Похоже, ты освоил ВСЕ основные движения на роликах и достиг
                наивысшего уровня мастерства!
              </p>

              <p className="pr-4 pl-4 text-left">
                Возможно, теперь ты хочешь стать чемпионом по слалому или
                слайдам? А может ты хочешь осуществить кругосветное путешествие
                на роликах?
              </p>
              <p className="pr-4 pl-4 text-left">
                Обратись к своему тренеру, чтобы он направил тебя!
              </p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
