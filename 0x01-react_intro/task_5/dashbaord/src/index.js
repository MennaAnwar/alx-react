import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import Notifications from "./Notifications/Notifications";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Notifications />
    <App />
  </React.StrictMode>
);
