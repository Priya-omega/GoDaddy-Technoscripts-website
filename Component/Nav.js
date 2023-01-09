import React from 'react'
import styles from '../styles/Nav.module.scss'
import Link from 'next/link'
import { IoMdArrowDropdown } from 'react-icons/io'
import { BsMenuButtonWide } from 'react-icons/bs'
import { ImCancelCircle, ImMenu3 } from 'react-icons/im'
import { AiOutlineMenu } from 'react-icons/ai'
import { RiArrowRightSFill, RiArrowDownSFill } from 'react-icons/ri'
import {useRouter} from 'next/router';


function Nav() {
    const {asPath} = useRouter();
    return (
        <>

            <div className={styles.navbar}>

                {/* <!-- Navbar logo --> */}
                <div className={styles.logo}>
                    <img src="img/logopng.png" alt="" />
                </div>


                {/* <!-- responsive navbar toggle button --> */}
                <input type="checkbox" id={styles.navcheck} />
                <div className={styles.navbtn}>
                    <label for="navcheck" className={styles.label}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>


                {/* <!-- Navbar items --> */}
                <div className={styles.navlinks}>


                    <Link href="/"><a className={asPath === '/' ? styles.active : styles.NavLink}>Home</a></Link>

                    {/* <!-- Dropdown menu --> */}
                    <div className={styles.dropdown}>
                        <Link href="/Coursepage" ><a className={asPath === '/Coursepage' ? styles.active : styles.dropBtn}>Courses</a></Link>
                        <RiArrowDownSFill className={styles.downarrow}/>

                        {/* <Link href="/Coursepage" ><a className={asPath === '/Coursepage' ? styles.active : styles.NavLink}>Courses</a></Link> */}

                        <div className={styles.dropcontent}>
                            <Link href="/AdvanceCareer" ><a className={styles.Link}> Advance Career Track</a></Link>

                            <Link href="/DiplomaEmbedded" ><a className={styles.Link}> Diploma in Embedded System</a></Link>

                            <Link href="/IotTraining"><a  className={styles.Link}> IOT Training</a></Link>


                            <Link href="/AdvanceIot" ><a className={styles.Link}> Advance IOT </a></Link>

                            <Link href="/AutomotiveEmbedded" ><a className={styles.Link}> Automotive Embedded</a></Link>

                            {/* <!-- Creating sub menu Dropdown --> */}

                            <div className={styles.dropdown2}>
                                <Link href="/" className={`${styles.dropBtn2} ${styles.Link}`}>Modular Courses</Link>
                                <RiArrowRightSFill className={styles.rightarrow}/>

                                <div className={styles.dropcontent2}>

                                    <Link href="/EmbeddedC" className={styles.Link}>  Embedded C Training </Link>

                                    <Link href="/Micro8051" className={styles.Link}> 8051 Training  </Link>

                                    <Link href="/Raspberry" className={styles.Link}> Raspberry pi Training  </Link>

                                    <Link href="/Arduino" className={styles.Link}> Arduino Training  </Link>

                                    <Link href="/PIC" className={styles.Link}> PIC Training  </Link>

                                    <Link href="/AVR" className={styles.Link}> AVR Training  </Link>

                                    <Link href="/Arm7" className={styles.Link}> ARM 7 Training  </Link>

                                    <Link href="/ArmCortex" className={styles.Link}> ARM Cortex Training  </Link>

                                    <Link href="/Linux" className={styles.Link}> Embedded Linux Training   </Link>

                                </div>
                            </div>
                        </div>
                    </div>


             <Link href="/OnlineTraining"><a className={asPath === '/OnlineTraining' ? styles.active : styles.NavLink}>Online Training</a></Link>

                    <Link href="/PlacementPage"><a className={asPath === '/PlacementPage' ? styles.active : styles.NavLink}>Placement</a></Link>

                    <Link href="/Contact"><a className={asPath === '/Contact' ? styles.active : styles.NavLink}>Contact Us</a></Link>

                 

                </div>



                {/* Search Menu */}
                <div className={styles.search}>
                    <input type="search" placeholder='Search Here...' />
                    <button className={styles.searchbtn}>
                        Search
                    </button>


                </div>

            </div>

        </>
    )
}

export default Nav
