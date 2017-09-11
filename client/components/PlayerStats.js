import React from "react";
import axios from "axios";
import TeamPlayersList from "./TeamPlayersList";
import DashboardTabs from "./DashboardTabs";

export default class PlayerStats extends React.Component {
  constructor() {
    super();

    this.state = {
      teamPlayers: []
    };
    this.getTeamPlayers = this.getTeamPlayers.bind(this);
  }

  componentDidMount() {
    console.log("PlayerStats is hitting");
    this.getTeamPlayers();
  }

  getTeamPlayers() {
    axios
      .get("/api/players/getTeamPlayers")
      .then(data => {
        console.log(data.data);
        this.setState({ teamPlayers: data.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="content-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <h4 id="test">Team Stats</h4>
                <hr />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <DashboardTabs players={this.state.teamPlayers} />
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
