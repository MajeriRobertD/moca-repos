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
});

function userPage() {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const { query } = useRouter();
  const theQuery = query.UserPage;
  const classes = useStyles();

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
      <Grid className={classes.root}>
        {repos.map((repo) => (
          <RenderRepo
            key={repo.id}
            repo={repo}
            theQuery={theQuery}
          ></RenderRepo>
        ))}
      </Grid>
    </>
  );
}
export default userPage;
