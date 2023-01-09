import { useState } from 'react'

import { BsPlusSquareFill } from 'react-icons/bs'
import styles from '../../styles/Questions.module.scss'


function Q2() {

  const [toggle, setToggle] = useState(false);

  return (
    <>

    <div className={styles.quebtn}>
      <span> When can I start attending placements after enrollment?  </span> <BsPlusSquareFill onClick={() => setToggle(!toggle)}  className={styles.plusicon}/> </div>

    {
      toggle && (
        <div className={styles.question}>
          <p> Typically placements for our Online Embedded Systems Course Students at Emertxe start in 3rd or 4th month onward once students complete programming languages modules (Programming in C / C++ modules). However placements will continue in the remaining part of the course and even after end of the course, up to two year time period.</p>
      
        </div>
      )
    }

  </>
  )
}

export default Q2