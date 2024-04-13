import React from "react";
import { MouseEvent, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import data from "../data.json";

import "./FullScreenMode.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

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
  const buttonModes = document.getElementsByClassName(
      "button-mode"
    ) as HTMLCollectionOf<HTMLElement>,
    iframe = document.getElementsByTagName(
      "iframe"
    ) as HTMLCollectionOf<HTMLElement>;

  for (let i = 0; i < iframe.length; i++) {
    iframe[i].style.width = "1000px";
    iframe[i].style.height = "50vh";
  }

  for (let i = 0; i < buttonModes.length; i++) {
    buttonModes[i].textContent = "Go back";
  }
}

window.onload = () => {
  autoPreview();
};

function FullScreenMode() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div>
        <iframe
          id="streams"
          src=""
          rel="0"
          data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="box1"
        ></iframe>

        <iframe
          id="comments"
          rel="0"
          src=""
          data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="box2"
        ></iframe>
      </div>
      <div className="flex col-2 ScreenDiv"></div>
    </>
  );
}

export default FullScreenMode;
