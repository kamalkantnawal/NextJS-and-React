import React,{useState, useEffect} from 'react'
import Link from 'next/link';

const styles = {
};

function Projectlist() {
  const url = "http://localhost:3000/api/projectList";
  const [project, setProject] = useState([]);

  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => setProject(d))
  }, []);
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

export default Projectlist
