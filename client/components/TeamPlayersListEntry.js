import React from "react";

export default class TeamPlayersListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.player);
    return (
      <tr id="player-row">
        <td>{this.props.player.lastName}</td>
        <td>{this.props.player.firstName}</td>
        <td>{this.props.player.position}</td>
        <td>{this.props.player.team}</td>
        <td>{this.props.player.gamesPlayed}</td>
        <td>{this.props.player.mpg}</td>
        <td>{this.props.player.ppg}</td>
        <td>{this.props.player.rebpg}</td>
        <td>{this.props.player.astpg}</td>
        <td>{this.props.player.stlpg}</td>
        <td>{this.props.player.blkpg}</td>
        <td>{this.props.player.twoPtPct}</td>
        <td>{this.props.player.threePtPct}</td>
        <td>{this.props.player.fgPct}</td>
        <td>{this.props.player.freeThrowPct}</td>
        <td>{this.props.player.topg}</td>
        <td>{this.props.player.plusMinuspg}</td>
      </tr>
    );
  }
}
