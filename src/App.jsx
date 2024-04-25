import Header from "./components/Header"; // Importing the Header component
import Footer from "./components/Footer"; // Importing the Footer component
import "./assets/css/app.css"; // Importing the stylesheet
import Card from "./components/Card";
import { animals } from "./animalsList";
import { useState } from "react"; // Importing the useState hook from React

// Exporting the App component as the default export
export default function App() {
  const [animalsData, setAnimalsData] = useState(animals);
  const [searchTerm, setSearchTerm] = useState("");

  const handleRemoveCard = (animal) => {
    const updatedAnimalData = animalsData.filter(
      (item) => item.name !== animal
    );
    setAnimalsData(updatedAnimalData);
  };

  const handleLikes = (animal, action) => {
    const updatedAnimals = animalsData.map((item) => {
      if (item.name === animal) {
        if (action == "add") {
          return { ...item, likes: item.likes + 1 };
        } else {
          if (item.likes === 0) {
            return item;
          } else {
            return { ...item, likes: item.likes - 1 };
          }
        }
      } else {
        return item;
      }
    });
    setAnimalsData(updatedAnimals);
  };

  const handleSearch = (event) => {
    // Get the current value of the search input field and convert it to lowercase
    const searchTerm = event.target.value.toLowerCase();

    // Filter the animals array to only include animals whose name includes the search term
    const filteredAnimals = animals.filter((animal) => {
      return animal.name.toLowerCase().includes(searchTerm);
    });

    // Update the searchTerm state with the current search term
    setSearchTerm(searchTerm);

    // Update the animalsData state with the filtered array of animals
    setAnimalsData(filteredAnimals);
  };
  // Returning the JSX content of the App component
  return (
    <>
      {/* Rendering the Header component */}
      {/* <!-- ========== Start Header ========== --> */}
      <Header searchTerm={searchTerm} handleSearch={handleSearch} />
      {/* <!-- ========== End Header ========== --> */}

      {/* <!-- ========== Start main ========== --> */}
      <main className="container">
        {/* //Mapping through the animals array and rendering a Card component for each animal object */}
        {animalsData.map((animal) => (
          <Card
            key={animal.name}
            {...animal}
            removeCard={() => {
              handleRemoveCard(animal.name);
            }}
            addLike={() => {
              handleLikes(animal.name, "add");
            }}
            removeLike={() => {
              handleLikes(animal.name, "remove");
            }}
          /> // // Passing the animal object as props and using the animal's name as the key
        ))}
      </main>
      {/* <!-- ========== End main ========== --> */}

      {/* <!-- ========== Start footer ========== --> */}
      {/* Rendering the Footer component */}
      <Footer />
      {/* <!-- ========== End footer ========== --> */}
    </>
  );
}
