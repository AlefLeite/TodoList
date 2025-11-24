import ReactDOM from "react-dom/client";
import App from "./App";

const el = document.getElementById("root");

if (!el) throw new Error("Elemento root não encontrado");

const root = ReactDOM.createRoot(el as HTMLElement);

root.render(<App />);
