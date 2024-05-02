import React, { useRef } from "react";
import { useState } from "react";
import FullScreenMode from "../components/FullScreen/FullScreenMode";
import replaceStream from "../hooks/replaceStream";
import replaceComments from "../hooks/replaceComments";
import data from "../data/data.json";

import "./App.css";
import "allotment/dist/style.css";

function autoPreview() {
  const iframeStreams = document.getElementById(
      "streams"
    ) as HTMLIFrameElement | null,
    iframeComments = document.getElementById(
      "comments"
    ) as HTMLIFrameElement | null;
  const buttonStreams = document.getElementsByClassName(
      "button-stream"
    ) as HTMLCollectionOf<HTMLElement>,
    buttonComments = document.getElementsByClassName(
      "button-comment"
    ) as HTMLCollectionOf<HTMLElement>;

  buttonStreams[0].style.background = "#6b7280";
  buttonComments[0].style.background = "#6b7280";

  if (iframeStreams) {
    iframeStreams.src =
      data.videoStreams[0].url.replaceAll(
        "https://www.youtube.com/live/",
        "https://www.youtube.com/embed/"
      ) + "&rel=0";
  }
  if (iframeComments) {
    iframeComments.src =
      data.videoComments[0].url.replaceAll(
        "https://www.youtube.com/live/",
        "https://www.youtube.com/embed/"
      ) + "&rel=0";
  }
}

window.onload = () => {
  autoPreview();
};

function Home() {
  const [videoDataStreams, setvideoDataStreams] = useState("");
  const [videoDataComments, setvideoDataComments] = useState("");
  const [iframePreview, setiframePreview] = useState("");

  return (
    <div className="home">
      <body>
        <div className="flex">
          <div>
            <h1>CHESS STREAM</h1>
          </div>
        </div>

        <FullScreenMode
          streams={videoDataStreams}
          comments={videoDataComments}
          sizes={iframePreview}
        />

        <div className="flex gap-4 my-6 flex-col-2">
          <div className="flex flex-col w-full gap-2 ">
            {data.videoStreams.map((video, index) => (
              <button
                key={video.id}
                className="button button-stream "
                id={`btn-${video.id}`}
                onClick={(e) => replaceStream(e, index)}
              >
                {video.name}
              </button>
            ))}
          </div>
          <div className="flex flex-col w-full gap-2">
            {data.videoComments.map((video, index) => (
              <button
                key={video.id}
                className="button button-comment"
                id={`btn-${video.id}`}
                onClick={(e) => replaceComments(e, index)}
              >
                {video.name}
              </button>
            ))}
          </div>
        </div>
      </body>
    </div>
  );
}

export default Home;
