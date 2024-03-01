import React from "react";
import "./App.css";
import PictureCard from "./components/PictureCard/PictureCard";
import SignUp from "./components/SignUp/SignUp";

function App() {
  // Generate an array with 10 elements to use in the loop
  const cardArray = Array.from({ length: 12 });

  return (
    <>
      <div className="navBar">
        <h3>instaclone.</h3>
      </div>

      <SignUp />

      {/* Use map to loop over the array and render PictureCard component 10 times */}
      <div className="pictureCardContainer">
        {cardArray.map((_, index) => (
          <PictureCard key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
