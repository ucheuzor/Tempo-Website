import React, { useState } from 'react';

const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 100) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 100) {
            setShowScroll(false);
        }
    }

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('scroll', checkScrollTop);

    return (
        <a
            className={showScroll ? "back-to-top" : ''}
            onClick={scrollTop}
        >
            <i className="ri-arrow-up-line"></i>
        </a>
    )
}

export default ScrollArrow;
