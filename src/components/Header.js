import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./Header.css";

export default function Header({ returnTo, roller }) {
  const photo = (roller && roller.photo) || "/logo.jpg";
  return (
    <nav className="navbar navbar-light shadow-sm bg-white">
      <div className="navbar__header">
        <Switch>
          <Route exact path={["/awards/*", "/me"]}>
            <Link
              to={returnTo}
              className="navbar__return-btn align-middle text-center"
            >
              <span className="material-icons ">arrow_back</span>
            </Link>
          </Route>
          <Route>
            <img
              src="/logo.jpg"
              width="40"
              height="40"
              className="d-inline-block rounded-circle align-middle"
              alt=""
              loading="lazy"
            />
          </Route>
        </Switch>
        {/* <a href="/"> */}
        <span className="h3 ml-2 mb-0 align-middle">Broller</span>
        {/* </a> */}
      </div>
      <Switch>
        <Route exact path={["/me", "/login"]}>
          {null}
        </Route>
        <Route>
          {photo ? (
            <div>
              <Link className="btn btn-link text-primary" to="/me">
                профиль
              </Link>
              <Link to="/me">
                <img
                  src={photo}
                  width="40"
                  height="40"
                  className="navbar__profile-image d-inline-block rounded-circle align-middle shadow"
                  alt=""
                  loading="lazy"
                />
              </Link>
            </div>
          ) : null}
        </Route>
      </Switch>
    </nav>
  );
}
