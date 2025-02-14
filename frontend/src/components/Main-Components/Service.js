import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Service() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <section className="services-area page-section scroll-to-page" id="services">
            <div className="custom-container">
                <div className="services-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-stream"></i> Services
                        </h4>
                        <h1 className="scroll-animation" data-aos='fade-up'>My <span>Specializations</span></h1>
                    </div>

                    <div className="services-items">
                        <div className="service-item scroll-animation" data-aos='fade-up'>
                            <i className="las la-code"></i>
                            <h2>Web Development</h2>
                            <p>Transforming ideas into functional and visually appealing websites using HTML, CSS, React.js, and Bootstrap. From user interface design to seamless backend integration, I craft digital experiences that resonate with users.</p>
                            {/* <span className="projects">WellSpace Mental Health Website, CREART Digital Media applications</span> */}
                        </div>
                        <div className="service-item scroll-animation" data-aos='fade-up'>
                            <i className="las la-laptop-code"></i>
                            <h2>Machine Learning</h2>
                            <p>Strong foundation in statistical machine learning with experience in predictive modeling, feature selection, and data analysis. Skilled in leveraging data-driven insights for impactful solutions.</p>
                            {/* <span className="projects">126 Projects</span> */}
                        </div>
                        <div className="service-item scroll-animation" data-aos='fade-up'>
                            <i className="las la-terminal"></i>
                            <h2>Python Programming</h2>
                            <p>Experienced in Python programming with a focus on object-oriented design, computational problem-solving, and data manipulation. Familiar with using Python for building data science applications and implementing software development best practices.</p>
                            {/* <span className="projects">8 Projects</span> */}
                        </div>
                        <div className="service-item scroll-animation" data-aos='fade-up'>
                            <i className="las la-sitemap"></i>
                            <h2>Algorithms and Data Structures Expertise</h2>
                            <p>Proficient in understanding and analyzing algorithms, with knowledge of abstract data types such as lists, stacks, queues, trees, and hash tables. Skilled in applying computational techniques like recursion and graph traversal to design efficient solutions.</p>
                            {/* <span className="projects">8 Projects</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
