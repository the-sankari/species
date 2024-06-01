import { useParams } from "react-router-dom";

import SinglePageCard from "../components/SinglePageCard";

function SinglePage({ ...rest }) {
  const params = useParams();

  const categoryItem = rest[params.category];
  const data = categoryItem.find((el) => el.name === params.name);
  return (
    <div className="container singlePage ">
      <SinglePageCard {...data} />
    </div>
  );
}

export default SinglePage;
