import React, { useState, useEffect } from "react";

function DatafrommariaDB() {
  const url = "http://localhost:3000/api/mariadb";
  const [data, setData] = useState([]);

  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }, []);

  return (
    <div >
      <h1 >using JavaScript inbuilt FETCH API</h1>
    
        {data.map((dataObj, index) => {
          return (
            <div key={index}>
              <p >{dataObj.datasetname}</p>
              <p >{dataObj.datatype}</p>
            </div>
          );
        })}
      
    </div>
  );
}

export default DatafrommariaDB;