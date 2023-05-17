import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

function Slug() {
  const [tagstyle, setTagstyle] = useState({
    tag: `bg-[black] text-white`,
  });
  const [btnstyle, setBtnStyle] = useState({
    btn: `bg-black text-white py-2 px-8 rounded-full flex items-center justify-center gap-2 my-2`,
  });

  const [btntext, setBtnText] = useState('Dark Mode Enabled');

  const togglestyle = () => {
    //can use the multiple state in one func
    if (tagstyle.tag.includes('text-white')) {
      setTagstyle({
        tag: `bg-[white] text-black`,
      });
      setBtnText('Dark Mode Disabled');
      setBtnStyle({
        btn: `bg-white text-black py-2 px-8 rounded-full flex items-center justify-center gap-2 my-2`,
      });
    } else {
      setTagstyle({
        tag: `bg-[black] text-white`,
      });
      setBtnText('Dark Mode Enabled');
      setBtnStyle({
        btn: `bg-black text-white py-2 px-8 rounded-full flex items-center justify-center gap-2 my-2`,
      });
    }
  };

  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    // Redirect if slug value is not present or invalid
    if (!slug) {
      router.push('/404');
    }
  }, [slug, router]);

  if (!slug) {
    // Render a loading state or message here
    return <div>Loading...</div>;
  }
  console.log('########################' + slug);
  return (
    <div>
      <div>
        <h1>Edit the {slug}</h1>
        <p></p>
        <div>{slug}</div>
      </div>
      {/* <div className={tagstyle.tag}>
      <h1 >{slug}  Details</h1>
      <p>Hello from tag</p>
      
      </div>
      <button onClick={togglestyle} className={btnstyle.btn}>{btntext}</button>
  */}
    </div>
  );
}

export default Slug;
