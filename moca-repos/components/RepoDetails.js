import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useRouter } from 'next/router';

import { Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    fontSize: 20,
    minHeight: 800,
    backgroundColor:'#1c1024',
    //background: 'radial-gradient(circle, rgba(36,9,45,1) 0%, rgba(51,13,38,1) 50% ,rgb(64 15 64) 100%)',
    marginBottom: 20,
  },
  nameTipo: {
    marginTop: 15,
    color: '#fff',
    'border-bottom': '1px solid grey',
    fontSize: 35,
    textAlign: 'center',
  },
  infoRepo: {
    color: '#fff',
    fontSize: 23,
    
  },
  infoRepoRoot: {
    display: 'flex',
    marginLeft: 0,
    marginTop: 15,

  },
  fontStyle: {
    fontSize: 30,
    'border-bottom': '1px solid grey',
    marginBottom: 10,    
  }
}));


export default function RepoDetails(props){

  const classes = useStyles();
  
const [details,setDetails] = useState({});
const [commits,setCommits] = useState([]);
const [languages,setLanguages] = useState([]);
const router = useRouter();
const { UserPage, repoName } = router.query;

useEffect(() => {

  try{

    getDetails();
    getCommits();
    getLanguages();
    
  } catch(exception){
    console.log(exception)
  }
},[UserPage]);

const getDetails = async() => {
    const res = await axios.get(`https://api.github.com/repos/${UserPage}/${repoName}`);
    setDetails(res.data);
}
const getLanguages = async() =>{
   const languages = await axios.get(`https://api.github.com/repos/${UserPage}/${repoName}/languages`);
   const keys = Object.keys(languages.data);
   setLanguages(keys);
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

              <Typography className={classes.fontStyle}><strong>Folders:</strong></Typography>
              {commits.map(el => {
                return(
                  <Typography className={classes.infoRepo} key={el.sha}> {el.path}</Typography>
                )
              })
        }
        </React.Fragment>
        }
        let languagesComponent = <Container>No programming languages used</Container>
        if (languages.length > 0){
            languagesComponent = 
            <React.Fragment>
              <Typography className={classes.fontStyle}><strong>List of languages used:</strong></Typography>
              {languages.map(el => {
                return(
                  <Typography className={classes.infoRepo} key={el} > {el}</Typography>
                )
              })
        }
        </React.Fragment>
        }
    if(details.name !== undefined){
      return (
        <Container className={classes.root}>
            <Typography className={classes.nameTipo}><strong>{details.name}</strong></Typography>
            <Container className={classes.infoRepoRoot}>
              <Container className={classes.infoRepo}> {filesComponent} </Container>
              <Container className={classes.infoRepo}> {languagesComponent} </Container>
            </Container>
          
      </Container>
    )
   } else {
     return(
      <Typography className={classes.root}>Page is loading</Typography>
     )
   }
  }