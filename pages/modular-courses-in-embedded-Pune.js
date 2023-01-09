import React from 'react'
import Topbar from '../Component/Topbar'
import Navbar from '../Component/Navbar'
import Poster from '../Component/Poster'
import Stickybar from '../Component/Stickybar'
import Link from 'next/link'
import Footer from '../Component/Footer'
import Head from 'next/head'


function modularCourse() {
  return (
   <>

<Head>
        <title>modular-courses-in-embedded-Pune-TechnoScripts Best Embedded system Course Training Institute </title>
        <meta name="description" content="Join TechnoScripts Best Embedded Training institute in pune, embedded System course in Pune & Pimpri Chinchwad. one of the best training institute for embedded system course training in Pune. Technoscripts providing embedded courses with 100% Placement" />

        {/* ---------------font----------------------------> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

        <link href="https://fonts.googleapis.com/css2?family=Charis+SIL:wght@700&family=Roboto:wght@300&family=Source+Sans+Pro&display=swap" rel="stylesheet" />
      </Head>

     <Topbar />
     <Navbar />
     <Poster />
     <Stickybar />

<div className="home-container">
<div className="heading">
    <h3>Modular Courses</h3>
</div>
<p>
We are providing Modular courses for candidates who wants to excel their knowledge in the particular segment of Embedded system. It will be helpful for students and working professionals to gain expertise and meet the requirements of industry for job change or future career growth.
</p>

<p>
These courses designed are completely practical oriented and focused on increasing knowledge of candidate. You can download syllabus from links given or can contact us for more details.
</p>

<p>
Contact Number : 8605006788
</p>

</div>

<div className="batchtable">
        <table className='table'>
          <tr>
            <th>Sr. No.</th>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Download Syllabus</th>
     
          </tr>

          <tbody>
            <tr>
              <td>1</td>
              <td> Embedded C Programing</td>
              <td> 1 Months</td>
              <td>
              <a href="sylab/Embedded-C-8051.pdf" attributes-list download className="dlink">Download Syllabus </a>
              </td>
            </tr>

          
            <tr>
              <td> 2 </td>
              <td>  8051 Training </td>
              <td> 1 Months</td>
              <td>
              <a href="8051.pdf" attributes-list download className="dlink">Download Syllabus </a>
              </td>
            </tr>

            <tr>
              <td> 3 </td>
              <td> ARM7 Training </td>
              <td> 1 Months</td>
              <td>
              <a href="8051.pdf" attributes-list download className="dlink">Download Syllabus </a>
              </td>
            </tr>

            <tr>
              <td> 4 </td>
              <td> PIC Training </td>
              <td> 4 Months</td>
              <td>
              <a href="8051.pdf" attributes-list download className="dlink">Download Syllabus </a>
              </td>
            </tr>
        
            <tr>
              <td> 5 </td>
              <td> AVR Training </td>
              <td> 1 Months</td>
              <td>
              <a href="8051.pdf" attributes-list download className="dlink">Download Syllabus </a>
              </td>
            </tr>

            <tr>
              <td> 6 </td>
              <td> Embedded Linux Training </td>
              <td> 1 Months</td>
              <td>
              <a href="8051.pdf" attributes-list download className="dlink">Download Syllabus </a>
              </td>
            </tr>

            <tr>
              <td> 7 </td>
              <td>  ARM Cortex Training </td>
              <td> 1 Months</td>
              <td>
              <a href="8051.pdf" attributes-list download className="dlink">Download Syllabus </a>
              </td>
            </tr>

            <tr>
              <td> 8 </td>
              <td> Arduino Training </td>
              <td> 1 Months</td>
              <td>
              <a href="8051.pdf" attributes-list download className="dlink">Download Syllabus </a>
              </td>
            </tr>

            <tr>
              <td> 9 </td>
              <td> Raspberry Pi Training </td>
              <td> 1 Months</td>
              <td>
              <a href="8051.pdf" attributes-list download className="dlink">Download Syllabus </a>
              </td>
            </tr>

            <tr>
              <td> 10 </td>
              <td> IOT (Internet of Things) </td>
              <td> 1 Months</td>
              <td>
              <a href="8051.pdf" attributes-list download className="dlink">Download Syllabus </a>
              </td>
            </tr>

            <tr>
              <td> 11 </td>
              <td> Linux device Driver </td>
              <td> 1 Months</td>
              <td>
              <a href="8051.pdf" attributes-list download className="dlink">Download Syllabus </a>
              </td>
            </tr>

            <tr>
              <td> 12 </td>
              <td> CAN Protocol </td>
              <td> 1 Months</td>
              <td>
              <a href="8051.pdf" attributes-list download className="dlink">Download Syllabus </a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <Footer />

   
   </>
  )
}

export default modularCourse
