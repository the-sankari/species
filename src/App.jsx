import Header from "./components/Header"; // Importing the Header component
import Footer from "./components/Footer"; // Importing the Footer component
import "./assets/css/app.css"; // Importing the stylesheet
import Card from "./components/Card";
import { animals } from "./animalsList";
import { useState } from "react"; // Importing the useState hook from React

// Exporting the App component as the default export
export default function App() {
  // Returning the JSX content of the App component
  return (
    <>
      {/* Rendering the Header component */}
      {/* <!-- ========== Start Header ========== --> */}
      <Header />
      {/* <!-- ========== End Header ========== --> */}

      {/* <!-- ========== Start main ========== --> */}
      <main className="container">
        {animals.map(
          (
            animal //Mapping through the animals array and rendering a Card component for each animal object
          ) => (
            <Card key={animal.name} {...animal} /> // // Passing the animal object as props and using the animal's name as the key
          )
        )}
      </main>
      {/* <!-- ========== End main ========== --> */}

      {/* <!-- ========== Start footer ========== --> */}
      {/* Rendering the Footer component */}
      <Footer />
      {/* <!-- ========== End footer ========== --> */}
    </>
  );
}
