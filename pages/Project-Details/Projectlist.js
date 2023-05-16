import React,{useState, useEffect} from 'react'
import Link from 'next/link';

const styles = {
};

function Projectlist(props) {
 // console.log("from getserverprops", props)
//  const url = "http://localhost:3000/api/projectList";
  const [project, setProject] = useState(props.myprops);
//const project = props.myprops
useEffect(() => {
  if (props.myprops) {
    setProject(props.myprops);
  }
}, [props.myprops]);
if (!project || project.length === 0) {
  return <div>No projects available.</div>;
}
  
  // useEffect(() => {
  //   fetch(url)
  //   .then((res) => res.json())
  //   .then((d) => setProject(d))
  // }, []);
 // const data = []
  return (
    <div>
      {project.map((projectobj, index) => (
        <div key={index} className="flex gap-2 px-4 py-1">
          <Link href={`/Project-Details/${projectobj.projectName}`}> {projectobj.projectName} </Link>
        </div>
      ))}
    </div>
  )
}
// export async function getServerSideProps(context) {
//   let data  = await fetch('http://localhost:3000/api/projectList')
//   let myprops = await data.json()
//   return {
//     props: {myprops}, // will be passed to the page component as props
//   };
// }

export default Projectlist
