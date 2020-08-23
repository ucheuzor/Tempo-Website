import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = () => {
    return (
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">

                <ol>
                    <li><Link to="/">Home</Link></li>
                    <li>Blog</li>
                </ol>
                <h2>Blog</h2>

            </div>
        </section>
    )
}

export default BreadCrumb;
