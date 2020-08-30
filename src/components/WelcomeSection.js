import React from "react";
import "./WelcomeSection.css";

export default function WelcomeSection() {
  return (
    <div className="m-1 shadow-sm welcome-section bg-white mt-3 rounded">
      <div className="p-3">
        <p className="text-center h5 mb-4">Первый шаг сделан!</p>
        <p className="">
          Теперь ты – участник нашей команды. Скорее знакомься с движениями и
          приступай к их изучению!
        </p>
      </div>
      <iframe
        // width="560"
        // height="315"
        title="видео туториал"
        className="welcome-section__video"
        // src="https://www.youtube.com/embed/bb5iBYgJV4o"
        src="https://www.youtube.com/embed/2GjnbiIwnS8"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
