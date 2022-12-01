import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddTask = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task, date };
    addNewTask(newTask);
  };
  const addNewTask = async (newTask) => {
    const url = "https://6351820cdfe45bbd55c21ad8.mockapi.io/api/task";
    try {
      await axios.post(url, newTask);
    } catch (error) {}
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tast</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task"
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" onChange={(e) => setDate(e.target.value)} />
        </Form.Group>

        <Button variant="danger  w-50" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;
