import React from "react";
import { MouseEvent, useState } from "react";
import { Allotment } from "allotment";
import FullScreenMode from "./FullScreenMode";
import MobileScreenMode from "../pages/MobileScreenMode";
import Video from "../components/video";
import data from "../data/data.json";

import "./App.css";
import "./FullScreenMode.css";
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

function replaceStream(link: MouseEvent<HTMLButtonElement>, value: number) {
  const buttonVideos = document.getElementsByClassName(
    "button-stream"
  ) as HTMLCollectionOf<HTMLElement>;

  if (data.videoStreams[value].url !== undefined) {
    const iframe = document.getElementById(
      "streams"
    ) as HTMLIFrameElement | null;

    for (let i = 0; i < buttonVideos.length; i++) {
      buttonVideos[i].style.background = "#111827";
    }

    if (iframe) {
      iframe.src =
        data.videoStreams[value].url.replaceAll(
          "https://www.youtube.com/live/",
          "https://www.youtube.com/embed/"
        ) + "&rel=0";
      buttonVideos[value].style.background = "#6b7280";
    } else {
      console.error("Iframe not found");
    }
  } else {
    throw new Error("Item is undefined");
  }
}

function replaceComments(link: MouseEvent<HTMLButtonElement>, value: number) {
  const buttonVideos = document.getElementsByClassName(
    "button-comment"
  ) as HTMLCollectionOf<HTMLElement>;

  if (data.videoComments[value].url !== undefined) {
    const iframe = document.getElementById(
      "comments"
    ) as HTMLIFrameElement | null;

    for (let i = 0; i < buttonVideos.length; i++) {
      buttonVideos[i].style.background = "#111827";
      buttonVideos[value].style.background = "#6b7280";
    }

    if (iframe) {
      iframe.src =
        data.videoComments[value].url.replaceAll(
          "https://www.youtube.com/live/",
          "https://www.youtube.com/embed/"
        ) + "&rel=0";
    }
  }
}

window.onload = () => {
  autoPreview();
};

function Home() {
  const [isFullScreen, setisFullScreen] = useState(false);
  const [isMobileScreen, setisMobileScreen] = useState(false);

  const [videoDataStreams, setvideoDataStreams] = useState("");
  const [videoDataComments, setvideoDataComments] = useState("");

  function toMenu() {
    const streams = document.getElementById(
      "streams"
    ) as HTMLIFrameElement | null;
    const comments = document.getElementById(
        "comments"
      ) as HTMLIFrameElement | null,
      buttontoFullScreen = document.getElementsByClassName(
        "button-toFullScreen"
      ) as HTMLCollectionOf<HTMLElement>,
      buttontoMobileScreen = document.getElementsByClassName(
        "button-toMobileScreen"
      ) as HTMLCollectionOf<HTMLElement>;

    if (streams) {
      setvideoDataStreams(streams.src);
    }
    if (comments) {
      setvideoDataComments(comments.src);
    }

    buttontoMobileScreen[0].style.display = "block";
    buttontoFullScreen[0].style.display = "block";
    setisFullScreen(false);
    setisMobileScreen(false);
  }
  const previewToFullScreen = () => {
    const streams = document.getElementById(
      "streams"
    ) as HTMLIFrameElement | null;
    const comments = document.getElementById(
        "comments"
      ) as HTMLIFrameElement | null,
      buttontoMobileScreen = document.getElementsByClassName(
        "button-toMobileScreen"
      ) as HTMLCollectionOf<HTMLElement>;

    if (streams) {
      setvideoDataStreams(streams.src);
    }
    if (comments) {
      setvideoDataComments(comments.src);
    }

    buttontoMobileScreen[0].style.display = "none";
    setisFullScreen(true);
  };

  const previewToMobileScreen = () => {
    const streams = document.getElementById(
        "streams"
      ) as HTMLIFrameElement | null,
      buttontoFullScreen = document.getElementsByClassName(
        "button-toFullScreen"
      ) as HTMLCollectionOf<HTMLElement>;

    if (streams) {
      setvideoDataStreams(streams.src);
    }

    buttontoFullScreen[0].style.display = "none";
    setisMobileScreen(true);
  };

  return (
    <div className="home">
      <body>
        <div className="flex flex-wrap justify-between h-full">
          {!isFullScreen && !isMobileScreen ? (
            <div>
              <h1 className="title_underline">CHESS STREAM</h1>
            </div>
          ) : (
            ""
          )}

          <div className="inline-flex items-end gap-2 mb-4">
            <button
              className="button-outlined button-mode button-toFullScreen w-[20px] items-end"
              onClick={() => {
                !isFullScreen ? previewToFullScreen() : toMenu();
              }}
            >
              {!isFullScreen ? "Full Screen" : "Go back"}
            </button>
            <button
              className="button-outlined button-mode button-toMobileScreen"
              onClick={() => {
                !isMobileScreen ? previewToMobileScreen() : toMenu();
              }}
            >
              {!isMobileScreen ? "Mobile Screen" : "Go back"}
            </button>
          </div>
        </div>

        {isFullScreen ? (
          <FullScreenMode
            streams={videoDataStreams}
            comments={videoDataComments}
          />
        ) : isMobileScreen ? (
          <MobileScreenMode streams={videoDataStreams} />
        ) : (
          <div className="h-[100vh] videoPreview">
            <Allotment>
              <Video id="streams" src={videoDataStreams}></Video>
              <Video id="comments" src={videoDataComments} />
            </Allotment>

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
          </div>
        )}
      </body>
    </div>
  );
}

export default Home;
