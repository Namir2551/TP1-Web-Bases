import React, { useState } from "react";
import NouveauEtudiant from "../nouveauEtudiant/NouveauEtudiant";

function LesCours() {
    const [lesEtudiants, setLesEtudiants] = useState([
      {
        nom: "Giguère",
        prenom: "Guillaume",
        numAdmission: "1",
      },
      {
        nom: "Kas Nasrallah",
        prenom: "Namir",
        numAdmission: "2",
      },
      {
        nom: "Giguère",
        prenom: "Gabriel",
        numAdmission: "3",
      },
      {
        nom: "Luc",
        prenom: "Jean",
        numAdmission: "4",
      },
      {
        nom: "Armend",
        prenom: "Christophe",
        numAdmission: "5",
      },
      {
        nom: "pot",
        prenom: "Emanuelle",
        numAdmission: "6",
      },
      {
        nom: "Gort",
        prenom: "Nadia",
        numAdmission: "7",
      },
      {
        nom: "Tremblay",
        prenom: "Noémie",
        numAdmission: "8",
      },
    ]);
  
  return ( 
    <div>
        <NouveauEtudiant/>
        <ul>
            {lesEtudiants.map((etu) => (
                <li>{etu.prenom + " " + etu.nom} </li>
            ))}
        </ul>
    </div>
    );
};

export default LesCours;