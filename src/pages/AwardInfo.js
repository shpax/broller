import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "@brainhubeu/react-carousel";
import ArrowDots from "../components/ArrowDots";
import "./AwardInfo.css";

function AwardInfo({ getAward, getLevel }) {
  const { id } = useParams();

  const { isOpened, name, desc, rollerVideo, videos, levelId } = getAward(id);
  const lvl = getLevel(levelId);
  const picture = isOpened ? lvl.awardOpenedPicture : lvl.awardClosedPicture;

  const videosRef = useRef({});
  const [carouselPos, setCarouselPos] = useState(0);

  const descHtml = desc
    .split("\n")
    .map((str) => <p className="award__desc mb-0">{str}</p>);

  const items = [rollerVideo, ...videos]
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
          url.replace(/youtu\.be\/([\w-]+)/, "youtube.com/embed/$1?") +
          "showInfo=0&enablejsapi=0&origin=" +
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
        <div className="col-12">
          <div className="shadow-sm bg-white">
            <div>
              <img
                className="award__img rounded-top"
                alt="картинка ачивки"
                src={picture}
              />
            </div>
            <h2 className="text-center mb-0 pt-3">{name}</h2>
            <div className="p-4">{descHtml}</div>
          </div>
        </div>
        {items.length ? (
          <>
            <div className="col-12 mb-1">
              <div className="pt-2">
                <div className="text-center p-2 dots-container">
                  <div className="text-center h5 dots-container__hint mb-0 mr-4">
                    Видео
                  </div>
                  {items.length > 1 ? (
                    <ArrowDots
                      value={carouselPos}
                      onChange={setCarouselPos}
                      number={items.length}
                    />
                  ) : null}
                </div>
                <Carousel
                  ref={videosRef}
                  className="awards__levels shadow-sm"
                  draggable={false}
                  value={carouselPos}
                  onChange={setCarouselPos}
                >
                  {items}
                </Carousel>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default AwardInfo;
