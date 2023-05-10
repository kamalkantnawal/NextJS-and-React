import React from 'react';
import PopupWindow from '../components/PopupWindow';
import Link from 'next/link';

const App = () => {
  const handleCancel = () => {
    // Handle cancel action
  };

  const handleOk = () => {
    // Handle OK action
    console.log("working");
    <Link href="/AI2"></Link>
  };

  return (
    <div>
      <h1>My App</h1>
      <PopupWindow onCancel={handleCancel} onOk={handleOk} />
    </div>
  );
};

export default App;
