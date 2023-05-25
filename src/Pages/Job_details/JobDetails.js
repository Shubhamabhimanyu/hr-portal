import React from 'react'
import "./JobDetails.css"
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Job_details() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>

            <div className='container my-5'>
                <div className='row '>
                    <div className='col-12 role_head my-5 '>
                        <h1>Frontend Developer</h1>
                    </div>

                </div>

                <div className='row'>

                    <div class="col-lg-9 col-sm-12 pr-50 mb-5">
                        <div>
                            <p><strong>About Baazi Games</strong></p>
                        
                                <p><br /></p>
                                <p class="animate__animated animate__slideInRight"><span >At&nbsp;</span><strong >Baazi Games</strong><span >, we collaborate in an environment that offers a surplus of freedom to think-out-of- the-box and take ownership of opportunities. Just like our games, we are bold and out there in our thinking. Be it boardroom meetings, coffee breaks with colleagues or a game at the TT table, partnership and teamwork are always by our side. For us, there are no Monday blues or fantastic Fridays. Each day at Baazi Games, we welcome an enthusiastic team that is turbo charged for high performance. We are constantly in power-up mode and chase our goals untamed and unabashed.</span></p>
                                <p><br /></p>
                                <p class="animate__animated animate__slideInRight"><span >We started our journey with the sole purpose of giving our audience a sports experience that is world-class in every sense. Everything since then has been about our users. Their needs and expectations sit at the centre of our thoughts and actions</span></p>

                          
                            <p><br /></p>
                            <p><strong >BAAZI GAMES Platforms-</strong></p>
                            <div data-aos="fade-left" data-aos-duration="1000">


                                <p><span >PokerBaazi.com</span></p>
                                <p><span >BalleBaazi.com&nbsp;</span></p>
                                <p><span >CardBaazi.com</span></p>
                                <p><br /></p>
                            </div>
                            <p ><strong>What you will do</strong></p>
                            <p ><br /></p>
                            <div data-aos="fade-left" data-aos-duration="1000">

                                <ul>
                                    <li >Understand customer requirements and business challenges to architect workable.</li>
                                    <li >Create with a convincing value proposition by collaborating with multiple cross-functional teams.</li>
                                    <li >Design Solution and present Architecture fit to CTO/Head of Engineering/CEO. Create Architecture diagrams for the proposed solution.</li>
                                    <li >Should be able to build prototype apps to achieve complex business objectives for demos.</li>
                                    <li >Be SPOC for Engineering and PM teams.</li>
                                    <li >Create technical documentation for projects and guide the team members.</li>
                                    <li >Be the SPOC for Product feature asks with the PM Teams.</li>
                                    <li >Help in kickstarting a project for Implementation by starting clear discussions during the tech cycle, eliminating any discrepancies that arise during the handover process.</li>
                                </ul>
                            </div>
                            <p><br /></p>
                            <p><strong >What are we looking for:</strong></p>
                            <p><br /></p>
                            <div data-aos="fade-left" data-aos-duration="1000">

                                <ul>
                                    <li><span >3+ years of hands-on coding experience in JAVA</span></li>
                                    <li><span >Must be great with multi-threading (Java concurrent API)</span></li>
                                    <li><span >Excellent experience on any ORM (Hibernate preferred)</span></li>
                                    <li><span style={{ color: "rgb(34, 34, 34);" }}>&nbsp;</span><span >In-depth understanding of&nbsp;System design and Java Design patterns</span></li>
                                    <li><span >Demonstrated experience in shipping high-quality products with low latency at high concurrency</span></li>
                                    <li><span >Experience with distributed storage and database systems (SQL or NoSQL)</span></li>
                                    <li><span >Knowledge on data structures (like list, arrays, maps etc.)</span></li>
                                    <li><span >Ability to understand the requirements and break them into actionable tasks.</span></li>
                                    <li><span >Ability to mentor other team members on system design, and coding guidelines. Be a role model</span></li>
                                    <li><span style={{ color: "rgb(34, 34, 34);" }}>&nbsp;</span><span >Good understanding of Linux/Unix</span></li>
                                    <li><span >Experience with cloud platform (AWS preferred) and container technologies like ECS, Kubernetes, Docker, etc. would be a plus</span></li>
                                    <li><span >Understanding zero downtime deployment in a distributed environment is a plus</span></li>
                                </ul>
                            </div>
                            <p ><br /></p>
                            <p ><strong>Key Behaviours that we look for</strong></p>
                            <p ><br /></p>
                            <div data-aos="fade-left" data-aos-duration="1000">

                                <ul>
                                    <li >Good in problem analysis, design, requirement analysis, and solution design.</li>
                                    <li >First principal thinking.</li>
                                    <li >Ability to breakdown a problem into solvable components with business goals in mind.</li>
                                    <li >Solid verbal, written, presentation, and interpersonal communication skills.</li>
                                    <li >Great at documentation.</li>
                                    <li >Fast learner and can pick up new technologies.</li>
                                </ul>
                            </div>
                            <p><br /></p>
                            <p><br /></p>
                            <p ><strong >Interview Process</strong></p>
                            <p ><strong>&nbsp;</strong></p>
                            <div data-aos="fade-left" data-aos-duration="1000" >

                                <ul>
                                    <li ><span >Round 1 - Technical and Behavioural assessment by a Technical Architect</span></li>
                                    <li ><span >Round 2 - Technical and Behavioural assessment by an Engineering Manager</span></li>
                                    <li ><span >Round 3 – Techno-functional assessment by AVP, Engineering/HOE</span></li>
                                    <li ><span >HR Round</span></li>
                                </ul>
                            </div>
                            <p ><br /></p>
                            <p ><span >Note: The rounds may not be in a particular order depending on the interviewer's availability &amp; feedback.</span></p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-12 mb-5'>
                        <div class="sticky-lg-top h-500 ">
                            <div class="btn-container mb-5 col-md-9 col-sm-12 d-lg-block p-0 float-lg-end animate__animated animate__slideInRight">
                                <button class="btn btn-info btn-lg w-100 apply" ><Link to='/applyjob' className='link'>Apply for this job</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
