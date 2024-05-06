import { useParams } from "react-router-dom";
import Card from "../components/Card";

function CategoryPage({ ...rest }) {
  const { category } = useParams();
  const catergoryItems = rest[category];

  return (
    <>
      <h2 className="cat-name">{category}</h2>
      <div className="card-container">
        {catergoryItems.map((item) => {
          return <Card key={item.name} name={item.name} />;
        })}
      </div>
    </>
  );
}

export default CategoryPage;
