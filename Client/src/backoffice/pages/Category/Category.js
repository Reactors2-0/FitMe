import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../User/Message";
import { deleteCategory,listCategoryForAdmin,editcategory } from "../../../actions/AdminAction";

import Loader from "../User/Loader";
import {Badge, Card, CardBody, CardTitle, Container} from "reactstrap";
import {Link} from "react-router-dom";
import MetaTags from "react-meta-tags";
import Breadcrumbs from "../../components/Common/Breadcrumb";


const CategoryList = ({ history }) => {
  const dispatch = useDispatch();

  const listcategory = useSelector((state) => state.listcategory);
  const { loading, error, categorys } = listcategory;

console.log('====================================');
console.log(listcategory);
console.log('====================================');

  useEffect(() => {
      dispatch(listCategoryForAdmin());

  }, [dispatch,categorys]);

  const deleteHandler = (id) => {

    if (window.confirm("Are you sure want to delete ? ")) {
      dispatch(deleteCategory(id));
    }
  };



  return (
      <React.Fragment>
        <div className="page-content">

          <Container fluid>
            <Breadcrumbs title="Dashborad" breadcrumbItem="CategoryList" />


            <>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (

        <Card>
        <CardBody>
        <CardTitle className="mb-4 h4">List Users <div className="text-sm-end">
                                    <a
                                        href="/dashboard/admin/AddCategory"
                                        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                                    >
                                      <i className="fa fa-plus fa-sm text-white-50"></i> Add New Category
                                    </a>
                                  </div></CardTitle>
        
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
 

            <th className="align-middle">Action</th>
        </tr>
        </thead>
        <tbody>
      {categorys.map((category) => (
        <tr key={"_tr_" + category}>
        <td>
        <div className="form-check font-size-16">
        <input
        type="checkbox"
        className="form-check-input"
        id={category._id}
        />
        <label
        className="form-check-label"
        htmlFor={category._id}
        ></label>
        </div>
        </td>
        <td>
        <Link to="#" className="text-body fw-bold">
      {" "}
      {category.uid}{" "}
        </Link>{" "}
        </td>
        <td>{category.name}</td>
    
        
        <td>

          <Button
              variant="primary"
              className="btn btn-danger mr-2"
              onClick={() => deleteHandler(category._id)}
          >
            Delete
          </Button>
          <Link
                          to={"/dashboard/admin/EditCategory/" + category._id}
                          className="btn btn-primary mr-2"
                        >
                          Show
                        </Link>
       
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

export default CategoryList;
