import React , {useState}from 'react'

import { useRouter } from 'next/router'


function Slug() {
  const [tagstyle, setTagstyle] = useState({
    tag: `bg-[black] text-white`
  })
  const [btnstyle, setBtnStyle] = useState({
    btn: `bg-black text-white py-2 px-8 rounded-full flex items-center justify-center gap-2 my-2`
  })

  const [btntext, setBtnText] = useState('Dark Mode Enabled')

  const togglestyle=()=> {
    //can use the multiple state in one func
    if(tagstyle.tag.includes('text-white')) {
      setTagstyle({
        tag: `bg-[white] text-black`
      })
      setBtnText("Dark Mode Disabled")
      setBtnStyle({
        btn: `bg-white text-black py-2 px-8 rounded-full flex items-center justify-center gap-2 my-2`
      })

    } else {
      setTagstyle({
        tag: `bg-[black] text-white`
      })
      setBtnText("Dark Mode Enabled")
      setBtnStyle({
        btn: `bg-black text-white py-2 px-8 rounded-full flex items-center justify-center gap-2 my-2`
      })
    }
  }

  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <div>
        <h1>Edit the project</h1>
        <p>Select the datasetfrom the list</p>
        <div>dataset-1</div>
        <div>dataset-2</div>
        <div>dataset-3</div>
        <div>dataset-4</div>
        
      </div>
     {/* <div className={tagstyle.tag}>
      <h1 >{slug}  Details</h1>
      <p>Hello from tag</p>
      
      </div>
      <button onClick={togglestyle} className={btnstyle.btn}>{btntext}</button>
  */}
      
    </div>
  )
}

export default Slug
