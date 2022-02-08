import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "../Education/Education";
import HomePage from "../HomePage/HomePage";

const Navigation = (props) => {
  return (
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<HomePage/> } />
              <Route path="/education" element={<Education/> } />
              <Route path="/experience" element={<HomePage/> } />
              <Route path="/projects" element={ <HomePage/>} />
              <Route path="/skills" element={ <HomePage/>} />
              <Route path="/contact" element={ <HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
