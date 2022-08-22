import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='main-login'>
            <form>
                <div className="form-field">
                    <input type="email" placeholder="Email / Username" required />
                </div>
                <div className="form-field">
                    <input type="password" placeholder="Password" required />
                </div>
                <div className="form-field">
                    <Link to="/home"> <button className="btn" type="submit">Log in</button></Link>
                </div>
            </form>
        </div>
    )
}

export default Login