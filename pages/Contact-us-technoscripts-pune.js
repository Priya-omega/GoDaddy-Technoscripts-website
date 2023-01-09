import React from 'react'
import Head from 'next/head'
import NewForm from '../Component/NewForm'
import Topbar from '../Component/Topbar'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { RiArrowRightSFill, RiArrowDownSFill } from 'react-icons/ri'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Contactdetails from '../Component/Contactdetails'


function Contact() {
  const { asPath } = useRouter();

  return (
    <>

      <Head>
        <title>Technoscripts Best Embedded Training institute in Pune</title>
        <meta name="description" content="Best Embedded Training in pune, Contact us, Technoscripts Address, Technoscripts is Best Embedded Training institute in Pune, Technoscripts reviews." />

        {/* ---------------font----------------------------> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Charis+SIL:wght@700&family=Roboto:wght@300&family=Source+Sans+Pro&display=swap" rel="stylesheet" />
      </Head>

      <Topbar />

      <Navbar />


      <NewForm />
      <Contactdetails />


      <div className="contact-container">

        <div className="contact">

          <div className="section1">

            <div className="heading">
              <h3>Contact Us</h3>
            </div>

            <div className='contact-logo'>
              <img src="img/logopng.webp" alt="technoscriptslogo" />
            </div>

            <div>
              <p>Office No 86 To 89, Fifth Floor, C–Wing</p>
              <p>Shrinath Plaza, Dyaneshwar Paduka Chowk</p>
              <p>FC Road, Shivaji Nagar, Pune – 411005</p>
              <p> <strong>  Mobile : </strong> 8605006788</p>
              <p> <strong>  Landline :  </strong> 020-41217199</p>
              <p> <strong> E-mail :  </strong> info@technoscripts.in, technoscriptspune@gmail.com</p>
            </div>
          </div>

          <div className='map'>
            <iframe width="522" height="330" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=522&amp;height=295&amp;hl=en&amp;q=Technoscripts%20Embedded%20Training%20Pune+(Technoscript)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          </div>
        </div>



      </div>

      <Footer />

    </>
  )
}

export default Contact