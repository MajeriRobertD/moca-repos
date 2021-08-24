import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RenderRepo from "../../../components/renderRepo";
import { useRouter } from "next/router";
// import { incrementCounter, decrementCounter } from "../store/counter/action";
// import { setUsername } from "../store/username/action";
import Link from "next/link";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { render } from "react-dom";
function userPage() {
  const globalState = useSelector((state) => state.username.username);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const { query } = useRouter();
  const theQuery = query.UserPage;
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
      <Grid>
        <div>
          {repos.map((repo) => (
            <RenderRepo key={repo.id} repo={repo}></RenderRepo>
          ))}
        </div>
      </Grid>
    </>
  );
}
export default userPage;