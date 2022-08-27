import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import "./App.scss";

import bg1 from "../../image/bg-1.jpg";
import bg2 from "../../image/bg-2.png";
import bg3 from "../../image/bg-3.png";
import bg4 from "../../image/bg-4.png";
import bg5 from "../../image/bg-5.png";
import bg6 from "../../image/lucas-y-yo.jpeg";

import "../../index.css";
import Home from "../Home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navb } from "../Nav/Nav";

export default function App() {
  return (
    <Router>
      <Navb />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={"NotFound"} />
    </Routes>
  </Router>
  );
}
