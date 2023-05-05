import { data } from "autoprefixer";
import Link from "next/link";
import { React, useState } from "react";
import { SiElasticsearch } from "react-icons/si";
import Datasubmitpopup from "../NewData/datasubmitpopup";
const styles = {
  DataNav: "flex cursor-pointer items-center space-x-5 py-3 text-2xl",
  elastcdata: "flex gap-2",
  input: `border-solid border-2 border-black-100`,
  mb3: `py-1 mr-10`,
};

function Slug() {
  const [datasetname, setdatasetname] = useState(" ");
  const [Datatype, setdatatype] = useState("");
  const [dataCondetails, setdataCondetails] = useState(" ");
  const [savedatavalue, setsavedatavalue] = useState(false);
  //pop window property
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const savedata = () => {
    if (datasetname == "kamal") {
      savedatavalue("false");
      console.log(savedatavalue);
    } else {
      setsavedatavalue("true");
      console.log(setsavedatavalue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    if (e.target.name == "datasetname") {
      setdatasetname(e.target.value);
    }
    if (e.target.name == "Datatype") {
      setdatatype(e.target.value);
    }
    if (e.target.name == "dataCondetails") {
      setdataCondetails(e.target.value);
    }
  };

  return (
    <div>
      <h1 className="text-[Red] text-4xl">New Dataset Details </h1>
      {/*  <div className={styles.DataNav}>
        <div className={styles.elastcdata}><span className="h-5 w-5" ></span>Elasticsearch</div>
        <div>Library</div>
        <div>Database</div>
        <div>External files</div>
        <div>HDFS</div>
        <div>Google Spreadsheet</div>
        <div>Form Data</div>
      </div>
      */}

      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="datasetname" className={styles.formlabel}>
            Enter Datset Name
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
        <input
          on
          click={savedata}
          onClick={togglePopup}
          type="button"
          value="OK"
          className="bg-black text-white py-2 px-8 rounded-full flex items-center justify-center gap-2"
        />
        {isOpen && (
          <Datasubmitpopup
            content={
              <>
                <b>New Dataset created</b>
                <button className="bg-black text-white py-2 px-8 rounded-full flex items-center justify-center gap-2">
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
