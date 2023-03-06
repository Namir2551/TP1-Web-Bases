import React from "react";
import ListeProfesseurs from "../components/ListeProfesseurs";

function Professeurs() {
  const professeurs = [
    {
      id: "u1",
      nom: "Micheal leduc",
      image: "https://th.bing.com/th/id/OIP.kSzzGd_ab4PDPssnjbC7twHaGX?pid=ImgDet&rs=1",
      cours: ["Premier", "Deuxieme"],
    },
    {
      id: "u2",
      nom: "Coco Delzozo",
      image: "https://4.bp.blogspot.com/-oX5MCM16YoQ/Wh8RrLwG4EI/AAAAAAABNUg/QltezsjmUHEACRGjct7MG12JFRvMX38qwCKgBGAs/s1600/CastleCreator_Fluttershy5.png",
      cours: ["Premier", "Deuxieme"],
    },
  ];
  return <ListeProfesseurs professeurs={professeurs} />;
}

export default Professeurs;
