import React, { useState } from 'react'
import Link from 'next/link'
import { IoIosArrowDown,IoIosArrowForward } from 'react-icons/io'
import { BsMenuButtonWide } from 'react-icons/bs'
import { ImCancelCircle, ImMenu3 } from 'react-icons/im'
import { AiOutlineMenu } from 'react-icons/ai'
import { RiArrowRightSFill, RiArrowDownSFill } from 'react-icons/ri'
import { useRouter } from 'next/router';

// import styles from '../styles/Navbar.module.scss'


function Nav() {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const { asPath } = useRouter();

  return (
    <>

      <div className="navbar">

        {/* <!-- Navbar logo --> */}
        <div className='logo'>
          <img src="img/logopng.webp" alt="logo" />
        </div>


        {/* <!-- responsive navbar toggle button --> */}
        <input type="checkbox" id="nav-check" />
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>


        {/* <!-- Navbar items --> */}
        <div className="nav-links">
        {/* <Link href="/TestPage"><a className={asPath === '/TestPage' ? "Active NavLink" : "NavLink"}>Testpage</a></Link> */}

          <Link href="/"><a className={asPath === '/' ? "Active NavLink" : "NavLink"}>Home</a></Link>


          {/* <!-- Dropdown menu --> */}
          <div className="dropdown">
            
            <Link href="/Coursepage-embedded-course-in-pune"><a className={asPath === '/Coursepage-embedded-course-in-pune' ? "Active NavLink" : "NavLink dropBtn"}>Courses<IoIosArrowDown onClick={() => setToggle(!toggle)} className='down-arrow' /></a></Link>

            {
              toggle && (
                <div className="drop-content">
                  <Link href="/AdvanceCareer-embedded-course-in-pune" ><a className='Link'> Advance Career Track </a></Link>

                  <Link href="/DiplomaEmbedded-system-in-pune"><a className='Link'>Diploma in Embedded System </a></Link>

                  <Link href="/IotTraining-courses-in-pune"><a className='Link'> IOT Training</a></Link>

                  <Link href="/AdvanceIot-training-institute-pune"><a className='Link'> Advance IOT </a></Link>

                  <Link href="/AutomotiveEmbedded-course-pune"><a className='Link'> Automotive Embedded </a></Link>

                  {/* <!-- Creating sub menu Dropdown --> */}

                  <div className="dropdown2">
                    <Link href="/modular-courses-in-embedded-Pune"><a className='Link dropBtn2'> Modular Courses <IoIosArrowForward onClick={()=> setToggle2(!toggle2)} className='right-arrow' /></a></Link>

                    {
                      toggle2 && (
                        <div className="drop-content2">

                          <Link href="/EmbeddedC-training-pune"><a className='Link'> Embedded C Training </a></Link>

                          <Link href="/Microcontroller8051-training-course"><a className='Link'> 8051 Training </a></Link>

                          <Link href="/Raspberry-pi-training-pune"><a className='Link'> Raspberry pi Training </a></Link>

                          <Link href="/Arduino-training-pune"><a className='Link'> Arduino Training </a></Link>

                          <Link href="/PIC-training-in-pune"><a className='Link'> PIC Training </a></Link>

                          <Link href="/AVR-training-course"><a className='Link'> AVR Training </a></Link>

                          <Link href="/Arm7-training-pune"><a className='Link'> ARM 7 Training </a></Link>

                          <Link href="/ArmCortex-training"><a className='Link'> ARM Cortex Training </a></Link>

                          <Link href="/Linux-embedded-linux-training-pune"><a className='Link'> Embedded Linux Training </a></Link>

                        </div>
                      )
                    }

                  </div>



                </div>
              )
            }

          </div>

          <Link href="/OnlineTraining-embedded-system"><a className={asPath === '/OnlineTraining-embedded-system' ? "Active NavLink" : "NavLink"}> Online Training </a></Link>

          <Link href="/PlacementPage-embedded-training-placement-pune"><a className={asPath === '/PlacementPage-embedded-training-placement-pune' ? "Active NavLink" : "NavLink"}> Placement </a></Link>

          <Link href="/Contact-us-technoscripts-pune"><a className={asPath === '/Contact-us-technoscripts-pune' ? "Active NavLink" : "NavLink"}> Contact Us </a></Link>

        </div>



        {/* Search Menu */}
        <div className='search'>
          <input type="search" placeholder='Search Here...' />
          <button className='search-btn'>
            Search
          </button>


        </div>

      </div>

    </>
  )
}

export default Nav