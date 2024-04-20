import React from "react";

function Video(props) {
  return (
    <iframe
      id={props.id}
      src={props.src.replaceAll(
        "https://www.youtube.com/live/",
        "https://www.youtube.com/embed/"
      )}
      rel="0"
      data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  );
}

export default Video;
