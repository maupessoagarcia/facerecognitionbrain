import React from "react";
import Navigation from "./components/navigation/Navigation";
import "tachyons";
import Logo from "./components/navigation/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import "./App.css";
import Rank from "./components/Rank/Rank";

function App() {
  return (
    <div>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* 
      
      <FaceRecognition /> */}
    </div>
  );
}

export default App;

// install react particles (deprecated) - video 267 31:46
