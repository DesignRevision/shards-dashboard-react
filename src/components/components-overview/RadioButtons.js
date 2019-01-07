import React from "react";
import { Col, FormRadio } from "shards-react";

const RadioButtons = () => (
  <Col sm="12" md="4" className="mb-3">
    <strong className="text-muted d-block mb-2">Radio Buttons</strong>
    <fieldset>
      <FormRadio>Default</FormRadio>
      <FormRadio defaultChecked>Checked</FormRadio>
      <FormRadio disabled>Disabled</FormRadio>
      <FormRadio disabled defaultChecked>
        Disabled Checked
      </FormRadio>
    </fieldset>
  </Col>
);

export default RadioButtons;
