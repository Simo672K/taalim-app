import { useState } from "react";
import { FaPlay, FaStar } from "react-icons/fa";

function CardThumbnail({ introVid, thumbnailImg, lessonsNum, rating }) {
  const [showVideo, setShowVideo] = useState(false);

  const videoShowHandeler = () => {
    setShowVideo(true);
  };
  return (
    <figure className="relative h-44">
      {showVideo ? (
        <embed className="h-full w-full" src={introVid} />
      ) : (
        <>
          <img src={thumbnailImg} alt={thumbnailImg} />
          <div className="absolute flex items-end w-full text-white bottom-0 pb-8 left-0 px-4 bg-gradient-to-t from-gray-600 to-transparent">
            <div className="relative flex">
              <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-white opacity-75 z-0"></span>
              <button className="relative" onClick={videoShowHandeler}>
                <FaPlay />
              </button>
            </div>
            <div className="ms-auto flex flex-col items-end">
              <span className="text-orange-300 flex items-center">
                <FaStar className="me-1" />
                {rating}
              </span>
              <strong className="ms-auto">{lessonsNum} Lessons</strong>
            </div>
          </div>
        </>
      )}
    </figure>
  );
}

export default CardThumbnail;
