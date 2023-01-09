import React,{useEffect} from 'react'
import{IoCall} from 'react-icons/io'
import{GrMail} from 'react-icons/gr'
import{MdLocationPin,MdWifiCalling3,MdCall} from 'react-icons/md'
import styles from '../styles/Contactdetails.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contactdetails() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div className={styles.contactdetail}>
        <div className={styles.call}> 
          <img src="" alt="" />
          <MdCall  className={styles.conicon} data-aos="flip-left"/>
         
          <h6>Contact Number</h6>
          <p>Mobile : 8605006788</p> 
        </div>

        <div className={styles.office}>
          <img src="" alt="" />
          <MdLocationPin className={styles.conicon} />
          <h6>Office Addresses</h6>
          <p>Office No 86 To 89, Fifth Floor, C–Wing</p>
          <p>Shrinath Plaza, Dyaneshwar Paduka Chowk</p>
          <p>FC Road, Shivaji Nagar, Pune – 411005</p>
        </div>

        <div className={styles.email}>
          <img src="" alt="" />
          <GrMail   className={styles.conicon}/>
          <h6>Office Emails</h6>
          <p>info@technoscripts.in</p>
          <p>technoscriptspune@gmail.com</p>
        </div>
      </div>


    </>
  )
}
