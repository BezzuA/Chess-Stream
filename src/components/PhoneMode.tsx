import React from "react";
import Home from "../pages/Home";

function PhoneMode() {
  return (
    <>
      <div className="box-iframe w-[20vw] h-[95vh]">
        <iframe
          id="comments"
          rel="0"
          src="https://www.youtube.com/embed/nHNNr_AYzb4?si=M9Utn5Q2TZuyBNhF?autoplay=1"
          data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </>
  );
}

export default PhoneMode;
