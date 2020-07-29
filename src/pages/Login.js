import React, { useState } from "react";
import LoginSection from "../components/LoginSection";

function Login() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="bg-white m-1 p-3 shadow-sm">
            <p>
              Эй друг, тут будет какой-то текст по поводу того, что в приложении
              можно просматривать свои ачивки у тренера Панченко Богдана
            </p>
            <p>
              Чтобы войти, введи свой номер телефона или ткни кнопку Facebook-a
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <LoginSection />
        </div>
      </div>
    </div>
  );
}

export default Login;
