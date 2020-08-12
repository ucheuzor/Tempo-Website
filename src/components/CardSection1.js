import React from 'react';
import Img1 from '../images/surface_pro.jpg';
import Img2 from '../images/card2.png';
import Img3 from '../images/card3.png';
import Img4 from '../images/card4.png';

const CardSection1 = () => {
    return (
        <section className="home-cards">
            <div>
                <img src={Img1} alt="card section" />
                <h3>New Surface Pro 7</h3>
                <p> Express yourself powerfully with a thin, light, and elegant design,
                    faster performance, and up to 11.5 hours battery life.</p>
                <a href="#">learn More <i className="fas fa-chevron-right"></i> </a>
            </div>
            <div>
                <img src={Img2} alt="" />
                <h3>New Surface Laptop 3</h3>
                <p>
                    Express yourself powerfully with a thin, light, and elegant design,
                    faster performance, and up to 11.5 hours battery life.
        </p>
                <a href="#">Learn More <i className="fas fa-chevron-right"></i></a>
            </div>
            <div>
                <img src={Img3} alt="" />
                <h3>Save $150 + free controller</h3>
                <p>
                    Buy an Xbox One X console and double your fun with a free select
                    extra controller. Starting at $349.
                        </p>
                <a href="#">Learn More <i className="fas fa-chevron-right"></i></a>
            </div>
            <div>
                <img src={Img4} alt="" />
                <h3>The new Microsoft Edge</h3>
                <p>
                    Expect more. World class performance, with more privacy, more
                    productivity, and more value.
                    </p>
                <a href="#">Learn More <i className="fas fa-chevron-right"></i></a>
            </div>
        </section>
    )
}

export default CardSection1;
