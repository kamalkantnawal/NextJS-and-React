import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const styles = {};

function Projectlist(props) {
  const url = 'http://localhost:3000/api/projectList';
  const [isLoading, setIsLoading] = useState(true);
  const [projectName, setProjectName] = useState([]);

  useEffect(() => {
    async function fetchProjectData() {
      const response = await fetch(url);
      const data = await response.json();
      setProjectName(data);
      setIsLoading(false)
    }
    fetchProjectData();
  }, []);
  if(isLoading) {
    <h1>Loading</h1>
  }
  return (
    <div>
      {projectName.map((projectobj, index) => (
        <div key={index} className="flex gap-2 px-4 py-1">
          <Link href={`/Project-Details/${projectobj.projectName}`}>
            {' '}
            {projectobj.projectName}{' '}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Projectlist;
