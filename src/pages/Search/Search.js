import { Button } from "@material-ui/core";
import { useState } from "react";

const Search = () => {
  return (
    <div>
      <h1 className="pageHeading">Search</h1>
      <div>
        <Button variant="contained" color="primary">
          Open dialog
        </Button>
      </div>
    </div>
  );
};

export default Search;
