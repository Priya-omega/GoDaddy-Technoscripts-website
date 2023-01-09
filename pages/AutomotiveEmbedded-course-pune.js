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




function AutomotiveEmbedded() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };


  return (
    <>
<Head>
        <title> Best Automotive Embedded Training in pune | Technoscripts  </title>
        <meta name="description" content="Best Embedded Training in pune, Automotive Embedded course pune & pimpri chinchwad. Best training institute for Automotive Embedded in Pune" />
      </Head>

      <Topbar />

<Navbar/>
      <Poster />
      <Stickybar />

      <div className="page-container">
        <div className="heading">
          <h3>Automotive Embedded Systems Course :</h3>
        </div>
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
                <h2>Description</h2>
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
                    <h3>Syllabus :</h3>
                    <p> <FaRegHandPointRight className='hand-icon' />  Basics of Automotive domain </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> use of Embedded in automotive  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Automotive Embedded system design  </p>
                    <p> <FaRegHandPointRight className='hand-icon' />  Automotive product development life cycle </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Automotive Sensors  and Transducers  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Automotive grade microcontrollers  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Microcontroller  Architecture  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Microcontroller programming  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Sensor interfacing  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Hall Sensor for Speed  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> PWM Generation  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Motor Control  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Actuators , Sensors , Semiconductor  Components  </p>
                    <p> <FaRegHandPointRight className='hand-icon' />  Integrated Circuits &  SMD Components   </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Electric Motors & Driving Techniques   </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Communication Protocol :  USART, I2C , SPI, CAN Bus  </p>
                    <p> <FaRegHandPointRight className='hand-icon' />  Use of  Protocols, Communication Protocols  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> RS 232,  I2C protocol , SPI Protocol  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Automotive Protocols : CAN , J1939  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> CAN Protocol Training: </p>
                    <p> <FaRegHandPointRight className='hand-icon' />  Introduction to CAN protocol  </p>
                    <p> <FaRegHandPointRight className='hand-icon' />  Use of CAN protocol in Automotive </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Basic of CAN Standard and Extended  </p>
                    <p> <FaRegHandPointRight className='hand-icon' />  CAN communication </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Implementation of CAN drivers  </p>
                    <p> <FaRegHandPointRight className='hand-icon' />  CAN Hardware </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> comparison I2C,SPI,RS232-drawbacks  </p>
                    <p> <FaRegHandPointRight className='hand-icon' />  why CAN, CAN basics, OSI -reference model, </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> node concept, CSMA/CD-CR  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Frame contents for all types  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Physical Layer, Arbitration Concept, Frame Formats  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Bit-stuffing coding  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Types of errors – Ack error, stuff error, form error, bit error, crc error  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> CAN bus arbitration  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Fault Confinement  </p>
                    <p> <FaRegHandPointRight className='hand-icon' />  Interfacing of PIC18f458 with MCP2551 and CAN BUS </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Bit timing calculations  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Baud Rate calculations  </p>
                    <p> <FaRegHandPointRight className='hand-icon' />  Architecture of CAN engine in PIC18f458 </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> need of filter and mask registers  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> modes discussion in pic18f458  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Project creation  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> loop back mode testing  </p>
                    <p> <FaRegHandPointRight className='hand-icon' />  creating 2 nodes =transmitter and receiver nodes </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> send any data from transmitter node and receiving  the same data on receiver node  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Interview questions and discussion  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> CAB Analyzer Tool Chain  </p>
                    <p> <FaRegHandPointRight className='hand-icon' />  Building Simple CAN Application using CAN Training Kit </p>
                  
                  </div>



                </div>

                <div className='section2'>

               
                <div>
                  <h3> MATLAB Simulink :  </h3>
                    <p> <FaRegHandPointRight className='hand-icon' /> Need for Simulation, Simulation Parameters – Simulation Time and Step Size  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Solver – Types and Use, Introduction to Model Based Design, Simulink Basics  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Simulink Library Browser, Simulink Editor Window  </p>
                    <p> <FaRegHandPointRight className='hand-icon' />  Creating a simple model, Connecting blocks </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Simulating the model  </p>
                  </div>

                  <div>
                  <h3> STATEFLOW :  </h3>
                    <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Finite State Machines  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Need of Stateflow, Stateflow Truth Table  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Stateflow Chart Editor, Flow based logic  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> State based logic, Super state vs Sub states  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Stateflow elements – functions, embedded MATLAB functions etc.  </p>
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

export default AutomotiveEmbedded