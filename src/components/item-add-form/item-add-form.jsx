import React from "react";

class ItemAddForm extends React.Component {
  render() {
    return (
      <div className="item-add-form">
        <button onClick={() => this.props.onItemAdded(`Hello, world!`)} className="btn btn-outline-secondary">Add Item</button>  
      </div>  
    );  
  }  
};

export default ItemAddForm;
