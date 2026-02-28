import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter basename={import.meta.env.BASE_URL}>
=======
        <BrowserRouter basename={import.meta.env.BASE_URL}>
>>>>>>> 24f0e457c930c1f15c2057b37169075106697bba
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
