import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./shared/Navigation/MainNavigation"
import PageAccueil from "./places/pages/pageAccueil"
import Professeurs from './professeur/pages/Professeurs';

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
