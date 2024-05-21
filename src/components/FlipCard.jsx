import React, { useEffect, useState } from "react";
import ReactFlipCard from "reactjs-flip-card";

const FlipCard = (props) => {
  const { img, backComponent } = props;
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  }, []);
  return (
    <div className="w-full md:w-64 flex justify-center">
      <ReactFlipCard
        perspective={1000}
        hoverAnimation={true}
        flipDirection="horizontal"
        containerStyle={screenSize > 768 ? { width: `100%`, height: `400px` } : { width: `200px`, height: `300px` }}
        frontStyle={{ background: "transparent", color: "white", borderRadius: "15px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", padding: "20px" }}
        backStyle={{ background: "transparent", color: "white", borderRadius: "15px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}
        frontComponent={
          <div className="w-full h-full flex justify-center items-center">
            <img src={img} alt="popular pokemon" className="w-48 md:w-full" />
          </div>
        }
        backComponent={backComponent}
      />
    </div>
  );
};

export default FlipCard;
