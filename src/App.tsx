import { useEffect, useState } from "react";

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if ((window as any).Telegram?.WebApp) {
      const tg = (window as any).Telegram.WebApp;
      tg.ready();
      tg.setHeaderColor('transparent');
      setHeaderHeight(tg.headerHeight);
      tg.expand();
    }
  }, []);
  return (
    <>
      <div
        className="main"
        style={{
          paddingTop: headerHeight,
          minHeight: "100vh",
        }}
      >
      <button onClick={() => (window as any).Telegram.WebApp.close()}>
        Закрыть приложение
      </button>
        <iframe className="site" src="https://dd.news/" />
      </div>
    </>
  );
}

export default App;
