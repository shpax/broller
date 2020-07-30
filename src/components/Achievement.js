import React from "react";
import { Link } from "react-router-dom";
import "./Achievement.css";

export default function Achievement({ data }) {
  return (
    <div className="achievement">
      <Link to={`/awards/${data.id}`}>
        {data.isOpened ? (
          <div
            className="achievement__img rounded-circle shadow-sm"
            style={{ backgroundImage: `url('${data.photo}')` }}
          ></div>
        ) : (
          <div className="achievement__img rounded-circle achievement__img--closed shadow-sm"></div>
        )}
        <div className="achievement__name mt-2 text-center">{data.name}</div>
      </Link>
    </div>
  );
}
