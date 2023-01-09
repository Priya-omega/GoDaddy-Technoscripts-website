import {useState} from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import styles from '../../styles/Questions.module.scss'

function Q4() {
  const [toggle, setToggle] = useState(false);

  return (
     <>

      <div className={styles.quebtn}> 
      <span>  What do companies expect during placements? </span> <BsPlusSquareFill onClick={() => setToggle(!toggle)}  className={styles.plusicon}/> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> While recruiting Embedded jobs for Engineering Freshers companies expect participants to demonstrate three things: </p>
            <ol className='1'>
              <li>Core Embedded programming skills: In one or two programming languages (C / C++ / Shell Scripting) on any standard hardware platforms like PIC for bare metal programming and on ARM for OS based programming on Linux. Along with that they need core non-OS (Microcontroller) and OS (Linux Internals, Systems programming and Embedded Linux knowledge) so that you will be able to build a complete Embedded Application on your own.</li>

              <li>Strong foundations: In basic electronics (ex: Digital electronics) </li>

              <li> Excellent problem solving skills: Given the problem you should be able to convert them into working solutions. Along with that, companies expect excellent attitude to learn new things. Since technology and project nature goes through frequent changes, learning attitude plays important role. Check out the skills that you will be learning as a part of Emertxe Embedded Systems Course. It will put you way ahead in the Embedded jobs for Engineering Freshers market. </li>
              

            </ol>
          </div>
        )
      }

    </>
  )
}

export default Q4