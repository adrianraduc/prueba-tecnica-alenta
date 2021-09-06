import React from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { Typography } from "@material-ui/core";

export default function FilterSelectorComponent({ handleFilterValueChange, filterValue }) {
  return (
    <div>
      <InputLabel id="book-filter">
        <Typography variant="h6" component="h6">
          Seleccionar filtros
        </Typography>
      </InputLabel>
      <Select
        labelId="book-filter-label"
        id="book-filter"
        value={filterValue}
        onChange={handleFilterValueChange}
      >
        <MenuItem value={1}>Todos</MenuItem>
        <MenuItem value={2}>Categoría</MenuItem>
        <MenuItem value={3}>Fecha</MenuItem>
        <MenuItem value={4}>ISBN</MenuItem>
      </Select>
    </div>
  );
}
