
      import React, { useEffect } from "react";

      import PropTypes from 'prop-types'
      import MetaTags from 'react-meta-tags';
      import {
        Container,
        Row,
        Col,
        Button,
        Card,
        CardBody,
        CardTitle,
        Modal,
        ModalHeader,
        ModalBody,
        ModalFooter,
        Media,
        Table,
        Input
      } from "reactstrap"
      import { Link } from "react-router-dom"
      
      //import Charts
      import StackedColumnChart from "./StackedColumnChart"
      
      import modalimage1 from "../../assets/images/product/img-7.png"
      import modalimage2 from "../../assets/images/product/img-4.png"
      import { deleteCategory,listCategoryForAdmin,editcategory } from "../../../actions/AdminAction";

      // Pages Components
      import WelcomeComp from "./WelcomeComp"
      import MonthlyEarning from "./MonthlyEarning"
      
      import { useDispatch, useSelector } from "react-redux";
      import Message from "../User/Message";
      import { userList, userDelete,userblock } from "../../../actions/userAction";
      
      //Import Breadcrumb
      import Breadcrumbs from "../../components/Common/Breadcrumb"
      import { listContactForContact  } from "../../../actions/contactAction";
      import {listBrandsForAdmin} from "../../../actions/brandAction";

      //i18n
      //import { withTranslation } from "react-i18next"
      
      const Dashboard = () => {
       
        const dispatch = useDispatch();
      
        const userListBack = useSelector((state) => state.userListBack);
        const {  countusers } = userListBack;
 
        const contactss = useSelector((state) => state.ContactList);
        const {  countcontact } = contactss;
      
        const brandds = useSelector((state) => state.listBrands);
        const {  totalBrands } = brandds;
      
      
        
        useEffect(() => {
            dispatch(listBrandsForAdmin());
      
        }, [dispatch,totalBrands]);
      
        useEffect(() => {
            dispatch(listContactForContact());
      
        }, [dispatch,countcontact]);
      
      
      
        useEffect(() => {
          dispatch(userList());
      
      }, [dispatch, countusers]);
      
      const listcategory = useSelector((state) => state.listcategory);
  const { countcat } = listcategory;

  console.log('====================================');
  console.log("counttt "+countcat);
  console.log('====================================');

  useEffect(() => {
      dispatch(listCategoryForAdmin());

  }, [dispatch,countcat]);
      
          return (
            <React.Fragment>
              <div className="page-content">
                <MetaTags>
                  <title>Dashboard | FitMe</title>
                </MetaTags>
                <Container fluid>
                  <Breadcrumbs
                    title="Dashboard"
                    breadcrumbItem="Dashboard"
                  />
      
                  <Row>
                    <Col xl="4">
                      <WelcomeComp />
                    </Col>
                    <Col xl="8">
                      <Row>
                      <Col md="4" >
                            <Card className="mini-stats-wid">
                              <CardBody>
                                <Media>
                                  <Media body>
                                    <p className="text-muted fw-medium">
                                   Users
                                    </p>
                                    <h4 className="mb-0">{countusers||0}</h4>
                                  </Media>
                                  <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                    <span className="avatar-title">
                                      <i
                                        className={
                                          "bx " + "bx bx-user-circle" + " font-size-24"
                                        }
                                      />
                                    </span>
                                  </div>
                                </Media>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col md="4" >
                            <Card className="mini-stats-wid">
                              <CardBody>
                                <Media>
                                  <Media body>
                                    <p className="text-muted fw-medium">
                                   Category
                                    </p>
                                    <h4 className="mb-0">{countcat ||0 }</h4>
                                  </Media>
                                  <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                    <span className="avatar-title">
                                      <i
                                        className={
                                          "bx " + "bx bx-duplicate" + " font-size-24"
                                        }
                                      />
                                    </span>
                                  </div>
                                </Media>
                              </CardBody>
                            </Card>
      
                          </Col>
                          <Col md="4" >
                            <Card className="mini-stats-wid">
                              <CardBody>
                                <Media>
                                  <Media body>
                                    <p className="text-muted fw-medium">
                                   Contact 
                                    </p>
                                    <h4 className="mb-0">{countcontact||0}</h4>
                                  </Media>
                                  <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                    <span className="avatar-title">
                                      <i
                                        className={
                                          "bx " + " bx-purchase-tag-alt" + " font-size-24"
                                        }
                                      />
                                    </span>
                                  </div>
                                </Media>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col md="4" >
                            <Card className="mini-stats-wid">
                              <CardBody>
                                <Media>
                                  <Media body>
                                    <p className="text-muted fw-medium">
                                   Brands 
                                    </p>
                                    <h4 className="mb-0">{totalBrands||0}</h4>
                                  </Media>
                                  <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                    <span className="avatar-title">
                                      <i
                                        className={
                                          "bx " + "bx bxs-user-detail" + " font-size-24"
                                        }
                                      />
                                    </span>
                                  </div>
                                </Media>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col md="4" >
                            <Card className="mini-stats-wid">
                              <CardBody>
                                <Media>
                                  <Media body>
                                    <p className="text-muted fw-medium">
                                   Products
                                    </p>
                                    <h4 className="mb-0">{totalBrands|0}</h4>
                                  </Media>
                                  <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                    <span className="avatar-title">
                                      <i
                                        className={
                                          "bx " + "bx bx-store" + " font-size-24"
                                        }
                                      />
                                    </span>
                                  </div>
                                </Media>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col md="4" >
                            <Card className="mini-stats-wid">
                              <CardBody>
                                <Media>
                                  <Media body>
                                    <p className="text-muted fw-medium">
                                   Orders
                                    </p>
                                    <h4 className="mb-0">{totalBrands||0}</h4>
                                  </Media>
                                  <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                    <span className="avatar-title">
                                      <i
                                        className={
                                          "bx " + "bx-purchase-tag-alt" + " font-size-24"
                                        }
                                      />
                                    </span>
                                  </div>
                                </Media>
                              </CardBody>
                            </Card>
                          </Col>
      
      
      
                      </Row>
      
                      <Card>
                        <CardBody>
                          <div className="d-sm-flex flex-wrap">
                            <CardTitle className="card-title mb-4 h4">
                              Email Sent
                          </CardTitle>
                            <div className="ms-auto">
                              <ul className="nav nav-pills">
                             
                                  <li className="nav-item" >
                                    <Link
                                     
                                    >
                                    </Link>
                                  </li>
                              </ul>
                            </div>
                          </div>
                          <div className="clearfix" />
                          <StackedColumnChart />
      
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
      
                
                </Container>
              </div>
      
      
      
              
            </React.Fragment>
       );
      };
      
      export default Dashboard;
