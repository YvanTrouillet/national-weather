import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/reset.css";
import App from "./components/App/App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
