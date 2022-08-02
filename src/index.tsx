import React from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";

import { App } from "@/containers/App/";

import reset from "styled-reset";
import { normalize } from "styled-normalize";

const Global = createGlobalStyle`
  body {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
  }
  body.block_scroll{
    height: 100%;
    overflow: hidden;
  }
  * {
    box-sizing: border-box;
    font-family: "Roboto";
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
