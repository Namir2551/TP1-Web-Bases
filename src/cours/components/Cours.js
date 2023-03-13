import React, {useState} from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/Card";
import FiltreSession from "./FiltreSession";
import "./Cours.css";

function Cours({ key, titre, discipline }) {
  return (
    <li className="user-item">
        <Card className="user-item__content">
          <Link to={`/cours/${key}`}>
          <div className="user-item__info">
              <h2>{titre + " - " + discipline}</h2>
            </div>
          </Link>
        </Card>
    </li>
  );
}

export default Cours;