import {useState} from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import styles from '../../styles/Questions.module.scss'

function Q18() {
    const [toggle, setToggle] = useState(false);
  return (
    <>

    <div className={styles.quebtn}>
      <span> Why should I learn Scripting as an Embedded Developer? </span>  <BsPlusSquareFill onClick={() => setToggle(!toggle)}  className={styles.plusicon}/> </div>

    {
      toggle && (
        <div className={styles.question}>
          <p> Along with core programming languages (C and C++), it is important for an Embedded Systems Developer to learn one scripting language preferably Shell scripting or Python. Following are some of the reasons: </p>
          <ul>
            <li> Scripting language will help you to set up a development environment in an automated fashion (example – Build settings, Compiler settings, Download commands etc..) </li>

            <li> As a developer you are expected to test your code well by running unit / developer test cases. Nowadays automating the same is given high importance. Popularly known as Continuous Integration / Continuous Delivery, such practices will increase development quality of code </li>

            <li> Shell scripting also helps to develop Applications with lesser number of code. It can be used in multiple use-cases (example – stub code) to test the Embedded Systems better </li>

           
          </ul>
        </div>
      )
    }

  </>
  )
}

export default Q18