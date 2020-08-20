import React from "react";
import AppHeader from "../app-header/app-header.jsx";
import SearchPanel from "../search-panel/search-panel.jsx";
import TodoList from "../todo-list/todo-list.jsx";
import ItemStatusFilter from "../item-status-filter/item-status-filter.jsx";
import ItemAddForm from "../item-add-form/item-add-form.jsx";
import "./app.css";

class App extends React.Component {
  constructor() {
    super();

    this.maxId = 100;

    this.state = {
      todoData: [
        {label: `Drink cofee`, important: false, id: 1},
        {label: `Make Awesome App`, important: true, id: 2},
        {label: `Have a lunch`, important: false, id: 3}
      ],
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  
  deleteItem = (id) => {
    this.setState((state) => {
      const index = state.todoData.findIndex((el) => el.id === id);
      
      const newArray = [
        ...state.todoData.slice(0, index),
        ...state.todoData.slice(index + 1)
      ];

      return {
        todoData: newArray,
      }
    });
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    this.setState((state) => {
      const newArr = [
        ...state.todoData,
        newItem
      ];

      return {
        todoData: newArr,
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList onDeleted={this.deleteItem} todos={this.state.todoData} />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
      );
  }
};

export default App;