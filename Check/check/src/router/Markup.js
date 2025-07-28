import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../homepage/Body";
import About from "./About";
import Layout from "../Component/Layout";
import Contact from "./Contact";

export default function Markup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
