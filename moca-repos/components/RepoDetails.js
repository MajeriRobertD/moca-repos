import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import userPage from '../pages/Users/[UserPage]';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    fontSize: 20,
    minHeight: 800,
    backgroundColor: theme.palette.background.paper,
    marginBottom: 20,
  },
  nameTipo: {
    marginTop: 15,
    color: '#5b2a7b',
    'border-bottom': '1px solid grey',
    fontSize: 24,
  },
  infoRepo: {
    color: '#a894b5',
    fontSize: 23,
  }
}));

export default function RepoDetails(props){

  const classes = useStyles();

  const [loading,setLoading] = useState("");
  const [details,setDetails] = useState({});
  const [commits,setCommits] = useState([]);
  const router = useRouter();
  const { UserPage, repoName } = router.query;
  console.log(router)

  useEffect(() => {

    try{
      getDetails();
      getCommits();
      
    } catch(exception){
      console.log(exception)
    }
  },[UserPage]);

  const getDetails = async() => {
      const res = await axios.get(`https://api.github.com/repos/${UserPage}/${repoName}`);
      setDetails(res.data);
  }
  const getCommits = async() => {
      const repo = await axios.get(`https://api.github.com/repos/${UserPage}/${repoName}/commits`);
      const repoData = await axios.get(`https://api.github.com/repos/${UserPage}/${repoName}/commits/${repo.data[0]['sha']}`);
      const commitsContent = await axios.get(`${repoData.data.commit.tree.url}`);
      setCommits(commitsContent.data.tree);
  }

      let filesComponent = <Container>loading</Container>
          if (commits.length > 0){
              filesComponent = 
              <React.Fragment>
                {commits.map(el => {
                  console.log(el);
                  return(
                    <Typography key={el.sha} className={classes.infoRepo} variant='h3' component='h3' gutterBottom> {el.path}</Typography>
                  )
                })
          }
          </React.Fragment>
          }
      if(details.name !== undefined){
        return (
          <Container className={classes.root}>
            <React.Fragment >
              <Typography className={classes.nameTipo} variant='h3' component='h3' gutterBottom><strong>Name:</strong> {details.name}</Typography>
              <Typography className={classes.nameTipo} variant='h3' component='h3' gutterBottom><strong>Language:</strong> {details.language}</Typography>
              <Container className={classes.infoRepo}> {filesComponent} </Container>
          </React.Fragment>
        </Container>
      )
    } else {
      return(
        <Typography className={classes.root} variant='h3' component='h3' gutterBottom>Page is loading
        </Typography>
      )
    }
  }
