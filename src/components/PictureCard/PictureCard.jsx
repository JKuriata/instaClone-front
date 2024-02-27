import React, { useState, useEffect } from "react";
import "./PictureCard.css";

const PictureCard = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [picData, setPicData] = useState(null);

  useEffect(() => {
    const getAllPics = async () => {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos/?page=1&client_id=gCi9iiHRqctmlXkBeXSQ845fnkaLc5bPM0GkQseh4DM"
        );
        if (!response.ok) {
          throw new Error("Something's not right...");
        }
        const data = await response.json();
        // Set only the first picture from the data array
        setPicData(data[0]);
      } catch (error) {
        console.log(error);
        setErrorMsg(error.message);
      }
    };

    getAllPics();
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
