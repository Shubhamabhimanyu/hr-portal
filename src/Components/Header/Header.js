import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <>
            <div className='nav'>
                <Link to="/">
                    <img className='my-1' src='BG-Logo.png' alt='' />
                </Link>
            </div>
        </>
    )
}
