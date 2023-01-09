import {useState} from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import styles from '../../styles/Questions.module.scss'

function Q9() {
    const [toggle, setToggle] = useState(false);
     
  return (
    <>

      <div className={styles.quebtn}>
        <span> What type of companies participate in placements? </span>  <BsPlusSquareFill onClick={() => setToggle(!toggle)}  className={styles.plusicon}/> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> we have placement collaboration with 1200+ placement companies. All of them work on core Embedded Systems development across various verticals starting from Automotive to IoT. These companies can be categorised into three buckets. </p>
            <ul>
              <li> MNCs & Big Indian companies – Companies having few thousands of workforce in India (ex: Qualcomm, NXP, Bosch, L&T etc..)</li>
              <li> Mid-size companies – Companies having few hundreds of workforce (ex: Avin Systems, Lekha Wireless, AK-Aerotek etc..) </li>
              <li> Start-ups – Entrepreneurial ventures working in innovative Embedded products (ex: Sirena, CognetThings, Univision etc..) </li>
              
            </ul>
          </div>
        )
      }

    </>
  )
}

export default Q9