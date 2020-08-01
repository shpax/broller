import React from "react";
import { Link } from "react-router-dom";
import "./Achievement.css";

export default function Achievement({ data }) {
  const photo = data.isOpened ? data.photo : "/logo.jpg";
  return (
    <div className="achievement">
      <Link to={`/awards/${data.id}`}>
        <div
          className="achievement__img rounded-circle shadow-sm"
          style={{ backgroundImage: `url('${photo}')` }}
        ></div>
        <div className="text-size-secondary mt-2 text-center">{data.name}</div>
      </Link>
    </div>
  );
}
