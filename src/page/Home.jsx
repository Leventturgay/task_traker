import React, { useEffect, useState } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Text Bar");
  const [task, setTask] = useState([]);
  const url = "https://6351820cdfe45bbd55c21ad8.mockapi.io/api/task";
  const toggle = () => {
    setIsOpen(!isOpen);
    const buttontext = isOpen ? "Show Task Bar" : "Hide text Bar";
    setText(buttontext);
  };

  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
    console.log(data);
  };
  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <Button
        onClick={() => {
          toggle();
        }}
        variant="danger"
      >
        {text}
      </Button>
      {isOpen && <AddTask getTask={getTask} />}

      <TaskList task={task} getTask={getTask} />
    </div>
  );
};

export default Home;
