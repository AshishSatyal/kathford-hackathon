import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ourteam from "./pages/Ourteam.jsx";
import Layout from "./components/Layout.jsx";

// import { Route, Routes, BrowserRouter } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route element={<Layout />}>
          <Route path='/our-team' element={<Ourteam />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
