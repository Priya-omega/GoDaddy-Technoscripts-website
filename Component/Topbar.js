import React from 'react'
import { FaPhoneAlt, FaRegHandPointRight } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import styles from '../styles/Topbar.module.scss'

function Topbar() {
  return (
    <>
      <div className={styles.topbar} >

        <div className={styles.topbarcontainer}>


          <span className={styles.span1}>
            <FaRegHandPointRight className={styles.handicon} /> : Welcome to India's No.1 Embedded Institute !!
          </span>

          <span className={styles.subtop}>

            <span>
              <FaPhoneAlt className={styles.phoneicon} /> Call : 8605006788
            </span>
            l
            <span>
              <MdEmail className={styles.mailicon} /> info@technoscripts.in
            </span>

          </span>




        </div>





      </div>


    </>
  )
}

export default Topbar