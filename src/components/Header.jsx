/* eslint-disable react/prop-types */
export default function Header({ searchTerm, handleSearch }) {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          ></a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Animal
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Fishes
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Birds
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Insects
              </a>
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
