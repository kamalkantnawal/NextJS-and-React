import React, {useState, useEffect} from "react";
import Link from "next/link";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
const styles = {
  wrapper: `flex items-center justify-center h-max-[10rem]`,
  newdata: `px-10 py-1`,
  newproject: `px-10 py-1`,
  datalist: `px-10 mx-8`,
  projectlist: `px-10 mx-8`,
  accentedButton: `bg-black text-white py-2 px-8 rounded-full flex items-center justify-center gap-2`,
  plusiconcontainer: `cursor-pointer`,
  dataeditbutton: `h-6 w-6 fill-[#39caef]`,
  datadeletebutton: `h-5 w-5 fill-[#e31f1f]`
};

const AI2 = () => {
    useEffect(()=> {
      console.log("useEffect working")
      fetch('http://localhost:3000/api/AllData')
      .then((a)=> {return a.json()})
      .then(()=>{})
    })
    const [addProjects, setaddProjects]= useState(false)
    console.log(addProjects)
  return (
    <div>
      <h1>Welcome to AI 2.O</h1>
      <div className={styles.wrapper}>
        <div className={styles.Alldatas}>
          <Link href="/NewData/123">
            <div className={styles.newdata}>
              <button className={styles.accentedButton}>
                <span className={styles.plusiconcontainer}>
                  <AiFillPlusCircle className="h-5 w-5" />
                </span>
                Create New Dataset
              </button>
            </div>
          </Link>
          <div className={styles.datalist}>
            <div className="flex gap-5"> <Link href='/Read-Data-Node/123'>Dataset 1 </Link>
              <div className="flex gap-3">
              <AiFillEdit className={styles.dataeditbutton}/>
              <AiFillDelete className={styles.datadeletebutton}/>
              </div>
            </div>
            <div className="flex gap-5"> <Link href='/Read-Data-Node/123'>Dataset 2 </Link>
              <div className="flex gap-3">
              <AiFillEdit className={styles.dataeditbutton}/>
              <AiFillDelete className={styles.datadeletebutton}/>
              </div>
            </div>
            <div className="flex gap-5"> <Link href='/Read-Data-Node/123'>Dataset 3 </Link>
              <div className="flex gap-3">
              <AiFillEdit className={styles.dataeditbutton}/>
              <AiFillDelete className={styles.datadeletebutton}/>
              </div>
            </div>
              
            
          </div>
        </div>

        <div className={styles.Allprojects}>
       <Link href="/New-Project-Details/new-project"> 
            <div className={styles.newproject}>
              <button className={styles.accentedButton} onClick={() => setaddProjects(true)}>
                
                <span className={styles.plusiconcontainer}>
                  <AiFillPlusCircle className="h-5 w-5" />
                </span>
                Add New Project
              </button>
            </div>
           </Link> 
          <div className={styles.projectlist}>
            <ul>
            <Link href={'/Project-Details/Project-1'}><li>Project 1</li> </Link>
              <li>Project 2</li>
              <li>Project 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2;
