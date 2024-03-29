import React, { useState } from "react";
import NouveauEtudiant from "../nouveauEtudiant/NouveauEtudiant";

import './LesCours.css'

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

    function ajouterEtudiant(nouveauEtudiant) {
      
      let existe = false

        for (let i = 0; i < lesEtudiants.length; i++) {
            if (lesEtudiants[i].numAdmission === nouveauEtudiant.numAdmission) {
                  alert("L'étudiant existe déjà!")
                  existe = true
              }
        }

        if(existe === false)
        setLesEtudiants(lesEtudiants.concat(nouveauEtudiant));
    }
  
  return ( 
    <div>
        <NouveauEtudiant ajouterEtudiant={ajouterEtudiant}/>
        <div className="titre">
            <h2>Les étudiants</h2>
            <ul>
                {lesEtudiants.map((etu) => (
                    <li className="etudiant">{etu.prenom + " " + etu.nom} </li>
                ))}
            </ul>
        </div>
    </div>
    );
};

export default LesCours;