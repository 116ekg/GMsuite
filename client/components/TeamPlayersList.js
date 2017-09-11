import React from "react";
import TeamPlayersListEntry from "./TeamPlayersListEntry";

export default class TeamPlayersList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="player-table col-lg-12">
        <table className="table table-fixed table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Position</th>
              <th>Team</th>
              <th>GP</th>
              <th>MPG</th>
              <th>PPG</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>2PT%</th>
              <th>3PT%</th>
              <th>FG%</th>
              <th>FT%</th>
              <th>TO</th>
              <th>+/-</th>
            </tr>
            {this.props.players.map((player, i) => (
              <TeamPlayersListEntry player={player} key={i} />
            ))}
          </thead>
        </table>
      </div>
    );
  }
}
