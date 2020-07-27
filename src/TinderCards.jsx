import React, { useState } from "react";
import TinderCard from "react-tinder-card";
const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Steve Jobs",
      url:
        "https://cdn.vox-cdn.com/thumbor/TbscUHQDRx0eeh4QZljIwkf2qaY=/0x86:706x557/1400x1050/filters:focal(0x86:706x557):format(png)/cdn.vox-cdn.com/imported_assets/847184/stevejobs.png",
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
      {people.map((person) => (
        <TinderCard>
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            {person.name}
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default TinderCards;
