import React from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/Card";

import "./Cours.css";

function Cours({ cours }) {
  return (
    <li className="user-item">
        <Card className="user-item__content">
          <Link to={`/cours/${cours.id}`}>
            <div className="user-item__info">
              <h2>{cours.titre + " - " + cours.discipline}</h2>
            </div>
          </Link>
        </Card>
    </li>
  );
}

export default Cours;