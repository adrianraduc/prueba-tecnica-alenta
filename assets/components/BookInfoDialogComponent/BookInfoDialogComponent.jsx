import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    marginLeft: "5vw"
  },
  imageList: {
    width: 450,
    height: 400,
  },
  
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const getPublishedDate = (dateString) => {
  let date = new Date(dateString.date);
  let year = date.getFullYear();
  let month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

  return day + "/" + month + "/" + year;
};

export default function BookInfoDialogComponent({
  book,
  isInfoDialogOpen,
  handleInfoDialogClose,
}) {
  const classes = useStyles();
  const itemData = [];

  if (book !== null) {
    book.images.map((image) => {
      itemData.push({
        img: image.file_route.replace("/public", "") + image.file_name,
        title: "",
        author: "",
      });
    });
  }

  return (
    <Dialog
      fullScreen
      open={isInfoDialogOpen}
      onClose={handleInfoDialogClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleInfoDialogClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <List className={classes.list}>
        <ListItem>
          <ListItemText
            primary={book === null ? " " : "Título: " + book.title}
            secondary={book === null ? " " : book.subtitle}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={book === null ? " " : "Autor: " + book.author}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary={book === null ? " " : "ISBN: " + book.isbn} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={book === null ? " " : "Editorial: " + book.publisher}
            secondary={
              book === null
                ? " "
                : "Fecha publicación: " + getPublishedDate(book.published)
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={book === null ? " " : "Páginas: " + book.pages}
          />
        </ListItem>
        <ListItem
          button
          component="a"
          href={book === null ? "#" : book.website}
        >
          <ListItemText
            primary={book === null ? " " : "Página web: " + book.website}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={book === null ? " " : "Descripción: "}
            secondary={book === null ? " " : book.description}
          />
        </ListItem>
      </List>
      <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    </Dialog>
  );
}
