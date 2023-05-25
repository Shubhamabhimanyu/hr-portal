import React from 'react'
import './Form.css'
export default function Form() {
    return (
        <>
            <div className="container my-5">
                <div className='row '>
                    <div className='col-12 role_head my-5 '>
                        <h1>Frontend Developer</h1>
                    </div>

                </div>
                <div className='container w-50'>
                    <from>
                        <div className='row'>
                            <div className='col-lg-12 col-sm-12'>
                            <div class="resume-upload-button w-100 m-auto">
                            <p class="mt-3 mb-0 text-secondary font-x-small">
                                                This will auto-fill all the relevant fields for the application.
                                                Max of 10Mb file is allowed.
                                            </p>
                                            <p class="mb-0 text-secondary font-x-small">We can parse resumes in doc, docx, pdf, rtf, txt, odt, htm and html, docm, dotm, dot, dotx formats</p>

                                            <div class="resume-upload-link">
                                                <span class="btn btn-outline-info header-4 btn-md align-items-center justify-content-center d-inline-flex w-100">Upload Resume/CV</span>
                                                <input type="file" class="resume_upload" data-field-identifier="resume" container="resumes" name="" placeholder=""/>
                                            </div>
                                        </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6 col-sm-12 '>
                            <label>Full Name</label><br/>
                        <input type='text'></input><br/>
                        <label>Mobile No.</label><br/>
                        <input type='text'></input>
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                            <label>Email</label><br/>
                        <input type='Email'></input>
                        <label>LinkedIn Profile</label><br/>
                        <input type='url'></input>
                                 </div>
                        
                        </div>
                        <div className='text-center my-5'>
                        <input type="submit" value="Submit"/>
                        </div>
                    </from>
                </div>

            </div>
        </>
    )
}
