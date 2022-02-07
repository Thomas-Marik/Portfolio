import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<HomePage/> } />
              <Route path="/education" element={<HomePage/> } />
              <Route path="/experience" element={<HomePage/> } />
              <Route path="/projects" element={ <HomePage/>} />
              <Route path="/skills" element={ <HomePage/>} />
              <Route path="/contact" element={ <HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
