import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FullScreenMode from "./pages/FullScreenMode";
import "./pages/App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/App" element={<App />}></Route>
        <Route path="/fullscreenmode" element={<FullScreenMode />}></Route>
      </Routes>
    </>
  );
}

export default App;
