import React, {useState} from "react"
import { Link } from "react-router-dom"
import MetaTags from 'react-meta-tags';
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap"
import Select from "react-select"
import Dropzone from "react-dropzone"
import {useDispatch} from "react-redux";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import {Category} from "../../../actions/AdminAction";

const AddProduct = ({ history}) =>  {
  const [categoryName, setName] = useState("");
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure save ? ")) {
    dispatch(Category({ categoryName}));
    history.push(redirect + "dashboard/admin/Category");

    
  }
  };

 
  

    return (
      <React.Fragment>
        <div className="page-content">
        <MetaTags>
            <title>Category Product</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs title="Dashborad" breadcrumbItem="Add Category" />

            <Row>
              <Col xs="12">
                <Card>
                  <CardBody>

                    <Form>
                      <Row>
                        <Col sm="6">
                          <FormGroup className="mb-3">
                            <Label htmlFor="productname">Category Name</Label>
                            <Input
                              id="productname"
                              name="productname"
                              type="text"
                              className="form-control"
                              value={categoryName}
                             onChange={(e) => setName(e.target.value)}
                            />
                          </FormGroup>
                         
                        </Col>

                        
                      </Row>
                      <div className="d-flex flex-wrap gap-2">
                      <Button
                        type="submit"
                        color="primary"
                        className="waves-effect waves-light"
                        onClick={handleSubmit}
                      >
                        Save Changes
                      </Button>
                      <Button
                        type="submit"
                        color="secondary"
                        className="waves-effect waves-light"
                      >
                        Cancel
                      </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>

               

              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
     );
};

export default AddProduct;
