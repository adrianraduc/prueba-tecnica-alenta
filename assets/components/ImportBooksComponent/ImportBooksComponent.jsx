import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

export default function ImportBooksComponent({
  isUploadDialogOpen,
  handleClose,
  onFileChange,
  uploadFiles,
  file,
}) {
  return (
    <Dialog
      open={isUploadDialogOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Importar libros desde un fichero"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Seleccione un archivo para importar libros
        </DialogContentText>
        <input type="file" onChange={onFileChange} accept="application/JSON" />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button
          onClick={uploadFiles}
          color="primary"
          disabled={file === null ? true : false}
          autoFocus
        >
          Importar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
