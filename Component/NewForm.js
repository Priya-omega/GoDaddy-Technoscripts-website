import Link from 'next/link'
import React from 'react'
import styles from "../styles/NewForm.module.scss"
import Popup from './Popup'

function NewForm() {
  return (
    <div className={styles.contactform}>





    <div className={styles.text}>
        <p> Embed your future with<span className={styles.blac}> India's No.1</span></p>

        <p><span className={styles.purple}> Embedded Training Institute </span></p>

        {/* <p><span className='purple'>Training Institute </span></p> */}

        <div className={styles.yelbtn}>Online Courses / Offline Courses</div>



        <p> Join Placement Guaranteed Embedded Course</p>

        <button className={styles.btn}> <Link href="/Batches"><a className={styles.link}>Click here for Batch Date</a></Link></button>
        <button className={styles.btn}><Link href="/RegistrationForm"><a className={styles.link}>Register Now</a></Link> </button>

    </div>

    <div className={styles.contactpopup}>
<Popup />

</div>



    {/* <div className={styles.newform}>
        <h3>Contact Us</h3>

        <div className={styles.field}>
            <input type="text" className={styles.textbox} autocomplete="off" placeholder=" " />
            <label for="email" className={styles.formlabel}>Name</label>
        </div>

        <div className={styles.field}>
            <input type="text" className={styles.textbox} autocomplete="off" placeholder=" " />
            <label for="email" className={styles.formlabel}>Mobile</label>
        </div>

        <div className={styles.field}>
            <input type="text" className={styles.textbox} autocomplete="off" placeholder=" " />
            <label for="email" className={styles.formlabel}>Email</label>
        </div>

        <div className={styles.field}>
            <textarea name="" id="" cols="30" rows="4" className={styles.textbox} placeholder=" " />
            <label for="email" className={styles.formlabel}>Description</label>
        </div>

        <button className={styles.btn}>Submit</button>

    </div> */}


  

</div>
  )
}

export default NewForm