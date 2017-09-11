import React from "react";
import TeamPlayersList from "./TeamPlayersList";

export default class DashboardTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("PROPS IN DASHBOARDTABS:", this.props);

    return (
      <div className="col-lg-12" id="dashboard-tabs">
        <ul className="nav nav-tabs nav-justified" role="tablist">
          <li id="player-stats-tab" role="presentation" className="active">
            <a href="#home" aria-controls="home" role="tab" data-toggle="tab">
              Player Stats
            </a>
          </li>
          <li id="team-stats-tab" role="presentation">
            <a
              href="#team-stats"
              aria-controls="team-statss"
              role="tab"
              data-toggle="tab"
            >
              Team Stats
            </a>
          </li>
          <li id="team-comparison-tab" role="presentation">
            <a
              href="#team-comparison"
              aria-controls="team-comparison"
              role="tab"
              data-toggle="tab"
            >
              Team Comparison
            </a>
          </li>
          <li id="standings-tab" role="presentation">
            <a
              href="#standings"
              aria-controls="standings"
              role="tab"
              data-toggle="tab"
            >
              Standings
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="home">
            <br />
            This is Player Stats tab.
            <br />
            <TeamPlayersList players={this.props.players} />
          </div>
          <div role="tabpanel" className="tab-pane" id="team-stats">
            This is the Team Stats page.
            <hr />
          </div>
          <div role="tabpanel" className="tab-pane" id="team-comparison">
            This is the Team Comparison tab.
          </div>
          <div role="tabpanel" className="tab-pane" id="standings">
            This is the standings tab.
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
