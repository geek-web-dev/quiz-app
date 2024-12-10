import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppContextProvider } from "./contexts/AppContext.tsx";
import AppRouter from "./router/index.tsx";
import { SettnigsContextProvider } from "./contexts/SettingsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <SettnigsContextProvider>
        <AppRouter />
      </SettnigsContextProvider>
    </AppContextProvider>
  </StrictMode>
);
