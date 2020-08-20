import React from "react";
import "./todo-list-item.css";

class TodoListItem extends React.Component {
  constructor() {
    super();

    this.state = {
      done: false,
      important: false,
    };

    this.onLabelClick = this.onLabelClick.bind(this);
    this.onMarkImportant = this.onMarkImportant.bind(this);
  }

  onLabelClick() {
    this.setState({
      done: true,
    });
  } 

  onMarkImportant() {
    this.setState({
      important: true,
    });
  }

  render() {
    const {label} = this.props;
    const {done, important} = this.state;

    let classNames = `todo-list-item`;
    if (done) {
      classNames += ` done`;
    }
    if (important) {
      classNames += ` important`
    }
  return (
    <span className={classNames}>
      <span onClick={this.onLabelClick} className="todo-list-item-label">{label}</span> 
      <button onClick={this.onMarkImportant} type="button" className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>
      <button type="button" className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span> 
  );  
  }
}

export default TodoListItem;
