import React from "react";
import classNames from "classnames";
import {
  InputGroup,
  DatePicker,
  InputGroupAddon,
  InputGroupText
} from "shards-react";

import "../../assets/range-date-picker.css";

class RangeDatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: undefined,
      endDate: undefined
    };

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  handleStartDateChange(value) {
    this.setState({
      ...this.state,
      ...{ startDate: new Date(value) }
    });
  }

  handleEndDateChange(value) {
    this.setState({
      ...this.state,
      ...{ endDate: new Date(value) }
    });
  }

  render() {
    const { className } = this.props;
    const classes = classNames(className, "d-flex", "my-auto", "date-range");

    return (
      <InputGroup className={classes}>
        <DatePicker
          size="sm"
          selected={this.state.startDate}
          onChange={this.handleStartDateChange}
          placeholderText="Start Date"
          dropdownMode="select"
          className="text-center"
        />
        <DatePicker
          size="sm"
          selected={this.state.endDate}
          onChange={this.handleEndDateChange}
          placeholderText="End Date"
          dropdownMode="select"
          className="text-center"
        />
        <InputGroupAddon type="append">
          <InputGroupText>
            <i className="material-icons">&#xE916;</i>
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}

export default RangeDatePicker;
