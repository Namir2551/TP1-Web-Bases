import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/Avatar";
import Card from "../../shared/Card";

import "./Cours.css";

function Cours({ cours }) {
  return (
    <li className="user-item">
        <Card className="user-item__content">
          <Link to={`/${cours.id}/places`}>
            <div className="user-item__image">
              <Avatar photo={cours.photo} alt={cours.nom} />
            </div>
            <div className="user-item__info">
              <h2>{cours.nom + ", " + cours.prenom}</h2>
              <ul>
                  {cours.cours.map((cour) => (
                    <li>{cour}</li>
                  ))}
              </ul>
            </div>
          </Link>
        </Card>
    </li>
  );
}

export default Cours;