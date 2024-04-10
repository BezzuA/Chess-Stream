import React from "react";
import { MouseEvent } from "react";
import "./App.css";

interface videoInfo {
  name: string;
  url: string;
}

let video: videoInfo[] = [
  {
    name: "Round 5 | Gukesh D - Nijat Abasov | FIDE Candidates 2024",
    url: "https://www.youtube.com/embed/a0FUV2isNxo?si=xcviqHy02ARppG_y",
  },
  {
    name: "Praggnanandhaa R - Ian Nepomniachtchi",
    url: "https://www.youtube.com/embed/7c1ogSx3c30?si=BZO0Fhz7HR-GXL39",
  },
];

function replaceSrc(link: MouseEvent<HTMLButtonElement>, value: number) {
  var srcName = video[value].url;

  if (srcName !== undefined) {
    const iframe = document.getElementById(
      "fideVideo"
    ) as HTMLIFrameElement | null;
    if (iframe) {
      iframe.src = srcName;
    } else {
      console.error("Iframe not found");
    }
  } else {
    throw new Error("Item is undefined");
  }
}

var channelID = "UC9B47GnzCRFHTT1BIBWvStQ";
var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";

function App() {
  return (
    <div className="App">
      <body className="App-header">
        <h1>CHESS STREAM</h1>
        <div className="flex flex-wrap w-full justify-evenly">
          <div className="flex flex-col gap-12">
            <iframe
              id="fideVideo"
              width="650px"
              height="365px"
              src=""
              data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="bg-button-main"
            ></iframe>

            <div className="flex flex-col gap-2">
              <button
                className="button"
                id="btn-models"
                onClick={(e) => replaceSrc(e, 0)}
              >
                {video[0].name}
              </button>
              <button
                className="button"
                id="btn-models"
                onClick={(e) => replaceSrc(e, 1)}
              >
                {video[1].name}
              </button>
            </div>
          </div>

          <iframe
            width="650px"
            height="365px"
            src="https://www.youtube.com/embed/ocO_lsTiB8Y?si=WFR8eQE9fs6qRqVm"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-12">
          <h2>Upcoming</h2>
          <div className="flex flex-row gap-4">
            <iframe
              width="400px"
              height="225px"
              src="https://www.youtube.com/embed/live_stream?channel=UC9B47GnzCRFHTT1BIBWvStQ"
            ></iframe>
            <iframe
              width="400px"
              height="225px"
              src="https://www.youtube.com/embed/live_stream?channel=UC9B47GnzCRFHTT1BIBWvStQ"
            ></iframe>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;

//UC9B47GnzCRFHTT1BIBWvStQ
//UC9B47GnzCRFHTT1BIBWvStQ
