import React, { Component } from "react";
import Table from "../../components/Table";
import "./style.css";

class DataPresenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
    this.filterTable = this.filterTable.bind(this);
    this.handleSorting = this.handleSorting.bind(this);
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

  handleSorting(e) {
    const colToSort = e.target.id.substring(7, e.target.id.lenght);
    const sortedData = this.state.data.map(e => e);
    
    const header = sortedData.shift();
    
    sortedData.sort((a, b) => a[colToSort].localeCompare(b[colToSort]));
    
    sortedData.unshift(header);
    
    this.setState({ data: sortedData });
  }

  render() {
    return (
      <div className="data-presenter">
        <label>
          Rechercher un dossier :{" "}
          <input
            class="input"
            type="text"
            name="filter"
            onChange={this.filterTable}
          />
        </label>
        <Table data={this.state.data} handleSorting={this.handleSorting} />
      </div>
    );
  }
}

export default DataPresenter;
