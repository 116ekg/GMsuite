import React from "react";
import axios from "axios";
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
      showModal: false
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
        //console.log("THIS IS REBandPPG DATA: ", data.data[1]);
        for (var i = 1; i < data.data.length; i++) {
          rebPPGdata.push({
            data: [[data.data[i].rebpg, data.data[i].ppg]],
            name: data.data[i].firstName + " " + data.data[i].lastName,
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
              click: () => {
                console.log("hitting");
                this.open();
                console.log(event.point);
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
        <Modal style={{}} show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Player Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>This is the clicked player.</label>
            <Form>
              <input
                name="player"
                className="edit-profile-input"
                type="text"
                placeholder="Enter the player"
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Cancel</Button>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
