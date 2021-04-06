import React, {Component, useEffect} from "react"
import PropTypes from "prop-types"
import MetaTags from 'react-meta-tags';
import { useDispatch, useSelector} from "react-redux"
import  { Link ,Redirect} from "react-router-dom"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Table,
} from "reactstrap"
import classnames from "classnames"
import { isEmpty } from "lodash"

//Import Star Ratings
import StarRatings from "react-star-ratings"

//Import Product Images

//Import Breadcrumb
import Breadcrumbs from "@BackOfficeComponents/Common/Breadcrumb";

//Import actions
import Reviews from "../Ecommerce/EcommerceProducts/Reviews"
import {useState} from "react";
import * as productAction from "../../../actions/productAction";
import ProductDetailsComponent from "./ProductDetailsComponent";
import ProductUpdateComponent from "./ProductUpdateComponent";
import Modal from "react-bootstrap/Modal";

function ProductDetail ({match,history}) {


    const productData = useSelector((state) => state.Product);

    const { loading, product, error } = productData;
    const  [productsItem,setProductItem] = useState(product)

    const dispatch = useDispatch();
    const [toUpdate,setToUpdate] = useState(false)
    const [toDelete,setToDelete] = useState(false)
    const handelUpdate=  (updateData,id)=>{

        updateData.color =JSON.stringify(updateData.color);
         dispatch(productAction.EditProduct(id, updateData))
        updateData.color =JSON.parse(updateData.color);

        setProductItem(updateData);

        return <Redirect to={`/product-detail/${match.params.id}`}/>
    }
    useEffect(() => {
        setProductItem(product);
    }, [product])

    useEffect(() => {
        dispatch(productAction.product(match.params.id));
        // eslint-disable-next-line
    }, [dispatch, match]);
    const handleDelete = () => {
        setToDelete(false);
        dispatch(productAction.deleteProduct(match.params.id));
        history.push("/dashboard/admin/Products");



    };
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Products Details | FitMe!</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs title="Ecommerce" breadcrumbItem="Product Details" />
            <div className="d-flex justify-content-end">
              <button
                  className="btn  btn-outline-dark mt-2 btn-fitMe-cart" style={{width : 150}}
                  onClick={()=>{setToUpdate(!toUpdate)}}
              >
                <i className="bx bx-cart me-2 " />
                Update Product
              </button>
              <button
                  className=" btn btn-outline-danger mx-2 mt-2 "
                  style={{width : 150}}
                  onClick={()=>setToDelete(true)}
              >
                <i className="bx bx-shopping-bag me-2" />
                    Delete Product
              </button>
            </div>
              { toDelete && (
                  <>
                      <Modal show={toDelete}  backdrop="static" keyboard={false}>
                          <Modal.Header closeButton>
                              <Modal.Title>Notice !</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                              You are sure to delete product {productsItem.name}
                          </Modal.Body>
                          <Modal.Footer>
                              <Button variant="secondary"
                              onClick={handleDelete}>
                                  Yes
                              </Button>
                              <Button variant="secondary" onClick={()=>setToDelete(false)}>
                                  Close
                              </Button>
                          </Modal.Footer>
                      </Modal>
                  </>)}
            {!isEmpty(productsItem) && (
                !toUpdate ?
            (<ProductDetailsComponent product={productsItem}/>) :
            (<ProductUpdateComponent product={productsItem} toUpdate={toUpdate} handelUpdateFn={handelUpdate}/>)
            )}
            {/*<RecentProducts recentProducts={product} />*/}
          </Container>
        </div>
      </React.Fragment>
    )

}


export default ProductDetail
