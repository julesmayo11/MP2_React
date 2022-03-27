import React from "react";

export default function Card(props) {
  //This component is for the card
  const { suit, value, flip } = props;
  return (
    <div className={`flip-card ${flip ? "flip" : ""}`}>
      <div className="flip-card-inner">
        <div className="flip-card-back"></div>
        <div className={`flip-card-front ${flip ? `${suit}-suit` : ``}`}>
          {flip ? (
            <>
              <div>
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
