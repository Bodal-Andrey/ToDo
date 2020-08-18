import React from "react";
import TodoListItem from "./todo-list-item.jsx";

const TodoList = () => {
    return (
      <ul>
        <li><TodoListItem label="Drink Cofee" /></li>
        <li><TodoListItem label="Build React App" important /></li>
      </ul>
    );
};
  
export default TodoList;  