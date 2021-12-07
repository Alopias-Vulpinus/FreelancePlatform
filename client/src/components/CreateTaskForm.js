import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import {useHttp} from "../hooks/http.hook";
import {useDispatch} from "react-redux";
import {mapResponseToTask} from "../api/mapper";
export const CreateTaskForm = (props) => {
  const {request} = useHttp()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const submitHandler = async(e) => {
    console.log(title, description,  price)
    //const taskResponse = await request('task/', 'POST', {title, description,  price})
    const taskResult = mapResponseToTask({})
    console.log('task created: ' , taskResult)
  }
  return (
    <>
      <h1 style={{textAlign:'center'}}> Create New Task </h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" onClick={(e) => {submitHandler(e)}}>
          Create 
        </Button>
      </Form>
    </>
  );
};
