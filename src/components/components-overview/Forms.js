import React from "react";
import {
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "shards-react";

const Forms = () => (
  <Col sm="12" md="6">
    <strong className="text-muted d-block mb-2">Forms</strong>
    <Form>
      <FormGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon type="prepend">
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <FormInput placeholder="Username" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <FormInput
          type="password"
          placeholder="Password"
          value="myCoolPassword"
          onChange={() => {}}
        />
      </FormGroup>
      <FormGroup>
        <FormInput
          placeholder="1234 Main St"
          value="7898 Kensington Junction, New York, USA"
          onChange={() => {}}
        />
      </FormGroup>
      <Row form>
        <Col md="7">
          <FormInput value="New York" onChange={() => {}} />
        </Col>
        <Col md="5" className="form-group">
          <FormSelect>
            <option>Choose ...</option>
            <option>...</option>
          </FormSelect>
        </Col>
      </Row>
    </Form>
  </Col>
);

export default Forms;
