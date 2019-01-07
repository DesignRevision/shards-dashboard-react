import React from "react";
import {
  FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "shards-react";

const InputGroups = () => (
  <div>
    <InputGroup className="mb-3">
      <InputGroupAddon type="prepend">
        <InputGroupText>@</InputGroupText>
      </InputGroupAddon>
      <FormInput placeholder="Username" />
    </InputGroup>

    <InputGroup className="mb-3">
      <FormInput value="catalin" onChange={() => {}} />
      <InputGroupAddon type="append">
        <InputGroupText>@designrevision.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>

    <InputGroup className="mb-3">
      <InputGroupAddon type="prepend">
        <InputGroupText>$</InputGroupText>
      </InputGroupAddon>
      <FormInput value="1000" onChange={() => {}} />
      <InputGroupAddon type="append">
        <InputGroupText>.00</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default InputGroups;
