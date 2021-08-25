import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";
import { Container, Grid, List } from "@material-ui/core";
import { Octokit } from "@octokit/core";

import UsersComponent from "../../components/UsersComponent";

import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const useStyles = makeStyles((theme) => ({
  root: {
    
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  theContainer: {
    marginRight:'0%',
  },
  theButton1:{
    backgroundColor: '#1c1024',
    color: 'white',
    
    marginRight:0,
  },
  theButton2:{
    backgroundColor: '#1c1024',
    color: 'white',
    
  }
}));

function usersListPage() {
  const classes = useStyles();

  const globalState = useSelector((state) => state.username.username);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");

  const [nextPage, setNextPage] = useState(1);

  const [users, setUsers] = useState([]);

  const [totalCount, setTotalCount] = useState(0);
  const octokit = new Octokit({});

  // const { token } = await auth();

  useEffect(async () => {
    setNextPage(1);
  }, [globalState]);

  useEffect(async () => {
    let response = await octokit.request("GET /search/users", {
      q: globalState,
      per_page: "30",
      page: nextPage,
    });

    setUsers(response.data.items);
    setTotalCount(response.data.total_count);
    console.log(response);
    console.log(nextPage);
  }, [globalState, nextPage]);

  return (
    <>
      <Grid container>
        {users.map((user) => (
          <Grid item key={user.id} xs={12} md={6} lg={4}>
            <UsersComponent user={user}></UsersComponent>
          </Grid>
        ))}
      </Grid>
      <>
        {nextPage > 1 ? (
          <>
            <Button className={classes.theButton2} variant='contained' startIcon={<NavigateBeforeIcon/>}
              onClick={() => {
                setNextPage(nextPage - 1);
                console.log(nextPage);
              }}
            >
              Previous page
            </Button>
          </>
        ) : (
          <> </>
        )}

        <>
          {totalCount > 30 * nextPage ? (
            <>
          
              <Button className={classes.theButton1}  onClick={() => {
                  setNextPage(nextPage + 1);
                  console.log(nextPage);
                }} variant='contained' endIcon={<NavigateNextIcon/>}>

                Next Page

              </Button>
            </>
          ) : (
            <> </>
          )}
        </>
      </>
    </>
  );
}

export default usersListPage;
