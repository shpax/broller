import React from "react";
import "./ArrowDots.css";
import { Dots } from "@brainhubeu/react-carousel";

function ArrowDots(props) {
  const { value, onChange, number } = props;
  const moveForward = () => {
    if (value < number - 1) {
      onChange(value + 1);
    }
  };

  const moveBackward = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  const backBtnClass =
    "material-icons arrow-dots__icon" + (value === 0 ? " disabled" : "");

  const forwBtnClass =
    "material-icons arrow-dots__icon" +
    (value >= number - 1 ? " disabled" : "");

  return (
    <div className="arrow-dots">
      <span className={backBtnClass} onClick={moveBackward}>
        arrow_back_ios
      </span>
      <Dots {...props} />
      <span className={forwBtnClass} onClick={moveForward}>
        arrow_forward_ios
      </span>
    </div>
  );
}

export default ArrowDots;
