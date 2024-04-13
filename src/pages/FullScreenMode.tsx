import React from "react";
import { MouseEvent, useState, useEffect } from "react";
import data from "../data.json";

import "./App.css";
import "swiper/css";

function autoPreview() {
  const iframeStreams = document.getElementById(
      "streams"
    ) as HTMLIFrameElement | null,
    iframeComments = document.getElementById(
      "comments"
    ) as HTMLIFrameElement | null;

  if (iframeStreams) {
    iframeStreams.src = data.videoStreams[0].url;
  }
  if (iframeComments) {
    iframeComments.src = data.videoComments[0].url;
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
      iframe.src = data.videoStreams[value].url;
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
      iframe.src = data.videoComments[value].url;
    }
  }
}

function viewMode() {
  const buttonStreams = document.getElementsByClassName(
      "button-stream"
    ) as HTMLCollectionOf<HTMLElement>,
    buttonComments = document.getElementsByClassName(
      "button-comment"
    ) as HTMLCollectionOf<HTMLElement>,
    buttonModes = document.getElementsByClassName(
      "button-mode"
    ) as HTMLCollectionOf<HTMLElement>,
    iframe = document.getElementsByTagName(
      "iframe"
    ) as HTMLCollectionOf<HTMLElement>;

  for (let i = 0; i < buttonStreams.length; i++) {
    buttonStreams[i].style.display = "none";
  }
  for (let i = 0; i < buttonComments.length; i++) {
    buttonComments[i].style.display = "none";
  }

  for (let i = 0; i < iframe.length; i++) {
    iframe[i].style.width = "1000px";
    iframe[i].style.height = "50vh";
    buttonStreams[i].style.display = "none";
  }

  for (let i = 0; i < buttonModes.length; i++) {
    buttonModes[i].textContent = "Go back";
  }
}

window.onload = () => {
  autoPreview();

  const buttonStreams = document.getElementsByClassName(
      "button-stream"
    ) as HTMLCollectionOf<HTMLElement>,
    buttonComments = document.getElementsByClassName(
      "button-comment"
    ) as HTMLCollectionOf<HTMLElement>;

  buttonStreams[0].style.background = "#6b7280";
  buttonComments[0].style.background = "#6b7280";
};

function FullScreenMode() {
  return (
    <div className="App">
      <body className="App-header">
        <div className="inline-block w-full h-full">
          <h1 className="title_underline">CHESS STREAM</h1>
          <button className="button button-mode" onClick={() => viewMode()}>
            Watch mode
          </button>
        </div>

        <div className="flex flex-wrap w-full mt-12 container-growth justify-evenly">
          <div className="flex flex-col gap-12 ">
            <iframe
              id="streams"
              width="650px"
              height="365px"
              src=""
              rel="0"
              data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="box1"
            ></iframe>

            <div className="flex flex-col w-full gap-2">
              {/* button div */}
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
          </div>

          <div className="flex flex-col gap-12 container-growth">
            <div>
              <iframe
                id="comments"
                width="650px"
                height="365px"
                rel="0"
                src=""
                data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="bg-button-main box2"
              ></iframe>
            </div>

            <div className="flex flex-col gap-2">
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
      </body>
    </div>
  );
}

export default FullScreenMode;
