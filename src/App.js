import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./shared/Navigation/MainNavigation"
import PageAccueil from "./acceuil/pages/pageAccueil"
import Professeurs from './professeur/pages/Professeurs';
import Cours from "./cours/pages/Cours";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <PageAccueil />
          </Route>
          <Route path="/cours" exact>
            <Cours />
          </Route>
          <Route path="/professeurs" exact>
            <Professeurs />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
