import data from "../data/data.json";
import { MouseEvent } from "react";

export default function replaceStream(
  link: MouseEvent<HTMLButtonElement>,
  value: number
) {
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
