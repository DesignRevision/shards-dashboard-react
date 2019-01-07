import React from "react";
import { Row, Col, Button } from "shards-react";

const NormalButtons = () => (
  <Row>
    <Col>
      <Button theme="primary" className="mb-2 mr-1">
        Primary
      </Button>
      <Button theme="secondary" className="mb-2 mr-1">
        Secondary
      </Button>
      <Button theme="success" className="mb-2 mr-1">
        Success
      </Button>
      <Button theme="danger" className="mb-2 mr-1">
        Danger
      </Button>
      <Button theme="warning" className="mb-2 mr-1">
        Warning
      </Button>
      <Button theme="info" className="mb-2 mr-1">
        Info
      </Button>
      <Button theme="dark" className="mb-2 mr-1">
        Dark
      </Button>
      <Button theme="light" className="mb-2 mr-1">
        Light
      </Button>
    </Col>
  </Row>
);

export default NormalButtons;
