import React, { Component } from "react";
import Table from "../../components/Table/Table";
import "./style.css";

class DataPresenter extends Component {
  constructor(props) {
    super(props);

    this.filterTable = this.filterTable.bind(this);
    this.handleSorting = this.handleSorting.bind(this);
    this.sortTable = this.sortTable.bind(this);

    const sortedColumn = [0, "desc"];
    const filteredData = this.sortTable(
      sortedColumn[0],
      this.props.data,
      sortedColumn[1]
    );
    this.state = {
      data: filteredData,
      sortedColumn: sortedColumn
    };
  }

  filterTable(e) {
    const searchedValue = e.target.value;
    const data = this.props.data.map(e => e);
    const header = data.shift();

    const filteredTable = data.filter(row =>
      row.toString().includes(searchedValue)
    );

    filteredTable.unshift(header);
    const sortedTable = this.sortTable(
      this.state.sortedColumn[0],
      filteredTable,
      this.state.sortedColumn[1]
    );
    this.setState({ data: sortedTable });
  }

  handleSorting(e) {
    const colToSort = parseInt(
      e.target.id.substring(7, e.target.id.lenght),
      10
    );
    let newSortedColumn = [];
    const sortedColumn = this.state.sortedColumn;

    if (sortedColumn[0] === colToSort) {
      if (sortedColumn[1] === "asc") {
        newSortedColumn = [sortedColumn[0], "desc"];
      } else {
        newSortedColumn = [sortedColumn[0], "asc"];
      }
    } else {
      newSortedColumn = [colToSort, "desc"];
    }
    const sortedData = this.sortTable(
      newSortedColumn[0],
      this.state.data,
      newSortedColumn[1]
    );

    this.setState({ data: sortedData, sortedColumn: newSortedColumn });
  }

  sortTable(colToSort, data, way) {
    const sortedData = data.map(e => e);

    if (colToSort === null) {
      return sortedData;
    }

    const header = sortedData.shift();
    if (way === "desc") {
      sortedData.sort((a, b) => b[colToSort].localeCompare(a[colToSort]));
    } else {
      sortedData.sort((a, b) => a[colToSort].localeCompare(b[colToSort]));
    }
    sortedData.unshift(header);

    return sortedData;
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
