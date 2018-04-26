import React from "react";

const SortedHeader = props => {
  const { index, sortedColumn, type } = props;
  let icon = "fa-sort";

  if(index===sortedColumn){
    icon = type === 'asc'
    ? "fa-sort-up"
    : "fa-sort-down"
  }

  return <i className={`fas ${icon}`} />;
};

export default SortedHeader;
