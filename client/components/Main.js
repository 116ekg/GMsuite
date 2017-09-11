import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import TeamStats from "./TeamStats";
import PlayerStats from "./PlayerStats";
import CollegeScouting from "./CollegeScouting";
import NbaScouting from "./NbaScouting";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/teamstats" component={TeamStats} />
      <Route exact path="/playerstats" component={PlayerStats} />
      <Route exact path="/collegescouting" component={CollegeScouting} />
      <Route exact path="/nbascouting" component={NbaScouting} />
    </Switch>
  </main>
);

export default Main;
