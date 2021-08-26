import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Octokit } from '@octokit/core';

import UsersComponent from '../../components/UsersComponent';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, List, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  theContainer: {

    marginRight:'0%',
    backgroundColor: 'blue',
    minHeight: 800,

  },
  theButton1: {
    backgroundColor: '#1c1024',
    color: 'white',
    
    
  },
  theButton2: {
    backgroundColor: '#1c1024',
    color: 'white',
  },

  resultText:{
    margin:'10px',
    textAlign: 'center',

  },
  containerPosition: {
    width: "100%",
    fontSize: 20,
    minHeight: 800,
    backgroundColor: theme.palette.background.paper,
    
    

  },
  parentContainer:{
    marginLeft:'auto',
  },
}));

function usersListPage() {
  const classes = useStyles();

  const globalState = useSelector((state) => state.username.username);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('');

  const [nextPage, setNextPage] = useState(1);

  const [users, setUsers] = useState([]);

  const [totalCount, setTotalCount] = useState(0);
  const octokit = new Octokit({});

  useEffect(async () => {
    setNextPage(1);
  }, [globalState]);

  useEffect(async () => {

    try{
    let response = await octokit.request('GET /search/users', {
      q: globalState,
      per_page: '30',
      page: nextPage,
    })
    
    setUsers(response.data.items);
    setTotalCount(response.data.total_count);

    console.log(nextPage);
  } catch(e) {
    console.log(e)
    setUsers([])
    setTotalCount(0)
  }
  }, [globalState, nextPage]);

  return (
    <>
  
    <Typography className={classes.resultText} variant="h4">   {totalCount} users named '{globalState}' were found</Typography>
    <Divider variant="middle"/>
      <Grid container  className={classes.containerPosition}>

        {users.map((user) => (
          <Grid item key={user.id} xs={12} md={6} lg={4}>
            <UsersComponent user={user}></UsersComponent>
          </Grid>
        ))}
      </Grid>
      <>
          <Grid container justifyContent='flex-end'
 
  >
        {nextPage > 1 ? (
          <>
          <Grid item container xs={6} justifyContent={"flex-start"} >
            <Button
              className={classes.theButton2}
              variant="contained"
              startIcon={<NavigateBeforeIcon />}
              onClick={() => {
                setNextPage(nextPage - 1);
                console.log(nextPage);
              }}
            >
              Previous page
            </Button>
            </Grid>
          </>
        ) : (
          <> </>
        )}

        <>
          {totalCount > 30 * nextPage ? (
            <>
            <Grid item container xs={6} justifyContent={"flex-end"}>
              <Button  align="right"
                className={classes.theButton1}
                onClick={() => {
                  setNextPage(nextPage + 1);
                  console.log(nextPage);
                }}
                variant="contained"
                endIcon={<NavigateNextIcon />}
              >
                Next Page
              </Button>
              </Grid>
            </>
          ) : (
            <> </>
          )}
        </>
        </Grid>
      </>
     
    </>
  );
}

export default usersListPage;
