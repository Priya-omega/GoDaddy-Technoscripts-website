import {useState} from 'react'
import styles from '../styles/Popup.module.scss'

function Popup() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
  

    async function signUp() {
        alert("data Submitted Successfully!")
        let data = { name, contact, email}
        console.warn(data);
        let result = await fetch("http://localhost:3000/api/users", {
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
            <div className={styles.popup}>


                <h3>Request a callback</h3>


                <form action="" className={styles.popupform}>
                    <div className={styles.popupinput}>
                        <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className={styles.popupinput}>
                        <input type="text" placeholder='Enter your contact number' onChange={(e) => setContact(e.target.value)} />
                    </div>

                    <div className={styles.popupinput}>
                        <input type="text" placeholder='Enter your email'  onChange={(e) => setEmail(e.target.value)}/>
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