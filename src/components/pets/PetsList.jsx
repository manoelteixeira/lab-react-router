import React from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets, selected }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {/* All Pets */}
        {selected == "all" &&
          pets.map((pet) => <Pet key={pet.id} kind={pet.kind} pet={pet} />)}
        {/* Only Dogs */}
        {selected == "dogs" &&
          dogs.map((pet) => <Pet key={pet.id} kind={pet.kind} pet={pet} />)}
        {/* Only Cats */}
        {selected == "cats" &&
          cats.map((pet) => <Pet key={pet.id} kind={pet.kind} pet={pet} />)}
      </section>
    </section>
  );
};

export default PetsList;
