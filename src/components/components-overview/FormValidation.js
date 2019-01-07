import React from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormFeedback,
  FormInput,
  FormSelect
} from "shards-react";

const FormValidation = () => (
  <Col sm="12" md="6">
    <strong className="text-muted d-block mb-2">Form Validation</strong>
    <Form>
      <Row form>
        <Col md="6" className="form-group">
          <FormInput
            value="Vasile"
            placeholder="First name"
            required
            valid
            onChange={() => {}}
          />
          <FormFeedback valid>The first name looks good!</FormFeedback>
        </Col>
        <Col md="6" className="form-group">
          <FormInput
            value="Catalin"
            placeholder="Last name"
            required
            valid
            onChange={() => {}}
          />
          <FormFeedback valid>The last name looks good!</FormFeedback>
        </Col>
      </Row>
      <FormGroup>
        <FormInput placeholder="Username" required invalid />
        <FormFeedback>The username is taken.</FormFeedback>
      </FormGroup>
      <FormGroup>
        <FormSelect invalid>
          <option>Choose</option>
          <option>...</option>
        </FormSelect>
        <FormFeedback>Please select your state</FormFeedback>
      </FormGroup>
    </Form>
  </Col>
);

export default FormValidation;
