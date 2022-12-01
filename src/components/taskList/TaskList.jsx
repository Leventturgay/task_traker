import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";

const TaskList = ({ task }) => {
  return (
    <div>
      {task.map((item) => {
        const { id, task, Date } = item;
        return (
          <div
            className="bg-secondary rounded-3 p-2 mt-2 d-flex justify-content-between "
            key={id}
          >
            <div>
              <h3> {task} </h3>
              <p> {Date} </p>
            </div>
            <div>
              <RiDeleteBinFill
                style={{
                  cursor: "pointer",
                  marginRigth: "20px",
                  fontSize: "2rem",
                  boxShadow: "2px 2px 2px #ECAB9E",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
