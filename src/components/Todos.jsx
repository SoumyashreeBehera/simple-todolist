import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./Todos.css";
import "./icoons/ionicons.min.css";

function Todos() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    setTodoList([{ status: false, title: value }, ...todoList]);
    setValue("");
  };

  const handleCross = (selectedTodo) => {
    let data = todoList;
    data = data.filter((el) => el.title !== selectedTodo);
    setTodoList(data);
  };

  return (
    <div className="section">
      <div className="inputTodoBox">
        <input
          className="inputbox"
          value={value}
          onChange={handleChange}
          type="text"
          placeholder="Write Something"
        />
        <button className="addButton ion-plus" onClick={handleClick}></button>
      </div>
      {todoList.map((el) => {
        return <TodoItem data={el} onClickCross={handleCross} />;
      })}
    </div>
  );
}
export default Todos;
