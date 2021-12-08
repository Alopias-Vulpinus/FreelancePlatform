import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import {useHttp} from "../hooks/http.hook";
import {useDispatch, useSelector} from "react-redux";
import {mapResponseToTask} from "../api/mapper";
import {TASK_NEW} from "../api/endpoints";
import {selectUser} from "../redux/reducers/userReducer";
export const CreateTaskForm = (props) => {
  const {request} = useHttp()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const user = useSelector(selectUser())
  const submitHandler = async(e) => {
    const taskResponse = await request(TASK_NEW, 'POST', {title, description,  price, customer: user.id, status: 'NEW'})
    const taskResult = mapResponseToTask(taskResponse)
    alert('task created!')
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
