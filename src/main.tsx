import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from 'react-router-dom';

import { tsParticles } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all"; // ✅ use this instead
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask"; // optional if using polygon shapes

(async () => {
  await loadAll(tsParticles); // loads all features
  await loadPolygonMaskPlugin(tsParticles); // only needed if you're using polygon shapes/masks
})();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
