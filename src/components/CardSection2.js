import React from 'react';
import img1 from '../images/card5.png';
import img2 from '../images/card6.jpg';
import img3 from '../images/card7.png';
import img4 from '../images/card8.png';

const CardSection2 = () => {
    return (
            <section className="home-cards">
                <div>
                    <img src={img1} alt="" />
                    <h3>Microsoft Teams</h3>
                    <p>
                        Unleash the power of your team.
            </p>
                    <a href="#">Shop Now <i className="fas fa-chevron-right"></i></a>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <h3>Unlock the power of learning</h3>
                    <p>
                        Get students future-ready with Windows 10 devices. Starting at $219.
            </p>
                    <a href="#">Shop Now <i className="fas fa-chevron-right"></i></a>
                </div>
                <div>
                    <img src={img3}alt="" />
                    <h3>Windows 10 Enterprise</h3>
                    <p>
                        Download the free 90-day evaluation for IT professionals.
            </p>
                    <a href="#">Download Now <i className="fas fa-chevron-right"></i></a>
                </div>
                <div>
                    <img src={img4} alt="" />
                    <h3>Explore Kubernetes</h3>
                    <p>
                        Learn how Kubernetes works and get started with cloud native app
                        development today.
            </p>
                    <a href="#">Get Started <i className="fas fa-chevron-right"></i></a>
                </div>
            </section>
    )
}

export default CardSection2;
