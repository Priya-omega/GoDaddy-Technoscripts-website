import {useState} from 'react'
import styles from '../styles/Popup.module.scss'
import Head from 'next/head'

function Popup() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
  

    async function signUp() {
        alert("data Submitted Successfully!")
        let data = { name, contact, email}
        console.warn(data);
        let result = await fetch("http://localhost:3001/api/users", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })
        result = await result.json();
        console.warn("result", result)
    }

    return (
        <>
<Head>
        <title> Best Embedded System course in pune | TechnoScripts | Embedded institue</title>
        <meta name="description" content="Best Embedded Training institue in pune, embedded course pune. we are one of the best training institute for embedded system training in Pune" />
      </Head>

            <div className={styles.popup}>


                <h3>Request a callback</h3>


                <form action="" className={styles.popupform}>
                    <div className={styles.popupinput}>
                        <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className={styles.popupinput}>
                        <input type="text" placeholder='Enter Contact Number' onChange={(e) => setContact(e.target.value)} />
                    </div>

                    <div className={styles.popupinput}>
                        <input type="text" placeholder='Enter Email'  onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className={styles.popupbtn}>
                        <button onClick={signUp}>Submit</button>
                    </div>


                </form>
            </div>

        </>
    )
}

export default Popup