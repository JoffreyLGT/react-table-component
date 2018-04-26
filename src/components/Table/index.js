import React from "react";
import SorterHeader from "./SorterHeader";

const Table = props => {
  const { data, handleSorting, sortedColumn } = props;
  const content = data.map(e => e);
  const header = content.shift();

  // if (sortedColumn[1] === "asc") {
  //   header[sortedColumn[0]] += '<i className="fas fa-sort-up" />';
  // } else [(header[sortedColumn[0]] += '<i className="fas fa-sort-down" />')];

  // const sortIcon = index => {
  //   if (index === sortedColumn[0]) {
  //     return sortedColumn[1] === "asc" ? (
  //       <i key={`icon${index}`} className="fas fa-sort-up" />
  //     ) : (
  //       <i key={`icon${index}`} className="fas fa-sort-down" />
  //     );
  //   } else {
  //     return <i key={`icon${index}`} className="fas fa-sort" />;
  //   }
  // };

  return (
    <table className="table is-striped is-narrow is-hoverable">
      <thead>
        <tr>
          {header.map((column, index) => (
            <th key={`th${index}`}>
              <a id={`sortCol${index}`} onClick={handleSorting}>
                {column}
              </a>
              {console.log(sortedColumn[0])}
              <SorterHeader key={`sh${index}`} index={index} sortedColumn={sortedColumn[0]} type={sortedColumn[1]} />
            </th>
          ))}
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
