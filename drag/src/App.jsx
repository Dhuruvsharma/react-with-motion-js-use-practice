import React from "react";
import Bcgrnd from "./Components/Bcgrnd";
import Forgrnd from "./Components/Forgrnd";
function App() {
  return (
    <>
      <div className="relative w-full h-screen bg-zinc-900">
        <Bcgrnd />
        <Forgrnd/>
      </div>
      
    </>
  );
}

export default App;
