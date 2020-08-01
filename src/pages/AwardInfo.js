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
        <div className="col-12 col-lg-6 ">
          <div className="shadow-sm bg-white">
            <div>
              <img
                className="award__img rounded-top"
                alt="картинка ачивки"
                src={isOpened ? photo : "/logo.jpg"}
              />
            </div>
            <div className=" m-1 p-3 pt-0 ">
              <h1 className="text-center mb-3">{name}</h1>
              <p className="award__desc mb-0">{desc}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="mt-3 ">
            {video ? (
              <iframe
                // width="560"
                // height="315"
                title="виео пруф"
                className="award__video shadow-sm"
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
