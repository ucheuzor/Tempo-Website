import React from 'react';


const Hamburger = ({ open, setOpen }) => {


    return (
        <div className="menu-btn">
            <i className="fas fa-bars fa-2x" open={open} onClick={() => setOpen(!open)}></i>
        </div>
    )
}

export default Hamburger;
