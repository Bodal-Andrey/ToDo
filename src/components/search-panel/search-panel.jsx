import React from "react";
import "./search-panel.css";

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      term: ``
    };
  }

  onSearchChange = (evt) => {
    const term = evt.target.value;
    this.setState({term});
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <input
      onChange={this.onSearchChange}
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      value={this.state.term}
      />
    );
  }
};

export default SearchPanel;
