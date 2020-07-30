import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ returnTo, roller }) {
  const photo = (roller && roller.photo) || "/logo.jpg";
  return (
    <nav className="navbar navbar-light shadow-sm bg-white">
      <div className="navbar__header">
        {returnTo ? (
          <Link
            to={returnTo}
            className="navbar__return-btn align-middle text-center"
          >
            <span className="material-icons ">arrow_back</span>
          </Link>
        ) : (
          <img
            src={photo}
            width="40"
            height="40"
            className="d-inline-block rounded-circle align-middle"
            alt=""
            loading="lazy"
          />
        )}
        {/* <a href="/"> */}
        <span className="h3 ml-2 mb-0 align-middle font-weight-bold">
          Broller
        </span>
        {/* </a> */}
      </div>
    </nav>
  );
}
