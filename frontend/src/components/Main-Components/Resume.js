import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Resume() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <section className="resume-area page-section scroll-to-page" id="resume">
            <div className="custom-container">
                <div className="resume-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-briefcase"></i> Resume
                        </h4>
                        <h1 className="scroll-animation" data-aos='fade-up'>Education & <span>Experience</span></h1>
                    </div>

                    <div className="resume-timeline">
                        <div className="item scroll-animation" data-aos='fade-right'>
                            <span className="date">July 2024 to October 2024</span>
                            <h2>Software Engineer</h2>
                            <a href="https://www.creartdigitalmedia.com.au/" target="blank">
                                <p>CREART Digital Media - ThincLab at The University of Adelaide</p></a>
                        </div>
                        <div className="item scroll-animation" data-aos='fade-right'>
                            <span className="date">December 2023 to February 2024</span>
                            <h2>Software Engineer</h2>
                            {/* <p>CREST - The Centre for Research on Engineering Software Technologies</p> */}
                            <a href="https://crest-centre.net/" target="blank">
                                <p>CREST - The Centre for Research on Engineering Software Technologies, Adelaide.</p></a>
                        </div>
                        <div className="item scroll-animation" data-aos='fade-left'>
                            <span className="date">February 2022 to August 2022</span>
                            <h2>Software Quality Assurance Engineer</h2>
                            <a href="https://www.sana-commerce.com/" target="blank">
                                <p>Sana Commerce - A Netherlands-based IT company specializing in ERP-integrated e-commerce solutions.</p></a>
                        </div>
                        <div className="item scroll-animation" data-aos='fade-left'>
                            <span className="date">January 2020 to August 2020</span>
                            <h2>Software & Mechatronics Engineer</h2>
                            <a href="https://www.linkedin.com/company/s-l-robotics/" target="blank">
                                <p>SL Robotics Solutions, Colombo, Sri Lanka.</p></a>
                        </div>
                        <div className="item scroll-animation" data-aos='fade-left'>
                            <span className="date">July 2018 to January 2019</span>
                            <h2>Research and Development Engineer</h2>
                            <a href="https://orel.com/" target="blank">
                                <p>OREL Corporation, Colombo, Sri Lanka.</p></a>
                        </div>
                        <div className="item scroll-animation" data-aos='fade-right'>
                            <span className="date">2017 - 2022</span>
                            <h2>Master in Engineering with Honours, in Mechatronics Engineering</h2>
                            <p>University of Wolverhamptopn, UK.</p>
                        </div>
                        <div className="item scroll-animation" data-aos='fade-right'>
                            <span className="date">2023 - 2025</span>
                            <h2>Master of Computing and Innovation</h2>
                            <p>Majored in Computer Science at
                                The University of Adelaide, Australia.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
