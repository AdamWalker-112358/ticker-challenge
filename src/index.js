import * as ReactDOMClient from "react-dom/client";
import App from "./view/App";
import ResetCSS from "./styles/reset.styles";

const container = document.querySelector("#root");
const root = ReactDOMClient.createRoot(container);
root.render(
  <>
    <ResetCSS />
    <App />
  </>
);
