import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { incrementCounter, decrementCounter } from "../store/counter/action";
import { setUsername } from "../store/username/action";
import Link from "next/link";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
  sizeContainer: {
    margin: 0,
    width: '100%',
    maxWidth: '100%',
    padding: 0,
    objectFit:'cover',
    position: 'relative',
    height: 500,
   // backgroundColor: 'red',
  },

  imageBackground: {
    backgroundImage:'url(./background.jpg)',
    display: 'flex',
    backgroundSize: '100% 100%',
    margin: 0,
    height: 600,
    objectFit:'cover',
    maxWidth: '100%',
    padding: 0,  
    position: 'absolute',
  },
 
  tipoSearch: {
    position: 'absolute',
    color: '#120417',
    top: 170,
    left: '38%',
    fontSize: 30,
    fontWeight: 800,
  },

  inputBaseText: {
    position: 'absolute',
    color: 'white',
    top: 280,
    left: '40%',
    fontSize: 30,
    fontWeight: 700,
    backgroundColor: '#5f656930',
    width: '20%'
  }

}));




function landingPage() {
  const globalState = useSelector((state) => state.username.username);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('')

  const classes = useStyles();


  return (
    <>
      {/* <h1>Searching for keyword: {globalState}</h1> */}


      {/* <Container style={{ backgroundImage:'url(./background.jpg)',backgroundSize: '1000 px',backgroundAttachment: 'fixed', margin: '0',width:"1000", height:'10000'}}> */}
      <Container className={classes.sizeContainer}>
        <Container className={classes.imageBackground}></Container>
        <Typography className={classes.tipoSearch} variant="h6" noWrap>
            Searching for keyword:
        </Typography>
        <InputBase placeholder={globalState} className={classes.inputBaseText}/>
      </Container>

     
      <br />
      <br />
    

      
    </>
  );
}

export default landingPage;
