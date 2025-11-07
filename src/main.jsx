import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Lobby from "./pages/Lobby";
import Mesa from "./pages/Mesa";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="lobby" element={<Lobby />} />
          <Route path="mesa" element={<Mesa />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
