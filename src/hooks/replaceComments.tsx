import data from "../data/data.json";
import { MouseEvent } from "react";

export default function replaceComments(
  event: MouseEvent<HTMLButtonElement>,
  index: number
) {
  const { url } = data.videoComments[index];
  if (url) {
    const iframe = document.getElementById(
      "comments"
    ) as HTMLIFrameElement | null;
    const buttonVideos = document.getElementsByClassName(
      "button-comment"
    ) as HTMLCollectionOf<HTMLElement>;

    Array.from(buttonVideos).forEach((button, i) => {
      button.style.background = i === index ? "#6b7280" : "#111827";
    });

    if (iframe) {
      iframe.src =
        url.replace(
          "https://www.youtube.com/live/",
          "https://www.youtube.com/embed/"
        ) + "&rel=0";
    }
  }
}
