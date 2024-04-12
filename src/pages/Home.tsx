import React from "react";
import { MouseEvent, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "./App.css";
import "swiper/css";

interface videoInfo {
  id: number;
  name: string;
  url: string;
}

let videoStreams: videoInfo[] = [
  {
    id: 1,
    name: "Fabiano Caruana - Praggnanandhaa R",
    url: "https://www.youtube.com/embed/_np7znoyPN8?si=jbkCL4hRyT2cM2xh",
  },
  {
    id: 2,
    name: "Alireza Firouzja - Gukesh D",
    url: "https://www.youtube.com/embed/bpa0CJ_rZKE?si=ST8KvQnpvRk_xVN9",
  },
  {
    id: 3,
    name: "Nijat Abasov - Vidit Gujrathi",
    url: "https://www.youtube.com/embed/fTjaCPHzK0k?si=Q_CoE-x2jfaFJYaG",
  },
  {
    id: 4,
    name: "Hikaru Nakamura- Ian Nepomniachtchi",
    url: "https://www.youtube.com/embed/sF-W6Gh3KPw?si=lFwp7ujPf_KiCl3c",
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
    url: "https://www.youtube.com/embed/mNg3QtGTjQY",
  },
  {
    id: 3,
    name: "Levitov Chess",
    url: "https://www.youtube.com/embed/axaCtKW3Rno?si=aDweTTP6CRPzrWmU",
  },
];

function autoPreview() {
  const iframeStreams = document.getElementById(
      "streams"
    ) as HTMLIFrameElement | null,
    iframeComments = document.getElementById(
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

function Home() {
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
