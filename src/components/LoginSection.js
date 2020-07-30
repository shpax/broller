import React, { useState, useEffect } from "react";
import { authWithPhone } from "../models/firebase";

export default function LoginSection() {
  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");
  const [authCodePromise, setAuthCodePromise] = useState(null);
  const [authObj, setAuthObj] = useState(null);

  useEffect(() => {
    if (authCodePromise !== null)
      authCodePromise.then((obj) => setAuthObj(obj));
  }, [authCodePromise]);

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
      {authCodePromise ? (
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
            onClick={() =>
              setAuthCodePromise(authWithPhone(number, "capcha-container"))
            }
          >
            получить код
          </button>
        )}
      </div>
    </div>
  );
}
