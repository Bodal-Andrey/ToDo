import React from "react";
import "./item-add-form.css";

class ItemAddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      label: ``,
    };
  };

  onLabelChange = (evt) => {
    this.setState({
        label: evt.target.value
    });  
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ``
  });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="item-add-form d-flex">
        <input
        onChange={this.onLabelChange}
        className="form-control"
        type="text"
        placeholder="What needs to be done"
        value={this.state.label} />
        <button
        className="btn btn-outline-secondary"
        >Add Item</button>  
      </form>  
    );  
  };  
};

export default ItemAddForm;
