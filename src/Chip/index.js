import React from "react";
import "./Chip.css";

import Card from "../Card";

const Chip = props => {
  const { hex, code, name } = props;
  const style = {
    backgroundColor: hex
  };

  return (
    <div className="Chip">
      <Card>
        <div className="Chip-header" style={style} />
        <div className="Chip-body">
          <p className="Chip-tm">Pantone®</p>
          <p className="Chip-code">{code || "Please specify code"}</p>
          <p className="Chip-name">{name || "Please specify name"}</p>
        </div>
      </Card>
    </div>
  );
};

export default Chip;
