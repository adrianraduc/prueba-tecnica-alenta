import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SnackbarComponent({
  message,
  type,
  handleCloseSnackbar,
  openSnackbar,
}) {
  const vertical = "top";
  const horizontal = "right";
  const getType = () => {
    if (type === 1) {
      return "success";
    } else if (type === 2) {
      return "warning";
    } else {
      return "error";
    }
  };
  if(message === null || type === null || openSnackbar === null){
    return null;
  }

  return (
    <div>
      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        key={vertical + horizontal}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleCloseSnackbar} severity={getType()}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
