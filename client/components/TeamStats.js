import React from "react";
import axios from "axios";

export default class TeamStats extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      statOne: "ppg",
      statTwo: "rebpg",
      team: "All NBA"
    };
    this.createChart = this.createChart.bind(this);
    this.firstInputChange = this.firstInputChange.bind(this);
    this.secondInputChange = this.secondInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Getting rpg and ppg from database.
    var rebPPGdata = [];

    axios
      .get("/api/players/getRPGandPPG")
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
    // Apply the grey theme
    // Highcharts.setOptions({
    //   colors: [
    //     "#DDDF0D",
    //     "#7798BF",
    //     "#55BF3B",
    //     "#DF5353",
    //     "#aaeeee",
    //     "#ff0066",
    //     "#eeaaee",
    //     "#55BF3B",
    //     "#DF5353",
    //     "#7798BF",
    //     "#aaeeee"
    //   ],
    //   chart: {
    //     backgroundColor: {
    //       linearGradient: [0, 0, 0, 400],
    //       stops: [[0, "rgb(96, 96, 96)"], [1, "rgb(16, 16, 16)"]]
    //     },
    //     borderWidth: 0,
    //     borderRadius: 0,
    //     plotBackgroundColor: null,
    //     plotShadow: false,
    //     plotBorderWidth: 0
    //   },
    //   title: {
    //     style: {
    //       color: "#FFF",
    //       font:
    //         "16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"
    //     }
    //   },
    //   subtitle: {
    //     style: {
    //       color: "#DDD",
    //       font:
    //         "12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"
    //     }
    //   },
    //   xAxis: {
    //     gridLineWidth: 0,
    //     lineColor: "#999",
    //     tickColor: "#999",
    //     labels: {
    //       style: {
    //         color: "#999",
    //         fontWeight: "bold"
    //       }
    //     },
    //     title: {
    //       style: {
    //         color: "#AAA",
    //         font:
    //           "bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"
    //       }
    //     }
    //   },
    //   yAxis: {
    //     alternateGridColor: null,
    //     minorTickInterval: null,
    //     gridLineColor: "rgba(255, 255, 255, .1)",
    //     lineWidth: 0,
    //     tickWidth: 0,
    //     labels: {
    //       style: {
    //         color: "#999",
    //         fontWeight: "bold"
    //       }
    //     },
    //     title: {
    //       style: {
    //         color: "#AAA",
    //         font:
    //           "bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"
    //       }
    //     }
    //   },
    //   legend: {
    //     itemStyle: {
    //       color: "#CCC"
    //     },
    //     itemHoverStyle: {
    //       color: "#FFF"
    //     },
    //     itemHiddenStyle: {
    //       color: "#333"
    //     }
    //   },
    //   credits: {
    //     style: {
    //       right: "50px"
    //     }
    //   },
    //   labels: {
    //     style: {
    //       color: "#CCC"
    //     }
    //   },
    //   tooltip: {
    //     backgroundColor: {
    //       linearGradient: [0, 0, 0, 50],
    //       stops: [[0, "rgba(96, 96, 96, .8)"], [1, "rgba(16, 16, 16, .8)"]]
    //     },
    //     borderWidth: 0,
    //     style: {
    //       color: "#FFF"
    //     }
    //   },

    //   plotOptions: {
    //     line: {
    //       dataLabels: {
    //         color: "#CCC"
    //       },
    //       marker: {
    //         lineColor: "#333"
    //       }
    //     },
    //     spline: {
    //       marker: {
    //         lineColor: "#333"
    //       }
    //     },
    //     scatter: {
    //       marker: {
    //         lineColor: "#333"
    //       }
    //     }
    //   },

    //   toolbar: {
    //     itemStyle: {
    //       color: "#CCC"
    //     }
    //   }
    // });

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
      .get(`/api/players/getStatComparison`, {
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
              <h4 id="test">NBA Player Stats</h4>
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
    );
  }
}
