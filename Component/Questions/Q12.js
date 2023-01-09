import {useState} from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import styles from '../../styles/Questions.module.scss'

function Q12() {
    const [toggle, setToggle] = useState(false);

  return (
   
    <>

      <div className={styles.quebtn}>
        <span> How this course will help me to become an Embedded Engineer? </span>  <BsPlusSquareFill onClick={() => setToggle(!toggle)}  className={styles.plusicon}/> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> By taking up ECEP course, you will be building both generic (example – Algorithms) and specific (example – Microcontroller programming) skills thereby building a skills portfolio falling under ‘T’ model mentioned below. You will have necessary skill sets and project experience, showcased in form of resume so that you can transition yourself into an embedded system engineer. </p>
         
          </div>
        )
      }

    </>
  )
}

export default Q12