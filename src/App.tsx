import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./pages/Home.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/App" element={<App />}></Route>
      </Routes>
    </>
  );
}

export default App;
