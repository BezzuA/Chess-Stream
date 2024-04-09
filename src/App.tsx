import React from "react";
import { MouseEvent } from "react";
import "./App.css";

interface videoInfo {
  name: string;
  url: string;
}

let video: videoInfo[] = [
  {
    name: "Fabiano Caruana - Gukesh D",
    url: "https://www.youtube.com/embed/a0FUV2isNxo?si=xcviqHy02ARppG_y",
  },
  {
    name: "Praggnanandhaa R - Ian Nepomniachtchi",
    url: "https://www.youtube.com/embed/7c1ogSx3c30?si=BZO0Fhz7HR-GXL39",
  },
];

// let namesMap = new Map<number, string>([
//   [1, "https://www.youtube.com/embed/a0FUV2isNxo?si=xcviqHy02ARppG_y"],
//   [2, "https://www.youtube.com/embed/7c1ogSx3c30?si=BZO0Fhz7HR-GXL39"],
// ]);

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
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
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
            src="https://www.youtube.com/embed/bR4cZqUFgTw?si=sNMYMFgZnoP6w0KV"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </body>
    </div>
  );
}

export default App;
