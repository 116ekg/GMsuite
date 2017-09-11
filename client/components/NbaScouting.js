import React from "react";
import axios from "axios";

export default class NbaScouting extends React.Component {
  constructor() {
    super();

    this.state = {
      players: []
    };
  }

  componentDidMount() {
    console.log("WE IN HERE");
    axios
      .get("/api/players/getAllPlayers")
      .then(data => {
        console.log(data.data.data.cumulativeplayerstats.playerstatsentry[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="mb-3">
                <h2 id="test">This is the NBA scouting page</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
