import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { init, miniApp } from "@telegram-apps/sdk-react";

const root = createRoot(document.getElementById('root')!);

const initializeTelegramSDK = async () => {
  try {
    await init();
    if (miniApp.ready.isAvailable()) {
      await miniApp.ready();
      miniApp.setHeaderColor("transparent")
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


