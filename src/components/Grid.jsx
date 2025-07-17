import { useState } from "react";
import Square from "./Square";

const Grid = () => {
  return (
    <div>
      <div className="column">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="column">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="column">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Grid;
