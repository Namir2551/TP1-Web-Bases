import React from "react";
import "./ListeCours.css";
import Cours from "./Cours";
import Card from "../../shared/Card";

function ListeCours(props) {
    if (props.cours.length === 0) {
      return (
        <div className="center">
          <Card>
            <h2>Aucun cours</h2>
          </Card>
        </div>
      );
    }
  
    return (
      <ul className="users-list">
        {props.cours.map((cours) => (
          <Cours key={cours.id} cour={cours} />
        ))}
      </ul>
    );
  }
  
  export default ListeCours;