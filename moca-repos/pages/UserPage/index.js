import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { incrementCounter, decrementCounter } from "../store/counter/action";
import { setUsername } from "../store/username/action";
import Link from "next/link";

function userPage() {
  const globalState = useSelector((state) => state.username.username);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('')

  return (
    <>
      <h1>User Page</h1>


;

     
      <br />
      <br />
    

      
    </>
  );
}

export default userPage;