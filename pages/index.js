import Head from 'next/head'
import Script from 'next/script'
import Courses from '../Component/Courses'
import Footer from '../Component/Footer'
import Topbar from '../Component/Topbar'
import Review from '../Component/Review'
import Placement from '../Component/Placement'
import Poster from '../Component/Poster'
import Stickybar from '../Component/Stickybar'
import BatchTable from '../Component/BatchTable'
import Navbar from '../Component/Navbar'

import { RiArrowRightSFill, RiArrowDownSFill } from 'react-icons/ri'
import { useRouter } from 'next/router';
import Link from 'next/link'






export default function Home() {
  const { asPath } = useRouter();

  return (
    <>

      <Head>
        <title>TechnoScripts Best Embedded system Course Training Institute in Pune</title>
        <meta name="description" content="Join TechnoScripts Best Embedded Training institute in pune, embedded System course in Pune & Pimpri Chinchwad. one of the best training institute for embedded system course training in Pune. Technoscripts providing embedded courses with 100% Placement" />

        {/* ---------------font----------------------------> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

        <link href="https://fonts.googleapis.com/css2?family=Charis+SIL:wght@700&family=Roboto:wght@300&family=Source+Sans+Pro&display=swap" rel="stylesheet" />
      </Head>

      <Script src='../public/test' strategy='lazyOnload'></Script>

      <Topbar />

      <Navbar />

      {/* --------------------------- Poster Component start------------------------------------- */}
      <Poster />

      {/* --------------------------- Stickybar Component start------------------------------------- */}
      <Stickybar />

      {/* --------------------------- Courses Component start------------------------------------- */}

      <div className='home-container'>
        <div className='heading'>
          <h3>Embedded & IOT Training</h3>
        </div>
        <p>We are one of the best embedded systems training institute for advance courses. We are the pioneer of the embedded system training in Pune & Pcmc with the expertise of over 16 years. we are working in the field training & development of embedded systems & currently we are also working on live projects as per the requirements of clients. though we provide many different courses & training in embedded all aim at giving good practical knowledge to students as well help them in their career.</p>
      </div>

      <Courses />

      {/* --------------------------- Feature Component start------------------------------------- */}

      <div className='home-container'>
        <div className='heading'>
          <h3>Our Features</h3>
        </div>
      </div>

      <div className="feature">

        <div className="feature-container">
          <div className="feature-card">

            <div className='feature-logo'>
              <img src="img/video_tutorials.webp" alt="video_tutorials" />
            </div>

            <div className='feature-text'>
              <p className='subheading'>Learn Online / Classroom</p>
              <p className='description'>
                Both Classroom & Online Training Available</p>
            </div>

          </div>


          <div className="feature-card">

            <div className='feature-logo'>
              <img src="img/beginner_friendly.webp" alt="beginner_friendly" />
            </div>

            <div className='feature-text'>
              <p className='subheading'>Art of State Labs</p>
              <p className='description'>
                Fully equipped embedded labs</p>
            </div>

          </div>

          <div className="feature-card">

            <div className='feature-logo'>
              <img src="img/doubt_clearing.webp" alt="doubt_clearing" />
            </div>

            <div className='feature-text'>
              <p className='subheading'>Doubt Clearing</p>
              <p className='description'>
                Learn online
                at your own schedule</p>
            </div>

          </div>
        </div>


        <div className="feature-container">

        <div className="feature-card">

<div className='feature-logo'>
  <img src="img/projects-new.webp" alt="Projects" className='img' />
</div>

<div className='feature-text'>
  <p className='subheading'>Live Projects</p>
  <p className='description'>
    Work on live projects <br></br>Learn & implement live projects</p>
</div>

</div>

          <div className="feature-card">

            <div className='feature-logo'>
              <img src="img/mobile_friendly.webp" alt="Experts" className='img' />
            </div>

            <div className='feature-text'>
              <p className='subheading'> Industry Experts </p>
              <p className='description'>
                Learn from experienced engineers </p>
            </div>

          </div>

        

          <div className="feature-card">

            <div className='feature-logo'>
              <img src="img/weeks.webp" alt="Interview" />
            </div>

            <div className='feature-text'>
              <p className='subheading'>Interview Preparation</p>
              <p className='description'>
                Learn online
                at your own schedule</p>
            </div>

          </div>
        </div>

        <div className="feature-container">
          <div className="feature-card">

            <div className='feature-logo'>
              <img src="img/placement_assistance.webp" alt="Placement" />
            </div>

            <div className='feature-text'>
              <p className='subheading'>100% Placement Support</p>
              <p className='description'>
                Placement Support till you get placed</p>
            </div>

          </div>

          <div className="feature-card">

            <div className='feature-logo'>
              <img src="img/certificate_of_training.webp" alt="Certificate" />
            </div>

            <div className='feature-text'>
              <p className='subheading'>ISO 9001 : 2015 Certified</p>
              <p className='description'>
                Learn online
                at your own schedule</p>
            </div>

          </div>

          <div className="feature-card">

            <div className='feature-logo'>
              <img src="img/downloadable_content.webp" alt="Coursecertificate" />
            </div>

            <div className='feature-text'>
              <p className='subheading'>Course Completion Certificate </p>
              <p className='description'>
                Learn online
                at your own schedule</p>
            </div>

          </div>
        </div>

      </div>

      <div className='home-container'>
        <div className='heading'>
          <p>
            The 100% Track record of our placements and team of experienced trainers providing training to our students is enough to tell the story of our success. A major plus point of our institute is our well-qualified trainers. The trainers operating in our institute have got a handful of industry experience in their particular expertise domains. This tremendous valuable experience of them helps the students to absorb more knowledge & real experience.


          </p>
        </div>
      </div>

      {/* --------------------------- BatchTable Component start------------------------------------- */}
      <div className='home-container'>
        <div className='heading' >
          <h3>New Batches : </h3>
        </div>
      </div>



      <div className="batchtable">
        <table className='table'>
          <tr>
            <th>Sr. No.</th>
            <th>Course Name</th>
            <th>Batch Schedule</th>
            <th>Duration</th>
            <th>Registration</th>
          </tr>

          <tbody>
            <tr>
              <td>1</td>
              <td> Advance Career Track in Embedded0 </td>
              <td> 16 Jan 2023</td>
              <td> 4 Months</td>
              <td>
                <button><Link href="/RegistrationForm"><a className='link'>Register Now</a></Link> </button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>PG Diploma in  Embedded Systems</td>
              <td> 16 Jan 2023</td>
              <td>3 Months</td>
              <td>
                <button><Link href="/RegistrationForm"><a className='link'>Register Now</a></Link> </button>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>PG Diploma in Automotive Embedded </td>
              <td> 16 Jan 2023</td>
              <td>3 months</td>
              <td>
                <button><Link href="/RegistrationForm"><a className='link'>Register Now</a></Link> </button>
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td> IOT ( Internet of Things ) </td>
              <td> 16 Jan 2023</td>
              <td>45 days</td>
              <td>
                <button><Link href="/RegistrationForm"><a className='link'>Register Now</a></Link> </button>
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td> Advance IOT ( Internet of Things )</td>
              <td> 16 Jan 2023</td>
              <td>3 Months</td>
              <td>
                <button><Link href="/RegistrationForm"><a className='link'>Register Now</a></Link> </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* --------------------------- Corporate Training Component start------------------------------------- */}
      <div className="corporate">
        <div className="img">
          <img src="img/corp.webp" alt="CorporateTraining" />
        </div>

        <div className="text">
          <h3>Our Campus Information</h3>
          <h1>Corporate Training</h1>
          <p>
            Every organization has a website to represent their business in the vast spread world of the internet and to maintain and update it your organization will need an expert who has the knowledge of both front and back end technologies. Corporate Full Stack Training will provide your workforce necessary information on how to develop and manage a vast website by using different technologies with hands-on experience. Corporate Full Stack Training will empower your employees with the latest concept with in-depth understanding.
          </p>

          <div className='apply'>

            <div className="btn">

            </div>

            <p> <Link href="Corporatetraining"><a > Read more...</a></Link>
            </p>
          </div>


        </div>
      </div>

      {/* ---------------------------Placement Component start------------------------------------- */}

      <div className='home-container'>

        <div className="heading">
          <h3>Placement</h3>
        </div>

        <p>
          Technoscripts is the best institute when it comes to giving its student best placement as its track record shows that it has been consistent since its beginning.
        </p>

        <p>
          100% placement support is provided to every student who enrolls for the job oriented courses. Our placement team regularly guide every student and gives 100% placement support for interviews. We welcomes the top companies for campus interview & also arrange interviews for the student at the company campus too.
        </p>

        <div className="overflow">
          <Placement />
        </div>

      </div>

      {/* ---------------------------Review Component start------------------------------------- */}
      <div className='home-container'>
        <div >
          <div className="heading">
            <h3>Testimonials from Students: </h3>
          </div>

          <p>
            Here is a snapshot of what our students have to stay. Landing a core job in Embedded Systems and IoT is very much possible with Emertxe. We have entire ecosystem in place. The next success story can very well be yours. Are you ready?.
          </p>
        </div>

        <div className="overflow">
          <Review />
        </div>

      </div>

      {/* --------------------------- Blog Component start------------------------------------- */}

      <div className='home-container'>

        <div className='heading'>
          <h3>Our Blog</h3>
        </div>
        <p>
          Digital Electronics most essential and frequently asked Interview Questions  Let me give a brief enlightenment on this particular domain  i.e. Digital Electronics.  It is a very important and a common subject for electrical, electronics & Instrumentation Engineering student. It deals including the theory & practical knowledge of digital system and how they are performed in various digital instruments.  These questions have especially been designed for the Electronics Engineering Students, especially for those who are preparing for GATE, IES & other PSU exams
        </p>
      </div>

      <div className='blog-container'>
        <div className='blog-card'>
          <div className='figure'>
            <img src="img/15.webp" alt="Iot" className='blog-img' />
            <div className='imgoverlay'></div>
          </div>




          <div className="text">
            <h3>What Is IOT And Where It Is Used In Industry?</h3>
            <p>IOT is Internet of Things (IoT) is an ecosystem of physically connected devices and things that are accessible through the internet. </p>

            <div className='read'>
              <button className='read-btn'>
                <Link href="/IotTraining" ><a className='link'>Read More...</a></Link>
              </button>
            </div>
          </div>
        </div>

        <div className='blog-card'>
          <div className='figure'>
            <img src="img/17.webp" alt="EmbeddedCourses" className='blog-img' />
            <div className='imgoverlay'></div>
          </div>



          <div className="text">
            <h3>Part Time Embedded Courses In Pune</h3>
            <p>IOT is Internet of Things (IoT) is an ecosystem of physically connected devices and things that are accessible through the internet. </p>

            <div className='read'>
              <button className='read-btn'>
                <Link href="/Coursepage"><a className='link'>Read More... </a></Link>
              </button>
            </div>
          </div>



        </div>

        <div className='blog-card'>
          <div className='figure' >
            <img src="img/19.webp" alt="ElectronicsInterview" className='blog-img' />
            <div className='imgoverlay'></div>
          </div>



          <div className="text">
            <h3>Digital Electronics Interview Questions</h3>
            <p>
              Digital Electronics most essential and frequently asked Interview Questions  Let me give a brief enlightenment on this particular domain
            </p>

            <div className='read'>
              <button className='read-btn'>
                <Link href="" className='link'> Read More... </Link>
              </button>
            </div>


          </div>

        </div>

      </div>

      <Footer />

    </>




  )
}
