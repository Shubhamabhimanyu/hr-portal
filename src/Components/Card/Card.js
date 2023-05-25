import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
export default function Card(props) {
  return (
    <>

      <div className='card_box animate__animated animate__zoomIn animate__delay-2s'>
        <div className='job_title'>
          {props.job_title}
        </div>
        <div className=''>
          <img src='date-icon.png' alt='' />
          <span className='job_date_text'>{props.job_date}</span>
        </div>
        <div className='job_code'>
          <img src='code-icon.png' alt='' />
          <div className='job_stack'>
            <span className='job_stack_text'>
              {props.stack1}
            </span>
          </div>
          <div className='job_stack'>
            <span className='job_stack_text'>
              {props.stack2}
            </span>
          </div>
        </div>
        <div className=''>
          <img src='Vector.png' alt='' />
          <span className='job_exp_text'>{props.job_exp}</span>
        </div>
        <div className='job_desc'>
          {props.job_desc}
        </div>
        <div className='apply_now my-4'>
          <button className='apply_now_text'><Link to="/details" className='link'> Apply Now</Link></button>
        </div>
      </div>

    </>
  )
}
