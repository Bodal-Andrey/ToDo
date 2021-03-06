import React from "react";
import AppHeader from "../app-header/app-header.jsx";
import SearchPanel from "../search-panel/search-panel.jsx";
import TodoList from "../todo-list/todo-list.jsx";
import ItemStatusFilter from "../item-status-filter/item-status-filter.jsx";
import ItemAddForm from "../item-add-form/item-add-form.jsx";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.maxId = 100;

    this.state = {
      todoData: [
        this.createTodoItem(`Drink Cofee`),
        this.createTodoItem(`Make Awesome App`),
        this.createTodoItem(`Have a lunch`),
      ],
      term: ``,
      filter: `all`,
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  createTodoItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.maxId++
    };
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
    const newItem = this.createTodoItem(text);

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

  toggleProperty(arr, id, propName) {
      const index = arr.todoData.findIndex((el) => el.id === id);
      const oldItem = arr.todoData[index];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};
      return [
        ...arr.todoData.slice(0, index),
        newItem,
        ...arr.todoData.slice(index + 1)
      ];
  }

  onToggleImportant = (id) => {
    this.setState((state) => {
      return {
        todoData: this.toggleProperty(state, id, `important`)
      };
    });
  };

  onToggleDone = (id) => {
    this.setState((state) => {
      return {
        todoData: this.toggleProperty(state, id, `done`)
      };
    });
  };

  onSearchChange = (term) => {
    this.setState({term});
  };

  onFilterChange = (filter) => {
    this.setState({filter});
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  filter(items, filter) {
    switch(filter) {
      case `all`:
        return items;
      case `active`:
        return items.filter((item) => !item.done);
      case `done`:
        return items.filter((item) => item.done); 
      default:
        return items;     
    };
  };

  render() {
    const {todoData, term, filter} = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((element) => element.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
          onFilterChange={this.onFilterChange}
          filter={filter}
          />
        </div>
        <TodoList
        onDeleted={this.deleteItem}
        todos={visibleItems}
        onToggleImportant={this.onToggleImportant}
        onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
      );
  }
};

export default App;