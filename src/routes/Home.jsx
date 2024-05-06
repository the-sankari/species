import { Link } from "react-router-dom";
import "../assets/css/home.css";
function Home() {
  return (
    <div className="home-page">
      <Link to="/animals">
        <img src={`https://source.unsplash.com/400x400?animals`} alt="..." />
        <p>Animals</p>
      </Link>
      <Link to="/birds">
        {" "}
        <img src={`https://source.unsplash.com/400x400?birds`} alt="..." />
        <p>Birds</p>
      </Link>
      <Link to="/insects">
        <img src={`https://source.unsplash.com/400x400?insects`} alt="..." />
        <p>Insects</p>
      </Link>
      <Link to="/fishes">
        <img src={`https://source.unsplash.com/400x400?fishes`} alt="..." />
        <p>Fishes</p>
      </Link>
    </div>
  );
}

export default Home;
