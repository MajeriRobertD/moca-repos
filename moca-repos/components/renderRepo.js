import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useRouter } from "next/router";
import { Container, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    fontSize: 20,
    minHeight: 800,
    backgroundColor: theme.palette.background.paper,
    margin: 20,
  },
  infoList: {
    marginTop: 15,
    color: '#5b2a7b',
    'border-bottom': '1px solid grey',
    fontWeight: 500,
  }, 
}));


export default function RenderRepo({ repo, theQuery }) {

  const classes = useStyles();


  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  console.log("bjodjfisdiojsaio", theQuery);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    router.push(`/Users/${theQuery}/${repo.login}`);
  };
  return (
    <Container>
      <ListItem className={classes.infoList}
        button
        selected={selectedIndex === 0}
        onclick={(event) => {
          handleListItemClick(event, 0);
        }}
        key={repo.id}
      >
        <ListItemText 
           primary={repo.name}
           secondary="Click here"
           onClick={() => router.push(`/Users/${theQuery}/${repo.name}`)}
         />
      </ListItem>
    </Container>
  );
}
