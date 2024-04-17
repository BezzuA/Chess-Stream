import React from "react";
import { Allotment } from "allotment";
import Video from "../components/video";

import "./FullScreenMode.css";
import "allotment/dist/style.css";

export default function FullScreenMode(prop) {
  return (
    <>
      <div className="h-[90vh]">
        <Allotment>
          <Video id="streams" src={prop.streams} />
          <Video id="comments" src={prop.comments} />
        </Allotment>
      </div>
    </>
  );
}
