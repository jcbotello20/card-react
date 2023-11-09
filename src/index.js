import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Titulo from "./newTittle";
import App from "./App";
import Card from "./Card";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Titulo />
    <Card />
  </StrictMode>
);
