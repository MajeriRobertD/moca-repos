import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { incrementCounter, decrementCounter } from "../store/counter/action";
import { setUsername } from "../store/username/action";
import Link from "next/link";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  sizeContainer: {
    margin: 0,
    width: '100%',
    maxWidth: '100%',
    padding: 0,
    objectFit:'cover',
    position: 'relative',
    height: '85vh',
  },

  imageBackground: {
    backgroundImage:'url(./background.jpg)',
    display: 'flex',
    backgroundSize: '100% 100%',
    margin: 0,
    height:'85vh',
    objectFit:'cover',
    maxWidth: '100%',
    padding: 0,  
    position: 'relative',
    maxWidth: '100%',
    minWidth: '101%',
  },
 
  tipoSearch: {
    position: 'absolute',
    color: '#120417',
    top: '25%',
    textAlign: 'center',
    left: '31%',
    fontSize: 45,
    fontWeight: 800,
    background: '-webkit-linear-gradient(#883340, #120417, #b4323d )',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },

  inputBaseText: {
    position: 'absolute',
    color: 'white',
    textAlign: 'center',
    top: '45%',
    left: '40%',
    fontSize: 30,
    fontWeight: 700,
    backgroundColor: '#5f656930',
    width: '20%'
  },
  clearButton: {
    backgroundColor: '#cc6929',
    width: 80,
    height: 30,
    position: 'absolute',
    top: '65%',
    left: '48%',
    color: '#291f32',
    fontFamily:'system-ui',
    fontSize: 22,
    fontWeight: 700,
  },

}));


function landingPage() {
  const classes = useStyles();

  const globalState = useSelector((state) => state.username.username);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState(globalState);

  const [infoSearch, setInfoSearch] = useState("");

  function clearSearch() {
   
    setInfoSearch("");
    console.log("clearSearch: ", infoSearch, "global: ", globalState);
  }
 

  return (
    <>
      {/* <h1>Searching for keyword: {globalState}</h1> */}

      {/* <Container style={{ backgroundImage:'url(./background.jpg)',backgroundSize: '1000 px',backgroundAttachment: 'fixed', margin: '0',width:"1000", height:'10000'}}> */}
      <Container className={classes.sizeContainer}>
        <Container className={classes.imageBackground}>
        <Typography className={classes.tipoSearch} variant="h6" Wrap>
            Want someone's moca repos?
            <br></br>
             Type their name below
        </Typography>
       
        <InputBase placeholder={globalState} className={classes.inputBaseText}/>

        <Button className={classes.clearButton} onClick={clearSearch}>Clear</Button>
        
      </Container>
      </Container>
    </>
  );
}

export default landingPage;
