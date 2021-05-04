import React, {Component, useEffect} from "react"
import PropTypes from "prop-types"
import MetaTags from 'react-meta-tags';
import {connect, useSelector, useStore} from "react-redux"
import { Link, withRouter } from "react-router-dom"
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap"
import classnames from "classnames"
import { isEmpty, map, size } from "lodash"

//Import Star Ratings
import StarRatings from "react-star-ratings"

// RangeSlider
import Nouislider from "nouislider-react"
import "nouislider/distribute/nouislider.css"


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"


//Import actions
import {useState} from "react";
import {useProduct} from "../../../hook/useProductHook";
import Filter from "../../../frontoffice/pages/Home/Components/Filter";

function EcommerceProducts(props) {

  const {products, loading, count, error, searchProductKey} = useProduct("", "", "", "", "");
  const  [productsList,setProductsList] = useState(products)
  const [FilterClothes,setFilterClothes] = useState([
    { id: 1, name: "T-shirts", link: "#" },
    { id: 2, name: "Shirts", link: "#" },
    { id: 3, name: "Jeans", link: "#" },
    { id: 4, name: "Jackets", link: "#" },
  ]);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [activeTab,setActiveTab] = useState("1");
  const [discountData,setDiscountData] = useState([
    { label: "Less than 10%", value: 0 },
    { label: "10% or more", value: 10 },
    { label: "20% or more", value: 20 },
    { label: "30% or more", value: 30 },
    { label: "40% or more", value: 40 },
    { label: "50% or more", value: 50 },
  ]);
  const [filters,setFilters] = useState({
    discount: [],
    price: { min: 0, max: 500 },
  });

  const [page,setPage] = useState(1);
  const [totalPage,setTotalPage] = useState(5);

useEffect(()=>{
  console.log(userInfo.role)
  userInfo.role !== "admin" ?
  setProductsList(products.filter((val)=> {
    return val.brand.userId === userInfo.id
  }))
      : setProductsList(products)

},[products])

  const toggleTab=(tab)=> {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  const onSelectDiscount = e => {
    const { value, checked } = e.target
    setFilters(
        {
          ...filters,
          discount: filters.discount.find(item => item === value)
              ? filters.discount.filter(item => item !== value)
              : [...filters.discount, value],
        },
    )

    onFilterProducts(value, checked)

  }


  const onFilterProducts = (value, checked) => {
    console.log(filters)
    const discount = filters.discount;
    let filteredProducts = productsList
    if (!!checked && parseInt(value) === 0) {
      filteredProducts = productsList.filter(product => product.Discount < 10)
    } else if (discount.length > 0) {
      filteredProducts = productsList.filter(
          product => product.Discount >= Math.min(...discount)
      )
    }
    setProductsList(filteredProducts)
  }

  const handlePageClick = page => {
    setPage(page)
  }


  const { history } = props
  return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Products | FitMe !</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs title="Ecommerce" breadcrumbItem="Products" />
            <Row>
              <Col lg="3">
                <Card>
                  <Filter/>
                </Card>
              </Col>

              <Col lg="9">
                <Row className="mb-3">
                  <Col xl="4" sm="6">
                    <div className="mt-2">
                      <h5>Clothes</h5>
                    </div>
                  </Col>
                  <Col lg="8" sm="6">
                    <Form className="mt-4 mt-sm-0 float-sm-end d-flex align-items-center">
                      <div className="search-box me-2">
                        <div className="position-relative">
                          <Input
                              type="text"
                              className="form-control border-0"
                              placeholder="Search..."
                          />
                          <i className="bx bx-search-alt search-icon" />
                        </div>
                      </div>
                      <Nav className="product-view-nav" pills>
                        <NavItem>
                          <NavLink
                              className={classnames({
                                active: activeTab === "1",
                              })}
                              onClick={() => {
                                toggleTab("1")
                              }}
                          >
                            <i className="bx bx-grid-alt" />
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                              className={classnames({
                                active: activeTab === "2",
                              })}
                              onClick={() => {
                                toggleTab("2")
                              }}
                          >
                            <i className="bx bx-list-ul" />
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <Link to="/add-product">  <button className="btn btn-fitMe btn-outline-success ">Add Products</button></Link>

                    </Form>
                  </Col>
                </Row>
                <Row>
                  {!isEmpty(products) &&
                  products.map((product, key) => (
                      <Col xl="4" sm="6" key={"_col_" + key}>
                        <Card onClick={() =>
                            history.push(
                                `/product-detail/${product.id}`
                            )
                        }>
                          <CardBody>
                            <Link to="#">
                              <div className="product-img position-relative">
                                {product.isDiscounted ? (
                                    <div className="avatar-sm product-ribbon">
                                    <span className="avatar-title rounded-circle  bg-primary fitMe-color">
                                      {`-${product.discount}%`}
                                    </span>
                                    </div>
                                ) : null}

                                <img
                                    src={product.productImage}
                                    alt=""
                                    className="img-fluid mx-auto d-block"
                                />
                              </div>
                            </Link>

                            <div className="mt-4 text-center">
                              <h5 className="mb-3 text-truncate">
                                <Link
                                    to={"/product-detail/" + product.id}
                                    className="text-dark"
                                >
                                  {product.name}{" "}
                                </Link>
                              </h5>
                              <div className="text-muted mb-3">
                                <StarRatings
                                    rating={product.rating}
                                    starRatedColor="#F1B44C"
                                    starEmptyColor="#2D363F"
                                    numberOfStars={5}
                                    name="rating"
                                    starDimension="14px"
                                    starSpacing="3px"
                                />
                              </div>
                              <h5 className="my-0">
                                  <span className="text-muted me-2">
                                    <del>TND {product.price}</del>
                                  </span>{" "}
                                <b>TND {product.price-((product.price*product.discount)/100)}</b>
                              {/*  TODO : test discount*/}
                              </h5>
                            </div>

                          </CardBody>
                        </Card>
                      </Col>
                  ))}
                </Row>

                <Row>
                  <Col lg="12">
                    <Pagination className="pagination pagination-rounded justify-content-center mt-3 mb-4 pb-1 pagination-b-0">
                      <PaginationItem disabled={page === 1}>
                        <PaginationLink
                            previous
                            href="#"
                            onClick={() => handlePageClick(page - 1)}
                        />
                      </PaginationItem>
                      {map(Array(totalPage), (item, i) => (
                          <PaginationItem active={i + 1 === page} key={i}>
                            <PaginationLink
                                onClick={() => handlePageClick(i + 1)}
                                href="#"
                            >
                              {i + 1}
                            </PaginationLink>
                          </PaginationItem>
                      ))}
                      <PaginationItem disabled={page === totalPage}>
                        <PaginationLink
                            next
                            href="#"
                            onClick={() => handlePageClick(page + 1)}
                        />
                      </PaginationItem>
                    </Pagination>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
  )

}


export default EcommerceProducts
