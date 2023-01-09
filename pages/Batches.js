
import Head from "next/head";
import Link from "next/link";
import Topbar from "../Component/Topbar";
import Navbar from "../Component/Navbar";
import Poster from '../Component/Poster'
import Stickybar from '../Component/Stickybar'
import BatchTable from '../Component/BatchTable'
import Footer from "../Component/Footer";


function Batches() {
  return (
    <>
    <Head>
        <title> Best embedded training institute in Pune |embedded-course-in-pune </title>
        <meta name="description" content="Best embedded training institute in Pune " />
      </Head>

<Topbar/>
<Navbar/>
{/* <Poster/>
<Stickybar/> */}


<div className='home-container'>
        <div className='heading'>
          <h3>New Batches :</h3>
        </div>

        <p> Below is the list of upcoming and ongoing Batches for selected course </p>

      </div>

      <BatchTable/>

<Footer/>

    </>
  )
}

export default Batches