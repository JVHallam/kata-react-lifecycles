import React, { useState, useEffect } from "react";

/*
  props:  
    connection : {
      fetchDetails : async () => string
    };
*/
export default function( { connection, id="" } ){
  const [ message, setMessage ] = useState("standard message");
  const [ username, setUsername ] = useState(null);

  useEffect(() => {
    console.log("Use effect!");
    //This is mounted, so, let's get the username
    if(!username){
      connection.fetchDetails( "id" ).then( username => {
        console.log("Fetch ran!");
        setUsername( username )
      });
    }
  });

  console.log("Functional render ran");

  return (
    <div>
      <p id="message"> { message } </p>
    </div>
  );
};
