import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
// import userPage from '../pages/Users/[UserPage]';

export default function RepoDetails(props){
  
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

    let filesComponent = <div>loading</div>
        if (commits.length > 0){
            filesComponent = 
            <React.Fragment>
              <Typography>Folders:</Typography>
              {commits.map(el => {
                return(
                  <Typography key={el.sha}> {el.path}</Typography>
                )
              })
        }
        </React.Fragment>
        }
        let languagesComponent = <div>No programming languages used</div>
        if (languages.length > 0){
            languagesComponent = 
            <React.Fragment>
              <Typography>List of languages used:</Typography>
              {languages.map(el => {
                return(
                  <Typography key={el} > {el}</Typography>
                )
              })
        }
        </React.Fragment>
        }
    if(details.name !== undefined){
      return (
        <React.Fragment>
        
        <Typography variant='h5' component='h5' gutterBottom> Repository name: {details.name}
        </Typography>
        {languagesComponent}
        {filesComponent}
      </React.Fragment>
    )
   } else {
     return(
      <Typography >Page is loading
      </Typography>
     )
   }
  }