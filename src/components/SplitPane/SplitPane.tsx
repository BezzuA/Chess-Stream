import data from "C:/Users/Admin/chess-streams/src/data/data.json";
import { Allotment } from "allotment";
import Video from "../video";

import "./SplitPane.css";
import "allotment/dist/style.css";

export default function FullScreenMode(prop) {
  return (
    <>
      <div className="h-[90vh]">
        <Allotment id="allotmentView" ref={prop.resizeIframe}>
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
