import React, { useState } from 'react';
import Link from 'next/link';
import { AiFillPlusCircle } from 'react-icons/ai';
import DatasetList from './DataDetails/DatasetList';
import Projectlist from './Project-Details/Projectlist';

const styles = {
  wrapper: `flex items-center justify-center`,
  newdata: `py-1`,
  accentedButton: `bg-black text-white py-2 px-8 rounded-full flex items-center justify-center gap-2`,
  plusiconcontainer: `cursor-pointer`,
};

const AI2 = (props) => {
  //All use state are define here
  //  const [datas, setDatas] = useState([]);
  {
    /*
  useEffect(() => {
    fetch("http://localhost:3000/api/PostAllDataset")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (Array.isArray(data)) {
          setDatas(data);
        } else {
          console.error("Invalid data format received from API");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

   */
  }

  return (
    <div>
      {/*
      {datas.map((item)=> {
        console.log(item)
      })}
        */}

      <h1>Welcome to AI 2.O</h1>
      <div className={styles.wrapper}>
        <div className="px-3">
          <Link href="/DataDetails/Adding_newData">
            <div className="py-1">
              <button className={styles.accentedButton}>
                <span className={styles.plusiconcontainer}>
                  <AiFillPlusCircle className="h-5 w-5" />
                </span>
                Create New Dataset
              </button>
            </div>
          </Link>
          <DatasetList />
        </div>
        <div className="px-3">
          <Link href="/New-Project-Details/Adding_newProject">
            <div>
              <button className={styles.accentedButton}>
                <span className={styles.plusiconcontainer}>
                  <AiFillPlusCircle className="h-5 w-5" />
                </span>
                Add New Project
              </button>
            </div>
          </Link>
          <Projectlist myprops={props.myprops} />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/projectList');
  let myprops = await data.json();
  return {
    props: { myprops }, // will be passed to the page component as props
  };
}

export default AI2;
