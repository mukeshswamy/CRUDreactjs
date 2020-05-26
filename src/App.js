import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Table } from "react-bootstrap";
import "./App.css";
import ModalHook from "./ModalHook";
import EditModal from "./EditModal";

function App() {
  const [modalOpen, isModalOpen] = useState(false);
  const [modalOpenEdit, isModalOpenEdit] = useState(false);

  const handleModalOpen = () => {
    isModalOpen(true);
  };

  const handleCloseModal = () => {
    isModalOpen(false);
  };

  const handleOpenEditModal = () => {
    isModalOpenEdit(true);
  };

  const handleCloseEditModal = () => {
    isModalOpenEdit(false);
  };
  return (
    <div>
      <Container>
        <div className="head">
          <h1>PRODUCT TABLE</h1>
        </div>
        <div className="addProductBtnDiv">
          <Button variant="btn btn-primary" onClick={() => handleModalOpen()}>
            ADD PRODUCT
          </Button>
        </div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>SKU</th>
              <th>Quantity Available</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Bag</td>
              <td>100</td>
              <td>1FER321GG</td>
              <td>4</td>
              <td>
                <Button
                  variant="btn btn-success cusBtnEdit"
                  onClick={() => handleOpenEditModal()}
                >
                  Edit
                </Button>
                <Button variant="btn btn-danger">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <ModalHook show={modalOpen} onHide={() => handleCloseModal()} />
      <EditModal show={modalOpenEdit} onHide={() => handleCloseEditModal()} />
    </div>
  );
}

export default App;
