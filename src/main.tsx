import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  init,
  miniApp,
 // setDebug,
  viewport
} from "@telegram-apps/sdk-react";
//import './mockEnv.ts';
const root = createRoot(document.getElementById("root")!);

const initializeTelegramSDK = async () => {
  try {
    init();
   // setDebug(true)
    void import("eruda").then(({ default: eruda }) => {
      eruda.init();
      eruda.position({ x: window.innerWidth - 50, y: 100 });
    });

    if (viewport.mount.isAvailable()) {
      await viewport.mount();
      viewport.expand();
    }


    if (viewport.requestFullscreen.isAvailable()) {
      await viewport.requestFullscreen();
    }

    if (miniApp.mountSync.isAvailable()) {
      miniApp.mountSync();
    }

    if (miniApp.setHeaderColor.isAvailable()) {
      miniApp.setHeaderColor("#f8f5f6");
    }

    // if(miniApp.setBottomBarColor.isAvailable()){
    //   miniApp.setBottomBarColor("#f8f5f6");
    // }

    if(miniApp.setBackgroundColor.isAvailable()){
      miniApp.setBackgroundColor("#f8f5f6");
    }

  } catch (error) {
    console.error("Ошибка инициализации:", JSON.stringify(error));
  }
};

initializeTelegramSDK().then(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
