import {useState} from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import styles from '../../styles/Questions.module.scss'

function Q10() {

    const [toggle, setToggle] = useState(false);

  return (
  
    <>

    <div className={styles.quebtn}> 
    <span> What are the opportunities for freshers in Embedded Systems?  </span> <BsPlusSquareFill onClick={() => setToggle(!toggle)}  className={styles.plusicon}/> </div>

    {
      toggle && (
        <div className={styles.question}>
          <p> Embedded System Engineers are in heavy demand due to many reasons. Some statistics* are as follows, which reiterates the importance of Embedded Systems jobs. </p>
          <ol className='1'>
            <li> It is growing at 25% Compounded Annual Growth Rate (CAGR)</li>
            <li> 47.9% of the market spend is going to be on Design & Manufacturing of Embedded Devices </li>
            <li> More than 60% of the devices would require “smart” Embedded Software running in them </li>
            <li> More than 7 Lakhs Embedded Systems jobs available in the market </li>
            <li> The Electronics Systems Design and Manufacturing (ESDM) market is expected to touch 220 Billion USD in India alone, growing at 16.1% YoY</li>
            <li>  In order to promote ESDM, Government is working on creating fabless units in India by investing 76000 Crores.</li>
            <li>  It is expected to create 85,000 jobs every year from 1140 R & Centres working in India. This is apart from the overall projected number of 7 lakhs jobs every year.</li>
          </ol>
        </div>
      )
    }

  </>


  )
}

export default Q10