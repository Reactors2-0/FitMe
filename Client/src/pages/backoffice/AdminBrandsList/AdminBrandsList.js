import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import {Table,Button,Row,Col} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "@Components/Message/errorMessage";
import SuccessMessage from "@Components/Message/successMessage";
import TableLoader from "@Components/Loader/TableLoader";
import {Button as MaterialButton,makeStyles,} from "@material-ui/core/";
import {
  listBrandsForAdmin,
  deleteBrand
} from "@Actions/brandAction";
import * as brandConstants from "@Constants/brandConstants";
import { confirmAlert } from "react-confirm-alert"; 
import "react-confirm-alert/src/react-confirm-alert.css";

const AdminBrandsList = () => {
  const dispatch = useDispatch();

  const brandList = useSelector((state) => state.brandList);
  const { loading, brands, count, error, success } = brandList;

  const deleteProductData = useSelector((state) => state.deleteProduct);
  const { success: deleteSuccess, error: deleteFail } = deleteProductData;

  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (success && initialLoading) {
      setInitialLoading(false);
    } else {
      dispatch(listProductsForAdmin(initialLoading));
    }
    // eslint-disable-next-line
  }, [dispatch, deleteSuccess, success]);


  const deleteHandler = (id, e) => {
    e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1 className="font-weight-bold text-white">Are you sure?</h1>
            <p>You want to delete this brand?</p>
            <MaterialButton
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch(deleteProduct(id));
                onClose();
              }}
            >
              Yes, Delete it !
            </MaterialButton>
            <MaterialButton
              variant="contained"
              color="primary"
              onClick={onClose}
            >
              No
            </MaterialButton>
          </div>
        );
      },
    });
  };

  return (
    <>
      {deleteSuccess && (
        <SuccessMessage
          header="Done"
          message="Product Deleted Successfully"
          reset={brandConstants.DELETE_BRAND_RESET}
        />
      )}
      {deleteFail && (
        <ErrorMessage
          header="Something went wrong"
          message={deleteFail}
          reset={brandConstants.DELETE_BRAND_RESET}
        />
      )}
      <Row>
        <Col>
          <h1>Brands({count})</h1>
        </Col>
      </Row>
      {loading ? (
        <TableLoader />
      ) : error ? (
        <ErrorMessage header="Something went wrong" message={error} />
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th>Verified</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand) => (
                <tr key={brand._id}>
                  <td>{brand.name}</td>
                  <td>${brand.price}</td>
                  <td>{brand.category}</td>
                  <td>{brand.brand}</td>
                  <td>No</td>
                  <td>
                    <LinkContainer to={`/admin/brand/${brand._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={(e) => deleteHandler(brand._id, e)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default AdminBrandsList;
