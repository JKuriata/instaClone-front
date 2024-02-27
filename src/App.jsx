import { useState, useEffect } from "react";
import "./App.css";
import PictureCard from "./components/PictureCard/PictureCard";

import SignUp from "./components/SignUp/SignUp"
// import PictureCard from "./components/PictureCard/PictureCard"

function App() {

  
    
  return (
    <>
      <div className="navBar">
        <h3>instaclone.</h3>
      </div>

      <SignUp />

      <getAllPics />

      <PictureCard />
      <PictureCard />
    </>
  );
}

export default App;
