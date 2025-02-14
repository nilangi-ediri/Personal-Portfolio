import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <section className="skills-area page-section scroll-to-page" id="skills">
            <div className="custom-container">
                <div className="skills-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-shapes"></i> my skills
                        </h4>
                        <h1 className="scroll-animation" data-aos='fade-up'>My <span>Skills</span></h1>
                    </div>

                    <div className="row skills text-center">
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/web.png" alt="HTML/CSS/JS" />
                                    <h1 className="percent">80%</h1>
                                </div>
                                <p className="name">HTML/CSS/JavaScript</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-up'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/boot.png" alt="Bootstrap" />
                                    <h1 className="percent">80%</h1>
                                </div>
                                <p className="name">Bootstrap</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-down'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/git.png" alt="GitHub" />
                                    <h1 className="percent">80%</h1>
                                </div>
                                <p className="name">Git/GitHub</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/react2.png" alt="React" />
                                    <h1 className="percent">80%</h1>
                                </div>
                                <p className="name">React</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/python.png" alt="Python" />
                                    <h1 className="percent">86%</h1>
                                </div>
                                <p className="name">Python</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-up'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/ml.png" alt="Machine Learning" />
                                    <h1 className="percent">80%</h1>
                                </div>
                                <p className="name">Machine Learning</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-up'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/english.png" alt="English" />
                                    <h1 className="percent">99%</h1>
                                </div>
                                <p className="name">Professional English</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-up'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/learn.png" alt="Learning" />
                                    <h1 className="percent">100%</h1>
                                </div>
                                <p className="name">Learning and Adaptability</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
