"use client";

import React, { useState, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd"; 
import style from "./style.module.css";
import {AlerToDoList} from "../components/Alerts/alerts"; 

const ToDoList = () => {
  const [achievement, setAchievement] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [doneStatus, setDoneStatus] = useState<boolean[]>([]);

  useEffect(() => {
    const storedList = localStorage.getItem("List");
    const storedDoneStatus = localStorage.getItem("DoneStatus");

    if (storedList) {
      setAchievements(JSON.parse(storedList));
    }

    if (storedDoneStatus) {
      setDoneStatus(JSON.parse(storedDoneStatus));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (achievement === "") {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 4000);
    } else {
      setShowAlert(false);

      const updateAchievements = [achievement, ...achievements];
      const updateDoneStatus = [false, ...doneStatus];

      setAchievements(updateAchievements);
      setDoneStatus(updateDoneStatus);

      localStorage.setItem("List", JSON.stringify(updateAchievements));
      localStorage.setItem("DoneStatus", JSON.stringify(updateDoneStatus));

      setAchievement("");
    }
  };

  const handleDoneClick = (index: number) => {
    const newDoneStatus = [...doneStatus];
    newDoneStatus[index] = !newDoneStatus[index];
    setDoneStatus(newDoneStatus);

    localStorage.setItem("DoneStatus", JSON.stringify(newDoneStatus));
  };

  const handleDelete = (index: number) => {
    const updateList = achievements.filter((item, i) => i !== index);
    const updatedoneStatus = doneStatus.filter((item, i) => i !== index);

    setAchievements(updateList);
    setDoneStatus(updatedoneStatus);

    localStorage.setItem("List", JSON.stringify(updateList));
    localStorage.setItem("DoneStatus", JSON.stringify(updatedoneStatus));
  };

  const moveTask = (dragIndex: number, hoverIndex: number) => {
    const updatedList = [...achievements];
    const updatedDoneStatus = [...doneStatus];

    const draggedTask = updatedList[dragIndex];
    const draggedStatus = updatedDoneStatus[dragIndex];

    updatedList.splice(dragIndex, 1);
    updatedDoneStatus.splice(dragIndex, 1);

    updatedList.splice(hoverIndex, 0, draggedTask);
    updatedDoneStatus.splice(hoverIndex, 0, draggedStatus);

    setAchievements(updatedList);
    setDoneStatus(updatedDoneStatus);

    localStorage.setItem("List", JSON.stringify(updatedList));
    localStorage.setItem("DoneStatus", JSON.stringify(updatedDoneStatus));
  };

  const DraggableTask = ({ index, task }: { index: number; task: string }) => {
    const [, drag] = useDrag({
      type: "TASK",
      item: { index },
    });
  
    const [, drop] = useDrop({
      accept: "TASK",
      hover: (item: { index: number }) => {
        if (item.index !== index) {
          moveTask(item.index, index);
          item.index = index;
        }
      },
    });
  
    const combinedRef = (node: HTMLDivElement | null) => {
      drag(node);
      drop(node);
    };
  
    return (
      <div
        ref={combinedRef}
        key={index}
        className={doneStatus[index] ? style.taskItemDone : style.taskItem}
      >
        <p className={style.task}>{task}</p>
        {doneStatus[index] ? (
          <div className={style.buttons}>
            <img
              onClick={() => handleDelete(index)}
              src="/assets/icons/blackFinish.png"
              className={style.deleteButton}
            />
          </div>
        ) : (
          <div className={style.buttons}>
            <img
              onClick={() => handleDoneClick(index)}
              src="/assets/icons/done.png"
              className={style.buttonDone}
            />
            <img
              onClick={() => handleDelete(index)}
              src="/assets/icons/finish.png"
              className={style.deleteButton}
            />
          </div>
        )}
      </div>
    );
  };
  

  return (
    <div className={style.MainBlock}>
      <div className={style.blockList}>
      {showAlert && <AlerToDoList />}
        <h1 className={style.YourList}>TWOJA LISTA</h1>
        <div className={style.formContainer}>
          <form onSubmit={handleSubmit}>
            <input
              className={style.inputTask}
              placeholder="Wpisuj tutaj..."
              name="name"
              value={achievement}
              onChange={(e) => setAchievement(e.target.value)}
            />
            <button className={style.button} type="submit">Dodaj</button>
          </form>
        </div>
        <div className={style.List}>
          {achievements.map((task, index) => (
            <DraggableTask key={index} index={index} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
