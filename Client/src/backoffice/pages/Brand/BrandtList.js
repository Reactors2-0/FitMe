import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../User/Message";

import Loader from "../User/Loader";
import { Badge, Card, CardBody, CardTitle, Container } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import * as brandAction from "@Actions/brandAction";

const BrandList = ({ history }) => {
  const dispatch = useDispatch();

  const fetchBrands = useSelector((state) => state.listBrands);
  const { brands , count , loading, error} = fetchBrands;

  useEffect(() => {
    const brandInfo = {
      searchBrandKey: "",
      sort : "",
      initialLoading:true,
    };
    dispatch(brandAction.listBrands(brandInfo));
  }, [dispatch, history]);

  const deleteHandler = (id) => {

    if (window.confirm("Are you sure want to delete ? ")) {
      dispatch(userDelete(id));
    }
  };
  const blockHandler = (id) => {
    if (window.confirm("Are you sure want to block.? ")) {
      dispatch(userblock(id));
    }
  };


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Dashborad" breadcrumbItem="List of brands" />
          <>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <Card>
                <CardBody>
                  <CardTitle className="mb-4 h4">Brands list :</CardTitle>
                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap mb-0">
                      <thead className="table-light">
                        <tr>
                          <th className="align-middle">Name</th>
                          <th className="align-middle">Verify</th>
                          <th className="align-middle">status</th>
                          <th className="align-middle">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {brands.map((brand) => (
                          <tr key={"_tr_" + brand._id}>
                            <td>{brand.brandName}</td>
                            <td>
                              {brand.verify ? (
                                <Badge
                                  className={
                                    "font-size-11 badge-soft-" + "success"
                                  }
                                  color="success"
                                  pill
                                >
                                  {brand.verify}
                                </Badge>
                              ) : (
                                <Badge
                                  className={
                                    "font-size-11 badge-soft-" + "danger"
                                  }
                                  color="danger"
                                  pill
                                >
                                  {brand.verify}
                                </Badge>
                              )}
                            </td>
                            {brand.verify ? (
                              <td>
                                <Button
                                  className="btn-sm"
                                  onClick={() => blockHandler(brand._id)}
                                >
                                  <i className="fas fa-check"/>
                                </Button>
                              </td>) : (
                              <td>
                                <Button
                                  className="btn-sm"
                                  onClick={() => blockHandler(brand._id)}
                                >
                                  <i className="fas fa-accusoft"/>
                                </Button>
                              </td>
                            )}
                            <td>
                              <Button
                                variant="danger"
                                className="btn-sm"
                                onClick={() => deleteHandler(brand._id)}
                              >
                                <i className="fas fa-trash"/>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            )}
          </>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default BrandList;
