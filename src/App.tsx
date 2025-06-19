
import { useEffect } from "react";

function App() {
  //const [headerHeight, setHeaderHeight, ] = useState(0);

  useEffect(() => {
    // if ((window as any).Telegram?.WebApp) {
    //   const tg = (window as any).Telegram.WebApp;
    //   tg.ready();
    //   tg.setHeaderColor('transparent');
    //   setHeaderHeight(tg.headerHeight);
    //   tg.expand();
    // }
     //   hideBackButton(); hideSettingsButton();
  }, []);
  return (
    <>
      <div
        className="main"
        style={{
          paddingTop: 0,
          minHeight: "100vh",
        }}
      >
        <iframe className="site" src="https://dd.news/" />
      </div>
    </>
  );
}

export default App;
