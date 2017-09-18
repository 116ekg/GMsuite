import React from "react";
import axios from "axios";
import PlayerProfileTabs from "./PlayerProfileTabs";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Col,
  Button,
  Well,
  Row,
  Modal
} from "react-bootstrap";

export default class CollegeScouting extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      statOne: "ppg",
      statTwo: "rebpg",
      team: "All College",
      showModal: false,
      name: "",
      astpg: null,
      position: "",
      stlpg: null,
      blkpg: null,
      mpg: null,
      twoPtPct: null,
      threePtPct: null,
      gamesPlayed: null,
      fgPct: null,
      freeThrowPct: null,
      topg: null,
      fgAtt: null,
      threePtAtt: null,
      jerseyNumber: null
    };
    this.createChart = this.createChart.bind(this);
    this.firstInputChange = this.firstInputChange.bind(this);
    this.secondInputChange = this.secondInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    // **** UPDATE NBA PLAYERS ****
    // axios
    //   .get("/api/players/updateNbaPlayers")
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // **** GET COLLEGE TEAMS ****
    // axios
    //   .get("/api/players/getCollegeTeams")
    //   .then(data => {
    //     console.log("THIS IS COLLEGE TEAM DATA: ", data.data.data.conferences);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // **** GET COLLEGE PLAYERS ****
    // axios
    //   .get("/api/players/getCollegeStats")
    //   .then(data => {
    //     console.log(data.data.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // Getting rpg and ppg from database.
    var rebPPGdata = [];

    axios
      .get("/api/players/getCollegeRPGandPPG")
      .then(data => {
        console.log("THIS IS REBandPPG DATA: ", data);
        for (var i = 1; i < data.data.length; i++) {
          rebPPGdata.push({
            data: [[data.data[i].rebpg, data.data[i].ppg]],
            name: data.data[i].firstName + " " + data.data[i].lastName,
            id: data.data[i].id,
            position: data.data[i].position,
            astpg: data.data[i].astpg,
            stlpg: data.data[i].stlpg,
            blkpg: data.data[i].blkpg,
            mpg: data.data[i].mpg,
            twoPtPct: data.data[i].twoPtPct,
            threePtPct: data.data[i].threePtPct,
            gamesPlayed: data.data[i].gamesPlayed,
            fgPct: data.data[i].fgPct,
            freeThrowPct: data.data[i].freeThrowPct,
            topg: data.data[i].topg,
            fgAtt: data.data[i].fgAtt,
            threePtAtt: data.data[i].threePtAtt,
            ppg: data.data[i].ppg,
            rebpg: data.data[i].rebpg,
            jerseyNumber: data.data[i].jerseyNumber,
            color: "rgba(85, 37, 130, .75)",
            _symbolIndex: 0
          });
        }
        //console.log("THIS IS REBPPGDATA: ", rebPPGdata);
        this.setState({ data: rebPPGdata }, () => {
          this.createChart();
          //console.log("THIS IS STATE: ", this.state);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  createChart() {
    var chart = Highcharts.chart("container", {
      chart: {
        type: "scatter",
        zoomType: "xy"
      },
      title: {
        text: `${this.state.statOne} vs ${this.state.statTwo} ${this.state
          .team} Players`
      },
      subtitle: {
        text: "Source: My Sports Feed"
      },
      xAxis: {
        title: {
          enabled: true,
          text: `${this.state.statTwo}`
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
      },
      yAxis: {
        title: {
          text: `${this.state.statOne}`
        }
      },
      legend: {
        enabled: false,
        layout: "vertical",
        align: "left",
        verticalAlign: "top",
        x: 100,
        y: 70,
        floating: true,
        backgroundColor:
          (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
          "#FFFFFF",
        borderWidth: 1
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 5,
            states: {
              hover: {
                enabled: true,
                lineColor: "rgb(100,100,100)"
              }
            }
          },
          cursor: "pointer",
          point: {
            events: {
              click: event => {
                console.log("hitting");
                console.log(event.point.series.userOptions);
                this.setState(
                  {
                    name: event.point.series.userOptions.name,
                    astpg: event.point.series.userOptions.astpg,
                    position: event.point.series.userOptions.position,
                    stlpg: event.point.series.userOptions.stlpg,
                    blkpg: event.point.series.userOptions.blkpg,
                    mpg: event.point.series.userOptions.mpg,
                    twoPtPct: event.point.series.userOptions.twoPtPct,
                    threePtPct: event.point.series.userOptions.threePtPct,
                    gamesPlayed: event.point.series.userOptions.gamesPlayed,
                    fgPct: event.point.series.userOptions.fgPct,
                    freeThrowPct: event.point.series.userOptions.freeThrowPct,
                    topg: event.point.series.userOptions.topg,
                    fgAtt: event.point.series.userOptions.fgAtt,
                    threePtAtt: event.point.series.userOptions.threePtAtt,
                    ppg: event.point.series.userOptions.ppg,
                    rebpg: event.point.series.userOptions.rebpg,
                    jerseyNumber: event.point.series.userOptions.jerseyNumber
                  },
                  () => {
                    console.log("DAS STATE: ", this.state);
                    this.open();
                  }
                );
              }
            }
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {
            headerFormat: "<b>{series.name}</b><br>",
            pointFormat: `{point.x} ${this.state.statTwo}, {point.y} ${this
              .state.statOne}`
          }
        }
      },
      series: this.state.data
    });
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  firstInputChange(event) {
    //console.log("change logged");
    this.setState({ statOne: event.target.value }, () => {
      console.log("state after first stat selected: ", this.state);
    });
  }

  secondInputChange(event) {
    //console.log("change logged");
    this.setState({ statTwo: event.target.value }, () => {
      console.log("state after second stat selected: ", this.state);
    });
  }

  handleSubmit(event) {
    var statArr = [];
    event.preventDefault();
    console.log("handle submit hitting");
    axios
      .get(`/api/players/getCollegeStatComparison`, {
        params: { statOne: this.state.statOne, statTwo: this.state.statTwo }
      })
      .then(data => {
        console.log(data.data[1]);
        for (var i = 1; i < data.data.length; i++) {
          statArr.push({
            data: [
              [
                data.data[i][this.state.statTwo],
                data.data[i][this.state.statOne]
              ]
            ],
            name: data.data[i].firstName + " " + data.data[i].lastName,
            id: data.data[i].id,
            position: data.data[i].position,
            astpg: data.data[i].astpg,
            stlpg: data.data[i].stlpg,
            blkpg: data.data[i].blkpg,
            mpg: data.data[i].mpg,
            twoPtPct: data.data[i].twoPtPct,
            threePtPct: data.data[i].threePtPct,
            gamesPlayed: data.data[i].gamesPlayed,
            fgPct: data.data[i].fgPct,
            freeThrowPct: data.data[i].freeThrowPct,
            topg: data.data[i].topg,
            fgAtt: data.data[i].fgAtt,
            threePtAtt: data.data[i].threePtAtt,
            ppg: data.data[i].ppg,
            rebpg: data.data[i].rebpg,
            jerseyNumber: data.data[i].jerseyNumber,
            color: "rgba(85, 37, 130, .75)",
            _symbolIndex: 0
          });
        }
        console.log("STATARR: ", statArr);
        this.setState({ data: statArr }, () => {
          this.createChart();
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="mb-3">
              <h4 id="test">College Player Stats</h4>
              <hr />

              <div
                id="container"
                style={{
                  height: "400px",
                  width: "1000px",
                  margin: "0 auto",
                  paddingLeft: "20px"
                }}
              />
              <div className="stat-form">
                <form>
                  <div className="form-group col-lg-4">
                    <label for="sel1" className="select-stat-label">
                      Select Stat:
                    </label>
                    <select
                      className="form-control"
                      id="sel1"
                      onChange={this.firstInputChange}
                    >
                      <option>ppg</option>
                      <option>astpg</option>
                      <option>rebpg</option>
                      <option>mpg</option>
                      <option>stlpg</option>
                      <option>blkpg</option>
                      <option>plusMinuspg</option>
                      <option>topg</option>
                      <option>twoPtPct</option>
                      <option>threePtPct</option>
                      <option>fgPct</option>
                      <option>freeThrowPct</option>
                      <option>gamesPlayed</option>
                      <option>fgAtt</option>
                      <option>threePtAtt</option>
                    </select>
                  </div>
                  <div className="form-group col-lg-4">
                    <label for="sel2" className="select-stat-label">
                      Select Stat:
                    </label>
                    <select
                      onChange={this.secondInputChange}
                      className="form-control"
                      id="sel2"
                    >
                      <option>rebpg</option>
                      <option>ppg</option>
                      <option>astpg</option>
                      <option>mpg</option>
                      <option>stlpg</option>
                      <option>blkpg</option>
                      <option>plusMinuspg</option>
                      <option>topg</option>
                      <option>twoPtPct</option>
                      <option>threePtPct</option>
                      <option>fgPct</option>
                      <option>freeThrowPct</option>
                      <option>gamesPlayed</option>
                      <option>fgAtt</option>
                      <option>threePtAtt</option>
                    </select>
                  </div>
                  <div className="submit-button col-lg-4">
                    <button
                      className="laker-button"
                      onClick={this.handleSubmit}
                      id="submit-button"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Modal
          bsSize="large"
          style={{}}
          show={this.state.showModal}
          onHide={this.close}
          dialogClassName="player-profile-modal"
        >
          <Modal.Body>
            <Row>
              <Col lg={4} className="player-profile-pic-frame">
                <div>
                  <img
                    id="player-profile-pic"
                    src="https://www.washingtonpost.com/blogs/recruiting-insider/files/2015/07/Markelle-Fultz-mug.jpg"
                  />
                </div>
              </Col>
              <Col lg={8} className="player-profile-pic-frame">
                <div>
                  <div>
                    <h3 className="white-text">{this.state.name}</h3>
                    <Button bsSize="xsmall">Add to watch list</Button>
                    <hr />
                    <Col lg={2}>
                      <div>
                        <h4 className="white-text">
                          #{this.state.jerseyNumber} {this.state.position}
                        </h4>
                      </div>
                    </Col>
                    <Col lg={1}>
                      <div className="white-text">|</div>
                    </Col>
                    <Col lg={3}>
                      <div>
                        <h4 className="white-text">6'3" 190 lb</h4>
                      </div>
                    </Col>
                    <Col lg={1}>
                      <div className="white-text">|</div>
                    </Col>
                    <Col lg={5}>
                      <div>
                        <h4 className="white-text">Washington Huskies</h4>
                      </div>
                    </Col>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="stat-row">
              <Row>
                <Col lg={2}>
                  <div className="stat-button">
                    <div className="stat-header">GP</div>
                    <div className="stat-data">{this.state.gamesPlayed}</div>
                  </div>
                </Col>
                <Col lg={2}>
                  <div className="stat-header">MPG</div>
                  <div className="stat-data">{this.state.mpg}</div>
                </Col>
                <Col lg={2}>
                  <div className="stat-header">PPG</div>
                  <div className="stat-data">{this.state.ppg}</div>
                </Col>
                <Col lg={2}>
                  <div className="stat-header">Ast</div>
                  <div className="stat-data">{this.state.astpg}</div>
                </Col>
                <Col lg={2}>
                  <div className="stat-header">Reb</div>
                  <div className="stat-data">{this.state.rebpg}</div>
                </Col>
                <Col lg={2}>
                  <div className="stat-header">Stl</div>
                  <div className="stat-data">{this.state.stlpg}</div>
                </Col>
              </Row>
            </div>
            <div className="stat-row">
              <Row>
                <Col lg={2}>
                  <div className="stat-header">Blk</div>
                  <div className="stat-data">{this.state.blkpg}</div>
                </Col>
                <Col lg={2}>
                  <div className="stat-header">TOV</div>
                  <div className="stat-data">{this.state.topg}</div>
                </Col>
                <Col lg={2}>
                  <div className="stat-header">FG Att</div>
                  <div className="stat-data">{this.state.fgAtt}</div>
                </Col>
                <Col lg={2}>
                  <div className="stat-header">FG %</div>
                  <div className="stat-data">
                    {Math.round(this.state.fgPct * 100 * 10) / 10}
                  </div>
                </Col>
                <Col lg={2}>
                  <div className="stat-header">FT %</div>
                  <div className="stat-data">
                    {Math.round(this.state.freeThrowPct * 100 * 10) / 10}
                  </div>
                </Col>
                <Col lg={2}>
                  <div className="stat-header">2PT %</div>
                  <div className="stat-data">
                    {Math.round(this.state.twoPtPct * 100 * 10) / 10}
                  </div>
                </Col>
              </Row>
            </div>
            <div className="stat-row">
              <Row>
                <Col lg={2} lgOffset={4}>
                  <div className="stat-header">3PT Att</div>
                  <div className="stat-data">{this.state.threePtAtt}</div>
                </Col>
                <Col lg={2}>
                  <div className="stat-header">3PT %</div>
                  <div className="stat-data">
                    {Math.round(this.state.threePtPct * 100 * 10) / 10}
                  </div>
                </Col>
              </Row>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="laker-button" onClick={this.close}>
              Cancel
            </Button>
            <Button className="laker-button" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
