import { useEffect } from "react";
import {
  expandViewport
} from "@telegram-apps/sdk-react";

function App() {
  useEffect(()=>{
     if (expandViewport.isAvailable()) {
       expandViewport();
     }
  },[])
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
