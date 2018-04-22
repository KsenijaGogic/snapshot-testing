import React from "react";

import { Grid, GridItem } from "../Grid";
import Chip from "../Chip";

import colors from "./colors";

const App = () => {
  return (
    <div style={{ padding: "24px" }}>
      <h2 style={{ marginTop: "0" }}>Gallery of All Our Beautiful Colors</h2>
      <div className="gallery">
        <Grid>
          {colors.map((color, index) => (
            <GridItem key={index} col="1/5">
              <Chip name={color.name} code={color.code} hex={color.hex} />
            </GridItem>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default App;
