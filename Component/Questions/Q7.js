import {useState} from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import styles from '../../styles/Questions.module.scss'

function Q7() {
  const [toggle, setToggle] = useState(false);

  return (

    <>

      <div className={styles.quebtn}> 
      <span> What kind of job roles and profiles can I target? </span>  <BsPlusSquareFill onClick={() => setToggle(!toggle)}  className={styles.plusicon}/> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> Embedded engineer job description varies across the industry. This is mainly because of vertical and horizontal skill matrix classification. Depending on where you fit, it can open up a whole range of career possibilities for you. At high level, Embedded Engineer job description can be described as follows: </p>
            <ol className='1'>
              <li> Program and develop an application component for non-OS based Embedded devices (Example – Automotive, Wearable…)</li>
              <li> Design and develop a component OS based Embedded device (Example – Routers) </li>
              <li> Customizing and configuring Linux for a given Embedded target device </li>
              <li> Testing of Embedded system (Functional / Non-functional / Integration testing) </li>
            </ol>
          </div>
        )
      }

    </>
  )
}

export default Q7