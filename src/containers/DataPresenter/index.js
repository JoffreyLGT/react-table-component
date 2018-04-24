import React, { Component } from "react";
import Table from "../../components/Table";
import './style.css';

class DataPresenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
    this.filterTable = this.filterTable.bind(this);
  }

  filterTable(e) {
    const searchedValue = e.target.value;
    const data = this.props.data.map(e => e);
    const header = data.shift();

    const filteredTable = data.filter(row =>
      row.toString().includes(searchedValue)
    );

    filteredTable.unshift(header);

    this.setState({ data: filteredTable });
  }

  render() {
    return (
      <div className="data-presenter">
        <label>
          Rechercher un dossier : <input class="input" type="text" name="filter" onChange={this.filterTable} />
        </label>
        <Table data={this.state.data} />
      </div>
    );
  }
}

export default DataPresenter;
