import React from "react";

function Entry1(props) {
  let element = "⭐";
  let times5 = props.review5;
  let times4 = props.review4;
  let times3 = props.review3;
  let times2 = props.review2;
  let times1 = props.review1;
  return (
    <div>
      <div className="header1">
        <div style={{ display: "inline-block" }}>
          <h1>RestaurantFinder</h1>
        </div>
        <div
          className="logo"
          style={{ display: "inline-block", float: "right" }}
        >
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzkKxBxPNI4d5hdRr7LmAO4lUoPQaSPCqzw&usqp=CAU"
            alt="logo"
          ></img>
        </div>
      </div>
      <div className="restaurantHeading">
        <h1>
          <u>{props.name}</u>
        </h1>
      </div>
      <div className="info">
        <div className="contentDiv" style={{ display: "inline-block" }}>
          <h2>Area:- {props.area}</h2> <h2>City:- {props.city}</h2>
          <h2>
            Category:- {props.category[0]}/{props.category[1]}/
            {props.category[2]}
          </h2>
        </div>
        <div style={{ display: "inline-block", float: "left" }}>
          <img className="cafeimg" src={props.image} alt="restaurant.png" />
        </div>
      </div>

      <div className="reviewHeading">
        <h2>
          <u>Reviews and Ratings:-</u>
        </h2>
      </div>
      <div
        className="reviewRating"
        style={{ display: "inline-block", float: "left" }}
      >
        <h2>Review Rating:- </h2>

        <h2>
          {element.repeat(times5)} {props.votes5}
        </h2>
        <h2>
          {element.repeat(times4)} {props.votes4}
        </h2>
        <h2>
          {element.repeat(times3)} {props.votes3}
        </h2>
        <h2>
          {element.repeat(times2)} {props.votes2}
        </h2>
        <h2>
          {element.repeat(times1)} {props.votes1}
        </h2>
      </div>
      <div
        className="featureRating"
        style={{ display: "inline-block", float: "right" }}
      >
        <h2>Feature Rating:- </h2>

        <h2>Place: {props.place}</h2>
        <h2>Food: {props.food}</h2>
        <h2>Service: {props.service}</h2>
        <h2>Staff: {props.staff}</h2>
        <h2>Breakfast: {props.breakfast}</h2>
      </div>
    </div>
  );
}

export default Entry1;
