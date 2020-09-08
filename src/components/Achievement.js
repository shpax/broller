import React from "react";
import { Link } from "react-router-dom";
import "./Achievement.css";

export default function Achievement({ data, image }) {
  return (
    <div className="achievement mb-3">
      <Link to={`/awards/${data.id}`}>
        <img
          className="achievement__img rounded-circle shadow"
          src={image}
          alt="картинка ачивки"
        />
        <div className="text-size-secondary mt-2 text-center">{data.name}</div>
      </Link>
    </div>
  );
}
