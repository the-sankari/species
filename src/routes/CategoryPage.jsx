import { useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "../components/Card";
import { useEffect, useState } from "react";

function CategoryPage({ removeCard, removeLike, addLike, ...rest }) {
  const { category } = useParams();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const categoryItems = rest[category] || [];

  useEffect(() => {
    setSearch("");
  }, [location]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredItems = categoryItems.filter((element) =>
    element.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h2 className="cat-name">{category}</h2>
      <input
        className="search"
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
      <button onClick={() => setSearch("")}>Reset</button>
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

CategoryPage.propTypes = {
  removeCard: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  filterData: PropTypes.func,
};

export default CategoryPage;
