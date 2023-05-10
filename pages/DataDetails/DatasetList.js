import React, { useState } from "react";
import Link from "next/link";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
const styles = {
  dataeditbutton: `h-6 w-6 fill-[#39caef]`,
  datadeletebutton: `h-5 w-5 fill-[#e31f1f]`,
};

const DatasetList = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => {
    console.log("isopen is calling");
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {props.datasets.map((dataset, index) => (
        <div key={index} className="flex gap-2 px-4 py-1">
          <Link href="/"> {dataset} </Link>
          <a>
            {" "}
            <AiFillEdit
              onClick={openPopup}
              className={styles.dataeditbutton}
            />{" "}
          </a>
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-md shadow-md">
                <p>Edit the Dataset-1</p>
                <div className="flex justify-end mt-4">
                  <button
                    className="px-4 py-2 mr-2 text-white bg-red-500 rounded"
                    onClick={closePopup}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 text-white bg-green-500 rounded"
                    onClick={props.onOk}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          )}
          <AiFillDelete className={styles.datadeletebutton} />
        </div>
      ))}
    </div>
  );
};

export default DatasetList;
