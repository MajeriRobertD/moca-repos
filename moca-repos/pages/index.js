import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Router, { useRouter } from 'next/router'
import { setUsername } from "../store/username/action";

const useStyles = makeStyles((theme) => ({
  sizeContainer: {
    margin: 0,
    width: '100%',
    maxWidth: '100%',
    padding: 0,
    objectFit:'cover',
    position: 'relative',
    height: '90vh',
  },

  imageBackground: {
    backgroundImage:'url(./background.jpg)',
    display: 'flex',
    backgroundSize: '100% 100%',
    margin: 0,
    height:'90vh',
    objectFit:'cover',
    maxWidth: '100%',
    padding: 0,  
    position: 'absolute',
  },
 
  tipoSearch: {
    position: 'absolute',
    color: '#120417',
    top: 170,
    left: '28%',
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
  const [newName, setNewName] = useState("");


  const classes = useStyles();

  const router = useRouter()


  return (
    <>
      {/* <h1>Searching for keyword: {globalState}</h1> */}

      {/* <Container style={{ backgroundImage:'url(./background.jpg)',backgroundSize: '1000 px',backgroundAttachment: 'fixed', margin: '0',width:"1000", height:'10000'}}> */}
      <Container className={classes.sizeContainer}>
        <Container className={classes.imageBackground}>
        <Typography className={classes.tipoSearch} variant="h6" noWrap>
            Want someone's moca repos? Type their name below
        </Typography>
        <form onSubmit={(e) => {e.preventDefault(); 
                 dispatch(setUsername(newName))
                 {
                   router.push('/Users')

                 }
                 
                 }}>
        <InputBase required placeholder='Search for an username...' className={classes.inputBaseText} onChange={e => setNewName(e.target.value)}/>

        </form>
      </Container>
      </Container>
    </>
  );
}

export default landingPage;
