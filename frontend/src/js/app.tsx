import * as React from "react";
import * as ReactDom from "react-dom";
import  {App} from "./app/App"
require("../styles/main.scss")

ReactDom.render(<App/>, document.getElementById("root"));