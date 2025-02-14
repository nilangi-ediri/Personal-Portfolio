import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <section className="about-area page-section scroll-to-page" id="about">
            <div className="custom-container">
                <div className="about-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="lar la-user"></i> About
                        </h4>
                        <h1 className="scroll-animation" data-aos='fade-up'>Bridging engineering and technology<br />
                            to create <span>impactful solutions</span></h1>
                    </div>
                    <p className="scroll-animation" data-aos='fade-up' style={{ textAlign: "justify" }}>With a background in Mechatronics Engineering and a  Master’s specializing in Computer Science at The University of Adelaide, I bring a unique blend of technical expertise and creativity.
                        My journey has equipped me with strong skills in software engineering, web development, and machine learning, with proven success in front-end development, algorithms, and AI-driven solutions.</p>
                    <p className="scroll-animation" data-aos='fade-up' style={{ textAlign: "justify" }}>Having contributed to web-based applications as a Software Engineering Intern using JavaScript and React.js, I am passionate about pursuing opportunities in software engineering and web development. I am eager to apply my skills to build innovative, user-focused digital solutions that make a difference.
                    </p>
                </div>
            </div>
        </section>
    )
}
