import { useRoutes } from 'react-router-dom';
import React from 'react';
import Home from "./components/Home.jsx";
import Nav from "./components/elements/Nav.jsx";
import About from "./components/pages/about/About.jsx";
import AboutMain from "./components/pages/about/AboutMPage.jsx";
import './App.css';
import TestFile from "./components/pages/roblox/TestFile.jsx";
import VideoLoad from "./components/pages/roblox/Videos.jsx";

import Discord from "./components/pages/discord/Discord.jsx";
import Websites from "./components/pages/websites/Websites.jsx";
import ContactUs from "./components/pages/contact/Contact.jsx";


const routes = [
        {/*  Default  */},

    { path: '/', element: <Home /> },

        {/*  About Pages  */},

    { path: '/about', element: <About /> },
    { path: '/a', element: <AboutMain /> },

       {/*  Contact  */},

    { path: '/contact', element: <ContactUs /> },

    {/*  Roblox Pages  */},

    { path: '/roblox', element: <TestFile /> },
    { path: "/room/:type", element: <VideoLoad /> },
    { path: "/back", element: <TestFile /> },

    {/*  Discord  */},

    { path: '/discord', element: <Discord /> },

    {/*  Websites  */},

    { path: '/website', element: <Websites /> },

];

function App() {
    const element = useRoutes(routes);
    return (
        <>
            <title> Portfolio </title>
            <Nav />
            {element}
        </>
    );
}

export default App;
