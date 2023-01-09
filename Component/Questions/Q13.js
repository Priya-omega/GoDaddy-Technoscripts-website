import {useState} from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import styles from '../../styles/Questions.module.scss'

function Q13() {
  const [toggle, setToggle] = useState(false);

  return (
    
    <>

      <div className={styles.quebtn}>
        <span>  What kind of job roles I'll be able to take-up after placements? </span> <BsPlusSquareFill onClick={() => setToggle(!toggle)}  className={styles.plusicon}/> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> TechnoScripts certified embedded courses (ECEP) will open up a bunch of for different roles and responsibilities. Some of them are mentioned below: </p>
            <ol className='1'>
              <li> Program and develop an application component for non-OS based Embedded devices (Example – Automotive, Wearable…)</li>
              <li> Design and develop a component OS based Embedded device (Example – Routers) </li>
              <li> Development / Enhancement of networking protocols in Embedded Systems (Example – Voice Over IP) </li>
              <li> Customizing and configuring Linux for a given Embedded target device </li>
              <li> Testing of Embedded system (Functional / Non-functional / Integration testing) </li>
            </ol>
          </div>
        )
      }

    </>
  )
}

export default Q13