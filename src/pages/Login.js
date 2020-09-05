import React, { useState, useRef, useEffect, useCallback } from "react";
import AuthPhone from "../models/firebase/AuthPhone";
import { createRecaptchaVerifier } from "../models/firebase";

function Login({ onLogin }) {
  const [authPhone, setAuthPhone] = useState(null);
  const [wrongCode, setWrongCode] = useState(false);
  const [tooManyAuth, setTooManyAuth] = useState(false);
  const phoneInput = useRef(null);
  const codeInput = useRef(null);
  const captchaContainer = useRef(null);

  console.log("rerender");

  useEffect(() => {
    console.log("captcha start");
    window.recaptchaVerifier = createRecaptchaVerifier(
      captchaContainer.current
    );
    // console.log("captcha render");
    window.recaptchaVerifier.render().then(function (widgetId) {
      window.recaptchaWidgetId = widgetId;
    });
  }, []);

  const enterCode = useCallback(async () => {
    setWrongCode(false);
    try {
      await authPhone.enterCode(codeInput.current.value);
    } catch (e) {
      setWrongCode(true);
    }
  }, [authPhone]);

  const onPhoneEnter = async (phone) => {
    setTooManyAuth(false);

    const authPhone = new AuthPhone(phone);

    authPhone.once("code-sent", () => setAuthPhone(authPhone));

    try {
      await authPhone.getCode();
    } catch (e) {
      return setTooManyAuth(true);
    }

    if (onLogin) {
      authPhone.once("auth-success", onLogin);
    }
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 mt-2 mb-4">
          <div className="bg-white m-1 p-3 shadow-sm">
            <p className="text-center h4">Привет-привет!</p>
            <p>
              Вы посетили проект «достижения» команды Broller Team. Здесь
              подробно прописаны и показаны все движения на роликах от уровня
              «супер малыш» до «профессионал». Скорее регистрируйтесь, чтобы
              начать свой путь к вершине роллер-спорта!
            </p>
          </div>
        </div>

        <div className="col-12">
          <div className="bg-white m-1 p-3 shadow-sm">
            <p className="text-center">
              Чтобы войти, введи свой номер телефона
            </p>
            <div>
              <div className="input-group mb-3">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  placeholder="Номер телефона"
                  aria-label="Номер телефона"
                  ref={phoneInput}
                />
              </div>
              {authPhone ? (
                <div className="input-group mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    name="number"
                    placeholder="код из смс"
                    aria-label="код из смс"
                    ref={codeInput}
                  />
                </div>
              ) : null}
              {wrongCode ? (
                <div className="text-danger text-size-secondary mb-3">
                  с кодом что-то не так
                </div>
              ) : null}
              {tooManyAuth ? (
                <div className="text-danger text-size-secondary mb-3">
                  много авторизаций, попробуй-ка позже
                </div>
              ) : null}
              <div ref={captchaContainer}></div>
              <div className="text-center">
                {authPhone ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={enterCode}
                  >
                    войти
                  </button>
                ) : (
                  <button
                    type="button"
                    id="login-button"
                    className="btn btn-primary"
                    onClick={() => onPhoneEnter(phoneInput.current.value)}
                  >
                    получить код
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
