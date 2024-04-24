import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/css/app.css";
import Card from "./components/Card";
import { animals } from "./animalsList";
import { useState } from "react";
export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        {animals.map((animal) => (
          <Card key={animal.name} name={animal.name} likes={animal.likes} />
        ))}
      </main>
      <Footer />
    </>
  );
}
