import React from "react";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

import "./ActionButtonsHeaderComponent.css";

export default function ActionButtonsHeaderComponent({
  handleUploadDialogClick,
  handleNewBookDialogClick,
}) {
  return (
    <div className="actionButtons">
      <IconButton
        color="primary"
        component="span"
        onClick={handleNewBookDialogClick}
      >
        <AddCircleOutlineOutlinedIcon />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        onClick={handleUploadDialogClick}
      >
        <CloudUploadOutlinedIcon />
      </IconButton>
    </div>
  );
}
