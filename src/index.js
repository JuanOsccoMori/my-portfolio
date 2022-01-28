import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

render(
    <StrictMode>
        <App/>
    </StrictMode>,
    document.querySelector("#root")
);