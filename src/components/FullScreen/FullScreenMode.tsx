import React from "react";
import data from "C:/Users/Admin/chess-streams/src/data/data.json";
import { Allotment } from "allotment";
import Video from "../video";

import "./FullScreenMode.css";
import "allotment/dist/style.css";

export default function FullScreenMode(prop) {
  return (
    <>
      <div className="h-[90vh]">
        <Allotment
          id="allotmentView"
          defaultSizes={prop.sizes === "mobile" ? [200, 200] : [200, 100]}
        >
          <Video id="streams" src={prop.streams} />
          <Video id="comments" src={prop.comments} />
        </Allotment>
      </div>
    </>
  );
}
