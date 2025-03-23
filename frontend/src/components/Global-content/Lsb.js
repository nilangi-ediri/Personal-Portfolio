import React from 'react'

export default function Lsb() {
    return (
        <div className="left-sidebar">
            <div className="sidebar-header d-flex align-items-center justify-content-between">
                <img src="./assets/images/logo2.png" alt="Logo" />
                <span className="designation">Software Engineer</span>
            </div>
            <img className="me" src="./assets/images/me3.jpg" alt="Me" />
            {/* <h2 className="email">I'm</h2> */}
            <h2 className="address">Based in Adelaide, SA</h2>
            <p className="copyright">Experienced in frontend and backend development, with hands-on projects in AI, automation, and real-world research.</p>
            {/* <p className="copyright">&copy; 2025 Nilangi. All Rights Reserved</p> */}
            <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                <li>
                    <a href="https://www.linkedin.com/in/nilangi-edirisinghe/" target="blank"><i className="lab la-linkedin"></i></a>
                </li>
                <li>
                    <a href="https://github.com/nilangi-ediri" target="blank"><i className="lab la-github"></i></a>
                </li>
                <li>
                    <a href="mailto:nilangi.ediri@gmail.com" target="blank"><i className="las la-at"></i></a>
                </li>
            </ul>
            <a href="https://drive.google.com/file/d/11TkDIC_jnEhh_kQ8qTYy1ReIL8MfmK3J/view?usp=sharing" target="blank" className="theme-btn">
                <i className="las la-envelope"></i> Download CV
            </a>
        </div>
    )
}   
