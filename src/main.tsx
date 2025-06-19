import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  init,
  miniApp,
  viewport,
  retrieveLaunchParams,
} from "@telegram-apps/sdk-react";

const root = createRoot(document.getElementById("root")!);

const initializeTelegramSDK = async () => {
  try {
    init();
    // void import("eruda").then(({ default: eruda }) => {
    //   eruda.init();
    //   eruda.position({ x: window.innerWidth - 50, y: 100 });
    // });
    const lp = retrieveLaunchParams();
    const platform = lp.tgWebAppPlatform;
    const isMobile = platform === "ios" || platform === "android" || platform === "android_x";
    if (viewport.mount.isAvailable()) {
      await viewport.mount();
      if(isMobile){
       viewport.expand();
      
      }

    }


    if (viewport.requestFullscreen.isAvailable() && isMobile) {
      await viewport.requestFullscreen();
    }

    if (miniApp.mountSync.isAvailable()) {
      miniApp.mountSync();
    }

    if (miniApp.setHeaderColor.isAvailable()) {
      miniApp.setHeaderColor("#f8f5f6");
    }

    if(miniApp.setBottomBarColor.isAvailable()){
      miniApp.setBottomBarColor("#000");
    }

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
