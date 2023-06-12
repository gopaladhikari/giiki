import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import CaseStudy from "./Pages/CaseStudy";
import Product from "./Pages/Product";
import Layout from "./Components/Layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="case-studies" element={<CaseStudy />} />
          <Route path="products" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
