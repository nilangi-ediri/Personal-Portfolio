import React from 'react'

export default function Lsb() {
    return (
        <div className="left-sidebar">
            <div className="sidebar-header d-flex align-items-center justify-content-between">
                <img src="./assets/images/logo2.png" alt="Logo" />
                <span className="designation">Software Engineer</span>
            </div>
            <img className="me" src="./assets/images/me3.jpg" alt="Me" />
            <h2 className="email">nilangi.ediri@gmail.com</h2>
            <h2 className="address">Based in Adelaide, SA</h2>
            <p className="copyright">&copy; 2025 Nilangi. All Rights Reserved</p>
            <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                <li>
                    <a href="https://twitter.com/"><i className="lab la-twitter"></i></a>
                </li>
                <li>
                    <a href="https://dribble.com/"><i className="lab la-dribbble"></i></a>
                </li>
                <li>
                    <a href="https://instagram.com/"><i className="lab la-instagram"></i></a>
                </li>
                <li>
                    <a href="https://github.com/"><i className="lab la-github"></i></a>
                </li>
            </ul>
            <a href="#" className="theme-btn">
                <i className="las la-envelope"></i> Hire Me!
            </a>
        </div>
    )
}   
