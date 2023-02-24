import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Increment } from "./components/Increment";
import "./index.css";

const el = document.getElementById("root");
const incrementbutton = document.getElementById("increment");


ReactDOM.render(<App />, el);

ReactDOM.render(<Increment />, incrementbutton);

