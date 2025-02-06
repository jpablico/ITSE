import React from "react";
import data from "../../assets/data/data.json";
import zebraImg from "../../assets/images/zebra.jpg";
import giraffeImg from "../../assets/images/giraffe.jpg";
import elephantImg from "../../assets/images/elephant.jpg";
import wolfImg from "../../assets/images/wolf.jpg";
import Subcomponents from "./Subcomponents.jsx"; 

const imageMap = {
  "zebra.jpg": zebraImg,
  "giraffe.jpg": giraffeImg,
  "elephant.jpg": elephantImg,
  "wolf.jpg": wolfImg
};

function ParentComponent() {
  return (
    <div>
      <h1>Animals in the Zoo</h1>
      <div className="card-container" style={{ display: "flex", justifyContent: "center" }}>
        {data.map((item, index) => (
          <Subcomponents
            key={index}
            title={item.title}
            description={item.description}
            image={imageMap[item.image] || "defaultImage.jpg"} 
          />
        ))}
      </div>
    </div>
  );
}

export default ParentComponent;