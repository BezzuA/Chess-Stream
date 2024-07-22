import { useState, useRef, useEffect } from "react";
import SplitPane from "../components/SplitPane/SplitPane";
import replaceStream from "../hooks/replaceStream";
import replaceComments from "../hooks/replaceComments";
import data from "../data/data.json";
import "./Home.css";
import "allotment/dist/style.css";

function Home() {
  const [videoDataStreams, setvideoDataStreams] = useState("");
  const [videoDataComments, setvideoDataComments] = useState("");
  const typeVideo = useRef<string>(data.videoComments[0].type);
  const resizeIframe = useRef<any>();

  useEffect(() => {
    const autoPreview = () => {
      const iframeStreams = document.getElementById(
        "streams"
      ) as HTMLIFrameElement | null;
      const iframeComments = document.getElementById(
        "comments"
      ) as HTMLIFrameElement | null;
      const buttonStreams = document.getElementsByClassName(
        "button-stream"
      ) as HTMLCollectionOf<HTMLElement>;
      const buttonComments = document.getElementsByClassName(
        "button-comment"
      ) as HTMLCollectionOf<HTMLElement>;

      if (buttonStreams[0]) buttonStreams[0].style.background = "#6b7280";
      if (buttonComments[0]) buttonComments[0].style.background = "#6b7280";

      if (iframeStreams) {
        iframeStreams.src =
          data.videoStreams[0].url.replace(
            "https://www.youtube.com/live/",
            "https://www.youtube.com/embed/"
          ) + "&rel=0";
      }
      if (iframeComments) {
        iframeComments.src =
          data.videoComments[0].url.replace(
            "https://www.youtube.com/live/",
            "https://www.youtube.com/embed/"
          ) + "&rel=0";
      }
    };

    autoPreview();
  }, []);

  return (
    <div className="home">
      <div className="flex">
        <div>
          <img width="50" height="50" src="./knight.png" />
        </div>
        <h1>CHESS STREAM</h1>
      </div>
      <SplitPane
        streams={videoDataStreams}
        comments={videoDataComments}
        resizeIframe={resizeIframe}
        typeVideo={typeVideo}
      />

      {/* button for streams */}
      <div className="flex gap-4 my-6 flex-col-2">
        <div className="flex flex-col w-full gap-2 ">
          {data.videoStreams.map((video, index) => (
            <button
              key={video.id}
              className="button button-stream "
              id={`btn-${video.id}`}
              onClick={(e) => replaceStream(e, index)}
            >
              {video.name}
            </button>
          ))}
        </div>

        {/* button for video Comments */}
        <div className="flex flex-col w-full gap-2">
          {data.videoComments.map((video, index) => (
            <button
              key={video.id}
              className="button button-comment"
              id={`btn-${video.id}`}
              onClick={(e) => {
                replaceComments(e, index);
                resizeIframe.current.resize(
                  video.type === "mobile" ? [200, 100] : [200, 200]
                );
              }}
            >
              {video.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
