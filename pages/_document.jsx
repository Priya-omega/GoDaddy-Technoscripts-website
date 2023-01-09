import Document, { Html, Head, Main, NextScript } from 'next/document'
import {MdWifiCalling3} from 'react-icons/md'


class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">

                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <link rel="icon" href="img/TS.webp" />

                    {/* for onscroll animation============ */}
                    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
                    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

                </Head>

                {/* <Script id='myscript' strategy='lazyOnload' type="text/javascript" src='https://embed.tawk.to/6322d1a754f06e12d894d38f/1gd005upl'>
                </Script>
                 */}

                {/* <Script src='../public/script.js'> </Script> */}

                <div className='whatsapp'>
                    <a href="https://wa.me/918605006788"><img src="img/download.png" alt="" target="_blank" /></a>
                </div>

                <div className='call'>
                    <a href="tel:+91 8605006788"> 
                     {/* <MdWifiCalling3 className='img'/>  */}
                     <img src="img/call2.png" alt="" target="_blank" className='img' />
                     </a>
                </div>



                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;