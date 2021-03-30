import React, {useState} from "react"
import PropTypes from "prop-types"
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Form,
  Row,
} from "reactstrap"
import {
  TextField

} from "@material-ui/core/";
import * as userAction from "../../../actions/AdminAction";
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import {useDispatch} from "react-redux";
const EcommerceOrdersModal = props => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userAction.Repondre({ email },{ message }));
  };

  const { isOpen, toggle } = props
  return (
    <Modal
      isOpen={isOpen}
      role="dialog"
      autoFocus={true}
      centered={true}
      className="exampleModal"
      tabIndex="-1"
      toggle={toggle}
    >
      <div className="modal-content">
        <ModalHeader toggle={toggle}>Mail Details</ModalHeader>
        <ModalBody>
          <p className="mb-2">
            Mail id: <span className="text-primary">#SK2540</span>
          </p>
          <p className="mb-4">
            Name: <span className="text-primary">Neal Matthews</span>
          </p>

          <div className="table-responsive">
            <Table className="table align-middle table-nowrap">
              <thead>
                <tr>
                  <th scope="col"> Description</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>

                  <td>
                    <div>
                      <h5 className="text-truncate font-size-14">
                        Wireless Headphone (Black)
                      </h5>
                      <p className="text-muted mb-0">$ 225 x 1</p>
                    </div>
                  </td>
                  <td>$ 255</td>
                </tr>
<tr>
  <Col>
    <Card>
      <CardBody>
        <CardTitle className="h4">Repondre</CardTitle>

          <Form className="formLoginRegister">
            <TextField
                variant="outlined"
                type="email"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Your Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                variant="outlined"
                type="email"
                margin="normal"
                required
                fullWidth
                id="email"
                label="message"
                name="email"
                autoComplete="email"
                autoFocus
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
            >

                  <>Repondre </>

            </Button>
          </Form>
      </CardBody>
    </Card></Col>


</tr>




              </tbody>
            </Table>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="button" color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </div>
    </Modal>
  )
}

EcommerceOrdersModal.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
}

export default EcommerceOrdersModal
