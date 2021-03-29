import React, { Component } from "react"
import PropTypes from "prop-types"
import MetaTags from 'react-meta-tags';
import { connect } from "react-redux"
import { isEmpty, size } from "lodash"
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator"

//Import Breadcrumb
import Breadcrumbs from "@BackOfficeComponents/Common/Breadcrumb"
import EcommerceCustomerColumns from "./EcommerceCustomerColumns"

class EcommerceCustomers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: [],
    }
  }

  componentDidMount() {

  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { customers } = this.props
    if (!isEmpty(customers) && size(prevProps.customers) !== size(customers)) {
      this.setState({ customers })
    }
  }

  // eslint-disable-next-line no-unused-vars
  handleTableChange = (type, { page, searchText }) => {
    const { customers } = this.props
    this.setState({
      customers: customers.filter(customer =>
        Object.keys(customer).some(key =>
          customer[key].toLowerCase().includes(searchText.toLowerCase())
        )
      ),
    })
  }

  render() {
    const { customers } = this.state
    const pageOptions = {
      sizePerPage: 10,
      totalSize: 50, // replace later with size(customers),
      custom: true,
    }
    const { SearchBar } = Search

    return (
      <React.Fragment>
        <div className="page-content">

          <Container fluid>
            <Breadcrumbs title="Dashborad" breadcrumbItem="Products" />
            <Row>
              <Col xs="12">
                <Card>
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField="id"
                          data={customers || []}
                          columns={EcommerceCustomerColumns()}
                          bootstrap4
                          search
                        >
                          {toolkitProps => (
                            <React.Fragment>
                              <Row>
                                <Col sm="4">
                                  <div className="search-box me-2 mb-2 d-inline-block">
                                    <div className="position-relative">
                                      <SearchBar
                                        {...toolkitProps.searchProps}
                                      />
                                      <i className="bx bx-search-alt search-icon" />
                                    </div>
                                  </div>
                                </Col>
                                <Col sm="8">
                                  <div className="text-sm-end">

                                    <a
                                        href="/dashboard/admin/AddProducts"
                                        color="success"
                                        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                                    >
                                      <i className="fa fa-plus fa-sm text-white-50"></i> Add New Product
                                    </a>
                                  </div>
                                </Col>
                              </Row>
                             
                                  <div className="table-responsive">
                                    <BootstrapTable
                                      keyField={"id"}
                                      responsive
                                      remote
                                      bordered={false}
                                      striped={false}
                                      classes={
                                        "table align-middle table-nowrap"
                                      }
                                      headerWrapperClasses={"thead-light"}
                                      {...toolkitProps.baseProps}
                                      onTableChange={this.handleTableChange}
                                      {...paginationTableProps}
                                    />
                                  </div>
                                <div className="pagination pagination-rounded justify-content-end mb-2">
                                  <PaginationListStandalone
                                    {...paginationProps}
                                  />
                                </div>
                            </React.Fragment>
                          )}
                        </ToolkitProvider>
                      )}
                    </PaginationProvider>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

EcommerceCustomers.propTypes = {
  customers: PropTypes.array,
  onGetCustomers: PropTypes.func,
}

const mapStateToProps = ({ ecommerce }) => ({
  customers: ecommerce.customers,
})

const mapDispatchToProps = dispatch => ({

})

export default EcommerceCustomers
