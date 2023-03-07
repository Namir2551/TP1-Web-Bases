import React from "react";
import ListeProfesseurs from "../components/ListeProfesseurs";
import NouveauProf from "../nouveauProfesseur/NouveauProf";

function Professeurs() {
  const professeurs = [
    {
      id: "p1",
      dateEmbauche: "3 février",
      nom: "Leduc",
      prenom: "Micheal",
      photo: "https://th.bing.com/th/id/OIP.kSzzGd_ab4PDPssnjbC7twHaGX?pid=ImgDet&rs=1",
      cours: ["Premier", "Deuxieme"],
    },
    {
      id: "p2",
      dateEmbauche: "3 février",
      nom: "Delzozo",
      prenom: "Coco",
      photo: "https://4.bp.blogspot.com/-oX5MCM16YoQ/Wh8RrLwG4EI/AAAAAAABNUg/QltezsjmUHEACRGjct7MG12JFRvMX38qwCKgBGAs/s1600/CastleCreator_Fluttershy5.png",
      cours: ["Premier", "Deuxieme"],
    },
  ];
  return ( 
    <div>
      <NouveauProf />
      <ListeProfesseurs professeurs={professeurs} />
    </div>
    );
};

export default Professeurs;