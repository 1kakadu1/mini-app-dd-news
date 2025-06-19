
function App() {
//   const fullscreen = async ()=>{
//       if (expandViewport.isAvailable()) {
//        expandViewport();
//        setErrorExp("Success"+ expandViewport.isAvailable())
//       } else{
//         setErrorExp("Error"+ expandViewport.isAvailable())
//       }
//       if (requestFullscreen.isAvailable()) {
//        try {
//          await requestFullscreen();
//          setError(`Fullscreen requested: ${isFullscreen()}`)
//          console.log("Fullscreen requested:", isFullscreen()); // Check if it's actually fullscreen
//        } catch (error) {
//           setError(JSON.stringify(error))
//           console.error("Failed to request fullscreen:", error);
//        }
//      } else {
//        setError("Fullscreen is not available",)
//        console.warn("Fullscreen is not available");
//      }
// }
//   useEffect(()=>{
//     fullscreen();
//   }, [])
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
