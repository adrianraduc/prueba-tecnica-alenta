import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./IsbnFilterComponent.css";

export default function IsbnFilterComponent({isbn, handleIsbnChange, onIsbnClick}) {
  return (
    <div className="isbnFilter">
      <TextField defaultValue={isbn} label="ISBN" onChange={handleIsbnChange} />
      <div className="isbnFilterButton">
        <Button
          variant="contained"
          color="primary"
          endIcon={<SearchOutlinedIcon></SearchOutlinedIcon>}
          onClick={onIsbnClick}
          disabled={isbn === null || isbn === "" ? true : false}
        >
          Filtrar
        </Button>
      </div>
    </div>
  );
}
