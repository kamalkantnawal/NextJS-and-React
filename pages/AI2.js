import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillPlusCircle } from "react-icons/ai";
import DatasetList from "./Data-Details/DatasetList";
import Projectlist from "./Project-Details/Projectlist";
const styles = {
  wrapper: `flex items-center justify-center`,
  newdata: `py-1`,
  accentedButton: `bg-black text-white py-2 px-8 rounded-full flex items-center justify-center gap-2`,
  plusiconcontainer: `cursor-pointer`,
};

const AI2 = () => {
  useEffect(() => {
    console.log("useEffect working");
    fetch("http://localhost:3000/api/AllData")
      .then((a) => {
        return a.json();
      })
      .then(() => {});
  });
  const [addProjects, setaddProjects] = useState(false);

  return (
    <div>
      <h1>Welcome to AI 2.O</h1>
      <div className={styles.wrapper}>
        <div className="px-3">
          <Link href="/Data-Details/New-data-adding">
            <div className="py-1">
              <button className={styles.accentedButton}>
                <span className={styles.plusiconcontainer}>
                  <AiFillPlusCircle className="h-5 w-5" />
                </span>
                Create New Dataset
              </button>
            </div>
          </Link>

          <DatasetList datasets={["Dataset-1", "Dataset-2", "Dataset-3"]} />
        </div>

        <div className="px-3">
          <Link href="/New-Project-Details/new-project">
            <div>
              <button
                className={styles.accentedButton}
                onClick={() => setaddProjects(true)}
              >
                <span className={styles.plusiconcontainer}>
                  <AiFillPlusCircle className="h-5 w-5" />
                </span>
                Add New Project
              </button>
            </div>
          </Link>
          <Projectlist Projects={["Project-1", "Project-2", "Project-3"]} />
        </div>
      </div>
    </div>
  );
};

export default AI2;
