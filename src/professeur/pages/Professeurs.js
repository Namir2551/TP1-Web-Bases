import React from "react";
import ListeProfesseurs from "../components/ListeProfesseurs";

function Professeurs() {
  const professeurs = [
    {
      id: "u1",
      nom: "Micheal leduc",
      image: "https://th.bing.com/th/id/OIP.kSzzGd_ab4PDPssnjbC7twHaGX?pid=ImgDet&rs=1",
      places: [1,1,1,1,1,1]
    },
    {
      id: "u2",
      nom: "Coco Delzozo",
      image: "https://4.bp.blogspot.com/-oX5MCM16YoQ/Wh8RrLwG4EI/AAAAAAABNUg/QltezsjmUHEACRGjct7MG12JFRvMX38qwCKgBGAs/s1600/CastleCreator_Fluttershy5.png",
      places: [1,1,1]
    },
  ];
  return <ListeProfesseurs professeurs={professeurs} />;
}

export default Professeurs;
