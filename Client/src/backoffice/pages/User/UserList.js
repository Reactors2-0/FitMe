import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../User/Message";
import { userList, userDelete,userblock } from "../../../actions/userAction";

import Loader from "../User/Loader";
import {Badge, Card, CardBody, CardTitle, Container} from "reactstrap";
import {Link} from "react-router-dom";
import MetaTags from "react-meta-tags";
import Breadcrumbs from "../../components/Common/Breadcrumb";


const UserList = ({ history }) => {
  const dispatch = useDispatch();

  const userListBack = useSelector((state) => state.userListBack);
  const { loading, error, users } = userListBack;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDeleteDetails = useSelector((state) => state.userDeleteDetails);
  const { success: successDelete } = userDeleteDetails;

  useEffect(() => {
      dispatch(userList());

  }, [dispatch, history, successDelete, userInfo]);

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
            <Breadcrumbs title="Dashborad" breadcrumbItem="UserList" />


            <>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (

        <Card>
        <CardBody>
        <CardTitle className="mb-4 h4">List Users</CardTitle>
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
        <th className="align-middle">Email</th>
        <th className="align-middle">Role</th>
        <th className="align-middle">Verify</th>
            <th className="align-middle">status</th>

            <th className="align-middle">Delete</th>
        </tr>
        </thead>
        <tbody>
      {users.map((user) => (
        <tr key={"_tr_" + user}>
        <td>
        <div className="form-check font-size-16">
        <input
        type="checkbox"
        className="form-check-input"
        id={user.uid}
        />
        <label
        className="form-check-label"
        htmlFor={user.uid}
        ></label>
        </div>
        </td>
        <td>
        <Link to="#" className="text-body fw-bold">
      {" "}
      {user.uid}{" "}
        </Link>{" "}
        </td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>

          {user.role =="user"? (
              <Badge
                  className={
                    "font-size-11 badge-soft-" +"success"
                  }
                  color="success"
                  pill
              >
                {user.role}
              </Badge>
          ) : (
              <Badge
                  className={
                    "font-size-11 badge-soft-" +"danger"
                  }
                  color="danger"
                  pill
              >
                {user.role}
              </Badge>
          )}










        </td>
        <td>
          {user.verify ? (
                  <Badge
                      className={
                        "font-size-11 badge-soft-" +"success"
                      }
                      color="success"
                      pill
                  >
                   True
                  </Badge>
              ):(
              <Badge
                  className={
                    "font-size-11 badge-soft-" +"danger"
                  }
                  color="danger"
                  pill
              >
False              </Badge>
          )}
        </td>
          {user.actif ? (

                  <td>

                <Button
                    className="btn-sm"
                    onClick={() => blockHandler(user._id)}
                >
                    <i className="fas fa-check"></i>
                </Button>
            </td>):(
              <td>

                <Button
                    className="btn-sm"
                    onClick={() => blockHandler(user._id)}
                >
                  <i className="fas fa-accusoft"></i>
                </Button>
              </td>
          )}
        <td>

          <Button
              variant="danger"
              className="btn-sm"
              onClick={() => deleteHandler(user._id)}
          >
            <i className="fas fa-trash"></i>
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

export default UserList;
