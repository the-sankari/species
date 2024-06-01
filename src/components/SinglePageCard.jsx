import React from "react";
import WikipediaText from "../components/WikipediaText";
import { useNavigate } from "react-router-dom";

const SinglePageCard = (data) => {
  const navigate = useNavigate();

  return (
    <div className="card mb-3 singel-page-card">
      <img
        src={`https://source.unsplash.com/400x400?${data.name}`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <WikipediaText className="card-text" articleTitle={data.name} />
      </div>
      <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default SinglePageCard;
