
import React from "react";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import folders from "../public/folders.png";

const useStyles = makeStyles({
  root: {
    margin: "20px",
    width: "10%",
    // height: "100%",
    boxShadow: "0 3px 10px 10px rgba(18, 4, 23, .3)",
    textAlign: "center",
    background:
      "radial-gradient(circle, rgba(36,9,45,1) 0%, rgba(51,13,38,1) 50% ,rgba(136,7,7,1) 100%)",
    color: "white",

    "&:hover": {
      // transform: "translateY(-10px)",
      background: "#120417",
      color: "white",
      boxShadow: "0 3px 10px 10px whitesmoke",
      cursor: "pointer",
      transform: "scale(1.2, 1.2)",
    },
  },
  imageContainer: {
    maxWidth: "100%",
    // height: "50px",
    padding: 0,
  },
});

import React from 'react';
import { useRouter } from 'next/router';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default function RenderRepo({ repo, theQuery }) {
  const classes = useStyles();
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  console.log("bjodjfisdiojsaio", repo);

  console.log('bjodjfisdiojsaio', theQuery);


  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    router.push(`/Users/${theQuery}/${repo.login}`);
  };

  return (
    <Card
      className={classes.root}
      // button
      // selected={selectedIndex === 0}
      // onClick={(event) => {
      //   handleListItemClick(event, 0);
      // }}
      key={repo.id}
      onClick={() => router.push(`/Users/${theQuery}/${repo.name}`)}
    >
      <Container className={classes.imageContainer}>
        <Image src={folders} alt="folders" />
      </Container>
      <CardContent className={classes.cardContent}>
        <Typography>{repo.name}</Typography>
        <Typography>Language: {repo.language}</Typography>
        <Typography>Watchers: {repo.watchers}</Typography>
      </CardContent>
    </Card>
  );
}
