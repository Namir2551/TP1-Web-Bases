import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/Avatar";
import Card from "../../shared/Card";

import "./Professeur.css";

function Professeur({ professeur }) {
  return (
    <li className="user-item">
        <Card className="user-item__content">
          <Link to={`/${professeur.id}/places`}>
            <div className="user-item__image">
              <Avatar image={professeur.image} alt={professeur.nom} />
            </div>

            <div className="user-item__info">
              <h2>{professeur.nom}</h2>
              <ul>
                  {professeur.cours.map((cour) => (
                    <li>{cour}</li>
                  ))}
              </ul>
            </div>
          </Link>
        </Card>
    </li>
  );
}

export default Professeur;
