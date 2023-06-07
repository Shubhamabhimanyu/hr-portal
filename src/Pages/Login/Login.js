import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <>
            <div className='container  text-center d-flex justify-content-center  align-items-center flex-wrap vh-100'>
                    <div>
                        <p className='login_title my-5'>
                        LOGIN
                        </p>
                        <input className='login_input' name='username' placeholder='Username' type='text'/>
                        <input className='login_input' name='username' placeholder='Password' type='text'/>
                        <button className='login_button my-3'>Login</button>
                    </div>
</div>

    </>
  )
}
