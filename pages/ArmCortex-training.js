import { useState } from 'react'
import { FaRegHandPointRight, FaDownload } from 'react-icons/fa'
import Topbar from '../Component/Topbar'
import Navbar from '../Component/Navbar'
import Poster from '../Component/Poster'
import Stickybar from '../Component/Stickybar'
import Footer from '../Component/Footer'
import BatchTable from '../Component/BatchTable'
import { RiArrowRightSFill, RiArrowDownSFill } from 'react-icons/ri'
import Link from 'next/link'
import Head from 'next/head'





function ArmCortex() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>

<Head>
        <title> Best Arm cortex training in pune, Embedded Classes in Pune </title>
        <meta name="description" content="Embedded Classes in Pune, ARM 7 Training in Pune, ARM Cortex Training in pune, arm cortex M3 training, ARM 9 training in pune" />
      </Head>

      <Topbar />
<Navbar/>
      <Poster />
      <Stickybar />

      <div className="Embedded-container">
        <div className="tab-container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs1 active-tabs1" : "tabs1"}
              onClick={() => toggleTab(1)}
            >
              Description
            </button>

            <button
              className={toggleState === 2 ? "tabs2 active-tabs2" : "tabs2"}
              onClick={() => toggleTab(2)}
            >
              Curriculum
            </button>
            <button
              className={toggleState === 3 ? "tabs3 active-tabs3" : "tabs3"}
              onClick={() => toggleTab(3)}
            >
              Batch Scheduled
            </button>
            <button
              className={toggleState === 4 ? "tabs4 active-tabs4" : "tabs4"}
              onClick={() => toggleTab(4)}
            >
              Download PDF
            </button>

          </div>

          <div className="content-tabs">

            <div
              className={toggleState === 1 ? "content  active-content" : "content"}
            >
              <div className="heading">
                <h2>Arm Cortex Training</h2>
              </div>

              {/* <hr /> */}
              <p>
                At Technoscripts we are providing Online Training For Embedded System & online IOT courses. All Online Courses comes with content same as delivered in classroom training with all practicals covered. we are giving online training for fresher students as well as professionals. Training program will be Personalised Interactive, guided by industry Experts, driven by technology, and designed to upgrade your skills and achieve career goals
              </p>

              <p>
                Every course we are providing have 100% Placement support. There are different courses in embedded system , internet of things ( Iot),  Matlab, Automotive, Autosar etc.
              </p>

              <p>
                All the required kits will be provided to candidates as per requirement for practical purpose. Training will be interactive live instructor led training, students can participate and sole all queries. Batch size will be small so all students can interactive actively and get good understanding of topic covered.
              </p>

              <p>
                After Course completion interview preparation sessions will be conducted and placement process will be started.
              </p>

            </div>

            <div
              className={toggleState === 2 ? "content  active-content" : "content"}
            >
              <div className="heading">
                <h2>Curriculum</h2>
              </div>
              {/* <hr /> */}
              <div className="embedded-c">
                <div className='section1'>
                  <h3>ARM Cortex M3 Syllabus :</h3>
                  <p> <FaRegHandPointRight className='hand-icon' /> Introduction to ARM CORTEX M3 </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Overview & Architecture of ARM CORTEX </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Pin connect block </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Iterative Design workflow for Communication Systems </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Peripheral Interface </p>

                  <p> <FaRegHandPointRight className='hand-icon' /> Nested vectored Interrupt controller (NVIC) </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Open 1768 Development Kit features </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> On-Chip Peripherals Study </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Programming, and Application </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Interfacing LCD </p>

                  

                  
                </div>

                <div className='section2'>
                  <h3><br /></h3>
                <p> <FaRegHandPointRight className='hand-icon' /> GPIO Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> ADC Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Joystick Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Serial Communication </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> PWM Controlling </p>
                  
                  <p> <FaRegHandPointRight className='hand-icon' /> DAC Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Quadrature Encoder Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> USB Host Programing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> CAN Module </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> LPC 1768 Ethernet interfacing </p>
               
                </div>


              </div>
            </div>

            <div
              className={toggleState === 3 ? "content  active-content" : "content"}
            >
              <div className="heading">
                <h2>Batch Scheduled</h2>
              </div>

              <BatchTable />

            </div>

            <div
              className={toggleState === 4 ? "content  active-content" : "content"}
            >

              <div className='heading'>
                <h2>Download Syllabus</h2>
              </div>


              <div className='section3'>

                <div className='download'>
                  <FaDownload className='download-icon' />
                </div>
                <p> <a href="sylab/ARM-Cortex-M3.pdf" attributes-list download className="dlink">Download Syllabus Pdf</a></p>

              </div>


            </div>

          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default ArmCortex