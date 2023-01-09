import { useState } from 'react'
import { FaRegHandPointRight, FaDownload } from 'react-icons/fa'
import Topbar from '../Component/Topbar'
import Navbar from '../Component/Navbar'
import Poster from '../Component/Poster'
import Stickybar from '../Component/Stickybar'
import Footer from '../Component/Footer'
import BatchTable from '../Component/BatchTable'
import Head from 'next/head'


function Micro8051() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
       <Head>
        <title> Best 8051 Training course | Embedded Microcontroller Classes in Pune </title>
        <meta name="description" content="Best Embedded Training in pune, 8051 microcontroller Training classes in Pune. we are one of the best training institute for embedded system course in Pune" />
      </Head> 

      <Topbar />
      <Navbar />
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

            {/* Description  */}
            <div
              className={toggleState === 1 ? "content  active-content" : "content"}
            >
              <div className="heading">
                <h2>8051 Training course</h2>
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

            {/* Curriculum */}
            <div
              className={toggleState === 2 ? "content  active-content" : "content"}
            >
              <div className="heading">
              <h2> Curriculum </h2>

              </div>
              {/* <hr /> */}
              <div className="embedded-c">
              <div className='section1'>
            <h3>8051 microcontroller course Syllabus :</h3>
            <p> <FaRegHandPointRight className='hand-icon' /> Micro-controller Basics </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Introduction to 8051 architecture </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Comparison of 8051 with RISC based systems and Microprocessors </p>
            <p> <FaRegHandPointRight className='hand-icon' /> RAM, FLASH, UART and other peripherals. </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Pin configurations of different Micro-controllers </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Introduction to 8051 programming KIT </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Introduction & Assembly Language </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Branching & Looping </p>
            <p> <FaRegHandPointRight className='hand-icon' /> I/O Programming </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Memory Modes & Arithmetic </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Introduction to C Programming for 8051 </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Timers & counters, Serial Communication </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Interrupts & Handling ISR </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Software tools used for programming </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Hardware interfacing with peripherals </p>


          </div>

          <div className='section2'>
            <h3>External Hardware Interfacing:</h3>
            <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of LEDs </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Switches </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Relays </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of LCD </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of 7 Segment Display </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of ADC </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Analog Sensor Interfacing </p>
            <p> <FaRegHandPointRight className='hand-icon' /> interrupts in 8051 </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Programming using interrupts </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Keypad Interfacing </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Timers in 8051 </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Timer programming </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of DC Motors </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Mobile Phone using DTMF </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Serial Communication </p>


          </div>


              </div>
            </div>

            {/* Batch Scheduled */}
            <div
              className={toggleState === 3 ? "content  active-content" : "content"}
            >
              <div className="heading">
                <h2>Batch Scheduled</h2>
              </div>

              <BatchTable />

            </div>


            {/* Download PDF */}

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
                <p> <a href="sylab/Embedded-C-8051.pdf" attributes-list download className="dlink">Download Syllabus Pdf</a></p>

              </div>


            </div>

          </div>

        </div>
      </div>

      <Footer />

    </>
  )
}

export default Micro8051