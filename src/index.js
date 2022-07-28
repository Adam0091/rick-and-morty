import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";

import App from "@containers/App/";

import reset from "styled-reset";
import { normalize } from "styled-normalize";

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap');

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
