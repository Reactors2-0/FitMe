import React from "react"
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Label,
  UncontrolledDropdown,
} from "reactstrap"

const EcommerceCustomerColumns = () => [
  {
    dataField: "id",
    text: "#",
    formatter: (cellContent, row) => (
      <div className="form-check font-size-16">
        <Input type="checkbox" className="form-check-input" id={row.id} />
        <Label className="form-check-label" htmlFor={row.id}>
          &nbsp;
        </Label>
      </div>
    ),
  },
  {
    dataField: "username",
    text: "Username",
    sort: true,
  },
  {
    text: "Phone / Email",
    dataField: "phone",
    sort: true,
    formatter: (cellContent, row) => (
      <>
        <p className="mb-1">{row.phone}</p>
        <p className="mb-0">{row.email}</p>
      </>
    ),
  },
  {
    dataField: "address",
    text: "Address",
    sort: true,
  },
  {
    dataField: "rating",
    text: "Rating",
    sort: true,
    formatter: (cellContent, row) => (
      <Badge color="success" className="bg-success font-size-12">
        <i className="mdi mdi-star me-1" />
        {row.rating}
      </Badge>
    ),
  },
  {
    dataField: "walletBalance",
    text: "Wallet Balance",
    sort: true,
  },
  {
    dataField: "joiningDate",
    text: "Joining Date",
    sort: true,
  },
  {
    dataField: "menu",
    isDummyField: true,
    text: "Action",
    formatter: () => (
      <UncontrolledDropdown>
        <DropdownToggle href="#" className="card-drop" tag="a">
          <i className="mdi mdi-dots-horizontal font-size-18" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem href="#">
            <i className="mdi mdi-pencil font-size-16 text-success me-1" />{" "}
            Edit
          </DropdownItem>
          <DropdownItem href="#">
            <i className="mdi mdi-trash-can font-size-16 text-danger me-1" />{" "}
            Delete
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    ),
  },
]

export default EcommerceCustomerColumns
