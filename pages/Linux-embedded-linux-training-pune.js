import { useState } from 'react'
import { FaRegHandPointRight, FaDownload } from 'react-icons/fa'
import Topbar from '../Component/Topbar'
import Navbar from '../Component/Navbar'
import Poster from '../Component/Poster'
import Stickybar from '../Component/Stickybar'
import Footer from '../Component/Footer'
import BatchTable from '../Component/BatchTable'
import Head from 'next/head'


function Linux() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    
    <Head>
        <title> Embedded Linux Training | Most Trusted Embedded Linux Classes Pune </title>
        <meta name="description" content="Best Embedded Linux Training provided by team of Experts. We are one of the best training institute for embedded Linux course training in Pune." />
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

            <div
              className={toggleState === 1 ? "content  active-content" : "content"}
            >
              <div className="heading">
                <h2>Embedded Linux Training:</h2>
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
                  <h3>Embedded Linux:</h3>
                  <p> <FaRegHandPointRight className='hand-icon' /> Overview for Embedded Linux  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Use of embedded Linux in applications  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Linux Concepts  </p>
                  <p> <FaRegHandPointRight className='hand-icon' />  Accessing the command line (terminal and desktop) </p>
                  <p> <FaRegHandPointRight className='hand-icon' />  Accessing and using manual pages </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Working with the command line and the shell  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Piping and redirection  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Linux OS  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Open Source concepts  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Development environment and Tools  </p>
                  <p> <FaRegHandPointRight className='hand-icon' />  Linux file system </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Basics regarding Kernel Space and its interface to User Space  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Shell and basic shell commands  </p>
                  <p> <FaRegHandPointRight className='hand-icon' />  Different Linux commands like cp , mv mount </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Introduction to VI editor.  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Creating script  </p>
                  <p> <FaRegHandPointRight className='hand-icon' />  Shell variables conditions (if else ) </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Shell control structures  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Shell programs to read  command line parameters  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Linux lab  for  shell programming  </p>
                  <p> <FaRegHandPointRight className='hand-icon' />  Open source and choice-points for Embedded development </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Setting up Embedded development environment  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Boot loader and building root file system  </p>
                  <p> <FaRegHandPointRight className='hand-icon' />  Components of Embedded Linux Kernel </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Embedded application programming  </p>
            
                  
                </div>

                <div className='section2'>
                  <h3>Embedded Linux & OS Concepts:</h3>
                  <p> <FaRegHandPointRight className='hand-icon' /> Linux Architecture  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Introduction to components of I/O architecture  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Objectives of Linux I/O model  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Virtual file system  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> File system services  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> I/O cache  </p>
                  <p> <FaRegHandPointRight className='hand-icon' />  Understanding file descriptors </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Generic Architecture of a Embedded Linux  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> System Start up, Types of Boot Configuration  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Root File System Structure, Root file system setup  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Setting up the boot loader  </p>
                  <p> <FaRegHandPointRight className='hand-icon' />  Embedded Storage (Memory Technology Devices) </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Embedded File System  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Introduction to common file APIs  </p>
                  <p> <FaRegHandPointRight className='hand-icon' />  Accessing file attributes </p>
                  <p> <FaRegHandPointRight className='hand-icon' />  Standard I/O operations </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> File control operations(fcntl())  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Alternate File I/O models  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Huge file I/O  </p>
                  <p> <FaRegHandPointRight className='hand-icon' />  Monitoring File and directory events </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Use cases  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Process creation  & Process  termination  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Threads ,programming on threads  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Inter process communication  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Different IPC mechanism  like shared memory  semaphores, message queues  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Process synchronization mechanism, mutexes  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Linux system calls for signals  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Difference between native compiler and cross compiler  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Porting Linux kernel and Root file system to Rpi board  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Raspbian OS (Linux Desktop)  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Setting up the RPi : Raspbian OS  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Booting the RPi  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Writing Linux Application on Rpi  </p>
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
                <p> <a href="sylab/Embedded-linux.pdf" attributes-list download className="dlink">Download Syllabus Pdf</a></p>

              </div>

    
            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default Linux