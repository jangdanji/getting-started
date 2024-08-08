import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import UrlRefresh from './util/hooks';
import Test from './pages/Test';

const AppRoutes = () => {

    return (
        <Router>
            <UrlRefresh />
            <Routes>
                <Route path={"/"} element={<Test/>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;


/* SEO 세팅

const metatag = <Helmet>
    <title>{props.title}</title>

    <meta name="description" content={props.description} />
    <meta name="keywords" content={props.keywords} />

    <meta property="og:type" content="website" />
    <meta property="og:title" content={props.title} />
    <meta property="og:site_name" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta property="og:image" content={props.imgsrc} />
    <meta property="og:url" content={props.url} />

    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.description} />
    <meta name="twitter:image" content={props.imgsrc} />

    <link rel="canonical" href={props.url} />
</Helmet> 


    const [favicon, setFavicon] = useState("")
    const [ogImg, setOgImg] = useState("")

<Helmet>
    <link rel="icon" href={favicon} type="image/png" />
    <meta property="og:image" content={ogImg}></meta>
</Helmet>
*/
