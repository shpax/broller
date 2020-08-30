import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "./AwardInfo.css";

function AwardInfo({ getAward, getLevel }) {
  const { id } = useParams();

  const { isOpened, name, desc, awardVideo, videos, levelId } = getAward(id);
  const lvl = getLevel(levelId);
  const picture = isOpened ? lvl.awardOpenedPicture : lvl.awardClosedPicture;

  const videosRef = useRef({});
  const [carouselPos, setCarouselPos] = useState(0);

  const items = [awardVideo, ...videos]
    .filter((url) => !!url)
    .map((url, i) => (
      <iframe
        // width="560"
        // height="315"
        key={i}
        title="видео пруф"
        className="award__video shadow-sm"
        // src="https://www.youtube.com/embed/bb5iBYgJV4o"
        src={
          url.replace(/watch\?v=(\w+)/, "embed/$1?") +
          "&showInfo=0&controls=0&enablejsapi=0&origin=" +
          encodeURIComponent(global.location.origin)
        }
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ));
  return (
    <div className="container mt-3 award">
      <div className="row">
        <div className="col-12 col-lg-6 ">
          <div className="shadow-sm bg-white">
            <div className="pt-3">
              <img
                className="award__img rounded-top"
                alt="картинка ачивки"
                src={picture}
              />
            </div>
            <h2 className="text-center mb-3 pt-3">{name}</h2>
            <div className="p-3 pt-0 ">
              <p className="award__desc mb-0">{desc}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="">
            <div className="text-center p-2">
              <Dots
                value={carouselPos}
                onChange={setCarouselPos}
                number={items.length}
              />
            </div>
            <Carousel
              ref={videosRef}
              className="awards__levels shadow-sm"
              value={carouselPos}
              onChange={setCarouselPos}
            >
              {items}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardInfo;
