
import Link from "next/link";
import { React, useState } from "react";

import Datasubmitpopup from "./datasubmitpopup";
const styles = {
  form: `inline-block`,
  DataNav: "flex cursor-pointer items-center space-x-5 py-3 text-2xl",
  elastcdata: "flex gap-2",
  input: `border-solid border-2 border-black-100`,
  mb3: `py-1 mr-10`,
};

function Slug(props) {
  const [datasetname, setdatasetname] = useState("");
  const [Datatype, setdatatype] = useState("");
  const [dataCondetails, setdataCondetails] = useState("");
  
  //pop window property
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datasetname, Datatype, dataCondetails)
    const data = {datasetname, Datatype, dataCondetails};

    fetch('http://localhost:3000/api/PostAllDataset', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        setdatasetname('')
        setdatatype('')
        setdataCondetails('')

  
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }
  const isFormValid = datasetname && Datatype && dataCondetails;
  
  const handleChange = (e) => {
    if (e.target.name == "datasetname") {
      setdatasetname(e.target.value);
      
    }
    else if (e.target.name == "Datatype") {
      setdatatype(e.target.value);
    }
    else if (e.target.name == "dataCondetails") {
      setdataCondetails(e.target.value);
    }
  };
  
  //
  // Example POST method implementation:
  
  return (
    <div>
      <h1 className="text-[Red] text-4xl">New Dataset Details </h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="datasetname" className={styles.formlabel}>
          datasetname
          </label>
          <input
            className={styles.input}
            type="text"
            value={datasetname}
            onChange={handleChange}
            id="datasetname"
            name="datasetname"
            aria-describedby="emailHelp"       
            
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Data Type
          </label>
          <input
            className={styles.input}
            type="text"
            value={Datatype}
            onChange={handleChange}
            name="Datatype"
            id="Datatype"
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Dataset connectivity details
          </label>
          <input
            className={styles.input}
            type="phone"
            value={dataCondetails}
            onChange={handleChange}
            name="dataCondetails"
            id="dataCondetails"
            required
          />
        </div>
        <button type="submit" disabled={!isFormValid}  
          onClick={togglePopup}
          className="bg-black text-white py-2 px-8 rounded-full flex items-center justify-center gap-2">OK</button>
        <input
          
        /> 
        {isOpen && (
          <Datasubmitpopup
            content={
              <>
                <b>New Dataset created</b>
                <button className="bg-black text-white py-2 px-8 rounded-full flex items-center justify-center gap-2 ">
                  <Link href="/AI2">Submit</Link>
                </button>
              </>
            }
          />
        )}
      </form>
      <Datasubmitpopup />
    </div>
  );
}

export default Slug;
