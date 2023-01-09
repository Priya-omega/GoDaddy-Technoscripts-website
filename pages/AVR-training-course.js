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




function AVR() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    <Head>
        <title> AVR Microcontroller training in Pune, Best Embedded Training </title>
        <meta name="description" content="AVR Microcontroller training in Pune, Best Microcontroller training institute in Pune, Best embedded Training in pune, Embedded Course in Pune" />
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
                <h2> AVR Training </h2>
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
                  <h3>AVR Microcontroller Training :</h3>
                  <p> <FaRegHandPointRight className='hand-icon' /> Introduction to AVR </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Series of AVR controllers </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Architecture of AVR </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> What is embedded System </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Embedded Design development life cycle </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Programming in Embedded System </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Design Issues in Embedded Systems </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Embedded Development tools </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Assemblers, Compilers, Linkers, Loaders, Debuggers </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Embedded In-Circuit Emulators and JTAG </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Tools, Build Tools for Embedded Systems </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Avr studio IDE </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Electronics Designing Concepts </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Types of Memory</p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Pin Configuration of AVR </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Registers of AVR </p>

                  <p> <FaRegHandPointRight className='hand-icon' /> Memory Paging, Addressing modes </p>

                  <p> <FaRegHandPointRight className='hand-icon' /> Different ports and DDR register </p>

                  <p> <FaRegHandPointRight className='hand-icon' /> Literal and control Operations </p>

                  <p> <FaRegHandPointRight className='hand-icon' /> Watchdog timer, Interrupts, Timers/ counter </p>

                </div>

                <div className='section2'>
                  <h3>External Hardware Interfacing:</h3>
                  <p> <FaRegHandPointRight className='hand-icon' /> LED Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Switch Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> PWM Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> LCD Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> ADC Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Timer Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> UART Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Keypad 4*4 Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Relay Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Sensor Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Buzzer Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> DC motor Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> GSM Interfacing </p>

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
                <p> <a href="sylab/AVR.pdf" attributes-list download className="dlink">Download Syllabus Pdf</a></p>

              </div>


            </div>

          </div>

        </div>
      </div>

      <Footer />

    </>
  )
}

export default AVR