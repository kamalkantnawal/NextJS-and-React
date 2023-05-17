import React, { useState } from 'react';

const PopupWindow = ({ onCancel, onOk }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="bg-black text-white py-2 px-8 rounded-full flex items-center justify-center gap-2"
        onClick={openPopup}
      >
        Edit
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <p>This is the popup window.</p>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 mr-2 text-white bg-red-500 rounded"
                onClick={closePopup}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-white bg-green-500 rounded"
                onClick={onOk}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupWindow;
