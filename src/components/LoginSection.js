import React, { useState } from "react";
import { authWithFacebook } from "../models/firebase";
import AuthPhone from "../models/firebase/AuthPhone";

export default function LoginSection({ onLogin }) {
  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");
  const [authObj, setAuthObj] = useState(null);

  const onPhoneEnter = async (phone, containerId) => {
    const authPhone = new AuthPhone(phone, containerId);

    await authPhone.getCode();

    setAuthObj(authPhone);

    if (onLogin) {
      authPhone.once("auth-success", onLogin);
    }
  };

  return (
    <div className="bg-white m-1 p-3 shadow-sm">
      <div className="input-group mb-3">
        <input
          type="tel"
          className="form-control"
          name="phone"
          placeholder="Номер телефона"
          aria-label="Номер телефона"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </div>
      {authObj ? (
        <div className="input-group mb-3">
          <input
            type="tel"
            className="form-control"
            name="number"
            placeholder="код из смс"
            aria-label="код из смс"
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
        </div>
      ) : null}
      <div id="capcha-container"></div>
      <div className="text-center">
        {authObj ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => authObj.enterCode(code)}
          >
            войти
          </button>
        ) : (
          <button
            type="button"
            id="login-button"
            className="btn btn-primary"
            onClick={() => onPhoneEnter(number, "capcha-container")}
          >
            получить код
          </button>
        )}
      </div>
      <div className="text-center pt-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => authWithFacebook()}
        >
          facebook
        </button>
      </div>
    </div>
  );
}
