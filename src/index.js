import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage ";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MessagePage from "./pages/MessagePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/message" element={<MessagePage />} />
    </Routes>
  </BrowserRouter>
);
//Next objective: Create a register form connect with database
