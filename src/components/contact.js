import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
    const [userData, setUserData] = useState({
        Name: '',
        Number: '',
    })

    let name, value
    const data = (e) => {
        name = e.target.name
        value = e.target.value
        setUserData({ ...userData, [name]: value })
    }

    const submit = async (e) => {
        const { Name, Number } = userData
        e.preventDefault()
        const option = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ Name, Number }),
        }
        const res = await fetch(
            'https://react-contact-82d0f-default-rtdb.firebaseio.com/Messages.json',
            option
        )

        console.log(res)
    }
    return (
        <>
            <div className="container">
                <div className="contact_box">
                    <form method="POST">
                        <input
                            type="text"
                            name="Name"
                            value={userData.Name}
                            placeholder="Enter your Full Name"
                            autoComplete="off"
                            onChange={data}
                        ></input>
                        <input
                            type="tel"
                            name="Number"
                            value={userData.Number}
                            placeholder="Enter your Phone Number"
                            autoComplete="off"
                            onChange={data}
                        ></input>
                        <button onClick={submit}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
