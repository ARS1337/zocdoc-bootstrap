import React from "react";
import { BiStar } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";

function Card(props) {
  return (
    <div className="position-relative w-25 border px-4 pb-4 rounded card shadow">
      <div className="position-relative d-flex justify-content-between align-items-center pt-3 pr-4">
        <img src="https://placehold.jp/100x100.png" className=" cardImage" />
        <p></p>
        <div className="">
          <div className="cardTag d-flex align-items-baseline">
            <span>
              <BiStar size={20} color="rgb(0, 35, 75)" />
            </span>
            <span style={{ fontSize: "14px", paddingLeft: "4px", color: "rgb(0, 35, 75) " }}>
              {props.tag}
            </span>
          </div>
        </div>
      </div>
      <div className="cardName">{props.name}</div>
      <div className="cardType">{props.type}</div>
      <div className="cardLocation">{props.location}</div>
      <div className="cardRating">
        <BsStarFill size={12} color="rgb(239, 93, 73)" style={{ paddingRight: "2px" }} />
        <div className="cardRatingName">{props.rating} </div><div className="cardReviewName">({props.review} reviews)</div>
      </div>
      <div className="cardDesc">"{props.desc}"</div>
    </div>
  );
}

export default Card;
