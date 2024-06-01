import { Link, NavLink } from "react-router-dom";
/* eslint-disable react/prop-types */
export default function Header({ searchTerm, handleSearch }) {
  return (
    <header className="p-3  header-container bg-body-tertiary border-bottom text-white sticky-top">
      <nav className="navbar container navbar-expand-lg ">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand text-dark">
            Species
          </NavLink>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <NavLink to="/" className="nav-link px-2 text-dark">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/animals" className="nav-link px-2 text-dark">
                  Animals
                </NavLink>
              </li>
              <li>
                <NavLink to="/birds" className="nav-link px-2 text-dark">
                  Birds
                </NavLink>
              </li>
              <li>
                <NavLink to="/insects" className="nav-link px-2 text-dark">
                  Insects
                </NavLink>
              </li>
              <li>
                <NavLink to="/fishes" className="nav-link px-2 text-dark">
                  Fishes
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link px-2 text-dark">
                  About
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
      </nav>
    </header>
  );
}
