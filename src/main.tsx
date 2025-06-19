import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  init,
  expandViewport,
  miniApp,
  viewport,
} from "@telegram-apps/sdk-react";
//import './mockEnv.ts';
const root = createRoot(document.getElementById("root")!);

const initializeTelegramSDK = async () => {
  try {
    init();

    void import("eruda").then(({ default: eruda }) => {
      eruda.init();
      eruda.position({ x: window.innerWidth - 50, y: 0 });
    });

    if (viewport.mount.isAvailable()) {
      viewport.mount();
    }

    if (viewport.expand.isAvailable()) {
      viewport.expand();
    }

    if (viewport.requestFullscreen.isAvailable()) {
      await viewport.requestFullscreen();
    }

    if (miniApp.mountSync.isAvailable()) {
        miniApp.mountSync();
    }

    if (miniApp.setHeaderColor.isAvailable()) {
      miniApp.setHeaderColor("#ebeff2");
    }

  } catch (error) {
    console.error("Ошибка инициализации:", error);
  }
};

initializeTelegramSDK().then(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
