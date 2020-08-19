import React from "react";
import AppHeader from "../app-header/app-header.jsx";
import SearchPanel from "../search-panel/search-panel.jsx";
import TodoList from "../todo-list/todo-list.jsx";
import ItemStatusFilter from "../item-status-filter/item-status-filter.jsx";

const App = () => {
  const todoData = [
    {label: `Drink cofee`, important: false, id: 1},
    {label: `Make Awesome App`, important: true, id: 2},
    {label: `Have a lunch`, important: false, id: 3}
  ];

  return (
  <div className="todo-app">
    <AppHeader toDo={1} done={3} />
    <div className="top-panel d-flex">
      <SearchPanel />
      <ItemStatusFilter />
    </div>
    <TodoList todos={todoData} />
  </div>
  );
};

export default App;