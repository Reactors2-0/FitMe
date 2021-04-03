import React from "react";
import {deleteCategory} from "../../../actions/AdminAction";
import {Button, Modal} from "react-bootstrap";



function RemoveCategory({ category_id, closeModal}) {

  const handleClose = () => {
    closeModal(null)
  };

  const removeClick = () => {
    deleteCategory(category_id).then(() => closeModal(category_id))
  };

  return (
    <Modal show={ category_id ? true : false} size="md" centered onHide={ handleClose }>
      <Modal.Header closeButton>
        <Modal.Title>Confirm</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You are sure you want remove this category
      </Modal.Body>
      <Modal.Footer>
       
            <Button variant="secondary" onClick={ handleClose}>
              Close
            </Button>
            <Button variant="info" onClick={ removeClick }>
              Remove
            </Button>
         
      </Modal.Footer>
    </Modal>
  );
}

export default RemoveCategory;
