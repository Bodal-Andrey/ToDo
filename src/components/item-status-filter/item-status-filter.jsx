import React from "react";
// import "./item-status-filter.css";

class ItemStatusFilter extends React.Component {
  constructor(props) {
    super(props);

    this.buttons = [
      {name: `all`, label: `All`},
      {name: `active`, label: `Active`},
      {name: `done`, label: `Done`}
    ];
  
  }
  
  render() {
    const {filter, onFilterChange} = this.props;

    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;
      return (
        <button
        onClick={() => onFilterChange(name)}
        key={name}
        type="button"
        className={`btn ${isActive ? `btn-info` : `btn-outline-secondary`}`}
        >{label}</button>
      );
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>  
    );  
  }
};

export default ItemStatusFilter;
