
import React, { useState, useEffect } from "react";
import RenderRepo from "../../../components/renderRepo";
import { useRouter } from "next/router";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "2%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "space-between",
    background:
      "radial-gradient(circle, rgba(36,9,45,1) 0%, rgba(51,13,13,1) 50% ,rgba(36,9,45,1) 100%)",
  },
   inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
});


import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import RenderRepo from '../../../components/renderRepo';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';



function userPage({ user }) {
  const classes = useStyles();
  const { query } = useRouter();
  const theQuery = query.UserPage;

  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    try {
      setLoading(true);
      axios({
        method: 'get',
        url: `https://api.github.com/users/${theQuery}/repos`,
      }).then((res) => {
        setLoading(false);
        setRepos(res.data);
      });
    } catch (exception) {
      console.log(exception);
    }
  }, [query]);

  return (
    <>

      <Grid className={classes.root}>
        <InputBase
          placeholder="Search for repos"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
          {repos
            .filter((val) => {
              if (searchTerm == '') {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((repo) => (
              <RenderRepo
                key={repo.id}
                repo={repo}
                user={user}
                theQuery={theQuery}
              ></RenderRepo>
            ))}
        

      </Grid>
    </>
  );
}
export default userPage;
