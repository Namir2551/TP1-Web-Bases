import React from "react";
import ListeProfesseurs from "../components/ListeProfesseurs";

function Professeurs() {
  const professeurs = [
    {
      id: "u1",
      nom: "Sylvain Labranche",
      image: "https://www.chumontreal.qc.ca/sites/default/files/guy-pare_5.jpeg",
      places: 3,
    },
    {
      id: "u2",
      nom: "Bleu Labranche",
      image: "https://www.chumontreal.qc.ca/sites/default/files/guy-pare_5.jpeg",
      places: 4,
    },
  ];
  return <ListeProfesseurs professeurs={professeurs} />;
}

export default Professeurs;
