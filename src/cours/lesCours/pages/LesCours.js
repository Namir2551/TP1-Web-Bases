import React, { useState } from "react";
import NouveauEtudiant from "../nouveauEtudiant/NouveauEtudiant";

function Cours() {
    const [cours, setCours] = useState([
      {
        id: "c1",
        titre: "Objet Connectée",
        discipline: "Technologie",
        nbMaxEtu: "30",
        dateDebut: new Date(2023, 1, 22),
        dateFin: new Date(2023, 5, 27),
      },
      {
        id: "c2",
        titre: "Web et base de donnée",
        discipline: "Technologie",
        nbMaxEtu: "30",
        dateDebut: new Date(2023, 1, 23),
        dateFin: new Date(2023, 5, 25),
      },
    ]);
  
    function ajouterCour(nouveauCour) {
      setCours(cours.concat(nouveauCour));
    }

  return ( 
    <div>
      <NouveauEtudiant ajouterCour = {ajouterCour}/>
    </div>
    );
};

export default Cours;