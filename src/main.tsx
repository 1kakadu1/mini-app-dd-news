import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { init, miniApp, setDebug,isFullscreen, requestFullscreen, expandViewport} from "@telegram-apps/sdk-react";
import './mockEnv.ts';
const root = createRoot(document.getElementById('root')!);

const initializeTelegramSDK = async () => {
  try {
    setDebug(false)
    await init();
    if (expandViewport.isAvailable()) {
      if(expandViewport.isAvailable()){
        expandViewport();
      }
      if (requestFullscreen.isAvailable()) {
         await requestFullscreen();
         console.log("Fullscreen requested:", isFullscreen()); // Check if it's actually fullscreen
      } 
     } else {
       console.warn("Fullscreen is not available");
     }

    if (miniApp.ready.isAvailable()) {
      await miniApp.ready();
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


