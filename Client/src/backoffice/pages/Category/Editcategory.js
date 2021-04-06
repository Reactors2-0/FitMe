import React, {useState} from "react"
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
import {useDispatch} from "react-redux";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import {editcategory} from "../../../actions/AdminAction";

const EditCategory = () =>  




{


  let history = useHistory();
  var { category_id } = useParams();

console.log('====================================');
console.log(category_id);
console.log('====================================');

  const [name, setName] = useState("");
 
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editcategory({ name}));
  };

  

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
                              value={name}
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

export default EditCategory;
