import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Main from "./pages/Home";
import FullScreenMode from "./pages/FullScreenMode";

function RoutesMain() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/App" element={<App />}></Route>
        <Route path="/FullScreenMode" element={<FullScreenMode />}></Route>
      </Routes>
    </Router>
  );
}

export default RoutesMain;
