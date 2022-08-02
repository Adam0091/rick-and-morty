import React from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";

import App from "@/containers/App/";

import reset from "styled-reset";
import { normalize } from "styled-normalize";

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${reset};
  ${normalize};
`;

const container = document.getElementById("root");

if (!container) {
  throw "Can't instantiate";
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
