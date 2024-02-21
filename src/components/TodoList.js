import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFilterStatus } from "../slices/taskSlice";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";
import SampleCard from "./SampleCard";
import SearchTerm from "./SearchTerm";
import todo from "../img/todo.png";

function TodoList() {
  const [modal, setModal] = useState(false);
  //const [taskList, setTaskList] = useState([]);
  const initialFilterStatus = useSelector((state) => state.task.filterStatus);
  const searchTerm = useSelector((state) => state.searchTerm.searchTerm);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const taskList = useSelector((state) => state.task.taskItem);
  const sortedTaskList = [...taskList];
  sortedTaskList.sort((a, b) => new Date(b.time) - new Date(a.time));
  const dispatch = useDispatch();

  const filteredTaskList = sortedTaskList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }
    return item.status === filterStatus;
  });

  const filteredSearchTerm = filteredTaskList.filter((items) => {
    return items.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const toggle = () => setModal(!modal);

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  // const saveTask = (taskObj) => {
  //     let tempList = taskList;
  //     tempList.push(taskObj);
  //     localStorage.setItem('taskItem', JSON.stringify(tempList));
  //     setTaskList(tempList);
  //     setModal(false);
  // };

  // const deleteTask = (index) => {
  //     let tempList = taskList;
  //     tempList.splice(index, 1);
  //     localStorage.setItem('taskItem', JSON.stringify(tempList));
  //     setTaskList(tempList);
  //     window.location.reload();
  // };

  // const updateListArray = (obj, index) => {
  //     let tempList = taskList
  //     tempList[index] = obj
  //     localStorage.setItem('taskItem', JSON.stringify(tempList));
  //     setTaskList(tempList)
  //     window.location.reload();
  // }

  return (
    <>
      <div className="d-flex justify-content-around header">
        <div>
          <SearchTerm searchTerm={searchTerm} dispatch={dispatch} />
          <h1>Today Task</h1>
          <p>Check and manage your daily tasks</p>
          <button
            className="btn btn-primary mt-3 me-5"
            onClick={() => setModal(true)}
          >
            New task
          </button>
          <select
            className="btn btn-primary mt-3 ms-5"
            value={filterStatus}
            onChange={updateFilter}
          >
            <option value="all">All</option>
            <option value="done">Completed</option>
          </select>
        </div>
        <div>
          <img src={todo} alt="todo" />
        </div>
      </div>
      <div className="task-container">
        {/* {taskList && taskList.map((obj, index) => <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>)} */}
        {(filteredTaskList && filteredTaskList.length) > 0 ? (
          filteredSearchTerm.map((task) => <Card key={task.id} task={task} />)
        ) : (
          <>
            {" "}
            <SampleCard title="Grocery shopping" />
            <SampleCard title="Pilates with friends" />
          </>
        )}
      </div>
      <CreateTask toggle={toggle} modal={modal} />
    </>
  );
}

export default TodoList;
