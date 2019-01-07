import React from "react";
import { Row, Col, Button } from "shards-react";

const NormalOutlineButtons = () => (
  <Row>
    <Col>
      <Button outline theme="primary" className="mb-2 mr-1">
        Primary
      </Button>
      <Button outline theme="secondary" className="mb-2 mr-1">
        Secondary
      </Button>
      <Button outline theme="success" className="mb-2 mr-1">
        Success
      </Button>
      <Button outline theme="danger" className="mb-2 mr-1">
        Danger
      </Button>
      <Button outline theme="warning" className="mb-2 mr-1">
        Warning
      </Button>
      <Button outline theme="info" className="mb-2 mr-1">
        Info
      </Button>
      <Button outline theme="dark" className="mb-2 mr-1">
        Dark
      </Button>
      <Button outline theme="light" className="mb-2 mr-1">
        Light
      </Button>
    </Col>
  </Row>
);

export default NormalOutlineButtons;
