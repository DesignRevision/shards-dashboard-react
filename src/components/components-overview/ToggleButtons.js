import React from "react";
import { Col, FormCheckbox } from "shards-react";

const ToggleButtons = () => (
  <Col sm="12" md="4" className="mb-3">
    <strong className="text-muted d-block mb-2">Toggle Switches</strong>
    <fieldset>
      <FormCheckbox toggle small>
        Default
      </FormCheckbox>
      <FormCheckbox toggle small defaultChecked>
        Checked
      </FormCheckbox>
      <FormCheckbox toggle small disabled>
        Disabled
      </FormCheckbox>
      <FormCheckbox toggle small defaultChecked disabled>
        Disabled Checked
      </FormCheckbox>
    </fieldset>
  </Col>
);

export default ToggleButtons;
