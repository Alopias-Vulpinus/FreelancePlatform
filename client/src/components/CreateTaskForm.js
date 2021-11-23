import React from "react";
import { Form, Button } from "react-bootstrap";
export const CreateTaskForm = (props) => {
  return (
    <>
      <h1 style={{textAlign:'center'}}> Create New Task </h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Title" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Description" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Price" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create 
        </Button>
      </Form>
    </>
  );
};
