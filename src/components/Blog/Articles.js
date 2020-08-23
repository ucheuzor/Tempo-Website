import React from 'react';
import MainArticle from './MainArticle';
import Sidebar from './Sidebar';

const Articles = () => {
    return (
        <section id="blog" className="blog">
            <div className="container">
                <div className="row">
                    <MainArticle />
                    <Sidebar />
                </div>

            </div>
        </section>
    )
}

export default Articles;
