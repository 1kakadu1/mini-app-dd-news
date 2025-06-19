import { useEffect } from "react";

function App() {
  useEffect(() => {
    if ((window as any).Telegram?.WebApp) {
      const tg = (window as any).Telegram.WebApp;
      tg.setHeaderColor("transparent");
      tg.expand();
    }
  }, []);
  return (
    <>
      <div
        className="main"
        style={{
          paddingTop: (window as any).Telegram?.WebApp?.headerHeight || 0,
          minHeight: "100vh",
        }}
      >
        <iframe className="site" src="https://dd.news/" />
      </div>
    </>
  );
}

export default App;
