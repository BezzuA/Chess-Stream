import data from "../data/data.json";
import { MouseEvent } from "react";

export default function replaceStream(
  event: MouseEvent<HTMLButtonElement>,
  index: number
) {
  const { url } = data.videoStreams[index];
  const buttonVideos = document.getElementsByClassName(
    "button-stream"
  ) as HTMLCollectionOf<HTMLElement>;

  if (url) {
    const iframe = document.getElementById(
      "streams"
    ) as HTMLIFrameElement | null;

    Array.from(buttonVideos).forEach((button, i) => {
      button.style.background = i === index ? "#6b7280" : "#111827";
    });

    if (iframe) {
      iframe.src =
        url.replace(
          "https://www.youtube.com/live/",
          "https://www.youtube.com/embed/"
        ) + "&rel=0";
    } else {
      console.error("Iframe not found");
    }
  } else {
    console.error("URL is undefined");
  }
}
