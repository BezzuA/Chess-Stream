import React from "react";
import { MouseEvent, useState, useEffect } from "react";
import data from "./data.json";
import "./App.css";

interface videoInfo {
  id: number;
  name: string;
  url: string;
}

let videoStreams: videoInfo[] = [
  {
    id: 1,
    name: "Ian Nepomniachtchi - Fabiano Caruana",
    url: "https://www.youtube.com/embed/nVsPuldyXW8?si=2vnUdHtUwMsjQxR1",
  },
  {
    id: 2,
    name: "Praggnanandhaa R - Nijat Abasov",
    url: "https://www.youtube.com/embed/02i-3yqiXIs?si=eVvsbc09yMwznWfL",
  },
  {
    id: 3,
    name: "Vidit Gujrathi - Alireza Firouzja",
    url: "https://www.youtube.com/embed/3uSwcfHV1-s?si=zutS8k7dW9X3ViT1",
  },
  {
    id: 4,
    name: "Gukesh D - Hikaru Nakamura",
    url: "https://www.youtube.com/embed/FAMSqtRsAts?si=AC2rfNntGw_PJ3KY",
  },
];
let videoComments: videoInfo[] = [
  {
    id: 1,
    name: "Round 7 FIDE Candidates & Women's Candidates",
    url: "https://www.youtube.com/embed/_JciE2QgVck?si=6-GUUf4FDhddoeVg",
  },
  {
    id: 2,
    name: "Crestbook Chess",
    url: "https://www.youtube.com/embed/z2WkJDcRqLc?si=GeJy_6Chooe5-RT9",
  },
  {
    id: 3,
    name: "Levitov Chess",
    url: "https://www.youtube.com/embed/live_stream?channel=UC2LfLTCrohyJvUDl9-51RjQ",
  },
];

function autoPreview() {
  const iframeStreams = document.getElementById(
    "streams"
  ) as HTMLIFrameElement | null;
  const iframeComments = document.getElementById(
    "comments"
  ) as HTMLIFrameElement | null;
  if (iframeStreams) {
    iframeStreams.src = videoStreams[0].url;
  }
  if (iframeComments) {
    iframeComments.src = videoComments[0].url;
  }
}

function replaceStream(link: MouseEvent<HTMLButtonElement>, value: number) {
  const buttonVideos = document.getElementsByClassName(
    "button-stream"
  ) as HTMLCollectionOf<HTMLElement>;

  if (videoStreams[value].url !== undefined) {
    const iframe = document.getElementById(
      "streams"
    ) as HTMLIFrameElement | null;

    for (let i = 0; i < buttonVideos.length; i++) {
      buttonVideos[i].style.background = "#111827";
    }

    if (iframe) {
      iframe.src = videoStreams[value].url;
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

  if (videoComments[value].url !== undefined) {
    const iframe = document.getElementById(
      "comments"
    ) as HTMLIFrameElement | null;

    for (let i = 0; i < buttonVideos.length; i++) {
      buttonVideos[i].style.background = "#111827";
      buttonVideos[value].style.background = "#6b7280";
    }

    if (iframe) {
      iframe.src = videoComments[value].url;
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
    iframe[i].style.height = "450px";
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

function App() {
  return (
    <div className="App">
      <body className="App-header">
        <div className="inline-block w-full h-full">
          <h1 className="title_underline">CHESS STREAM</h1>
          <button className="button button-mode" onClick={() => viewMode()}>
            Screen mode
          </button>
        </div>

        <div className="flex flex-wrap w-full mt-12 justify-evenly">
          <div className="flex flex-col gap-12">
            <div>
              <iframe
                id="streams"
                width="650px"
                height="365px"
                src=""
                rel="0"
                data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="bg-button-main"
              ></iframe>
            </div>

            <div className="flex flex-col gap-2">
              {/* button div */}
              {videoStreams.map((video, index) => (
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

          <div className="flex flex-col gap-12">
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
                className="bg-button-main"
              ></iframe>
            </div>

            <div className="flex flex-col gap-2">
              {videoComments.map((video, index) => (
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

        {/* test section */}
      </body>
    </div>
  );
}

export default App;

//UC9B47GnzCRFHTT1BIBWvStQ

{
  /* <div onClick={() => setIsActive(!isActive)}>
              <h2 className="cursor-pointer">FIDE Chess</h2>
              {isActive && (
                <div className="flex flex-col gap-2">
                  {videoStreams.map((video, index) => (
                    <button
                      key={video.id}
                      className="button button-videos"
                      id={`btn-${video.id}`}
                      onClick={(e) => replaceStream(e, index)}
                    >
                      {video.name}
                    </button>
                  ))}
                </div>
              )}
            </div> */
}
