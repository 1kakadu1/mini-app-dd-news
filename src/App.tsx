import { isFullscreen, requestFullscreen, expandViewport } from "@telegram-apps/sdk";
import { useEffect, useState } from "react";


function App() {
  const [error, setError] = useState("");
  const [errorExp, setErrorExp] = useState("");
  const fullscreen = async ()=>{
      if (expandViewport.isAvailable()) {
       expandViewport();
       setErrorExp("Success"+ expandViewport.isAvailable())
      } else{
        setErrorExp("Error"+ expandViewport.isAvailable())
      }
      if (requestFullscreen.isAvailable()) {
       try {
         await requestFullscreen();
         setError(`Fullscreen requested: ${isFullscreen()}`)
         console.log("Fullscreen requested:", isFullscreen()); // Check if it's actually fullscreen
       } catch (error) {
          setError(JSON.stringify(error))
          console.error("Failed to request fullscreen:", error);
       }
     } else {
       setError("Fullscreen is not available",)
       console.warn("Fullscreen is not available");
     }
}
  useEffect(()=>{
    fullscreen();
  }, [])
  return (
    <>
      <div
        className="main"
        style={{
          paddingTop: 0,
          minHeight: "100vh",
        }}
      >
        {<h1>INFO: {error} {requestFullscreen.isAvailable()}</h1>}
        {<h1>INFO exp: {errorExp}</h1>}
        <iframe className="site" src="https://dd.news/" />
      </div>
    </>
  );
}

export default App;
