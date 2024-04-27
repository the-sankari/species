import { animals, birds, insects, fishes } from "../animalsList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

export default function SpeciesList() {
  const { speciesType } = useParams();
  const [species, setSpecies] = useState([]);
  useEffect(() => {
    let data = [];
    switch (speciesType) {
      case "animals":
        data = animals;
        break;
      case "birds":
        data = birds;
        break;
      case "insects":
        data = insects;
        break;
      case "fishes":
        data = fishes;
        break;
      default:
        data = [];
        break;
    }
    setSpecies(data);
  }, [speciesType]);
  return (
    <>
      {species.map((item) => {
        return <Card key={item.name} {...item} />;
      })}
    </>
  );
}
