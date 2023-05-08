import React from 'react'
import Link from 'next/link';
const styles = {
};

function Projectlist(props) {
  return (
    <div>
      {props.Projects.map((project, index) => (
        <div key={index} className="flex gap-2 px-4 py-1">
          <Link href="/"> {project} </Link>
        </div>
      ))}
    </div>
  )
}

export default Projectlist
