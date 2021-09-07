import React from "react";
import "./icoons/ionicons.min.css";
import "./TodoItem.css";

function TodoItem({ data: { title, status }, onClickCross }) {
  const handleTodoCross = (props) => {
    onClickCross(title);
  };

  return (
    <div className="eachTodoBox">
      <div className="eachTodos">{title}</div>
      <button
        onClick={handleTodoCross}
        className="ion-close-round eachTodoManageButton"
      ></button>
    </div>
  );
}

export default TodoItem;
