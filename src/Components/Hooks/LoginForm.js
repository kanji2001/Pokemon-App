import React, { useState } from 'react'
import './LoginForm.css';

const LoginForm = () => {

    const [user, setUser] = useState ({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        phoneNumber : "",
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUser((prev) => ({...prev, [name]:value}))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user)
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>

                    <label htmlFor="firstName">
                        <b>First Name</b>
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter firstName"
                        value={user.firstName}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="lastName">
                        <b>Last Name</b>
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter lastName"
                        value={user.lastName}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={user.password}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="phoneNumber">
                        <b>Phone Number</b>
                    </label>

                    <input
                        type="phone"
                        name="phoneNumber"
                        placeholder="9876543211"
                        value={user.phoneNumber}
                        onChange={handleInputChange}
                        required
                    />

                    <div className="clearfix">
                        <button type="submit" className="btn">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default LoginForm