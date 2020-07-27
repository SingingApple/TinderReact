import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Steve Jobs",
      url:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5b8576db31358e0429c734e3%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D211%26cropX2%3D2381%26cropY1%3D900%26cropY2%3D3072",
    },
    {
      name: "Mark Zuckerberg",
      url:
        "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/09/09/11/markzuckerberg.jpg?w968",
    },
  ]);
  return (
    <div>
      <h1>Tinder Cards</h1>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              {person.name}
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
