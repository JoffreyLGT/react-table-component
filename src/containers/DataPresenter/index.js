import React, { Component } from "react";
import Table from "../../components/Table";
import "./style.css";

class DataPresenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      sortedColumn: [0, "desc"]
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
    const colToSort = parseInt(
      e.target.id.substring(7, e.target.id.lenght),
      10
    );
    const sortedColumn = this.state.sortedColumn;
    const sortedData = this.state.data.map(e => e);
    let newSortedColumn = [];

    const header = sortedData.shift();

    if (sortedColumn[0] === colToSort) {
      if (sortedColumn[1] === "desc") {
        sortedData.sort((a, b) => b[colToSort].localeCompare(a[colToSort]));
        newSortedColumn = [colToSort, "asc"];
      } else {
        sortedData.sort((a, b) => a[colToSort].localeCompare(b[colToSort]));
        newSortedColumn = [colToSort, "desc"];
      }
    } else {
      sortedData.sort((a, b) => a[colToSort].localeCompare(b[colToSort]));
      newSortedColumn = [colToSort, "desc"];
    }
    console.log(newSortedColumn);

    sortedData.unshift(header);

    this.setState({ data: sortedData, sortedColumn: newSortedColumn });
  }

  render() {
    return (
      <div className="data-presenter">
        <label>
          Rechercher un dossier :{" "}
          <input
            className="input"
            type="text"
            name="filter"
            onChange={this.filterTable}
          />
        </label>
        <Table
          data={this.state.data}
          sortedColumn={this.state.sortedColumn}
          handleSorting={this.handleSorting}
        />
      </div>
    );
  }
}

export default DataPresenter;
