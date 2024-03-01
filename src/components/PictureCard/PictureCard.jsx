import React, { useState, useEffect } from "react";
import "./PictureCard.css";

const PictureCard = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [picData, setPicData] = useState(null);

  useEffect(() => {
    const getRandomPic = async () => {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos/?client_id=gCi9iiHRqctmlXkBeXSQ845fnkaLc5bPM0GkQseh4DM"
        );
        if (!response.ok) {
          throw new Error("Something's not right...");
        }
        const data = await response.json();
        // Generate a random index within the length of the data array
        const randomIndex = Math.floor(Math.random() * data.length);
        // Set the picture data using the random index
        setPicData(data[randomIndex]);
      } catch (error) {
        console.log(error);
        setErrorMsg(error.message);
      }
    };

    getRandomPic();
  }, []);

  return (
    <div className="pictureCard">
      {errorMsg && <div>Error: {errorMsg}</div>}
      {picData && (
        <img
          key={picData.id}
          src={picData.urls.small}
          alt={picData.alt_description}
        />
      )}
    </div>
  );
};

export default PictureCard;
