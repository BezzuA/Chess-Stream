import React from "react";
import { Allotment } from "allotment";
import Video from "../components/video";
import data from "../data/data.json";

import "./FullScreenMode.css";
import "allotment/dist/style.css";

export default function MobileScreenMode(prop) {
  return (
    <>
      <div className="h-[90vh]">
        <Allotment defaultSizes={[200, 100]}>
          <Video id="streams" src={prop.streams} />
          <Video id="comments" src={data.videoMobileComments[0].url} />
        </Allotment>
      </div>
    </>
  );
}
