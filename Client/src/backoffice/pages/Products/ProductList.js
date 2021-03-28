import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../User/Message";
import Loader from "../User/Loader";
import {
  listProducts
} from "../../../actions/productAction";
//import { PRODUCT_CREATE_RESET } from "../../../constants/productConstants";
import Paginate from "../Products/Paginate";

const ProductListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  //const productDelete = useSelector((state) => state.productDelete);
 // const {
  //  loading: loadingDelete,
  //  error: errorDelete,
//: successDelete,
 // } = productDelete;

  //const productCreate = useSelector((state) => state.productCreate);
  //const {
   // loading: loadingCreate,
   // error: errorCreate,
  //  success: successCreate,
  //  product: createdProduct,
 // } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {

      dispatch(listProducts("", pageNumber));

  }, [
    dispatch,
    history,
    userInfo,

    pageNumber,
  ]);



  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3 btn-info" >
            <i className="fas fa-plus"></i> Create Product
          </Button>
        </Col>
      </Row>

        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"

                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </>

    </>
  );
};

export default ProductListScreen;
