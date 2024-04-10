import React from "react";
import { MouseEvent } from "react";
import { google } from "googleapis";
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
    url: "https://www.youtube.com/embed/nVsPuldyXW8?si=2vnUdHtUwMsjQxR1&autoplay=1",
  },
  {
    id: 2,
    name: "Praggnanandhaa R - Nijat Abasov",
    url: "https://www.youtube.com/embed/02i-3yqiXIs?si=eVvsbc09yMwznWfL&autoplay=1",
  },
  {
    id: 3,
    name: "Vidit Gujrathi - Alireza Firouzja",
    url: "https://www.youtube.com/embed/3uSwcfHV1-s?si=zutS8k7dW9X3ViT1&autoplay=1",
  },
  {
    id: 4,
    name: "Gukesh D - Hikaru Nakamura",
    url: "https://www.youtube.com/embed/FAMSqtRsAts?si=AC2rfNntGw_PJ3KY&autoplay=1",
  },
];
let videoComments: videoInfo[] = [
  {
    id: 1,
    name: "Round 6 FIDE Candidates & Women's Candidates",
    url: "https://www.youtube.com/embed/_oeOXM7M6Y4?si=JVTxTLKEjlBllWph&autoplay=1",
  },
  {
    id: 2,
    name: "Crestbook Chess",
    url: "https://www.youtube.com/embed/z2WkJDcRqLc?si=GeJy_6Chooe5-RT9&autoplay=1",
  },
  {
    id: 3,
    name: "Levitov Chess",
    url: "https://www.youtube.com/embed/live_stream?channel=UC2LfLTCrohyJvUDl9-51RjQ&autoplay=1",
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
  if (videoStreams[value].url !== undefined) {
    const iframe = document.getElementById(
      "streams"
    ) as HTMLIFrameElement | null;
    if (iframe) {
      iframe.src = videoStreams[value].url;
    } else {
      console.error("Iframe not found");
    }
  } else {
    throw new Error("Item is undefined");
  }
}

function replaceComments(link: MouseEvent<HTMLButtonElement>, value: number) {
  if (videoComments[value].url !== undefined) {
    const iframe = document.getElementById(
      "comments"
    ) as HTMLIFrameElement | null;
    if (iframe) {
      iframe.src = videoComments[value].url;
    }
  }
}

function fullScreenVideos(
  link: MouseEvent<HTMLButtonElement>,
  status: boolean
) {
  if (status == true) {
  }
}

window.onload = () => {
  autoPreview();
};

function App() {
  return (
    <div className="App">
      <body className="App-header">
        <div className="inline-flex items-center justify-center gap-4 mt-8">
          <h1>CHESS STREAM</h1>
          <button
            id="buttonFullScreen"
            className="button"
            onClick={(e) => fullScreenVideos(e, true)}
          >
            Full screen
          </button>
        </div>

        <div className="flex flex-wrap w-full mt-12 justify-evenly">
          <div className="flex flex-col gap-12">
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

            <div className="flex flex-col gap-2">
              {videoStreams.map((video, index) => (
                <button
                  key={video.id} // Use unique id for key
                  className="button"
                  id={`btn-${video.id}`}
                  onClick={(e) => replaceStream(e, index)}
                >
                  {video.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-12">
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

            <div className="flex flex-col gap-2">
              {videoComments.map((video, index) => (
                <button
                  key={video.id} // Use unique id for key
                  className="button"
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
