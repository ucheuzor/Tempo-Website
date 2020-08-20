import React from 'react';
import img1 from '../../img/portfolio/portfolio-1.jpg';
import img2 from '../../img/portfolio/portfolio-2.jpg';
import img3 from '../../img/portfolio/portfolio-3.jpg';
import img4 from '../../img/portfolio/portfolio-4.jpg';
import img5 from '../../img/portfolio/portfolio-5.jpg';
import img6 from '../../img/portfolio/portfolio-6.jpg';
import img7 from '../../img/portfolio/portfolio-7.jpg';
import img8 from '../../img/portfolio/portfolio-8.jpg';
import img9 from '../../img/portfolio/portfolio-9.jpg';

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">

                <div className="section-title">
                    <h2>Portfolio</h2>
                    <h3>Check our <span>Portfolio</span></h3>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>

                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <img src={img1} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>App 1</h4>
                            <p>App</p>
                            <a href={img1} data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <img src={img2} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Web 3</h4>
                            <p>Web</p>
                            <a href={img2} data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <img src={img3} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>App 2</h4>
                            <p>App</p>
                            <a href={img3} data-gall="portfolioGallery" className="venobox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <img src={img4} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Card 2</h4>
                            <p>Card</p>
                            <a href={img4} data-gall="portfolioGallery" className="venobox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <img src={img5} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Web 2</h4>
                            <p>Web</p>
                            <a href={img5} data-gall="portfolioGallery" className="venobox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <img src={img6} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>App 3</h4>
                            <p>App</p>
                            <a href={img6} data-gall="portfolioGallery" className="venobox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <img src={img7} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Card 1</h4>
                            <p>Card</p>
                            <a href={img7} data-gall="portfolioGallery" className="venobox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <img src={img8} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Card 3</h4>
                            <p>Card</p>
                            <a href={img8} data-gall="portfolioGallery" className="venobox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <img src={img9} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Web 3</h4>
                            <p>Web</p>
                            <a href={img9} data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Portfolio;
