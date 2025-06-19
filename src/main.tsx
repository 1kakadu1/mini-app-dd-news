import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { init, expandViewport, requestFullscreen, miniApp } from "@telegram-apps/sdk-react";
//import './mockEnv.ts';
const root = createRoot(document.getElementById('root')!);

const initializeTelegramSDK = async () => {
  try {

    init();
    expandViewport();
    void import('eruda').then(({ default: eruda }) => {
      eruda.init();
      eruda.position({ x: window.innerWidth - 50, y: 0 });
    });
      
    if (requestFullscreen.isAvailable()) {
        await requestFullscreen();
    } 

    if (miniApp.mountSync.isAvailable()) {
      await miniApp.mountSync();
    }

    if(miniApp.setHeaderColor.isAvailable()){
      miniApp.setHeaderColor("#ebeff2");
    }
  } catch (error) {
    console.error("Ошибка инициализации:", error);
  }
};

initializeTelegramSDK().then(()=>{
      root.render(
        <StrictMode>
         <App/>
        </StrictMode>,
      );
});


