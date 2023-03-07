import React from "react";
import "./pageAccueil.css";

function Place({ place }) {
    return (
        <div>

            <img class='center' src="https://www.cmontmorency.qc.ca/wp-content/uploads/2018/03/Logomo_1400.png" 
                alt="Collège MontMorency">
            </img>
            <br></br>
            <p>Le site permet de gérer les inscriptions du collège.</p>
            <p>Vous pouvez voir les professeurs du collège ou vous inscrire comme tel dans l'onglet Professeurs.</p>
            <p>Vous pouvez voir les cours du collège ou rajouter des étudiants dans l'onglet Cours.</p>
        </div>

            
        
    );
  }
  
  export default Place;