import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

const styles = {
  container: ``,
  formlables: `mr-10 my-2 text-xl flex`,
}

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <h1>{slug} details</h1>
      <div className={styles.container}>
        <form>
          <div className={styles.formlables}>
            <div className='mr-4'>
            <label classname="mr-4" htmlFor="exampleInputEmail1">Enter Project Name</label></div>
            <input 
            
              type="email"
              className="form-control border-solid border-2 border-black-100"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Project name"
            /></div>
            <div>
            <button className=' bg-cyan-500 hover:bg-cyan-600 px-3 py-1'>
              <Link href='/AI2'>Submit </Link>
            </button>
            </div>
        </form>

      </div>
    </div >
  )
}

export default Slug
