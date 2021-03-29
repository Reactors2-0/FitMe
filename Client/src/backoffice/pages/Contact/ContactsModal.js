import React from "react"
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
import MetaTags from 'react-meta-tags';

import img7 from "../../../backoffice/assets/images/product/img-7.png"
import img4 from "../../../backoffice/assets/images/product/img-4.png"
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
const EcommerceOrdersModal = props => {
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


        <Form method="post">
          <Editor
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
          />
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