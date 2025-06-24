// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// BrowserRouter ko import karo
import { BrowserRouter } from 'react-router-dom'; 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* App component ko BrowserRouter ke andar wrap karo */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);