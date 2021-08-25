
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Link from "next/link";

import { makeStyles } from '@material-ui/core/styles'

import axios from 'axios'
import { Grid, List } from "@material-ui/core";
import { Octokit } from "@octokit/core";

import UsersComponent from "../../components/UsersComponent";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

function usersListPage() {
  const classes = useStyles();

  const globalState = useSelector((state) => state.username.username);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('')

  const [loading, setLoading] = useState(false)

  const [nextPage, setNextPage] = useState(1)

  const [users, setUsers] = useState([]);
  const octokit = new Octokit({})

// const { token } = await auth();

  useEffect(async () => {
       setLoading(true);
       

   

let response = await octokit.request('GET /search/users', {
  q: globalState,
  per_page: '10',
  page:1,
 
  
})


setUsers(response.data.items)

console.log(response)
console.log(nextPage)

  }, [globalState])
  
 
  function renderUsers(user) {
    return(
      <div key={user.id}>
        <h2> {user.login} </h2>

      </div>
    )
  }

function getNextPage(){
  
    setNextPage(nextPage+1)

  }

  useEffect(async ()=>{
    let response = await octokit.request('GET /search/users', {
        q: globalState,
        per_page: '10',
        page: nextPage,
    })


    setUsers(response.data.items)
    

  },[nextPage])

  return (
    <>

  

    <List>
    {users.map((user) => (
            <UsersComponent user={user}></UsersComponent>
          ))}
      <button onClick={()=> {setNextPage(nextPage+1); console.log(nextPage)}}>Next page</button>
      </List>


   
      

      
    </>
  );
}

export default usersListPage;
