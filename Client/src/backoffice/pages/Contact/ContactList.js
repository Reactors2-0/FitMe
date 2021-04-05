import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../User/Message";
import { listContactForContact ,deleteContact } from "../../../actions/contactAction";

import Loader from "../User/Loader";
import {Badge, Card, CardBody, CardTitle, Container,Col} from "reactstrap";
import {Link} from "react-router-dom";
import MetaTags from "react-meta-tags";
import Breadcrumbs from "../../components/Common/Breadcrumb";


const CategoryList = ({ history }) => {
  const dispatch = useDispatch();

  const listcategory = useSelector((state) => state.ContactList);
  const { loading, error, contacts ,success} = listcategory;



  useEffect(() => {
      dispatch(listContactForContact());

  }, [dispatch,contacts]);

  const deleteHandler = (id) => {

    if (window.confirm("Are you sure want to delete ? ")) {
      dispatch(deleteContact(id));
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
        <CardTitle className="mb-4 h4">List Contact <div className="text-sm-end">
                                  
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
        <th className="align-middle"> Name</th>
 
        <th className="align-middle">Email</th>
        <th className="align-middle">Phone</th>

            <th className="align-middle">Action</th>
        </tr>
        </thead>
        <tbody>
      {contacts.map((Contact) => (
        <tr key={"_tr_" + Contact}>
        <td>
        <div className="form-check font-size-16">
        <input
        type="checkbox"
        className="form-check-input"
        id={Contact._id}
        />
        <label
        className="form-check-label"
        htmlFor={Contact._id}
        ></label>
        </div>
        </td>
     
        <td>{Contact.name}</td>
        <td>{Contact.email}</td>
        <td>{Contact.phone}</td>
   <td>
   <Col xl={4}>

                          <div>
                            

                            <div>
                              <div
                                className="btn-group btn-group-example mb-3"
                                role="group"
                              >
                                
                                <button
                                  type="button"
                                  className="btn btn-danger w-xs"
                                  onClick={() => deleteHandler(Contact._id)}
                                >
            <i className="fas fa-trash"></i>
                                </button>{" "}
                                <a
                                  type="button"
                                  className="btn btn-primary w-xs"
                                  href={"/dashboard/admin/Repondre/"+ Contact._id}

                                >
                                  <i className="bx bx-mail-send"></i>
                                </a>{" "}
                              </div>
                            </div>

                            
                          </div>
                      </Col>

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
