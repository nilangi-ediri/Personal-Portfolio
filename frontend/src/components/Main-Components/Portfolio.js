import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lightbox from 'lightbox2';
import 'lightbox2/dist/css/lightbox.min.css';
// import 'lightbox2/dist/js/lightbox.js';

export default function Portfolio() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        Lightbox.option({
            resizeDuration: 200,
            fadeDuration: 600,
            imageFadeDuration: 600,
            wrapAround: true
        });
    }, []);
    return (
        <section className="portfolio-area page-section scroll-to-page" id="portfolio">
            <div className="custom-container">
                <div className="portfolio-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-grip-vertical"></i> portfolio
                        </h4>
                        <h1 className="scroll-animation">Featured <span>Projects</span></h1>
                    </div>

                    <div className="row portfolio-items">
                        <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                            <div className="portfolio-item portfolio-full">
                                <div className="portfolio-item-inner">
                                    <a href="../assets/images/mci2.png" data-lightbox="example-1">
                                        <img src="../assets/images/mci.png" alt="MCI Project" />
                                    </a>

                                    <ul className="portfolio-categories">
                                        <li className="live-demo">
                                            <a href="https://well-space-lac.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/nilangi-ediri/WellSpace/blob/main/Final_Report_%5Ba1882259%5D_%5BNilangi_Edirisinghe%5D.pdf" target="_blank" rel="noopener noreferrer">Report</a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/nilangi-ediri/WellSpace" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/watch?v=vESZjPLJnKQ" target="_blank" rel="noopener noreferrer">Pitch Presentation</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="https://github.com/nilangi-ediri/WellSpace" target="_blank" rel="noopener noreferrer">WellSpace - Mental Health Web Platform</a></h2>
                                <p className="live-demo-cta" style={{ marginTop: '12px' }}>
                                    <a href="https://well-space-lac.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#28e98c', fontSize: '20px', fontWeight: '300', display: 'inline-flex', alignItems: 'center', gap: '10px', borderBottom: '2px solid #28e98c', paddingBottom: '3px' }}>
                                        <i className="las la-external-link-alt" style={{ fontSize: '22px' }}></i> Experience it Live - Deployed on Cloud
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 scroll-animation" data-aos='fade-right'>
                            <div className="portfolio-item portfolio-half">
                                <div className="portfolio-item-inner">
                                    <a href="../assets/images/autism.jpg" data-lightbox="example-1">
                                        <img src="../assets/images/autism.jpg" alt="Portfolio" />
                                    </a>

                                    <img src="../assets/images/portfolio2.jpg" alt="Portfolio" />

                                    <ul className="portfolio-categories">
                                        <li>
                                            <a href="https://github.com/nilangi-ediri/Autism-Social_Website" target="blank">GitHub Repo</a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/nilangi-edirisinghe/overlay/experience/2294863362/multiple-media-viewer/?profileId=ACoAABzWbCkBC3gW7wqM8iwuV0E74HX8Tc0ulTc&treasuryMediaId=1715305605131" target="blank">Letter</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="https://github.com/nilangi-ediri/Autism-Social_Website" target="blank">Autism Social Platform - Information Web Page</a></h2>
                            </div>
                        </div>

                        <div className="col-md-6 scroll-animation" data-aos='fade-left'>
                            <div className="portfolio-item portfolio-half">
                                <div className="portfolio-item-inner">
                                    <a href="../assets/images/AI.jpg" data-lightbox="example-1">
                                        <img src="../assets/images/AI2.jpg" alt="Portfolio" />
                                    </a>

                                    <ul className="portfolio-categories">
                                        <li>
                                            <a href="https://github.com/nilangi-ediri/Rail-Break-Prediction-AI" target="blank">GitHub Repo</a>
                                        </li>
                                        <li>
                                            <a href="https://insightfactory.ai/" target="blank">Platform</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="https://github.com/nilangi-ediri/Rail-Break-Prediction-AI" target="blank">Rail Break Prediction AI</a></h2>
                            </div>
                        </div>

                        <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                            <div className="portfolio-item portfolio-half">
                                <div className="portfolio-item-inner">
                                    <a href="../assets/images/clevart2.jpg" data-lightbox="example-1">
                                        <img src="../assets/images/clevart.jpg" alt="portfolio" />
                                    </a>

                                    <ul className="portfolio-categories">
                                        <li>
                                            <a href="https://www.linkedin.com/company/clevart/posts/?feedView=all" target="blank">Clevart AI-XR</a>
                                        </li>
                                        <li>
                                            <a href="https://www.creartdigitalmedia.com.au/" target="blank">CREART</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="https://www.linkedin.com/company/clevart/posts/?feedView=all" target="blank">Internship Project @ CREART Digital Media</a></h2>
                            </div>
                        </div>

                        <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                            <div className="portfolio-item portfolio-full">
                                <div className="portfolio-item-inner">
                                    <a href="../assets/images/saas-app.png" data-lightbox="example-1">
                                        <img src="../assets/images/saas-app.png" alt="SaaS Learning Application" />
                                    </a>

                                    <ul className="portfolio-categories">
                                        <li className="live-demo">
                                            <a href="https://saas-app-nila.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/nilangi-ediri/saas-app-nila" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="https://github.com/nilangi-ediri/saas-app-nila" target="_blank" rel="noopener noreferrer">SaaS Learning Application with AI Chatbot</a></h2>
                                <p className="live-demo-cta" style={{ marginTop: '12px' }}>
                                    <a href="https://saas-app-nila.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#28e98c', fontSize: '20px', fontWeight: '300', display: 'inline-flex', alignItems: 'center', gap: '10px', borderBottom: '2px solid #28e98c', paddingBottom: '3px' }}>
                                        <i className="las la-external-link-alt" style={{ fontSize: '22px' }}></i> Experience it Live - Deployed on Cloud
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 scroll-animation" data-aos='fade-right'>
                            <div className="portfolio-item portfolio-half">
                                <div className="portfolio-item-inner">
                                    <a href="../assets/images/2D Mechanics.JPG" data-lightbox="example-1">
                                        <img src="../assets/images/2D Mechanics.JPG" alt="Portfolio" />
                                    </a>
                                    <ul className="portfolio-categories">
                                        <li>
                                            <a href="https://github.com/nilangi-ediri/Three-Degrees-of-Freedom-Magnetic-Suspension-System---Group-Research-Project/blob/main/Group%20Research%20Project%20Dissertation%20_%201632456.pdf" target="blank">Dissertation</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="https://github.com/nilangi-ediri/Three-Degrees-of-Freedom-Magnetic-Suspension-System---Group-Research-Project" target="blank">Three Degrees of Freedom, Magnetic Suspension System</a></h2>
                            </div>
                        </div>

                        <div className="col-md-6 scroll-animation" data-aos='fade-right'>
                            <div className="portfolio-item portfolio-half">
                                <div className="portfolio-item-inner">
                                    <a href="../assets/images/1688246025102.jpeg" data-lightbox="example-1">
                                        <img src="../assets/images/1688246025102.jpeg" alt="Portfolio" />
                                    </a>
                                    <ul className="portfolio-categories">
                                        <li>
                                            <a href="https://github.com/nilangi-ediri/-Automatically-Guided-Arduino-Robot/blob/main/Group%20Project%20-%20Final%20Report.pdf" target="blank">Report</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="https://github.com/nilangi-ediri/-Automatically-Guided-Arduino-Robot" target="blank">Automatically Guided Arduino Robot</a></h2>
                            </div>
                        </div>

                        <div className="col-md-6 scroll-animation" data-aos='fade-left'>
                            <div className="portfolio-item portfolio-half">
                                <div className="portfolio-item-inner">
                                    <a href="../assets/images/FD1_Hilbert.jpg" data-lightbox="example-1">
                                        <img src="../assets/images/FD1_Hilbert.jpg" alt="Portfolio" />
                                    </a>
                                    <ul className="portfolio-categories">
                                        <li>
                                            <a href="https://github.com/nilangi-ediri/Fault-Diagnosis-of-a-Bearing-using-MATLAB/blob/main/Report%20on%20Fault%20Diagnosis%20of%20a%20Bearing%20Using%20MATLAB.pdf" target="blank">Report</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="https://github.com/nilangi-ediri/Fault-Diagnosis-of-a-Bearing-using-MATLAB" target="blank">Fault Diagnosis of a Bearing using MATLAB</a></h2>
                            </div>
                        </div>

                        <div className="col-md-6 scroll-animation" data-aos='fade-right'>
                            <div className="portfolio-item portfolio-half">
                                <div className="portfolio-item-inner">
                                    <a href="../assets/images/1688246156703.jpeg" data-lightbox="example-1">
                                        <img src="../assets/images/1688246156703.jpeg" alt="Portfolio" />
                                    </a>
                                    <ul className="portfolio-categories">
                                        <li>
                                            <a href="https://github.com/nilangi-ediri/DC-Motor-Speed-Controller/blob/main/1632456_Nilangi_Edirisinghe_Embedded_Systems_Assignment.pdf" target="blank">Report</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="https://github.com/nilangi-ediri/DC-Motor-Speed-Controller" target="blank">Design and Development of a DC Motor Speed Controller</a></h2>
                            </div>
                        </div>

                        <div className="col-md-6 scroll-animation" data-aos='fade-left'>
                            <div className="portfolio-item portfolio-half">
                                <div className="portfolio-item-inner">
                                    <a href="../assets/images/poster-individual-automated-guide.jpg" data-lightbox="example-1">
                                        <img src="../assets/images/poster-individual-automated-guide.jpg" alt="Portfolio" />
                                    </a>
                                    <ul className="portfolio-categories">
                                        <li>
                                            <a href="https://github.com/nilangi-ediri/Automated-Guided-Vehicle-with-Visual-Perception/blob/main/Individual_Research_Project_Dissertation_Nilangi%20Edirisinghe_1632456.pdf" target="blank">Dissertation</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="https://github.com/nilangi-ediri/Automated-Guided-Vehicle-with-Visual-Perception" target="blank">Automated Guided Vehicle with Visual Perception</a></h2>
                            </div>
                        </div>

                        <div className="col-md-6 scroll-animation" data-aos='fade-left'>
                            <div className="portfolio-item portfolio-half">
                                <div className="portfolio-item-inner">
                                    <a href="../assets/images/proxy.png" data-lightbox="example-1">
                                        <img src="../assets/images/proxy.png" alt="Portfolio" />
                                    </a>
                                    <ul className="portfolio-categories">
                                        <li>
                                            <a href="https://github.com/nilangi-ediri/HTTP-Web-Proxy-Server" target="blank">GitHub</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="https://github.com/nilangi-ediri/HTTP-Web-Proxy-Server" target="blank">HTTP Web Proxy Server</a></h2>
                            </div>
                        </div>

                        {/* <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                            <div className="portfolio-item portfolio-half">
                                <div className="portfolio-item-inner">
                                    <a href="../assets/images/autism.jpg" data-lightbox="example-1">
                                        <img src="../assets/images/autism.jpg" alt="portfolio" />
                                    </a>

                                    <ul className="portfolio-categories">
                                        <li>
                                            <a href="https://www.framer.com">Framer</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="https://www.lewis.com">Lewis Portfolio Framer Template</a></h2>
                            </div>
                        </div> */}
                    </div>


                </div>
            </div>
        </section>
    )
}
