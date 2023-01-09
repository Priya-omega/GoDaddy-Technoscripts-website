import React from 'react'
import Link from 'next/link'
import styles from '../styles/Poster.module.scss'
import Popup from './Popup'


function Poster() {
  return (
    <>
      <div className={styles.poster}>
        <div className={styles.text}>
          <p> Embed your future with<span className={styles.blac}> India's No.1</span></p>

          <p><span className={styles.skyblue}> Embedded Training Institute </span></p>

          {/* <p><span className='purple'>Training Institute </span></p> */}

          <div className={styles.yelbtn}>Online Courses / Offline Courses</div>



          <p> 100% Job Oriented Embedded Course</p>
          <button className={styles.readbtn}> <Link href="/Coursepage-embedded-course-in-pune"><a >Read More</a></Link> </button>


        </div>

      

        <div className={styles.form}>
          <Popup />
        </div>

      </div>
    </>
  )
}

export default Poster