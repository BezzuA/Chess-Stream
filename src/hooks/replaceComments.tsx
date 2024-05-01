import data from "../data/data.json";
import { MouseEvent } from "react";

export default function replaceComments(
  link: MouseEvent<HTMLButtonElement>,
  value: number
) {
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
      iframe.src =
        data.videoComments[value].url.replaceAll(
          "https://www.youtube.com/live/",
          "https://www.youtube.com/embed/"
        ) + "&rel=0";
    }
  }
}
