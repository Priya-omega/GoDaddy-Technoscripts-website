import { useState } from 'react'
import { FaRegHandPointRight, FaDownload } from 'react-icons/fa'
import Topbar from '../Component/Topbar'
import Navbar from '../Component/Navbar'
import Poster from '../Component/Poster'
import Stickybar from '../Component/Stickybar'
import Footer from '../Component/Footer'
import BatchTable from '../Component/BatchTable'
import Head from 'next/head'

function PIC() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
        <Head>
        <title> PIC Training in Pune, Embedded C with PIC, Embedded Training Pune </title>
        <meta name="description" content="Best Embedded Training in pune, embedded course pune. PIC Training in Pune, Embedded C with PIC, Embedded PIC Training with Practicals by Technoscripts" />
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
                <h2>PIC Training</h2>
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
            <h3>Introduction to Embedded :</h3>
            <p> <FaRegHandPointRight className='hand-icon' /> Introduction to PIC Family of microcontrollers  </p>
            <p> <FaRegHandPointRight className='hand-icon' />  Overview of Architecture of 18F4520 </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Processor Core and Functional Block Diagram </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Description of memory organization  </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Overview of ALL SFR’s and their basic functionality  </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Developing, Building, and Debugging ALP’s  </p>
            <p> <FaRegHandPointRight className='hand-icon' />Using MPLAB software   </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Using Pickit programmer  </p>

          </div>

          <div className='section2'>
            <h3>External Hardware Interfacing:</h3>
            <p> <FaRegHandPointRight className='hand-icon' />Interfacing of LEDs  </p>
            <p> <FaRegHandPointRight className='hand-icon' />  Interfacing of Switches</p>
            <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Relays </p>
            <p> <FaRegHandPointRight className='hand-icon' /> interfacing of Digital Sensor </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of LCD </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of ADC </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Analog Sensors </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of DC Motors </p>
            <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Real Time Clock </p>
            <p> <FaRegHandPointRight className='hand-icon' />  Serial Communication</p>
            <p> <FaRegHandPointRight className='hand-icon' />  Introduction to SPI (Serial peripheral Interface)</p>
            <p> <FaRegHandPointRight className='hand-icon' /> How SPI Works & its uses </p>
            <p> <FaRegHandPointRight className='hand-icon' /> SPI Data frames </p>
            <p> <FaRegHandPointRight className='hand-icon' /> SPI Protocol implementation </p>
            <p> <FaRegHandPointRight className='hand-icon' /> introduction I2C protocol </p>
            <p> <FaRegHandPointRight className='hand-icon' /> I2c Communication uses and advantages </p>
            <p> <FaRegHandPointRight className='hand-icon' />   I2c Data frames</p>
            <p> <FaRegHandPointRight className='hand-icon' />  I2C implementation on PIC</p>
            
         
    
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
                <p> <a href="sylab/PIC.pdf" attributes-list download className="dlink">Download Syllabus Pdf</a></p>

              </div>


            </div>

          </div>

        </div>
      </div>

      <Footer/>

    </>
  )

}

export default PIC
