import React from "react";
import { useParams } from "react-router-dom";
import "./AwardInfo.css";
function AwardInfo({ getAward }) {
  const { id } = useParams();

  const { photo, isOpened, name, desc, video } = getAward(id);

  console.log(id, getAward(id));
  return (
    <div className="container mt-3 award">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="bg-white m-1 p-3 shadow-sm rounded">
            <div>
              <img
                className="award__img rounded"
                alt="картинка ачивки"
                src={isOpened ? photo : "/ach_closed.png"}
              />
            </div>
            <h1 className="text-center">{name}</h1>
            <p className="award__desc">{desc}</p>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="m-1 mt-3 ">
            {video ? (
              <iframe
                // width="560"
                // height="315"
                title="виео пруф"
                className="award__video"
                // src="https://www.youtube.com/embed/bb5iBYgJV4o"
                src={video.replace(/watch\?v=/, "embed/")}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardInfo;
