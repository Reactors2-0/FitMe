import {Card, CardBody, Col, Nav, NavItem, NavLink, Row, TabContent, Table, TabPane} from "reactstrap";
import classnames from "classnames";
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings";
import Reviews from "../Ecommerce/EcommerceProducts/Reviews";
import React, {useState} from "react";

export default function ProductDetailsComponent (props){
    const [activeTab,setActiveTab] =useState("1")
    const {product} = props
    const toggleTab =(tab)=> {
        if (activeTab !== tab) {
            setActiveTab(tab)
        }
    }
    const imageShow=(img, id)=> {
        const expandImg = document.getElementById("expandedImg" + id)
        expandImg.src = img
    }
    return(
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col xl="6">
                                    <div className="product-detai-imgs">
                                        <Row>
                                            <Col md="2" xs="3">
                                                <Nav className="flex-column" pills>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({
                                                                active: activeTab === "1",
                                                            })}
                                                            onClick={() => {
                                                                toggleTab("1")
                                                            }}
                                                        >
                                                            <img
                                                                src={product.productImage}
                                                                alt=""
                                                                onClick={() => {
                                                                    imageShow(
                                                                        product.productImage,
                                                                        1
                                                                    )
                                                                }}
                                                                className="img-fluid mx-auto d-block rounded"
                                                            />
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
                                                            <img
                                                                src={product.productImage}
                                                                alt=""
                                                                onClick={() => {
                                                                    imageShow(
                                                                        product.productImage,
                                                                        2
                                                                    )
                                                                }}
                                                                className="img-fluid mx-auto d-block rounded"
                                                            />
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({
                                                                active: activeTab === "3",
                                                            })}
                                                            onClick={() => {
                                                                toggleTab("3")
                                                            }}
                                                        >
                                                            <img
                                                                src={product.productImage}
                                                                alt=""
                                                                onClick={() => {
                                                                    imageShow(
                                                                        product.productImage,
                                                                        3
                                                                    )
                                                                }}
                                                                className="img-fluid mx-auto d-block rounded"
                                                            />
                                                        </NavLink>
                                                    </NavItem>
                                                </Nav>
                                            </Col>
                                            <Col md={{ size: 7, offset: 1 }} xs="9">

                                                <TabContent activeTab={activeTab}>
                                                    <TabPane tabId="1">
                                                        <div>
                                                            <img
                                                                src={product.productImage}
                                                                alt=""
                                                                id="expandedImg1"
                                                                className="img-fluid mx-auto d-block"
                                                            />
                                                        </div>
                                                    </TabPane>
                                                    <TabPane tabId="2">
                                                        <div>
                                                            <img
                                                                src={product.productImage}
                                                                id="expandedImg2"
                                                                alt=""
                                                                className="img-fluid mx-auto d-block"
                                                            />
                                                        </div>
                                                    </TabPane>
                                                    <TabPane tabId="3">
                                                        <div>
                                                            <img
                                                                src={product.productImage}
                                                                id="expandedImg3"
                                                                alt=""
                                                                className="img-fluid mx-auto d-block"
                                                            />
                                                        </div>
                                                    </TabPane>
                                                    <TabPane tabId="4">
                                                        <div>
                                                            <img
                                                                src={product.productImage}
                                                                id="expandedImg4"
                                                                alt=""
                                                                className="img-fluid mx-auto d-block"
                                                            />
                                                        </div>
                                                    </TabPane>
                                                </TabContent>

                                            </Col>
                                        </Row>
                                    </div>
                                </Col>

                                <Col xl="6">
                                    <div className="mt-4 mt-xl-3">
                                        <Link to="#" className="text-primary">
                                            {product.category.categoryName}
                                        </Link>
                                        <h4 className="mt-1 mb-3">{product.name}</h4>

                                        <div className="text-muted float-start me-3">
                                            <StarRatings
                                                rating={4}
                                                starRatedColor="#F1B44C"
                                                starEmptyColor="#2D363F"
                                                numberOfStars={5}
                                                name="rating"
                                                starDimension="14px"
                                                starSpacing="3px"
                                            />
                                        </div>
                                        <p className="text-muted mb-4">
                                            {/*( {product.reviews} Customers Review )*/}
                                        </p>

                                        {!!product.isDiscounted && (
                                            <h6 className="text-success text-uppercase">
                                                {product.discount} % Off
                                            </h6>
                                        )}
                                        <h5 className="mb-4">
                                            Price :{" "}
                                            <span className="text-muted me-2">
                                <del>${product.price} TND</del>
                              </span>{" "}
                                            <b>{product.price-((product.price*product.discount)/100)} TND</b>
                                        </h5>
                                        <p className="text-muted mb-4">
                                            {product.description}
                                        </p>
                                        <Row className="mb-3">
                                            <Col md="6">
                                                {product.features &&
                                                product.features.map((item, i) => (
                                                    <div key={i}>
                                                        <p className="text-muted">
                                                            <i
                                                                className={classnames(
                                                                    item.icon,
                                                                    " font-size-16 align-middle text-primary me-2"
                                                                )}
                                                            />
                                                            {item.type && `${item.type}: `}
                                                            {item.value}
                                                        </p>
                                                    </div>
                                                ))}
                                            </Col>
                                            <Col md="6">
                                                {product.features &&
                                                product.features.map((item, i) => (
                                                    <div key={i}>
                                                        <p className="text-muted">
                                                            <i
                                                                className={classnames(
                                                                    item.icon,
                                                                    " font-size-16 align-middle text-primary me-2"
                                                                )}
                                                            />
                                                            {item.type && `${item.type}:`}
                                                            {item.value}
                                                        </p>
                                                    </div>
                                                ))}
                                            </Col>
                                        </Row>

                                        <div className="product-color">
                                            <h5 className="font-size-15">Color :</h5>
                                            {product.color &&
                                            product.color.map((option, key) => (
                                                <Link to="#" className="active" key={key}>
                                                    <div className="product-color-item border rounded" style={{backgroundColor : option.color,width : 50,height :50}} >

                                                    </div>
                                                    <p>{option.color}</p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <div className="mt-5">
                                <h5 className="mb-3">Specifications :</h5>

                                <div className="table-responsive">
                                    <Table className="table mb-0 table-bordered">
                                        <tbody>
                                        {product.specification &&
                                        product.specification.map(
                                            (specification, i) => (
                                                <tr key={i}>
                                                    <th
                                                        scope="row"
                                                        style={{ width: "400px" }}
                                                        className={"text-capitalize"}
                                                    >
                                                        {specification.type}
                                                    </th>
                                                    <td>{specification.value}</td>
                                                </tr>
                                            )
                                        )}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <Reviews comments={product.comments} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );

}
