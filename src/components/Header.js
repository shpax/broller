import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-light shadow-sm bg-white">
      <a className="navbar-brand" href="/">
        <img
          src="/logo.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        Broller
      </a>
    </nav>
  );
}
