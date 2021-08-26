import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import userPage from '../pages/Users/[UserPage]';

import { Typography } from '@material-ui/core';

export default function RepoDetails(props) {
  const [loading, setLoading] = useState('');
  const [details, setDetails] = useState({});
  const [commits, setCommits] = useState([]);
  const router = useRouter();
  const { UserPage, repoName } = router.query;
  console.log(router);

  useEffect(() => {
    try {
      getDetails();
      getCommits();
    } catch (exception) {
      console.log(exception);
    }
  }, [UserPage]);

  const getDetails = async () => {
    const res = await axios.get(
      `https://api.github.com/repos/${UserPage}/${repoName}`
    );
    setDetails(res.data);
  };
  const getCommits = async () => {
    const repo = await axios.get(
      `https://api.github.com/repos/${UserPage}/${repoName}/commits`
    );
    const repoData = await axios.get(
      `https://api.github.com/repos/${UserPage}/${repoName}/commits/${repo.data[0]['sha']}`
    );
    const commitsContent = await axios.get(`${repoData.data.commit.tree.url}`);
    setCommits(commitsContent.data.tree);
  };

  let filesComponent = <div>loading</div>;
  if (commits.length > 0) {
    filesComponent = (
      <React.Fragment>
        {commits.map((el) => {
          console.log(el);
          return (
            <Typography key={el.sha} variant="h3" component="h3" gutterBottom>
              {' '}
              {el.path}
            </Typography>
          );
        })}
      </React.Fragment>
    );
  }

  if (details.name !== undefined) {
    return (
      <React.Fragment>
        <Typography variant="h3" component="h3" gutterBottom>
          {' '}
          Name: {details.name}
        </Typography>
        <Typography variant="h3" component="h3" gutterBottom>
          Language: {details.language}
        </Typography>
        {filesComponent}
      </React.Fragment>
    );
  } else {
    return (
      <Typography variant="h3" component="h3" gutterBottom>
        Page is loading
      </Typography>
    );
  }
}
