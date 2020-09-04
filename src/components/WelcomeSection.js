import React from "react";
import "./WelcomeSection.css";

export default function WelcomeSection() {
  return (
    <div className="m-1 shadow-sm welcome-section bg-white mt-3 rounded">
      <div className="p-3">
        <p className="text-center h5 mb-4">Первый шаг сделан!</p>
        <p className="">
          Теперь ты – участник нашей команды. Перед тем как начать обязательно
          зайди в свой профиль, поставь своё фото и дополни информацией о себе.
        </p>
        А затем скорее знакомься с движениями и приступай к их изучению!
        <p></p>
      </div>
    </div>
  );
}
