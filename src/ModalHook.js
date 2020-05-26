import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function ModalHook(props) {
  return (
    <React.Fragment>
      <div id="myModal" className={`cusmodal ${props.show ? "disp" : ""}`}>
        <div className="cusmodal-content">
          <span className="close" onClick={props.onHide}>
            x
          </span>
          <h3>Add Product</h3>
          <hr />
          <div>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Product Name"
                    name="productName"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPrice">
                  <Form.Label>Product Price</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Product Price"
                    name="productPrice"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicSKU">
                  <Form.Label>SKU</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="SKU"
                    name="productSKU"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicquantity">
                  <Form.Label>Product Quantity</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Product Quantity"
                    name="productQuantity"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
          </div>
          <div>
            <Modal.Footer>
              <Button variant="btn btn-primary">Save</Button>
              <Button variant="btn btn-danger" onClick={props.onHide}>
                Close
              </Button>
            </Modal.Footer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ModalHook;
