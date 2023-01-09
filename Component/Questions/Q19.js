import {useState} from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import styles from '../../styles/Questions.module.scss'

function Q19() {
    const [toggle, setToggle] = useState(false);
  return (
    <>

    <div className={styles.quebtn}>
    <span> Why C programming language is still extensively used? </span>  <BsPlusSquareFill onClick={() => setToggle(!toggle)}  className={styles.plusicon}/> </div>

    {
      toggle && (
        <div className={styles.question}>
          <p> C is a general-purpose computer programming language which can be used in wide variety of applications. Operating systems, application software for computers ranging from supercomputers to embedded systems are written in C. While C has been a versatile programming language, it has been the most suitable one when it comes to Embedded Systems. In spite of being invented more than 30 years ago, when it comes to Embedded Systems, there is no other programming language which even comes close to C. There are many reasons why this is been so popular, check out our blog site to get a detailed perspective. </p>

<p>
In ECEP course you will be doing in-depth, hands-on immersive learning by leverage advanced C programming constructs like Pointers, Dynamic memory allocation, Data structure, User Defined Data structures, File operations etc. You will build strong capability and confidence in yourself in order to convert a given problem statement into a working program. U will also learn how to program in embedded c for non-OS based (PIC Microcontrollers) and OS based (BeagleBone) hardware by completely leverage the peripherals provided and create excellent optimised C code.
</p>

        </div>
      )
    }

  </>
  )
}

export default Q19