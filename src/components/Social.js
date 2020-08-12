import React from 'react';
import Facebook from '../images/social-fb.png';
import Twitter from '../images/social-twitter.png';
import Linkedin from '../images/social-linkedin.png';

const Social = () => {
    return (
            <section className="follow">
                <p>Follow Microsoft</p>
                <a href="https://www.facebook.com">
                    <img src={Facebook} alt="facebook" />
                </a>
                <a href="https://www.twitter.com">
                    <img src={Twitter} alt="twitter" />
                </a>
                <a href="https://www.linkedin.com">
                    <img src={Linkedin} alt="linkedin" />
                </a>
            </section>
    )
}

export default Social;
