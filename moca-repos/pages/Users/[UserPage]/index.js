import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import RenderRepo from '../../../components/renderRepo';
import Grid from '@material-ui/core/Grid';

function userPage({ user }) {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const { query } = useRouter();
  const theQuery = query.UserPage;

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
      <Grid>
        <div>
          {repos.map((repo) => (
            <RenderRepo
              key={repo.id}
              repo={repo}
              user={user}
              theQuery={theQuery}
            ></RenderRepo>
          ))}
        </div>
      </Grid>
    </>
  );
}
export default userPage;
