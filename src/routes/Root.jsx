import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Root() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Header searchTerm={searchTerm} handleSearch={handleSearch} />
      <main className="container">
        <Outlet context={{ searchTerm }} />
      </main>
      <Footer />
    </>
  );
}

export default Root;
