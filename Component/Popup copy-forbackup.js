import { useState } from 'react'
import styles from '../styles/Popup.module.scss'

function Popup() {
    const [values, setValues] = useState({
        name: "",
        contact: "",
        email: "",
    });

    const { name, contact, email } = values;

    const handleChange = (e) =>
        setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("Enquiry has been submitted!");
        try {
            await fetch("http://localhost:3000/api/contact", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
        }
        catch(err){
            console.warn(err);
        }
    };

    // async function signUp() {
    //     alert("data Submitted Successfully!")
    //     let data = { name, contact, email }
    //     console.warn(data);
    //     let result = await fetch("http://localhost:3000/api/users", {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     result = await result.json();
    //     console.warn("result", result)
    // }

    return (
        <>
            <div className={styles.popup}>


                <h3>Request a callback</h3>


                <form onSubmit={handleSubmit} className={styles.popupform}>
                    <div className={styles.popupinput}>
                        <input
                            type="text"
                            name='name'
                            value={name}
                            onChange={handleChange}
                            placeholder='Enter your name'
                        />
                    </div>

                    <div className={styles.popupinput}>
                        <input
                            type="text"
                            name='contact'
                            value={contact}
                            onChange={handleChange}
                            placeholder='Enter your contact number'

                        />
                    </div>

                    <div className={styles.popupinput}>
                        <input
                            type="email"
                            name='email'
                            value={email}
                            onChange={handleChange}
                            placeholder='Enter your email'
                        />
                    </div>

                    <div className={styles.popupbtn}>
                        {/* <button onClick={signUp}>Submit</button> */}
                        <button type='submit'>Submit</button>
                    </div>


                </form>
            </div>

        </>
    )
}

export default Popup