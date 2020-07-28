import React from "react";
import "./Achievement.css";

export default function Achievement({ name, isOpened }) {
  return (
    <div className="achievement">
      <div className="achievement__img achievement__img--closed"></div>
      <div className="achievement__name mt-2 text-center">{name}</div>
    </div>
  );
}
