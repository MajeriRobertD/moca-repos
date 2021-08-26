import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Router, { useRouter } from 'next/router';
import { setUsername } from '../store/username/action';

import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  sizeContainer: {
    margin: 0,
    width: '100%',
    maxWidth: '100%',
    padding: 0,
    objectFit: 'cover',
    position: 'relative',
    height: '85vh',
  },

  imageBackground: {
    backgroundImage: 'url(./background.jpg)',
    display: 'flex',
    backgroundSize: '100% 100%',
    margin: 0,
    height: '85vh',
    objectFit: 'cover',
    maxWidth: '100%',
    padding: 0,
    position: 'relative',
    maxWidth: '100%',
    minWidth: '100%',
  },

  tipoSearch: {
    position: 'absolute',
    color: '#120417',
    top: '20%',
    textAlign: 'center',
    left: '29%',
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
    width: '20%',
  },
  clearButton: {
    backgroundColor: '#cc6929',
    width: 80,
    height: 30,
    position: 'absolute',
    top: '65%',
    left: '48%',
    color: '#291f32',
    fontFamily: 'system-ui',
    fontSize: 22,
    fontWeight: 700,
  },
}));

function landingPage() {
  const classes = useStyles();

  const globalState = useSelector((state) => state.username.username);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState(globalState);

  const [infoSearch, setInfoSearch] = useState('');

  function clearSearch() {
    setInfoSearch('');
    console.log('clearSearch: ', infoSearch, 'global: ', globalState);
  }

  const router = useRouter();

  return (
    <>
      <Container className={classes.sizeContainer}>
        <Container className={classes.imageBackground}>
          <Typography className={classes.tipoSearch} variant="h6" Wrap>
            Want to explore someone's moca repos?
            <br></br>
            Type their name below:
          </Typography>

          <Button className={classes.clearButton} onClick={clearSearch}>
            MOCA
          </Button>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(setUsername(newName));
              {
                router.push('/Users');
              }
            }}
          >
            <InputBase
              required
              id="userName"
              fullWidth
              placeholder="Search for an username..."
              className={classes.inputBaseText}
              onChange={(e) => setNewName(e.target.value)}
            />
          </form>
        </Container>
      </Container>
    </>
  );
}

export default landingPage