import React, { useEffect } from "react";
import { useState } from "react";
import data from "C:/Users/Admin/chess-streams/src/data/data.json";
import { Allotment } from "allotment";
import Video from "../video";

import "./FullScreenMode.css";
import "allotment/dist/style.css";

export default function FullScreenMode(prop) {
  useEffect(() => {
    if (prop.type === "mobile") {
    } else {
    }
  }, [prop.type]);

  return (
    <>
      <div className="h-[90vh]">
        <Allotment id="allotmentView">
          <Allotment.Pane>
            <Video id="streams" src={prop.streams} />
          </Allotment.Pane>
          <Allotment.Pane>
            <Video id="comments" src={prop.comments} />
          </Allotment.Pane>
        </Allotment>
      </div>
    </>
  );
}

//
