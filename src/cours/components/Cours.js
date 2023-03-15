import React from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/Card";

import "./Cours.css";

function Cours({ key, titre, discipline }) {
  return (
    <li className="card-cours">
        <Card className="card-cours__content">
          <Link to={`/cours/${key}`}>
          <div className="card-cours__info">
              <h2>{titre + " - " + discipline}</h2>
            </div>
          </Link>
        </Card>
    </li>
  );
}

export default Cours;