import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <Link to="/animals">Animals</Link>
      <Link to="/birds">Birds</Link>
      <Link to="/insects">Insects</Link>
      <Link to="/fishes">Fishes</Link>
    </div>
  );
}

export default Home;
