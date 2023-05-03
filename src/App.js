import React from "react";
import Navigation from "./components/navigation/Navigation";
import "tachyons";
import Logo from "./components/navigation/Logo/Logo";

function App() {
  return (
    <div>
      <Navigation />
      <Logo />
      {/* 
      <ImageLinkForm />
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
