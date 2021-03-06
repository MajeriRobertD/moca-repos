import React, { useState, useEffect } from "react";

import axios from "axios";

import { useRouter } from "next/router";
import { Container, Box, IconButton } from "@material-ui/core";

import RenderRepo from "../../../components/renderRepo";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import theme from "../../../styles/theme";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  parentContainer: {
    minHeight: 800,
    width: "100%",
  },
  root: {
    width: "100%",
    padding: "2%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "space-between",

    // background:
    // "radial-gradient(circle, rgba(36,9,45,1) 0%, rgba(51,13,13,1) 50% ,rgba(36,9,45,1) 100%)",
  },
  inputRoot: {
    color: "inherit",
    textAlign:'center',
  },
  userConainer: {
    textAlign: "center",
    padding: "20px",
    borderBottom: "1px solid rgba(36,9,45,1)",
    fontSize: "25px",
    fontFamily: "Monospace",
    fontWeight: "bold",
  },
  inputInput: {
    textAlign:'center',
    fontSize: "20px",
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    // transition: theme.transitions.create("width"),
    // width: "100%",
    // [theme.breakpoints.up("sm")]: {
    //   width: "12ch",
    //   "&:focus": {
    //     width: "20ch",
    //   },
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    justifyContent: 'center',
    top:'150px',
    color:'grey',
  },
});

function userPage({ user }) {
  const classes = useStyles();
  const { query } = useRouter();
  const theQuery = query.UserPage;

  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
      axios({
        method: "get",
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
      <Grid className={classes.parentContainer}>
        <Container className={classes.userConainer}>
          {theQuery}'s repos
        </Container>
        <Grid container justifyContent='center'>
          <Grid item>
            <div className={classes.searchIcon}>
            <SearchIcon color='grey'/>
            </div>
        <InputBase
          placeholder="Search for repos..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </Grid>
        </Grid>
        <Grid className={classes.root}>
          {repos
            .filter((val) => {
              if (searchTerm == "") {
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
      </Grid>
    </>
  );
}
export default userPage;
