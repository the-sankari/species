import { useParams } from "react-router-dom";

function SinglePage({ ...rest }) {
  const params = useParams();
  const categoryItem = rest[params.category];
  const data = categoryItem.find((el) => el.name === params.name);
  return (
    <div className="single">
      <h3> {data.name} </h3>
    </div>
  );
}

export default SinglePage;
