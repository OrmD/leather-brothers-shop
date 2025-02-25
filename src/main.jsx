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
import { Categories } from "./pages/Categories.jsx";
import { Blogs } from "./pages/Blogs.jsx";
import { Mission } from "./pages/Mission.jsx";
import { Stories } from "./pages/Stories.jsx";
import HeaderComponent from "./components/Header/Header.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/LabelSDS" element={<LabelSDS />} />
        <Route path="/News" element={<News />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Stories" element={<Stories />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
