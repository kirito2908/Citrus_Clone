import ReactDOM from "react-dom/client";
import React from "react";
import Home from "./Components/Home";
import Collection from "./Components/Collection";
import Shop from "./Components/Shop";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import FAQs from "./Components/FAQs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/FAQs" element={<FAQs />} />
      </Routes>
    </BrowserRouter>
  </>
);
