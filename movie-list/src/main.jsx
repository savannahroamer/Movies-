import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import MovieApplication from "./components/MovieApplication";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieApplication />
  </React.StrictMode>,
);
