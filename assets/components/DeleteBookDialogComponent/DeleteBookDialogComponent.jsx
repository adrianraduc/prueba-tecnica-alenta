import React from 'react'
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

export default function DeleteBookDialogComponent({isDialogOpen, handleDialogClose, deleteBookConfirm}) {
    return (
        <Dialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Eliminar libro"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Desea eliminar el libro seleccionado?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleDialogClose}
            color="secondary"
            startIcon={<ClearOutlinedIcon />}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={deleteBookConfirm}
            startIcon={<DeleteOutlinedIcon />}
          >
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    )
}
