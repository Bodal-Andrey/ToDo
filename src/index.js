import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/app-header.jsx";
import SearchPanel from "./components/search-panel.jsx";
import TodoList from "./components/todo-list.jsx";

const App = () => {
  return (
  <div>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById(`root`));
