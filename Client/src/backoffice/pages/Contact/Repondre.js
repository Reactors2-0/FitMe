import React, {useState,useEffect} from "react"
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux"

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
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import * as userAction from "../../../actions/AdminAction";
import * as contactAction from "../../../actions/contactAction";

const Repnodre = ( {match, history}) =>  
{

  const [messages, setMessages] = useState("");
  const [email, setEmail] = useState("");
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const productData = useSelector((state) => state.Contact);

  console.log("dsqdsqd",match.params.id)
      const { loading, contacts, error } = productData;
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactAction.Contactid(match.params.id));
    // eslint-disable-next-line
}, [dispatch, match]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure Send ? ")) {
    dispatch(userAction.Repondre({email},{messages}));
    history.push(redirect + "dashboard/admin/Contact");


  }
  };
  
  const handleChange = (e) => {
    setEmail({
      ...contacts,
      [e.target.email]: e.target.value,
    });
  }
  

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
                              onChange={handleChange}
                                defaultValue={contacts.email}
                            />
                           
                           
                           
                            <Input
                              id="productname"
                              name="productname"
                              type="text"
                              className="form-control"
                             
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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

export default Repnodre;
