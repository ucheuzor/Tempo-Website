import React from 'react';
import NavBar from '../Home/NavBar';
import BreadCrumb from './BreadCrumb';
import Articles from './Articles';
import Footer from '../Home/Footer';

const Blog = ({open, setOpen}) => {
    return (
        <>
            <NavBar inner='header-inner-pages' open={open} setOpen={setOpen} />
            <main id="main">
                <BreadCrumb />
                <Articles />
                <Footer />
            </main>
        </>
    )
}

export default Blog;
