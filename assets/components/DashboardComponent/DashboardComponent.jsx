import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import GridComponent from "../GridComponent/GridComponent";
import CreateBookComponent from "../CreateBookComponent/CreateBookComponent";
import SnackbarComponent from "../SnackbarComponent/SnackbarComponent";
import FilterSelectorComponent from "../FilterSelectorComponent/FilterSelectorComponent";
import DateFilterComponent from "../DateFilterComponent/DateFilterComponent";
import IsbnFilterComponent from "../IsbnFilterComponent/IsbnFilterComponent";
import LoadingSpinnerComponent from "../LoadingSpinnerComponent/LoadingSpinnerComponent";
import ActionButtonsHeaderComponent from "../ActionButtonsHeaderComponent/ActionButtonsHeaderComponent";
import ImportBooksComponent from "../ImportBooksComponent/ImportBooksComponent";
import CategoryFilterComponent from "../CategoryFilterComponent/CategoryFilterComponent";

import "./DashboardComponent.css";

export default function DashboardComponent() {
  const [file, setFile] = useState(null);
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isNewBookDialogOpen, setIsNewBookDialogOpen] = useState(false);
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState(null);
  const [filterValue, setFilterValue] = useState(1);
  const [category, setCategory] = useState(null);
  const [isbn, setIsbn] = useState(null);
  const [beforeDate, setBeforeDate] = useState(new Date());

  useEffect(() => {
    axios
      .get(`/find-all-books`)
      .then((res) => {
        if (res.data) {
          setGridData(res.data);
          if (res.data.length === 0) {
            setSnackbarMessage("No se han encontrado libros");
            setSnackbarType(2);
          }
        } else {
          setGridData([]);
        }
      })
      .then(() => {
        setIsOpenSnackbar(true);
        setLoading(false);
      });
  }, []);

  const handleUploadDialogClick = () => {
    setIsUploadDialogOpen(true);
  };

  const handleClose = () => {
    setIsUploadDialogOpen(false);
  };

  const handleCloseSnackbar = () => {
    setSnackbarMessage("");
    setIsOpenSnackbar(false);
    setSnackbarType(null);
  };

  const handleDateChange = (date) => {
    setBeforeDate(date);
  };

  const handleFilterValueChange = (event) => {
    setFilterValue(event.target.value);
    if (event.target.value === 1) {
      findAllBooks();
    }

    if (event.target.value !== 2) {
      setCategory(null);
    }
  };

  const onDeleteBookClick = (book) => {
    setLoading(true);
    axios
      .post(`/delete/` + book.id)
      .then((res) => {
        if (res.data) {
          setGridData(res.data);
          if (res.status === 200) {
            setSnackbarMessage("El libro se ha eliminado correctamente");
            setSnackbarType(1);
          } else if (res.status === 500) {
            setSnackbarMessage("¡Ooops! Ha ocurrido un error");
            setSnackbarType(3);
          }
          if (res.data.length === 0) {
            setSnackbarMessage("No se han encontrado libros");
            setSnackbarType(2);
          }
        } else {
          setGridData([]);
        }
      })
      .then(() => {
        setFilterValue(1);
        setLoading(false);
      });
  };

  const onFileChange = (e) => {
    setFile({ selectedFile: e.target.files[0] });
  };

  const changeCategoryValue = (event) => {
    setCategory(event.target.value);
  };

  const handleIsbnChange = (e) => {
    setIsbn(e.target.value.trim());
  };

  const handleNewBookDialogClick = () => {
    setIsNewBookDialogOpen(true);
  };

  const handleCloseNewBookDialogClick = () => {
    findAllBooks();
    setFilterValue(1)
    setIsNewBookDialogOpen(false);
  };

  const uploadFiles = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("myFile", file.selectedFile, file.selectedFile.name);
    axios
      .post(`/import-books`, formData)
      .then((res) => {
        if (res.data) {
          setGridData(res.data);
          if (res.status === 200) {
            setSnackbarMessage("Los libros se han importado correctamente");
            setSnackbarType(1);
          } else if (res.status === 500) {
            setSnackbarMessage("¡Ooops! Ha ocurrido un error");
            setSnackbarType(3);
          }
        } else {
          setGridData([]);
        }
      })
      .then(() => {
        setFile(null);
        setIsUploadDialogOpen(false);
        setLoading(false);
        setIsOpenSnackbar(true);
      });
  };

  const onCategoryClick = () => {
    setLoading(true);
    axios
      .get(`/category/` + category)
      .then((res) => {
        if (res.data) {
          setGridData(res.data);
          if (res.data.length === 0) {
            setSnackbarMessage("No se han encontrado libros");
            setSnackbarType(2);
          }
        } else {
          setGridData([]);
        }
      })
      .then(() => setLoading(false));
  };

  const onIsbnClick = () => {
    setLoading(true);
    let booksArray = [];
    axios
      .get(`/isbn/` + isbn)
      .then((res) => {
        if (res.data !== null) {
          booksArray.push(res.data);
          setGridData(booksArray);
        } else {
          setGridData([]);
          setSnackbarMessage("No se han encontrado libros");
          setSnackbarType(2);
        }
      })
      .then(() => {
        setLoading(false);
      });
  };

  const findAllBooks = () => {
    setLoading(true);
    axios
      .get(`/find-all-books`)
      .then((res) => {
        if (res.data) {
          setGridData(res.data);
          if (res.data.length === 0) {
            setSnackbarMessage("No se han encontrado libros");
            setSnackbarType(2);
          }
        } else {
          setGridData([]);
        }
      })
      .then(() => {
        setIsOpenSnackbar(true);
        setLoading(false);
      });
  };

  const onDateClick = () => {
    setLoading(true);
    let year = beforeDate.getFullYear();
    let month =
      beforeDate.getMonth() + 1 < 10
        ? "0" + (beforeDate.getMonth() + 1)
        : beforeDate.getMonth() + 1;
    let date =
      beforeDate.getDate() < 10
        ? "0" + beforeDate.getDate()
        : beforeDate.getDate();
    let datestring = year + "-" + month + "-" + date;

    axios
      .get(`/published-before/` + datestring)
      .then((res) => {
        if (res.data) {
          setGridData(res.data);
          if (res.data.length === 0) {
            setSnackbarMessage("No se han encontrado libros");
            setSnackbarType(2);
          }
        } else {
          setGridData([]);
        }
      })
      .then(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Card className="fullCard">
        <div className="fullCardHeader">
          <FilterSelectorComponent
            handleFilterValueChange={handleFilterValueChange}
            filterValue={filterValue}
          ></FilterSelectorComponent>
          {filterValue === 2 ? (
            <CategoryFilterComponent
              changeCategoryValue={changeCategoryValue}
              onCategoryClick={onCategoryClick}
              category={category}
            ></CategoryFilterComponent>
          ) : null}

          {filterValue === 3 ? (
            <DateFilterComponent
              beforeDate={beforeDate}
              handleDateChange={handleDateChange}
              onDateClick={onDateClick}
            ></DateFilterComponent>
          ) : null}

          {filterValue === 4 ? (
            <IsbnFilterComponent
              isbn={isbn}
              handleIsbnChange={handleIsbnChange}
              onIsbnClick={onIsbnClick}
            ></IsbnFilterComponent>
          ) : null}
        </div>
        {loading === true ? (
          <LoadingSpinnerComponent></LoadingSpinnerComponent>
        ) : (
          <div className="fullCardGrid">
            <ActionButtonsHeaderComponent
              handleUploadDialogClick={handleUploadDialogClick}
              handleNewBookDialogClick={handleNewBookDialogClick}
            ></ActionButtonsHeaderComponent>
            <GridComponent
              gridData={gridData}
              onDeleteBookClick={onDeleteBookClick}
            ></GridComponent>
          </div>
        )}
      </Card>

      <ImportBooksComponent
        isUploadDialogOpen={isUploadDialogOpen}
        handleClose={handleClose}
        onFileChange={onFileChange}
        uploadFiles={uploadFiles}
        file={file}
      ></ImportBooksComponent>

      <CreateBookComponent
        isNewBookDialogOpen={isNewBookDialogOpen}
        handleCloseNewBookDialogClick={handleCloseNewBookDialogClick}
      ></CreateBookComponent>

      {isOpenSnackbar === true ? (
        <SnackbarComponent
          message={snackbarMessage}
          type={snackbarType}
          handleCloseSnackbar={handleCloseSnackbar}
          openSnackbar={isOpenSnackbar}
        ></SnackbarComponent>
      ) : null}
    </>
  );
}
