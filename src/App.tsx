import { viewport } from "@telegram-apps/sdk-react";

function App() {
  return (
    <>
      <div
        className="main"
      >
          <pre>
            {JSON.stringify(viewport.safeAreaInsets())}
          </pre>
          <pre>
            {JSON.stringify(viewport.contentSafeAreaInsets())}
          </pre>
        <iframe className="site" src="https://dd.news/" />
      </div>
    </>
  );
}

export default App;
