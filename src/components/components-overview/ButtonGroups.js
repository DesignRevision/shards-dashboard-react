import React from "react";
import { ButtonGroup, Button } from "shards-react";

const ButtonGroups = () => (
  <ButtonGroup className="mb-3">
    <Button theme="primary">Fizz</Button>
    <Button theme="white">Buzz</Button>
    <Button theme="white">Foo</Button>
    <Button theme="white">Bar</Button>
  </ButtonGroup>
);

export default ButtonGroups;
