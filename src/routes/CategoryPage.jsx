/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Card from "../components/Card";

function CategoryPage({ removeCard, removeLike, addLike, ...rest }) {
  const { category } = useParams();
  const catergoryItems = rest[category];

  return (
    <>
      <h2 className="cat-name">{category}</h2>
      <div className="card-container">
        {catergoryItems.map((item) => {
          return (
            <Card
              key={item.name}
              name={item.name}
              removeCard={() => removeCard(item.name, category)}
              removeLike={()=>removeLike(item.name, category, "remove")}
              addLike={()=>addLike(item.name, category, "add")}
            />
          );
        })}
      </div>
    </>
  );
}

export default CategoryPage;
