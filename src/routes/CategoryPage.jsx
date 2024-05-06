/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";

function CategoryPage({removeCard, removeLike, addLike,likes, ...rest }) {
  
  const { category } = useParams();
  const catergoryItems = rest[category];


  return (
    <>
      <h2 className="cat-name">{category}</h2>
      <div className="card-container">
        {catergoryItems.map((item) => {
          return <Card key={item.name} name={item.name} removeCard={removeCard} removeLike={removeLike} addLike={addLike} likes={likes} />;
        })}
      </div>
    </>
  );
}

export default CategoryPage;
