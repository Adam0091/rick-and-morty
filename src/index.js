import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";

import App from "@containers/App/";

import reset from "styled-reset";
import { normalize } from "styled-normalize";

const Global = createGlobalStyle`
  box-sizing: border-box;
  ${reset};
  ${normalize};
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
