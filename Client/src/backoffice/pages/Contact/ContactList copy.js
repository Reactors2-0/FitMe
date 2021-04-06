import React, { Component } from "react"

import {Card, CardBody, CardTitle, Badge, Button, Container} from "reactstrap"
import { Link } from "react-router-dom"
import EcommerceOrdersModal from "../Contact/ContactsModal"
import Breadcrumbs from "../../components/Common/Breadcrumb";

class ContactList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      transactions: [
        {
          id: "customCheck2",
          orderId: "#SK2540",
          billingName: "Neal Matthews",
          Date: "07 Oct, 2019",
          total: "$400",
          badgeClass: "success",
          paymentStatus: "Paid",
          methodIcon: "fa-cc-mastercard",
          paymentMethod: "Mastercard",
          link: "#",
        },
        {
          id: "customCheck3",
          orderId: "#SK2541",
          billingName: "Jamal Burnett",
          Date: "07 Oct, 2019",
          total: "$380",
          badgeClass: "danger",
          paymentStatus: "Chargeback",
          methodIcon: "fa-cc-visa",
          paymentMethod: "Visa",
          link: "#",
        },
        {
          id: "customCheck4",
          orderId: "#SK2542",
          billingName: "Juan Mitchell",
          Date: "06 Oct, 2019",
          total: "$384",
          badgeClass: "success",
          paymentStatus: "Paid",
          methodIcon: "fa-cc-paypal",
          paymentMethod: "Paypal",
          link: "#",
        },
        {
          id: "customCheck5",
          orderId: "#SK2543",
          billingName: "Barry Dick",
          Date: "05 Oct, 2019",
          total: "$412",
          badgeClass: "success",
          paymentStatus: "Paid",
          methodIcon: "fa-cc-mastercard",
          paymentMethod: "Mastercard",
          link: "#",
        },
        {
          id: "customCheck6",
          orderId: "#SK2544",
          billingName: "Ronald Taylor",
          Date: "04 Oct, 2019",
          total: "$404",
          badgeClass: "warning",
          paymentStatus: "Refund",
          methodIcon: "fa-cc-visa",
          paymentMethod: "Visa",
          link: "#",
        },
        {
          id: "customCheck7",
          orderId: "#SK2545",
          billingName: "Jacob Hunter",
          Date: "04 Oct, 2019",
          total: "$392",
          badgeClass: "success",
          paymentStatus: "Paid",
          methodIcon: "fa-cc-paypal",
          paymentMethod: "Paypal",
          link: "#",
        },
      ],
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }

  render() {
    return (
      <React.Fragment>
        <EcommerceOrdersModal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
        />
        <div className="page-content">

          <Container fluid>
            <Breadcrumbs title="Dashborad" breadcrumbItem="Contact" />


            <Card>
          <CardBody>
            <CardTitle className="mb-4 h4">READ EMAIL
              </CardTitle>
            <div className="table-responsive">
              <table className="table align-middle table-nowrap mb-0">
                <thead className="table-light">
                  <tr>
                    <th style={{ width: "20px" }}>
                      <div className="form-check font-size-16 align-middle" style={{ width: '24px' }}>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="transactionCheck01"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="transactionCheck01"
                        ></label>
                      </div>
                    </th>
                    <th className="align-middle">ID</th>
                    <th className="align-middle"> Name</th>
                    <th className="align-middle">Date</th>
                    <th className="align-middle">Status</th>
                    <th className="align-middle">View Details</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.transactions.map((transaction, key) => (
                    <tr key={"_tr_" + key}>
                      <td>
                        <div className="form-check font-size-16">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={transaction.id}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={transaction.id}
                          ></label>
                        </div>
                      </td>
                      <td>
                        <Link to="#" className="text-body fw-bold">
                          {" "}
                          {transaction.orderId}{" "}
                        </Link>{" "}
                      </td>
                      <td>{transaction.billingName}</td>
                      <td>{transaction.Date}</td>
                      <td>
                        <Badge
                          className={
                            "font-size-11 badge-soft-" + transaction.badgeClass
                          }
                          color={transaction.badgeClass}
                          pill
                        >
                          {transaction.paymentStatus}
                        </Badge>
                      </td>

                      <td>
                        <Button
                          type="button"
                          color="primary"
                          size="sm"
                          className="btn-rounded waves-effect waves-light"
                          // onClick={this.togglemodal}
                          onClick={this.toggleModal}
                        >
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default ContactList
