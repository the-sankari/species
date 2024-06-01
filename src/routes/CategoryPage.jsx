/* eslint-disable react/prop-types */
import { useParams, useOutletContext } from "react-router-dom";
import Card from "../components/Card";

function CategoryPage({
  removeCard,
  removeLike,
  addLike,
  ...rest
}) {
  const { category } = useParams();
  const { searchTerm } = useOutletContext();
  const categoryItems = rest[category] || [];

  const filteredItems = categoryItems.filter((element) =>
    element.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h2 className="category-name">{category}</h2>
      <div className="card-container">
        {filteredItems.map((item) => (
          <Card
            key={item.name}
            name={item.name}
            removeCard={() => removeCard(item.name, category)}
            removeLike={() => removeLike(item.name, category, "remove")}
            addLike={() => addLike(item.name, category, "add")}
            likes={item.likes}
          />
        ))}
      </div>
    </>
  );
}

export default CategoryPage;
