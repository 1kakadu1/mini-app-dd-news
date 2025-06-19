import { viewport } from "@telegram-apps/sdk-react";
import { useMemo } from "react";

function App() {
  const size = useMemo(()=>{
   const safe = viewport.safeAreaInsets();
   const  content = viewport.contentSafeAreaInsets();

   return{
    top: Math.ceil(content.top === 0 ? safe.top : content.top),
    bottom: Math.ceil(safe.bottom === 0 ? content.bottom : safe.bottom),
   }
  },[viewport]);
  
  return (
    <>
      <div
        className="main"
        style={{
          paddingBottom: size.bottom,
          paddingTop: size.top,
        }}
      >
        <iframe className="site" src="https://dd.news/" />
      </div>
    </>
  );
}

export default App;
