import { Link, NavLink } from "react-router-dom";

Link;
/* eslint-disable react/prop-types */
export default function Header({ searchTerm, handleSearch }) {
  return (
    <header className="p-3 bg-dark text-white sticky-top">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <h2>
            <Link className="nav-link px-2 text-white" to="/">
              Species
            </Link>
          </h2>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink to="/" className="nav-link px-2 text-white">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/animals" className="nav-link px-2 text-white">
                Animals
              </NavLink>
            </li>
            <li>
              <NavLink to="/birds" className="nav-link px-2 text-white">
                Birds
              </NavLink>
            </li>
            <li>
              <NavLink to="/insects" className="nav-link px-2 text-white">
                Insects
              </NavLink>
            </li>
            <li>
            <NavLink to="/fishes" className="nav-link px-2 text-white">
                Fishes
              </NavLink>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search..."
              aria-label="Search"
            ></input>
          </form>
        </div>
      </div>
    </header>
  );
}
