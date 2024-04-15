import React from "react";
import { MouseEvent, useRef, useState } from "react";
import { Allotment } from "allotment";
import Home from "../pages/Home";
import Video from "../components/video";
import data from "../data.json";

import "./FullScreenMode.css";
import "allotment/dist/style.css";

function FullScreenMode() {
  return (
    <>
      <div className="h-[95vh]">
        <Allotment>
          <Video id="streams" />
          <Video id="comments" />
        </Allotment>
      </div>
    </>
  );
}

export default FullScreenMode;
