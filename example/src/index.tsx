import "normalize.css";
import "@stackflow/ui/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import ReactDOMServer from "react-dom/server";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<App />);

// eslint-disable-next-line no-console
console.log(
  "Server-side Rendering Test",
  ReactDOMServer.renderToString(<App />),
);
