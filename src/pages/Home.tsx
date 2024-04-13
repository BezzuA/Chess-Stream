import React from "react";
import { MouseEvent, useState, useEffect, createContext } from "react";
import PhoneMode from "../components/PhoneMode";
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
    iframeStreams.src = data.videoStreams[0].url + "&rel=0";
  }
  if (iframeComments) {
    iframeComments.src = data.videoComments[0].url + "&rel=0";
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
      iframe.src = data.videoStreams[value].url + "&rel=0";
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
      iframe.src = data.videoComments[value].url + "&rel=0";
    }
  }
}

function phoneStreamMode() {
  const buttonStreams = document.getElementsByClassName(
      "button-stream"
    ) as HTMLCollectionOf<HTMLElement>,
    buttonComments = document.getElementsByClassName(
      "button-comment"
    ) as HTMLCollectionOf<HTMLElement>,
    boxComments = document.getElementById(
      "box-comments"
    ) as HTMLIFrameElement | null,
    boxPreview = document.getElementsByTagName(
      "box-preview"
    ) as HTMLCollectionOf<HTMLElement>,
    boxIframe = document.getElementsByClassName(
      "box-iframe"
    ) as HTMLCollectionOf<HTMLElement>,
    boxColumn = document.getElementsByClassName(
      "box-column"
    ) as HTMLCollectionOf<HTMLElement>;

  for (let i = 0; i < buttonStreams.length; i++) {
    buttonStreams[i].style.display = "none";
  }
  for (let i = 0; i < buttonComments.length; i++) {
    buttonComments[i].style.display = "none";
  }
  for (let i = 0; i < boxIframe.length; i++) {
    boxIframe[i].style.width = "90wh";
    boxIframe[i].style.height = "95vh";
  }
  for (let i = 0; i < boxColumn.length; i++) {
    boxColumn[i].style.gap = "0px";
  }
  for (let i = 0; i < boxPreview.length; i++) {
    boxPreview[i].style.justifyContent = "flex-start";
  }

  if (boxComments) {
    boxComments.style.display = "none";
  }

  document.getElementsByTagName("h1")[0].style.display = "none";
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
    ) as HTMLCollectionOf<HTMLElement>,
    boxIframe = document.getElementsByClassName(
      "box-iframe"
    ) as HTMLCollectionOf<HTMLElement>,
    boxColumn = document.getElementsByClassName(
      "box-column"
    ) as HTMLCollectionOf<HTMLElement>,
    boxPreview = document.getElementsByClassName(
      "box-preview"
    ) as HTMLCollectionOf<HTMLElement>;

  for (let i = 0; i < buttonStreams.length; i++) {
    buttonStreams[i].style.display = "none";
  }
  for (let i = 0; i < buttonComments.length; i++) {
    buttonComments[i].style.display = "none";
  }

  for (let i = 0; i < boxIframe.length; i++) {
    boxIframe[i].style.width = "50svw";
    boxIframe[i].style.height = "90vh";
  }

  for (let i = 0; i < boxColumn.length; i++) {
    boxColumn[i].style.gap = "0px";
    boxColumn[i].style.flexWrap = "nowrap ";
  }

  boxPreview[0].style.flexWrap = "nowrap ";
  document.getElementsByTagName("h1")[0].style.display = "none";
}

window.onload = () => {
  autoPreview();

  const buttonStreams = document.getElementsByClassName(
      "button-stream"
    ) as HTMLCollectionOf<HTMLElement>,
    buttonComments = document.getElementsByClassName(
      "button-comment"
    ) as HTMLCollectionOf<HTMLElement>,
    boxPreview = document.getElementsByTagName(
      "box-preview"
    ) as HTMLCollectionOf<HTMLElement>;

  boxPreview[0].style.justifyContent = "evenly";
  buttonStreams[0].style.background = "#6b7280";
  buttonComments[0].style.background = "#6b7280";
};

function Home() {
  const [open, setOpen] = useState(false);
  const onClickHandle = () => {
    setOpen(true);
    phoneStreamMode();
  };

  return (
    <div className="App">
      <body className="App-header">
        <div className="inline-block w-full h-full">
          <h1 className="title_underline">CHESS STREAM</h1>
          <div className="inline-flex gap-4">
            <button className="button button-mode" onClick={() => viewMode()}>
              Full screen mode
            </button>
            <button className="button button-mode" onClick={onClickHandle}>
              Phone stream
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center w-full gap-2 mt-12 container-growth box-preview">
          {open && <PhoneMode />}
          <div className="flex flex-col gap-12 box-column">
            <div className="box-iframe w-[48vw] h-[365px]">
              <iframe
                id="streams"
                src=""
                rel="0"
                data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="flex flex-col w-full gap-2 ">
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

          <div
            id="box-comments"
            className="flex flex-col gap-12 container-growth "
          >
            <div className="box-iframe w-[48vw] h-[365px]">
              <iframe
                id="comments"
                rel="0"
                src=""
                data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
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

export default Home;

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
