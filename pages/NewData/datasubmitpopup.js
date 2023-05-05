import React from 'react'

const styles = {
        popupbox: 'bg-[#00000050] w-[50%] h-[50%]',
        box: ` bg-[#fff]`
}
const Datasubmitpopup = ({content}) => {
  return (
    <div>
      <div className={styles.popupbox}>
      <div className={styles.box}>
        <span className="bg-[#ededed]" ></span>
        {content}
      </div>
    </div>
    </div>
  )
}

export default Datasubmitpopup
