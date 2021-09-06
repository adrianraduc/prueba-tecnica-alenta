import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./LoadingSpinnerComponent.css";

export default function LoadingSpinnerComponent() {
  return (
    <div className="fullCardProgress">
      <div>
        <CircularProgress />
      </div>
    </div>
  );
}
