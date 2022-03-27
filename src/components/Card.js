import React from "react";
// images from flaticon.com
import bolt from "../icons/bolt srip.png";
import fire from "../icons/fire Freepik.png";
import pentagram from "../icons/pentagram Andy Horvath.png";
import water from "../icons/water Bartama Graphic.png";

export default function Card(props) {
  const { suit, value, flip } = props;
  function suitCheck(suit) {
    switch (suit) {
      case "light":
        return bolt;
      case "fire":
        return fire;
      case "star":
        return pentagram;
      case "water":
        return water;
      default:
        console.log("image not found");
    }
  }
  return (
    <div className={`flip-card ${flip ? "flip" : ""}`}>
      <div className="flip-card-inner">
        <div className="flip-card-back"></div>
        <div className={`flip-card-front ${flip ? `${suit}-suit` : ``}`}>
          {flip ? (
            <>
              <div>
                {/*<img src={suitCheck(suit)} alt={suit} />*/}
              </div>
              <span>{value}</span>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
