import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import BookInfoDialogComponent from "../BookInfoDialogComponent/BookInfoDialogComponent";
import Slide from "@material-ui/core/Slide";
import DeleteBookDialogComponent from "../DeleteBookDialogComponent/DeleteBookDialogComponent";

import "./GridComponent.css";

export default function GridComponent({ gridData, onDeleteBookClick }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isInfoDialogOpen, setIsInfoDialogOpen] = useState(false);
  const [book, setBook] = useState(null);

  function createData(
    author,
    category,
    description,
    id,
    images,
    isbn,
    pages,
    published,
    publisher,
    subtitle,
    title,
    website
  ) {
    return {
      author,
      category,
      description,
      id,
      images,
      isbn,
      pages,
      published,
      publisher,
      subtitle,
      title,
      website,
    };
  }

  const rows = gridData.map((book) =>
    createData(
      book.author,
      book.category,
      book.description,
      book.id,
      book.images,
      book.isbn,
      book.pages,
      book.published,
      book.publisher,
      book.subtitle,
      book.title,
      book.website
    )
  );

  const deleteBookDialog = (book) => {
    setBook(book);
    setIsDialogOpen(true);
  };

  const handleInfoDialogOpen = (book) => {
    setBook(book);
    setIsInfoDialogOpen(true);
  };

  const handleInfoDialogClose = () => {
    setBook(null);
    setIsInfoDialogOpen(false);
  };

  const handleDialogClose = () => {
    setBook(null);
    setIsDialogOpen(false);
  };

  const deleteBookConfirm = () => {
    onDeleteBookClick(book);
    setBook(null);
    setIsDialogOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell>Subtítulo</TableCell>
              <TableCell>Autor</TableCell>
              <TableCell>Editorial</TableCell>
              <TableCell>Categoría</TableCell>
              <TableCell>ISBN</TableCell>
              <TableCell>Páginas</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="left">{row.subtitle}</TableCell>
                <TableCell align="left">{row.author}</TableCell>
                <TableCell align="left">{row.publisher}</TableCell>
                <TableCell align="left">{row.category}</TableCell>
                <TableCell align="left">{row.isbn}</TableCell>
                <TableCell align="left">{row.pages}</TableCell>
                <TableCell align="left">
                  <InfoOutlinedIcon
                    className="iconCursor"
                    fontSize="small"
                    onClick={() => handleInfoDialogOpen(row)}
                  />
                  <CancelOutlinedIcon
                    className="iconCursor"
                    fontSize="small"
                    onClick={() => deleteBookDialog(row)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <DeleteBookDialogComponent
        isDialogOpen={isDialogOpen}
        handleDialogClose={handleDialogClose}
        deleteBookConfirm={deleteBookConfirm}
      ></DeleteBookDialogComponent>

      <BookInfoDialogComponent
        book={book}
        isInfoDialogOpen={isInfoDialogOpen}
        handleInfoDialogClose={handleInfoDialogClose}
      ></BookInfoDialogComponent>
    </>
  );
}
