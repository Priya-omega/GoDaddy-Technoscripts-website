
import { FaAngleRight, FaInstagramSquare, FaTwitter, FaFacebookSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import styles from '../styles/Footer.module.scss'
 
import Link from 'next/link'


function Footer() {
  return (
    <>
    <footer className={styles.footer}>
       <div className={styles.footermain}>

          <div className={styles.footerdiv2}>
             <div className={styles.subdiv}>
                <h3 className={styles.h3}>Career Programs</h3>
                <p className={styles.p}> <FaAngleRight className={styles.icon} /><Link href="/AdvanceCareer-embedded-course-in-pune"><a className={styles.footerlink}> Advance Embedded Career Track</a></Link> 
                </p>

                {/* <Link href="/"><a className={styles.footerlink}></a></Link> */}

                <p className={styles.p}> <FaAngleRight className={styles.icon} /> <Link href="/DiplomaEmbedded-system-in-pune"><a className={styles.footerlink}>P.G Diploma in Embedded Systems</a></Link></p>

                <p className={styles.p}> <FaAngleRight className={styles.icon} /> <Link href="/AutomotiveEmbedded-course-pune"><a className={styles.footerlink}>Automotive Embedded Systems Course</a></Link> </p>

                <p className={styles.p}> <FaAngleRight className={styles.icon} /> <Link href="/AdvanceIot-training-institute-pune"><a className={styles.footerlink}>Advance IOT Training</a></Link> </p>
                
                <p className={styles.p}> <FaAngleRight className={styles.icon} /> <Link href="/Autosar-training-pune"><a className={styles.footerlink}>Autosar Training</a></Link> </p>

                <p className={styles.p}> <FaAngleRight className={styles.icon} /> <Link href="/"><a className={styles.footerlink}>Matlab with Embedded System</a></Link> </p>
             </div>

          </div>



          <div className={styles.footerdiv3}>
             <h3 className={styles.h3}>Online Courses</h3>

             <p  className={styles.p}> <FaAngleRight className={styles.icon} /> <Link href="/EmbeddedC-training-pune"><a className={styles.footerlink}>Embedded Systems Online Training</a></Link> </p>

             <p  className={styles.p}> <FaAngleRight className={styles.icon} /> <Link href="/IotTraining-courses-in-pune"><a className={styles.footerlink}>IOT Online Training</a></Link> </p>

             <p  className={styles.p}> <FaAngleRight className={styles.icon} /> <Link href="/ArmCortex-training"><a className={styles.footerlink}>STM32 ARM Cortex Training</a></Link> </p>

             <p  className={styles.p}> <FaAngleRight className={styles.icon} /> <Link href="/CANprotocol-training-in-pune"><a className={styles.footerlink}>CAN Protocol Online Training</a></Link> </p>

             <p  className={styles.p}> <FaAngleRight className={styles.icon} /> <Link href="/EmbeddedC-training-pune"><a className={styles.footerlink}>Embedded C Online Training</a></Link> </p>

             <p  className={styles.p}> <FaAngleRight className={styles.icon} /> <Link href="/Raspberry-pi-training-pune"><a className={styles.footerlink}>Raspberry pi Training</a></Link> </p>

          </div>


          <div className={styles.footerdiv1}>
             <h2>TechnoScripts</h2>

             <p className={`${styles.p} ${styles.address}`}>Office No 86 To 89, Fifth Floor,C Wing Shrinath Plaza, Dyaneshwar Paduka Chowk, FC Road, Shivaji Nagar, Pune – 411005</p>

             <p className={styles.p}> <strong>Website :</strong>  www.technoscript.in</p>
             <p className={styles.p}> <strong>Email :</strong> info@technoscripts.in</p>
        

             <div className={styles.socialmediaicon}>


                <div>
                   <img src="img/Media/icon/facebook.webp" alt="facebook" className={styles.icon} />
                </div>

                <div>
                   <img src="img/Media/icon/twitter.webp" alt="twitter" className={styles.icon} />
                </div>

                <div>
                   <img src="img/Media/icon/linkedin.webp" alt="linkedin" className={styles.icon} />
                </div>

                <div>
                   <img src="img/Media/icon/youtube.webp" alt="youtube" className={styles.icon} />
                </div>

                <div>
                   <img src="img/Media/icon/instagram.webp" alt="instagram" className={styles.icon} />
                </div>

             </div>
             
          </div>

       </div>

      

<hr className={styles.hr}/>

       <div className={styles.footersub}>
      
          <p className={`${styles.p} ${styles.para}`}>  <span> Home </span>  l  <span>Courses
             </span> l  <span>Online Training
                </span>  l  <span> Placement </span>  l  <span> Blogs </span> l  <span> Interview Questions </span> l  <span> Modular Courses </span> l  <span> Workshop </span>  l <span> Contact Us </span>  </p>
          <p className={styles.p}>2005 all rights are reserved. Copyright @TechnoScripts</p>
       </div>

    </footer>


 </>
  )
}

export default Footer