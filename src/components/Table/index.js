import React, { Component } from "react";

const Table = props => {
  const content = props.data.map(e => e);
  const header = content.shift();

  return (
    <table className="table is-striped is-narrow is-hoverable">
      <thead>
        <tr>
          {header.map((column, index) => <th key={`th${index}`}>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {content.map((row, index) => (
          <tr key={`tr${index}`}>
            {row.map((column, index) => <td key={`td${index}`}>{column}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
