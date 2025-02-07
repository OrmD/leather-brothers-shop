import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { AboutUs } from "./pages/AboutUs.jsx";
import { Products } from "./pages/Products.jsx";
import { LabelSDS } from "./pages/LabelSDS.jsx";
import { News } from "./pages/News.jsx";
import { Contacts } from "./pages/Contats.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/LabelSDS" element={<LabelSDS />} />
        <Route path="/News" element={<News />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
