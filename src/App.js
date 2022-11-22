import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Reformas from "./pages/Reformas";
import CasasEco from "./pages/CasasEco";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Reformas" element={<Reformas />} />
            <Route path="CasasEco" element={<CasasEco />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
