import React from "react";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="fixed-nav sticky-footer bg-dark" id="page-top">
          <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
            id="mainNav"
          >
            <a className="navbar-brand" href="#">
              GMsuite
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                <li
                  className="nav-item active"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Dashboard"
                >
                  <Link to="/">
                    <a className="nav-link" href="#">
                      <i className="fa fa-fw fa-dashboard" />
                      <span className="nav-link-text">Dashboard</span>
                    </a>
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Charts"
                >
                  <Link to="/teamstats">
                    <a className="nav-link" href="#">
                      <i className="fa fa-fw fa-area-chart" />
                      <span className="nav-link-text">NBA Player Stats</span>
                    </a>
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Tables"
                >
                  <Link to="/playerstats">
                    <a className="nav-link" href="#">
                      <i className="fa fa-fw fa-table" />
                      <span className="nav-link-text">Player Stats</span>
                    </a>
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Components"
                >
                  <a
                    className="nav-link nav-link-collapse collapsed"
                    data-toggle="collapse"
                    href="#collapseComponents"
                    data-parent="#exampleAccordion"
                  >
                    <i className="fa fa-fw fa-wrench" />
                    <span className="nav-link-text">Scouting</span>
                  </a>
                  <ul
                    className="sidenav-second-level collapse"
                    id="collapseComponents"
                  >
                    <li>
                      <Link to="/collegescouting">
                        <a href="#">College Scouting</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/nbascouting">
                        <a href="#">NBA Scouting</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className="nav-item"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Example Pages"
                >
                  <a
                    className="nav-link nav-link-collapse collapsed"
                    data-toggle="collapse"
                    href="#collapseExamplePages"
                    data-parent="#exampleAccordion"
                  >
                    <i className="fa fa-fw fa-file" />
                    <span className="nav-link-text">Edit/Add Player</span>
                  </a>
                  <ul
                    className="sidenav-second-level collapse"
                    id="collapseExamplePages"
                  >
                    <li>
                      <Link to="/editplayer">
                        <a href="login.html">Edit Player</a>
                      </Link>
                    </li>
                    <li>
                      <a href="register.html">Add Player</a>
                    </li>
                  </ul>
                </li>
                <li
                  className="nav-item"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Menu Levels"
                >
                  <a
                    className="nav-link nav-link-collapse collapsed"
                    data-toggle="collapse"
                    href="#collapseMulti"
                    data-parent="#exampleAccordion"
                  >
                    <i className="fa fa-fw fa-sitemap" />
                    <span className="nav-link-text">Trade</span>
                  </a>
                  <ul
                    className="sidenav-second-level collapse"
                    id="collapseMulti"
                  >
                    <li>
                      <a href="#">Second Level Item</a>
                    </li>
                    <li>
                      <a href="#">Second Level Item</a>
                    </li>
                    <li>
                      <a
                        className="nav-link-collapse collapsed"
                        data-toggle="collapse"
                        href="#collapseMulti2"
                      >
                        Third Level
                      </a>
                      <ul
                        className="sidenav-third-level collapse"
                        id="collapseMulti2"
                      >
                        <li>
                          <a href="#">Third Level Item</a>
                        </li>
                        <li>
                          <a href="#">Third Level Item</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li
                  className="nav-item"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Link"
                >
                  <a className="nav-link" href="#">
                    <i className="fa fa-fw fa-link" />
                    <span className="nav-link-text">Free Agents</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav sidenav-toggler">
                <li className="nav-item">
                  <a className="nav-link text-center" id="sidenavToggler">
                    <i className="fa fa-fw fa-angle-left" />
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle mr-lg-2"
                    href="#"
                    id="messagesDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-fw fa-envelope" />
                    <span className="d-lg-none">
                      Messages
                      <span className="badge badge-pill badge-primary">
                        12 New
                      </span>
                    </span>
                    <span className="new-indicator text-primary d-none d-lg-block">
                      <i className="fa fa-fw fa-circle" />
                      <span className="number">12</span>
                    </span>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="messagesDropdown"
                  >
                    <h6 className="dropdown-header">New Messages:</h6>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      <strong>David Miller</strong>
                      <span className="small float-right text-muted">
                        11:21 AM
                      </span>
                      <div className="dropdown-message small">
                        Hey there! This new version of SB Admin is pretty
                        awesome! These messages clip off when they reach the end
                        of the box so they don't overflow over to the sides!
                      </div>
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      <strong>Jane Smith</strong>
                      <span className="small float-right text-muted">
                        11:21 AM
                      </span>
                      <div className="dropdown-message small">
                        I was wondering if you could meet for an appointment at
                        3:00 instead of 4:00. Thanks!
                      </div>
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      <strong>John Doe</strong>
                      <span className="small float-right text-muted">
                        11:21 AM
                      </span>
                      <div className="dropdown-message small">
                        I've sent the final files over to you for review. When
                        you're able to sign off of them let me know and we can
                        discuss distribution.
                      </div>
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item small" href="#">
                      View all messages
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle mr-lg-2"
                    href="#"
                    id="alertsDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-fw fa-bell" />
                    <span className="d-lg-none">
                      Alerts
                      <span className="badge badge-pill badge-warning">
                        6 New
                      </span>
                    </span>
                    <span className="new-indicator text-warning d-none d-lg-block">
                      <i className="fa fa-fw fa-circle" />
                      <span className="number">6</span>
                    </span>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="alertsDropdown"
                  >
                    <h6 className="dropdown-header">New Alerts:</h6>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      <span className="text-success">
                        <strong>
                          <i className="fa fa-long-arrow-up" />
                          Status Update
                        </strong>
                      </span>
                      <span className="small float-right text-muted">
                        11:21 AM
                      </span>
                      <div className="dropdown-message small">
                        This is an automated server response message. All
                        systems are online.
                      </div>
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      <span className="text-danger">
                        <strong>
                          <i className="fa fa-long-arrow-down" />
                          Status Update
                        </strong>
                      </span>
                      <span className="small float-right text-muted">
                        11:21 AM
                      </span>
                      <div className="dropdown-message small">
                        This is an automated server response message. All
                        systems are online.
                      </div>
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      <span className="text-success">
                        <strong>
                          <i className="fa fa-long-arrow-up" />
                          Status Update
                        </strong>
                      </span>
                      <span className="small float-right text-muted">
                        11:21 AM
                      </span>
                      <div className="dropdown-message small">
                        This is an automated server response message. All
                        systems are online.
                      </div>
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item small" href="#">
                      View all alerts
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <form className="form-inline my-2 my-lg-0 mr-lg-2">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search for..."
                      />
                      <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">
                          <i className="fa fa-search" />
                        </button>
                      </span>
                    </div>
                  </form>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <i className="fa fa-fw fa-sign-out" />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
