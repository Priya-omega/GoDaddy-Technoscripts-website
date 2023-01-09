import {useState} from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import styles from '../../styles/Questions.module.scss'

function Q15() {
    const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
         <span> Can I choose a particular vertical (ex: IoT) in the course?  </span> <BsPlusSquareFill onClick={() => setToggle(!toggle)}  className={styles.plusicon}/> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> Of course yes. When you are starting your career, we recommend you build horizontal or generic skills so that you will be able to fit yourself anywhere in the Embedded domain. Once you get some good amount of experience with one particular area (example – Microcontroller protocols) for about two years, you can then choose a particular the vertical (example – Automotive) and build deep expertise by becoming a specialist / expert in that particular vertical specific skills. </p>
          
          </div>
        )
      }

    </>
  )
}

export default Q15