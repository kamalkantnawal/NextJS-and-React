import React from "react";
import Link from "next/link";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
const styles = {
    dataeditbutton: `h-6 w-6 fill-[#39caef]`,
    datadeletebutton: `h-5 w-5 fill-[#e31f1f]`,
};

const DatasetList = (props) => {
    return (
        <div>
            {props.datasets.map((dataset, index) => (
                <div key={index} className="flex gap-2 px-4 py-1">
                    <Link href="/"> {dataset} </Link>
                    <AiFillEdit className={styles.dataeditbutton} />
                    <AiFillDelete className={styles.datadeletebutton} />
                </div>

            ))}
        </div>
    );
};

export default DatasetList;
