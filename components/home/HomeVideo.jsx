import React from "react";
import ReactPlayer from "react-player";
import { cleanImage } from "../imageHandling";

const HomeVideo = ({ video }) => {
  // console.log('video',video)
  return (
    <>
      {video && (
        <section className="home_video">
          <div className="w-full h-full">
            <ReactPlayer
              url={cleanImage(video?.data?.attributes?.url)}
              playing={true}
              loop={true}
              muted={true}
              controls={false}
              width="100%"
              height="100%"
              playsinline={true}
              playbackRate={1}
              className="react-player"
            />
          </div>
        </section>
      )}
    </>
  );
};

export default HomeVideo;
