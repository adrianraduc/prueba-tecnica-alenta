import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import "./CategoryFilterComponent.css";

export default function CategoryFilterComponent({changeCategoryValue, onCategoryClick, category}) {
  return (
    <div className="categoryFilter">
      <div className="categoryRadioButtons">
        <RadioGroup
          onChange={changeCategoryValue}
          row
          aria-label="position"
          name="position"
          defaultValue="end"
        >
          <FormControlLabel
            value="Drama"
            control={<Radio color="primary" />}
            label="Drama"
          />
          <FormControlLabel
            value="Classic"
            control={<Radio color="primary" />}
            label="Clásica"
          />
          <FormControlLabel
            value="Fantasy"
            control={<Radio color="primary" />}
            label="Fantasía"
          />
          <FormControlLabel
            value="Suspense"
            control={<Radio color="primary" />}
            label="Suspense"
          />
        </RadioGroup>
      </div>
      <Button
        variant="contained"
        color="primary"
        endIcon={<SearchOutlinedIcon></SearchOutlinedIcon>}
        onClick={onCategoryClick}
        disabled={category === null ? true : false}
      >
        Filtrar
      </Button>
    </div>
  );
}
