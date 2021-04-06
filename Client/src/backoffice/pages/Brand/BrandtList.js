import React, { useEffect , useState} from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Pagination, PageItem   } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../User/Message";
import { Switch } from '@material-ui/core';
import Loader from "../User/Loader";
import { Badge, Card, CardBody, CardTitle, Container } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import * as brandAction from "@Actions/brandAction";
import Toast from 'react-bootstrap/Toast'
import Modal from 'react-bootstrap/Modal';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';
import fileDownload from "js-file-download";
import axios from "axios";
import ("./BrandList.css");
const BrandList = ({ history }) => {
  const dispatch = useDispatch();

  const fetchBrands = useSelector((state) => state.listBrands);
  const { brands , count , loading, error} = fetchBrands;
  const [brandsList, setBrandsList] = useState(brands);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  let active = 1;
  let items = [];
  for (let number = count; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
    );
  }

  useEffect(() => {
    const brandInfo = {
      searchBrandKey: "",
      sort : "",
      initialLoading:true,
    };
    dispatch(brandAction.listBrandsForAdmin(brandInfo.initialLoading));

  }, [dispatch, history]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure want to delete ? ")) {
      dispatch(brandAction.deleteBrand(id));
    }
  };
 useEffect(()=>{
   setBrandsList(brands);
 }, [brands])

  function toggleVerify(event,key) {
    // event.target.checked
    console.log(showModal)
    setShowModal(true);
    let prevBrands = [...brandsList];
    let prevBrand = {...prevBrands[key]};
    prevBrand.verify = event.target.checked;
    prevBrands[key] = prevBrand;
    setBrandsList(prevBrands);
  }

    const handleDownload = (url, filename) => {
        axios.get(url, {responseType: "blob"}).then((res) => {
            fileDownload(res.data, filename);
        });
    };

  return (
    <React.Fragment>
          <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Dashborad list brands" breadcrumbItem="List of brands " />
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
                        {brandsList.map((brand,key) => (
                          <tr key={"_tr_" + brand._id}>
                            <td>{brand.brandName}</td>
                            <td>
                              <Switch checked={brandsList[key].verify} onChange={(e) => {toggleVerify(e,key);}}/>
                              { showModal && (
                                  <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={true} animation={true}>
                                    <Modal.Header closeButton>
                                      <Modal.Title>Confirm {brand.verify ? "verifying" : "refuting"} {brand.brandName}!</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                      <div className="container">
                                        <img src={brand.brandImage} alt={brand.brandName} className="image" style={{width:"100%"}}/>
                                          <div className="middle">
                                            <div className="text">
                                                <button
                                                    onClick={() => {
                                                        handleDownload(
                                                            "https://res.cloudinary.com/dvzsfotdc/image/upload/v1616521135/brands/Zara/tmp-1-1616521176929_ywiqvk.jpg",
                                                            brand.brandName
                                                        );
                                                    }}
                                                >
                                                    Download proof
                                                </button>
                                            </div>
                                          </div>
                                      </div>
                                      {brand.verify ? ("") : (<> Reason for refuting ! <input/></>)}
                                    </Modal.Body>
                                    <Modal.Footer>
                                      <Button variant="primary" onClick={handleClose}>
                                        Yes {brand.verify ? "verify" : "refute"}
                                      </Button>
                                      <Button variant="text" onClick={handleClose}>
                                        Close
                                      </Button>
                                    </Modal.Footer>
                                  </Modal>) }
                            </td>
                            {brand.verify ? (
                              <td>
                                <Button className="btn-sm">
                                  <i className="fas fa-check"/>
                                </Button>
                              </td>) : (
                              <td>
                                <Button className="btn-sm">
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
                <Pagination>
                  <Pagination.First />
                  <Pagination.Prev />
                  <Pagination>{items}</Pagination>
                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination>
              </Card>
            )}
          </>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default BrandList;
