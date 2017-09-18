import React from "react";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Col,
  Button,
  Well,
  Row,
  Modal,
  Tabs,
  Tab
} from "react-bootstrap";

export default class PlayerProfileTabs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Player Stats">
            Tab 1 content
          </Tab>
          <Tab eventKey={2} title="Tab 2">
            Tab 2 content
          </Tab>
          <Tab eventKey={3} title="Tab 3">
            Tab 3 content
          </Tab>
        </Tabs>
      </div>
    );
  }
}
