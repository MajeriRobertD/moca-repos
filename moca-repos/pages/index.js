import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { incrementCounter, decrementCounter } from "../store/counter/action";
import { setUsername } from "../store/username/action";
import Link from "next/link";

function landingPage() {
  const globalState = useSelector((state) => state.username.username);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('')

  return (
    <>
      <h1>Searching for keyword: {globalState}</h1>

  <input 
        type="text" 
        // defaultValue= {globalState}
        onChange={(e) => setNewName(e.target.value)}>

        </input>


      <button onClick={() => dispatch(setUsername(newName))}>
        Search.
      </button>
      {"  "}
     
      <br />
      <br />
    

      
    </>
  );
}

export default landingPage;
