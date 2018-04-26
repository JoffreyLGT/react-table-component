import React from "react";

const SortedHeader = props => {
  const { index, sortedColumn, type } = props;
  let icon = "sort";

  if (index === sortedColumn) {
    icon = type === "asc" ? "sort-up" : "sort-down";
  }

  return (<i className={`fas fa-${icon}`} />)
};

export default SortedHeader;
