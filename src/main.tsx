import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { init, miniApp, expandViewport , requestFullscreen} from "@telegram-apps/sdk-react";
import './mockEnv.ts';
const root = createRoot(document.getElementById('root')!);

const initializeTelegramSDK = async () => {
  try {
    await init();
    if (miniApp.ready.isAvailable()) {
      await miniApp.ready();
    }
    if (requestFullscreen.isAvailable()) {
      await requestFullscreen();
    }

    if (expandViewport.isAvailable()) {
       expandViewport();
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


