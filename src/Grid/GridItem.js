import React from "react";
import PropTypes from "prop-types";

import "./Grid.css";

const GridItem = props => {
  const columns = props.col.split("/");
  const percent = columns[0] / columns[1] * 100;

  const style = props.style || {};
  style.width = `${percent}%`;

  return (
    <div style={style} className="GridItem">
      {props.children}
    </div>
  );
};

GridItem.propTypes = {
  children: PropTypes.node,
  col: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default GridItem;
