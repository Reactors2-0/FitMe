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
import * as userAction from "../../../actions/AdminAction";

const EditCategory = ( ) =>  
{

  const [message, setMessage] = useState("");

 
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userAction.Repondre({ email },{ message }));
  };

  

    return (
      <React.Fragment>
        <div className="page-content">
        <MetaTags>
            <title>Mail Details</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs title="Dashborad" breadcrumbItem="Repondre" />

            <Row>
              <Col xs="12">
                <Card>
                  <CardBody>
                    

                    <Form>
                      <Row>
                        <Col sm="6">
                          <FormGroup className="mb-3">
                            <Label htmlFor="productname">Reponse</Label>
                            <Input
                              id="productname"
                              name="productname"
                              type="text"
                              className="form-control"
                              value={name}
                             onChange={(e) => setMessage(e.target.value)}
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
                        Envoyer
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
