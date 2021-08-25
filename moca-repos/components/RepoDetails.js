import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';

export default function RepoDetails(props){

const [loading,setLoading] = useState("");
const [details,setDetails] = useState({});
const [commits,setCommits] = useState([]);
const [content,setContent] = useState({});
const [detailsLoading, setDetailsLoading] = useState(false);
 
useEffect(() => {
  getDetails();
  getCommits();
  // getContents();
},[]);
const getDetails = async() => {
    const res = await axios.get(`https://api.github.com/repos/twbs/bootstrap`);
    setDetails(res.data);
}
const getCommits = async() => {
    const repo = await axios.get(`https://api.github.com/repos/twbs/bootstrap/commits`);
    const repoData = await axios.get(`https://api.github.com/repos/twbs/bootstrap/commits/${repo.data[0]['sha']}`);
    const commitsContent = await axios.get(`${repoData.data.commit.tree.url}`);
    // console.log(commitsContent.data.tree);
    setCommits(commitsContent.data.tree);
}

    // function getDetails(repoName) {
    //       axios({
    //         method:"get",
    //         url: `https://api.github.com/repos/twbs/bootstrap`,
    //       }).then(res => {
    //         setDetailsLoading(false)
    //         setDetails(res.data)
    //       })
    //     }
    let filesComponent = <div>loading</div>
        if (commits.length > 0){
            filesComponent = 
            <React.Fragment>
              {commits.map(el => {
                console.log(el);
                return(
                  <Typography key={el.sha} variant='h3' component='h3' gutterBottom> {el.path}</Typography>
                )
              })
        }
        </React.Fragment>
        }
    if(details.name !== undefined){
      return (
        <React.Fragment>
        <Typography variant='h3' component='h3' gutterBottom> Name: {details.name}
        </Typography>
        <Typography variant='h3' component='h3' gutterBottom>Language: {details.language}</Typography>
        {filesComponent}
      </React.Fragment>
    )
   } else {
     return(
      <Typography variant='h3' component='h3' gutterBottom>Page is loading
      </Typography>
     )
   }
  }
