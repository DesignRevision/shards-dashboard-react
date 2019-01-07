import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  InputGroup,
  InputGroupAddon,
  FormCheckbox,
  FormInput
} from "shards-react";

const SidebarCategories = ({ title }) => (
  <Card small className="mb-3">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="px-3 pb-2">
          <FormCheckbox className="mb-1" value="uncategorized" defaultChecked>
            Uncategorized
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="design" defaultChecked>
            Design
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="development">
            Development
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="writing">
            Writing
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="books">
            Books
          </FormCheckbox>
        </ListGroupItem>

        <ListGroupItem className="d-flex px-3">
          <InputGroup className="ml-auto">
            <FormInput placeholder="New category" />
            <InputGroupAddon type="append">
              <Button theme="white" className="px-2">
                <i className="material-icons">add</i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
);

SidebarCategories.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarCategories.defaultProps = {
  title: "Categories"
};

export default SidebarCategories;
