import React, {useState,useEffect} from "react"
import { useParams, useHistory } from "react-router-dom";

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
import { useDispatch, useSelector} from "react-redux"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import * as CategoryAction from "../../../actions/AdminAction";

function EditCategory  ({match, history}) {

  const [categoryName, setName] = useState("");
 
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const productData = useSelector((state) => state.categoryi);
  console.log(productData)
      const { loading, categoryi, error } = productData;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(CategoryAction.editcategory( categoryName));
  };
  useEffect(() => {
    dispatch(CategoryAction.categoryid(match.params.id));
    // eslint-disable-next-line
    console.log(categoryi)

  }, [dispatch, match]);
const handleChange = (e) => {
  setName({
    ...categoryi,
    [e.target.categoryName]: e.target.value,
  });}
    return (
      <React.Fragment>
        <div className="page-content">
        <MetaTags>
            <title>Category Product</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs title="Dashborad" breadcrumbItem="Edit Category" />

            <Row>
              <Col xs="12">
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Basic Information</CardTitle>
                    <p className="card-title-desc">Fill all information below</p>

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
                              onChange={handleChange}
                                defaultValue={categoryi.categoryName}
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

export default EditCategory;
