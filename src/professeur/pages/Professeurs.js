import React, { useState } from "react";
import ListeProfesseurs from "../components/ListeProfesseurs";
import NouveauProf from "../nouveauProfesseur/NouveauProf";

function Professeurs() {
  const [professeurs, setProfesseurs] = useState([
    {
      id: "p1",
      dateEmbauche: new Date(2023, 5, 15),
      nom: "Leduc",
      prenom: "Micheal",
      photo: "https://th.bing.com/th/id/OIP.kSzzGd_ab4PDPssnjbC7twHaGX?pid=ImgDet&rs=1",
      cours: ["Objet Connectée"],
    },
    {
      id: "p2",
      dateEmbauche: new Date(2023, 7, 21),
      nom: "Delzozo",
      prenom: "Coco",
      photo: "https://4.bp.blogspot.com/-oX5MCM16YoQ/Wh8RrLwG4EI/AAAAAAABNUg/QltezsjmUHEACRGjct7MG12JFRvMX38qwCKgBGAs/s1600/CastleCreator_Fluttershy5.png",
      cours: ["Web et base de donnée"],
    },
  ]);

  function ajouterProfesseur(nouveauProfesseur) {
    setProfesseurs(professeurs.concat(nouveauProfesseur));
  }

  return ( 
    <div>
      <NouveauProf ajouterProfesseur={ajouterProfesseur}/>
      <ListeProfesseurs professeurs={professeurs} />
    </div>
    );
};

export default Professeurs;
