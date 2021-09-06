import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { Typography } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import SnackbarComponent from "../SnackbarComponent/SnackbarComponent";

import "./CreateBookComponent.css";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import { useFormik } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
}));



export default function CreateBookComponent({
  isNewBookDialogOpen,
  handleCloseNewBookDialogClick
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [fileArray, setFileArray] = useState([]);
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState(null);

  const classes = useStyles();
  const validationSchema = Yup.object({
    title: Yup.string()
      .max(250, "El título puede tener hasta 250 caracteres")
      .required("Campo obligatorio"),
    subtitle: Yup.string()
      .max(250, "El subtítulo puede tener hasta 250 caracteres")
      .required("Campo obligatorio"),
    author: Yup.string()
      .max(250, "El autor puede tener hasta 250 caracteres")
      .required("Campo obligatorio"),
    publisher: Yup.string()
      .max(250, "La editorial puede tener hasta 250 caracteres")
      .required("Campo obligatorio"),
    isbn: Yup.string()
      .max(50, "El ISBN puede tener hasta 50 caracteres")
      .required("Campo obligatorio"),
    pages: Yup.number()
      .min(1, "EL número de páginas no puede ser menor que 1")
      .required("Campo obligatorio"),
    website: Yup.string().max(
      250,
      "La página web puede tener hasta 250 caracteres"
    ),
    description: Yup.string()
      .max(2000, "La descripción puede tener hasta 2000 caracteres")
      .required("Campo obligatorio"),
  });

  const handleFilesChange = (e) => {
    setFileArray(e);
  }

  const formik = useFormik({
    initialValues: {
      title: "",
      subtitle: "",
      author: "",
      publisher: "",
      isbn: "",
      pages: 1,
      published: new Date(),
      category: "Drama",
      website: "",
      description: ""
    },
    validationSchema: validationSchema,
  });

  const handlePublishedChange = (value) => {
    formik.setFieldValue("published", value);
  };

  const checkSummitButtonStatus = () => {
    let touched =
      formik.touched.title &&
      formik.touched.subtitle &&
      formik.touched.author &&
      formik.touched.publisher &&
      formik.touched.isbn &&
      formik.touched.description
        ? true
        : false;

    let errors =
      !formik.errors.title &&
      !formik.errors.subtitle &&
      !formik.errors.author &&
      !formik.errors.publisher &&
      !formik.errors.isbn &&
      !formik.errors.description
        ? true
        : false;

    return !touched || !errors ? true : false;
  };

  const handleCloseClick = () => {
    formik.resetForm();
    setFileArray([]);
    handleCloseNewBookDialogClick();
  }

  const handleCloseSnackbar = () => {
    setSnackbarMessage("");
    setIsOpenSnackbar(false);
    setSnackbarType(null);
  };

  const handleCreateNewBook = () => {
    setIsLoading(true);
    let year = formik.values.published.getFullYear();
    let month =
      formik.values.published.getMonth() + 1 < 10
        ? "0" + (formik.values.published.getMonth() + 1)
        : formik.values.published.getMonth() + 1;
    let date =
      formik.values.published.getDate() < 10
        ? "0" + formik.values.published.getDate()
        : formik.values.published.getDate();
    let dateFormat = year + "-" + month + "-" + date;
    const formData = new FormData();
    formData.append("title", formik.values.title);
    formData.append("subtitle", formik.values.subtitle);
    formData.append("author", formik.values.author);
    formData.append("publisher", formik.values.publisher);
    formData.append("isbn", formik.values.isbn);
    formData.append("pages", formik.values.pages);
    formData.append("published", dateFormat);
    formData.append("category", formik.values.category);
    formData.append("website", formik.values.website);
    formData.append("description", formik.values.description);
    for (let i = 0 ; i < fileArray.length ; i++) {
      formData.append('images['+i+']', fileArray[i]);
  }

    axios.post(`/create-new-book`, formData).then((res) => {
      if(res.status === 200) {
        formik.resetForm();
        setSnackbarMessage("El libro se ha creado correctamente");
        setSnackbarType(1);
        setIsOpenSnackbar(true);
      } else {
        setSnackbarMessage("¡Oops! Ha ocurrido un error");
        setSnackbarType(3);
        setIsOpenSnackbar(true);
      }
    }).then(() => setIsLoading(false));
  };

  return (
    <div>
      <Dialog
        open={isNewBookDialogOpen}
        onClose={handleCloseNewBookDialogClick}
        aria-labelledby="form-dialog-title"
      >
        {isLoading === true ? (
          <div className="spinnerContainer">
            {" "}
            <CircularProgress />
          </div>
        ) : (
          <div className="formContainer">
            <DialogTitle id="form-dialog-title">
              Dar de alta nuevos libros
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Formulario utilizado para dar de alta nuevos libros
              </DialogContentText>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  margin="dense"
                  id="title"
                  name="title"
                  label="Título"
                  type="text"
                  fullWidth
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.title) && formik.touched.title}
                  helperText={
                    formik.errors.title && formik.touched.title
                      ? formik.errors.title
                      : null
                  }
                />

                <TextField
                  margin="dense"
                  id="subtitle"
                  name="subtitle"
                  label="Subtítulo"
                  type="text"
                  fullWidth
                  onBlur={formik.handleBlur}
                  value={formik.values.subtitle}
                  onChange={formik.handleChange}
                  error={
                    Boolean(formik.errors.subtitle) && formik.touched.subtitle
                  }
                  helperText={
                    formik.errors.subtitle && formik.touched.subtitle
                      ? formik.errors.subtitle
                      : null
                  }
                />

                <TextField
                  margin="dense"
                  id="author"
                  name="author"
                  label="Autor"
                  type="text"
                  fullWidth
                  onBlur={formik.handleBlur}
                  value={formik.values.author}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.author) && formik.touched.author}
                  helperText={
                    formik.errors.author && formik.touched.author
                      ? formik.errors.author
                      : null
                  }
                />

                <TextField
                  margin="dense"
                  id="publisher"
                  name="publisher"
                  label="Editorial"
                  type="text"
                  fullWidth
                  onBlur={formik.handleBlur}
                  value={formik.values.publisher}
                  onChange={formik.handleChange}
                  error={
                    Boolean(formik.errors.publisher) && formik.touched.publisher
                  }
                  helperText={
                    formik.errors.publisher && formik.touched.publisher
                      ? formik.errors.publisher
                      : null
                  }
                />

                <TextField
                  margin="dense"
                  id="isbn"
                  name="isbn"
                  label="ISBN"
                  type="text"
                  fullWidth
                  onBlur={formik.handleBlur}
                  value={formik.values.isbn}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.isbn) && formik.touched.isbn}
                  helperText={
                    formik.errors.isbn && formik.touched.isbn
                      ? formik.errors.isbn
                      : null
                  }
                />

                <div className="pagesAndDateContainer">
                  <TextField
                    id="pages"
                    name="pages"
                    label="Páginas"
                    type="number"
                    InputProps={{ inputProps: { min: 0 } }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                    onBlur={formik.handleBlur}
                    value={formik.values.pages}
                    onChange={formik.handleChange}
                    error={Boolean(formik.errors.pages) && formik.touched.pages}
                    helperText={
                      formik.errors.pages && formik.touched.pages
                        ? formik.errors.pages
                        : null
                    }
                  />

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      margin="normal"
                      id="published"
                      name="published"
                      label="Fecha publicación"
                      format="dd/MM/yyyy"
                      value={formik.values.published}
                      onChange={handlePublishedChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>

                  <input
                    multiple
                    accept="image/*"
                    className={classes.input}
                    id="images"
                    type="file"
                    name="images"
                    onChange={(e) =>
                      handleFilesChange(e.target.files)
                    }
                  />
                  <label htmlFor="images">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </div>

                <InputLabel id="category">
                  <Typography variant="h6" component="h6">
                    Categoría
                  </Typography>
                </InputLabel>
                <Select
                  labelId="category-label"
                  id="category"
                  name="category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  fullWidth
                >
                  <MenuItem value="Drama">Drama</MenuItem>
                  <MenuItem value="Classic">Clásica</MenuItem>
                  <MenuItem value="Fantasy">Fantasía</MenuItem>
                  <MenuItem value="Suspense">Suspense</MenuItem>
                </Select>

                <TextField
                  margin="dense"
                  id="website"
                  name="website"
                  label="Página web"
                  type="text"
                  fullWidth
                  onBlur={formik.handleBlur}
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  error={
                    Boolean(formik.errors.website) && formik.touched.website
                  }
                  helperText={
                    formik.errors.website && formik.touched.website
                      ? formik.errors.website
                      : null
                  }
                />

                <TextField
                  id="description"
                  name="description"
                  label="Descripción"
                  multiline
                  rows={4}
                  fullWidth
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  error={
                    Boolean(formik.errors.description) &&
                    formik.touched.description
                  }
                  helperText={
                    formik.errors.description && formik.touched.description
                      ? formik.errors.description
                      : null
                  }
                />

                <DialogActions>
                  <Button
                    onClick={handleCloseClick}
                    color="primary"
                  >
                    Cancelar
                  </Button>
                  <Button
                    onClick={handleCreateNewBook}
                    color="primary"
                    disabled={checkSummitButtonStatus()}
                  >
                    Crear
                  </Button>
                </DialogActions>
              </form>
            </DialogContent>
          </div>
        )}
      </Dialog>
      {isOpenSnackbar === true ? (
        <SnackbarComponent
          message={snackbarMessage}
          type={snackbarType}
          handleCloseSnackbar={handleCloseSnackbar}
          openSnackbar={isOpenSnackbar}
        ></SnackbarComponent>
      ) : null}
    </div>
  );
}
