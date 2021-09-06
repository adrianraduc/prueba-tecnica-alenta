import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import "./DateFilterComponent.css";

export default function DateFilterComponent({
  beforeDate,
  handleDateChange,
  onDateClick,
}) {
  return (
    <div className="dateFilter">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Obtener libros anteriores a"
          format="dd/MM/yyyy"
          value={beforeDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
      <div className="dateFilterButton">
        <Button
          variant="contained"
          color="primary"
          endIcon={<SearchOutlinedIcon></SearchOutlinedIcon>}
          onClick={onDateClick}
        >
          Filtrar
        </Button>
      </div>
    </div>
  );
}
