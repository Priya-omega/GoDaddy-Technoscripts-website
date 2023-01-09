import React from 'react'
import styles from '../styles/BatchTable.module.scss'

function BatchTable() {
  return (
<>
<div className={styles.batchtable}>
    {/* <h4>New Batch scheduled for Embedded Courses are as follows:  </h4> */}
        {/* <hr /> */}

        <table className={styles.table}>
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
                        <button>Register Now</button>
                    </td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>PG Diploma in  Embedded Systems</td>
                    <td> 16 Jan 2023</td>
                    <td>3 Months</td>
                    <td>
                        <button>Register Now</button>
                    </td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>PG Diploma in Automotive Embedded </td>
                    <td> 16 Jan 2023</td>
                    <td>3 months</td>
                    <td>
                        <button>Register Now</button>
                    </td>
                </tr>

                <tr>
                    <td>4</td>
                    <td> IOT ( Internet of Things ) </td>
                    <td> 16 Jan 2023</td>
                    <td>45 days</td>
                    <td>
                        <button>Register Now</button>
                    </td>
                </tr>

                <tr>
                    <td>5</td>
                    <td> Advance IOT ( Internet of Things )</td>
                    <td> 16 Jan 2023</td>
                    <td>3 Months</td>
                    <td>
                        <button>Register Now</button>
                    </td>
                </tr>

            </tbody>
        </table>


    </div>
</>


  )
}

export default BatchTable