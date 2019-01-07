import React from "react";
import {
  InputGroup,
  FormInput,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "shards-react";

class DropdownInputGroups extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdown1: false,
      dropdown2: false
    };
  }

  toggle(which) {
    const newState = { ...this.state };
    newState[which] = !this.state[which];
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <FormInput />
          <Dropdown
            open={this.state.dropdown1}
            toggle={() => this.toggle("dropdown1")}
            addonType="append"
          >
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu small right>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </InputGroup>

        <InputGroup className="mb-3">
          <Dropdown
            open={this.state.dropdown2}
            toggle={() => this.toggle("dropdown2")}
            addonType="prepend"
          >
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu small>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <FormInput />
        </InputGroup>
      </div>
    );
  }
}

export default DropdownInputGroups;
