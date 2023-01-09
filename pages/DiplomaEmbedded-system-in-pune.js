import { useState } from 'react'

import { FaRegHandPointRight, FaDownload } from 'react-icons/fa'
import Topbar from '../Component/Topbar'
import Navbar from '../Component/Navbar'
import Poster from '../Component/Poster'
import Stickybar from '../Component/Stickybar'
import Footer from '../Component/Footer'
import BatchTable from '../Component/BatchTable'
import Head from 'next/head'

function DiplomaEmbedded() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
          <Head>
          <title> Best Diploma Embedded System course in pune | TechnoScripts | Embedded institue</title>
        <meta name="description" content="Best Embedded Training in pune, embedded course pune. we are one of the best training institute for embedded system course training in Pune" />
      </Head>

    <Topbar />
    <Navbar />
    <Poster />
    <Stickybar />

    <div className="page-container">
      <div className="heading">
        <h3> Diploma In Embedded System </h3>
      </div>

<p>
Embedded system training courses by pune’s best training institute. Following courses in embedded system are offered by Technoscripts:
</p>

<p>
The embedded system course in our institute is a blend of software and hardware which when combined make sure the proper functioning of an embedded system that ranges from the small portable devices like digital watches & MP3 players to some of the large stationary installations like traffic lights, factory controllers to some of the very large & complex systems like hybrid vehicles MRI, aerospace applications. 
</p>

<p>
The embedded system is actually a computer system with an integrated function inside a large mechanical or electrical system usually with real-time computing restrictions.
</p>

    </div>

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
              <h2> Description </h2>
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

                <div>
                <h3> Syllabus :  </h3>
                <p> <FaRegHandPointRight className='hand-icon' /> Languages: C , Embedded  C</p>
                </div>

                <div>
                <h3> Microcontrollers’ & Microprocessors :  </h3>
            
                <p> <FaRegHandPointRight className='hand-icon' /> Study of 8051, ARM,7, Automotive Controller, RTOS, ESP8266 </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Study of PIC, ARM Cortex M3, Raspberry Pi, Linux, IOT</p>
                </div>

                <div>
                <h3> Hardware Interfacing :  </h3>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of LEDs </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Switches </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Relays </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of LCD </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of 7 Segment Display </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of ADC </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Stepper Motors </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of DC Motors </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of IR Sensors </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Ultrasonic Sensors </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of MEMS Sensors </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of RF Modules </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Mobile Phone using DTMF </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Real Time Clock </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Serial Memory </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Serial Communication </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing GSM module </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of GPS module </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Camera </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing Using I2C Protocol </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing Using SPI Protocol </p>
                <p> <FaRegHandPointRight className='hand-icon' /> PWM Techniques </p>
                <p> <FaRegHandPointRight className='hand-icon' /> ZigBee / Xbee </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Bluetooth </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Wi-Fi </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Interfacing Ethernet </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Mobile WiFi and Bluetooth Applications </p>
                <p> <FaRegHandPointRight className='hand-icon' /> CAN Protocol & its practical implementation </p>
                <p> <FaRegHandPointRight className='hand-icon' /> IOT complete Module with practicals </p>
                </div>

                <div>
                <h3> RTOS : </h3>
                <p> <FaRegHandPointRight className='hand-icon' /> Introduction to RTOS –Overview </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Process, Task & Thread </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Real-time systems concepts </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Context switching, scheduling algorithm </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Re-entrancy, task priorities, mutual exclusion </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Kernel structure </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Task Conflicts </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Task Communication </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Task creation & Deletion OsTaskCreate(), OsTaskdelete() </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Semaphores (Binary, Counter, Mutex) </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Events and Inter task Communication </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Semaphore </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Message Queues </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Mutex </p>

                </div>


                

              </div>



              <div className='section2'>

                
              <div>
                <h3> µCos ii : </h3>
                <p> <FaRegHandPointRight className='hand-icon' /> Creating a Task in µCos ii / FreeRTOS </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Multitasking in µCos ii </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Creating & using semaphore in µCos ii / FreeRTOS </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Creating & using Message mailbox (mbox) in µCos ii / FreeRTOS </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Using Message Queue (mqueue) in µCos ii / FreeRTOS </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Develop Real time application using µCos ii / FreeRTOS services </p>
                </div>
                
              <div>
                <h3> Linux : </h3>
                <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Linux </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Concepts used in linux </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Accessing the command line (terminal and desktop) </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Accessing and using manual pages </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Working with the command line and the shell </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Piping and redirection </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Linux OS </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Different Linux commands like cp , mv mount </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Introduction to VI editor. VI editor settings </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Creating script </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Shell variables conditions (if else ) </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Shell control structures </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Shell programs to read command line parameters </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Linux lab for  shell programming </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Process creation & Process  termination </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Threads ,programming on threads </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Inter process communication </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Different IPC mechanism like shared memory  semaphores, message queues </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Process synchronisation mechanism, mutex </p>
                <p> <FaRegHandPointRight className='hand-icon' /> Linux system calls for signals </p>
                </div>
               
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
              <p> <a href="sylab/TechnoScripts-Brochure.pdf" attributes-list download className="dlink">Download Syllabus Pdf</a></p>

            </div>

  
          </div>

        </div>

      </div>
    </div>
    
    <Footer />
  </>


  )
}

export default DiplomaEmbedded