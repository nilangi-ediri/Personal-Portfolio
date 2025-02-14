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
                                        <li>
                                            <a href="https://github.com/nilangi-ediri/WellSpace/blob/main/Final_Report_%5Ba1882259%5D_%5BNilangi_Edirisinghe%5D.pdf" target="blank">Report</a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/nilangi-ediri/WellSpace" target="blank">GitHub Repo</a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/watch?v=vESZjPLJnKQ" target="blank">Pitch Presentation</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2><a href="https://github.com/nilangi-ediri/WellSpace" target="blank">WellSpace - Mental Health Website - Front End Developmet</a></h2>
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
                                <h2><a href="https://www.moonex.com">Autism Social Platform - Information Web Page</a></h2>
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
                                <h2><a href="https://www.linkedin.com/company/clevart/posts/?feedView=all" target="blank">Internship Project @ CREART Digital Media - Front End Development</a></h2>
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
