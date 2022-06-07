import React from "react";
import Entry1 from "./Entry1";

import restaurant from "../restaurant";

function createEntry1(restaurant) {
  return (
    <Entry1
      name={restaurant.name}
      area={restaurant.area}
      city={restaurant.city}
      category={restaurant.category}
      image={restaurant.cover_image}
      place={restaurant.feature_rating.place}
      food={restaurant.feature_rating.food}
      service={restaurant.feature_rating.service}
      staff={restaurant.feature_rating.staff}
      breakfast={restaurant.feature_rating.breakfast}
      review5={restaurant.review_rating.votes[1].rating}
      review4={restaurant.review_rating.votes[0].rating}
      review3={restaurant.review_rating.votes[3].rating}
      review2={restaurant.review_rating.votes[2].rating}
      review1={restaurant.review_rating.votes[4].rating}
      votes5={restaurant.review_rating.votes[1].votes}
      votes4={restaurant.review_rating.votes[0].votes}
      votes3={restaurant.review_rating.votes[3].votes}
      votes2={restaurant.review_rating.votes[2].votes}
      votes1={restaurant.review_rating.votes[4].votes}
    />
  );
}

function App() {
  return <div>{restaurant.map(createEntry1)}</div>;
}

export default App;
