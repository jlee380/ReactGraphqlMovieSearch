import React from "react";
import App from "./components/App";

import { render } from 'react-dom';



const Root = () => (
    <App />
);

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  html: {
    margin: "8px",
    maxWidth: "600px"
  },
  body: {
    margin: "8px",
    maxWidth: "600px"
  }
};


render(<Root />, document.getElementById("root"));
